import { Component, OnInit } from '@angular/core';
import { DEFAULTCARTOONCHARACTERS } from '../data/mock-cartoons';
import { CartoonService } from '../cartoon.service';
import {Content} from "../models/content";

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.css']
})
export class ContentSearchComponent implements OnInit {

  item: Content | undefined;

  constructor(private CartoonService: CartoonService) { }

  ngOnInit(): void {
    /* this.CartoonService.getCartoonData(1).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item: ", chessChampionsSingleItem);
      this.item = chessChampionsSingleItem;
    }); */

  }

  checkForIdInList(idValue: string): void {
    this.CartoonService.getCartoonData(Number(idValue)).subscribe(chessChampionsSingleItem => {
      console.log("App component - Got the content item AGAIN: ", chessChampionsSingleItem);
      this.item = chessChampionsSingleItem;
    });
  }

}
