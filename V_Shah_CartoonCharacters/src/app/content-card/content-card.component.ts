import { Component,Input, OnInit } from '@angular/core';
import {Content} from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() cartoon?: Content;
  static Count = 0;
  private char: Content[];

  constructor() {
    this.char = []; 
  }
  get characters():Content[] {
    return this.char;
  }
  mycartoons(){
    console.log(this.cartoon?.id);
    console.log(this.cartoon?.author);
  }

  ngOnInit(): void {
  }

}
