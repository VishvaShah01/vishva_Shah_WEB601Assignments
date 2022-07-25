import { Component } from '@angular/core';
import {Content} from './models/content';
//import {List} from './models/list'
import {CartoonService} from '../app/cartoon.service';
import { LogUpdateService } from '../app/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'V_Shah_CartoonCharacters';
  //searchCartoon: Content[];

  public id: any;
  //constructor(private cartoonService: CartoonService) {
  //  this.searchCartoon = [];
  //}

  constructor(private logService: LogUpdateService) {

  }

  ngOnInit(): void {}
}
