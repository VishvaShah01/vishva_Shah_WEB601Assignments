import { Component, OnInit } from '@angular/core';
import {Content} from "../models/content";
import { CartoonService } from '../cartoon.service';

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
  
  constructor(private cartoonService: CartoonService) { }

  ngOnInit(): void {
  }

  addContentToServer(): void {
    this.cartoonItem.hashtag = this.tempTags.split(", ");
    this.cartoonService.addCartoonData(this.cartoonItem)
      .subscribe(newContentFromServer =>
        console.log("Success! New content added", newContentFromServer)
      );
  }
}
