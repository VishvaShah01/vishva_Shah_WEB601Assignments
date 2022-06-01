import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './models/content';

@Pipe({
  name: 'cartoons'
})
export class CartoonsPipe implements PipeTransform {

  transform(cartooncharacters: Content[], cartoonInput?: string): Content[] {
    return cartooncharacters.filter(cartoonChar => {
      return !cartoonChar.type ?. length || cartoonChar.type == "Comedy" || cartoonChar.type == "Child";
    })
  }

}
