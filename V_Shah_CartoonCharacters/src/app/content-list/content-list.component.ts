import { Component, OnInit, Optional } from '@angular/core';
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
  public  inputvalue?: Optional;

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

  clickEvent(inputvalue: any): any {
  
    // let i = 0;
    //  return  console.log(inputvalue); 
    for(let i = 0;  i < this.cartooncharacters.length; i++) {
    // console.log(this.stockdata[i].author);

      // console.log(author.author)
      // console.log(inputvalue);
      if(this.cartooncharacters[i].author == inputvalue){
     let abj =  <HTMLInputElement>document.getElementById('aut');
       //return 'we found the item with other';
       abj.innerHTML = 'we found the item with other';
      }
      //   else{
      //  let abj =  <HTMLInputElement>document.getElementById('aut');

      //        abj.innerHTML = 'we can not find the other';
      //   }
    

    }
    let abj =  <HTMLInputElement>document.getElementById('aut');
    if(!abj.innerHTML){
             abj.innerHTML = 'we can not find the other';

    }

}
}
