import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { CartoonService } from '../cartoon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  cartoon?: Content;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cartoonService: CartoonService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the + unary operator

      this.cartoonService.getCartoonData(this.id).subscribe(singleItem => {
        if (singleItem) {
          this.cartoon = singleItem;
        }
        else {
          this.router.navigate(['/contentNotFound']);
        }
      });
    });
  }
}
