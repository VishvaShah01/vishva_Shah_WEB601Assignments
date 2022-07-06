import { Injectable } from '@angular/core';
import {cartooncharacters, DEFAULTCARTOONCHARACTERS} from "../app/data/mock-cartoons";
import {Content} from "../app/models/content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartoonService {

  constructor() { }

  //getting file of mock-cartoons
  //A method that will return the content array from the file in your data folder
  getCartoons(): Observable<Content[]> {
    return of(cartooncharacters);
  }

  //A method that accepts a number and returns the content item in the array that contains the same id as the number parameter
  //insert data
  getCartoonData(id: Number): Observable<Content> {
    for (var i = 0; i < cartooncharacters.length; i++) {
      if (cartooncharacters[i].id === id) {
        console.log(cartooncharacters[i])
        return of(cartooncharacters[i]);
      }
  
    }
    console.log(cartooncharacters)
    //return of(DEFAULTCARTOONCHARACTERS);
    return of(cartooncharacters[i]);
  }

  //A method that accepts a Content item as an input, adds the item to the array, and returns the array after the item is added
  //update data 
  addCartoonData(newCartoon: Content): Observable<Content[]> {
    var printCartoon = cartooncharacters.filter((cartoon) => {
      return cartoon.id == newCartoon.id;
    });
    cartooncharacters.push(newCartoon);
    return of(cartooncharacters);
  }

  //A method that accepts a Content item as an input, updates an existing item in the array that has the same id as the input parameter, and returns the array after the item is updated
  //delete data
  updateCartoonData(newCartoon: Content): Observable<Content[]> {
    var  updateData = cartooncharacters.forEach(cartoons =>{
      if( cartoons.id){
        cartoons.id === newCartoon.id ? { ...cartoons, ...newCartoon } : cartoons
      }
    });
    return of(cartooncharacters);
  }

  //A method that accepts a number, removes the item from the array that has the same id as the number parameter, and returns the Content item that was removed
  deleteCartoonData(id: Number): Observable<Content[]> {
    var deletedData = cartooncharacters.filter(function (newCartoon) {
      if(newCartoon.id != id) {
        console.log(cartooncharacters);
      }
    });
    return of(deletedData);
  }


}
