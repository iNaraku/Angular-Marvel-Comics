import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic.model';
import { Result } from 'src/app/models/result.model';
import { Characters } from 'src/app/models/characters.model';
import { Item } from 'src/app/models/item.model';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

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

  /**
   * Llena la informacion del cómic solicitado
   * @param idComic Identificador único del cómic solictado
   */
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
