import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url: string = environment.url;
  apiKey: string = environment.apiKey;
  hash: string = environment.hash;
  ts: string = environment.ts;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene listas de cmics
   */
  getComics = () => {
    return this.http.get<Comic>(`${ this.url }?apikey=${ this.apiKey }&hash=${ this.hash }&ts=${ this.ts }&limit=100`);
  }

  /**
   * Obtiene un solo comic por id
   * @param idComic Identificador único del cómic
   */
  getComicById = (idComic: number) => {
    return this.http.get<Comic>(`${ this.url }/${ idComic }?apikey=${ this.apiKey }&hash=${ this.hash }&ts=${ this.ts }`);
  }
}
