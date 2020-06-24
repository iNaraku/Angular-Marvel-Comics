import { Component, OnInit } from '@angular/core';
import { BranchOfficeService } from '../../services/branch-office.service';
import { BranchOffice } from '../../models/branch-office.model';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {

  branches: BranchOffice[];
  loading = true;

  model: BranchOffice = {
    name: '',
    comics: []
  };

  constructor(
    private branchOffice: BranchOfficeService,
    private marvel: MarvelService
  ) { }

  ngOnInit(): void {
    this.getBranchOffice();
    this.getComics();
  }

  createBranchOffice() {
    if (!this.model) {
      return;
    }

    console.log(this.model);

    this.branchOffice.createBranchOffice(this.model)
        .subscribe(result => console.log(result));
  }

  getBranchOffice() {
    this.branchOffice.getBranchOffice()
        .subscribe(result => this.branches = result);
  }

  getComics() {
    this.marvel.getComics()
        .subscribe(result => {
          result.data.results.forEach(item => {
            const comic = {
              id: item.id,
              name: item.title,
              total: 0
            };
            this.model.comics.push(comic);
            this.loading = false;
          });
        });
  }

}
