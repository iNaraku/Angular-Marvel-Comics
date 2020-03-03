import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img): string {
    if (!img) {
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }
    return img;
  }

}
