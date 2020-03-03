import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img): string {
    if (!img) {
      return './assets/images/no-image-banner.jpg';
    }
    return img;
  }

}
