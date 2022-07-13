import { Component, OnInit } from '@angular/core';
import {Content} from "../models/content";
import { CartoonService } from '../cartoon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { cartooncharacters } from '../data/mock-cartoons';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.css']
})
export class ChangeContentComponent implements OnInit {

  cartoonItem: Content = {
    title: "",
    body: "",
    id: null,
    author: '',
    type:'',
    hashtag: []
  };
  tempTags: string = '';
  
  constructor(private cartoonService: CartoonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');

    if (id) {
      var cartoonItem = this.cartoonService
        .getCartoonData(Number(id))
        .subscribe((cartoonItem) => {
          if (cartoonItem && id) {
            this.cartoonItem = { ...this.cartoonItem };
            console.log(cartoonItem);
          }
        });
  }
}

  addContentToServer(): void {
    this.cartoonItem.hashtag = this.tempTags.split(", ");
    this.cartoonService.addCartoonData(this.cartoonItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
  updateContentOnServer(): void {
    this.cartoonItem.hashtag = this.tempTags.split(", ");
    this.cartoonService.updateCartoonData(this.cartoonItem)
      .subscribe(() =>
        console.log("Content updated successfully", this.cartoonItem)
      );
  }

}
