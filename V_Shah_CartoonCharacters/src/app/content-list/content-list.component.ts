import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import {CartoonService} from '../cartoon.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent implements OnInit {
  types: string[] = ["", "Comedy", "Child"];
  authorSearchMessage = {
    message: "",
    found: false
  };

  cartooncharacters:Content[];

  constructor(private cartoonService: CartoonService) { 
    this.cartooncharacters = [];
  }

  ngOnInit(): void {
    this.cartoonService
      .getCartoons()
      .subscribe((cartoons) => (this.cartooncharacters = cartoons))
  }

  checkForAuthorInList(authorNameValue: string): void {
    if (this.cartooncharacters.some(player => player.author === authorNameValue)) {
      this.authorSearchMessage.message = "Author Found";
      this.authorSearchMessage.found = true;
    }
    else {
      this.authorSearchMessage.message = "Author Not Found";
      this.authorSearchMessage.found = false;
    }
  }

}
