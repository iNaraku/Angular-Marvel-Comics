import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css']
})
export class ComicCardComponent implements OnInit {

  @Input() comic: Result;
  imagen: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.comic.images.length > 0) {
      this.imagen = `${ this.comic.images[0].path }.${ this.comic.images[0].extension }`;
    }
  }

}
