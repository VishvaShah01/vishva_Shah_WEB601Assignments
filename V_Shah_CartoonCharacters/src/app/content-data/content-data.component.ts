import { Component, OnInit } from '@angular/core';
import { CartoonService } from '../cartoon.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-data',
  templateUrl: './content-data.component.html',
  styleUrls: ['./content-data.component.scss']
})
export class ContentDataComponent implements OnInit {
  searchCartoon: Content[];

  constructor(private cartoonService: CartoonService) { 
    this.searchCartoon = [];
  }

  ngOnInit(): void {
    this.cartoonService.getCartoons().subscribe((contentArrayFromService: Content[]) => {
      this.searchCartoon = contentArrayFromService;
    });
  }

  searchCartoonById(id: any) {
    this.cartoonService
      .getCartoonData(id)
      .subscribe((cartoons) => (this.searchCartoon[id] = cartoons));
  }
}
