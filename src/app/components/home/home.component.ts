import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Comic } from '../../models/comic.model';
import { Result } from '../../models/result.model';

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

  /**
   * Obtiene listas de cómics
   */
  getComics = () => {
    this.marvelService.getComics().subscribe((comics: Comic) => {
      // console.log(comics);
      this.comics = comics.data.results;
      this.loading = false;
    });
  }

}
