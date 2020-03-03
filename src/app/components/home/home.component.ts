import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Comic, Result } from '../../models/comic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comics: Result[];
  loading: boolean = true;
  searchText: string = '';

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics = () => {
    this.marvelService.getComics().subscribe((comics: Comic) => {
      console.log(comics);
      this.comics = comics.data.results;
      this.loading = false;
    });
  }

}
