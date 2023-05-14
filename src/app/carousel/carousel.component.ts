import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { OnInit } from '@angular/core';
import data from './vientianeTimesData';
import { getArticles } from 'src/api';
import { Articles } from 'src/api/models/SearchAPIResponse';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  articles = data;
  temp: Articles[] = [];

  constructor() {}

  ngOnInit() {
    getArticles().then((res) => this.temp = res);
    console.log(data);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoHeight: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      }
    },
    nav: true,
  };
}
