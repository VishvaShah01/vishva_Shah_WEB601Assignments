import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Content } from '../models/content';
import { cartooncharacters } from '../data/mock-cartoons';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const cartoonChar: Content[] = cartooncharacters;
    return {
      cartoonChar: cartoonChar
    };
  }

  genId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(c => c.id || 0)) + 1 : 0;
  }
  
}
