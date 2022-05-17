import { Component } from '@angular/core';
import {Content} from './models/content';
import {List} from './models/list'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'V_Shah_CartoonCharacters';
  firstCharacter: Content;
  secondCharacter: Content;
  thirdCharacter: Content;
  fourthCharacter: Content; 
  content: List = new List;

  constructor() {
    this.firstCharacter = {
      id: 0,
      title: 'Shinchan',
      body: ' Shin-chan follows the journey of five-year-old, Shinnosuke "Shin" Nohara and his family, his pet dog Shiro, neighbours, and friends in Kasukabe, Japan.',
      author: 'Yoshito Usui',
      imagelink: 'https://images-na.ssl-images-amazon.com/images/I/71rVjwXc7LL._RI_.jpg',
      type: 'Comedy',
      hashtag: ['Sinchan Nohara']
    }
    this.secondCharacter = {
      id: 1,
      title: 'Mickey Mouse',
      body: 'Mickey Mouse is an American animated cartoon character co-created in 1928 by Walt Disney, who originally voiced the character, and Ub Iwerks.',
      author: 'Walt Disney',
      imagelink: 'https://vignette.wikia.nocookie.net/the-disney-roleplay/images/d/d4/Mickey-mouse-659.jpg/revision/latest/scale-to-width-down/2000?cb=20140917132903',
      type: 'Comedy',
      hashtag: ['Mickey Mouse']
    }
    this.thirdCharacter = {
      id: 2,
      title: 'Chotta Bheem',
      body: "Chhota Bheem ('Little Bheem') is an Indian animated comedy adventure television series, created by Green Gold Animations based in Hyderabad. Bheem is a brave, strong and intelligent young boy. He often manages to solve everyone's problems which endears him to the townspeople of Dholakpur.",
      author: 'Rajiv Chilaka',
      imagelink: 'https://www.asianpaints.com/content/dam/asianpaints/website/shop/products/chhota-bheem-good-luck-wall-sticker-a.jpg.image.114.87.medium.jpg',
      type: 'Comedy',
      hashtag: ['Bheemmm']
    }
    this.fourthCharacter = {
      id: 3,
      title: 'Thomas and Friends',
      body: "Thomas & Friends (originally known as Thomas the Tank Engine & Friends and later Thomas the Tank Engine and Thomas & Friends: Big World! Big Adventures!) is a British children's television series created by Reverend W. Awdry and Britt Allcroft that aired across 24 series between 1984 to 2021.",
      author: 'Britt Allcroft',
      imagelink: 'https://2.bp.blogspot.com/-ZI0ab75-9yM/WpW3wO_gM2I/AAAAAAAA4AQ/ct1KqUz-A4ULjo3QjbSXqVReV8Y84wDjQCLcBGAs/s1600/thomas-and-friends-season-21-keyart_landscape_no-logo-nickelodeon-usa-press-nick-jr.jpg',
      type: 'Comedy',
      hashtag: ['Thomas']
    } 
        this.content.addContent(this.firstCharacter);
        this.content.addContent(this.secondCharacter);
        this.content.addContent(this.thirdCharacter);
        this.content.addContent(this.fourthCharacter);
  }
}
