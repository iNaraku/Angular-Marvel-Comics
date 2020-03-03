import { Component, OnInit } from '@angular/core';
import { Result, Comic, Characters } from 'src/app/models/comic.model';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/comic.model';

@Component({
  selector: 'app-comic-info',
  templateUrl: './comic-info.component.html',
  styleUrls: ['./comic-info.component.css']
})
export class ComicInfoComponent implements OnInit {

  comic: Result;
  imagen: string = '';
  fechaPublicacion: string;
  editores: Item[];
  coloreadores: Item[];
  escritores: Item[];
  personajes: Characters;
  loading: boolean = true;

  constructor(private marvelService: MarvelService, private params: ActivatedRoute) {
    this.params.params.subscribe(param => this.getComicById(param.id));
  }

  ngOnInit(): void {
  }

  getComicById = (idComic: number) => {
    this.marvelService.getComicById(idComic).subscribe((comic: Comic) => {
      this.comic = comic.data.results[0];
      console.log(this.comic);
      if (this.comic.images.length > 0) {
        this.imagen = `${ this.comic.images[0].path }.${ this.comic.images[0].extension }`;
      }
      this.fechaPublicacion = this.comic.dates.filter(x => x.type === 'onsaleDate')[0].date;
      this.editores = this.comic.creators.items.filter(x => x.role === 'editor');
      this.coloreadores = this.comic.creators.items.filter(x => x.role === 'colorist');
      this.escritores = this.comic.creators.items.filter(x => x.role === 'writer');
      this.personajes = this.comic.characters;
      this.loading = false;
    });
  }

}
