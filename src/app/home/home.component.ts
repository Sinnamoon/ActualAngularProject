import { Component, OnInit } from '@angular/core';
import { getArticles } from 'src/api';
import { Articles } from 'src/api/models/SearchAPIResponse';
import { GetContentPipe } from '../get-content.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GetContentPipe]
})
export class HomeComponent implements OnInit {
  temp: Articles[] = [];

  constructor() {}

  ngOnInit() {
    getArticles().then((res) => this.temp = res);
    
  }

}
