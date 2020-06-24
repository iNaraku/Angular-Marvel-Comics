import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { BranchOfficeService } from '../../services/branch-office.service';
import { BranchOffice } from '../../models/branch-office.model';

@Component({
  selector: 'app-add-comic',
  templateUrl: './add-comic.component.html',
  styleUrls: ['./add-comic.component.css']
})
export class AddComicComponent implements OnInit {

  branchOffice: BranchOffice = {
    id: '',
    comics: [],
    name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private branch: BranchOfficeService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.getBranchOfficeById(id);
  }

  ngOnInit(): void {
  }

  getBranchOfficeById(id: string) {
    this.branch.getBranchOfficeById(id)
        .subscribe((result: any) => {
          this.branchOffice.id = id;
          this.branchOffice.name = result.name;
          this.branchOffice.comics = result.comics;
          console.log(result);
        });
  }

  save() {
    this.branch.updateBranchOffice(this.branchOffice)
        .subscribe(result => console.log(result));
  }

}
