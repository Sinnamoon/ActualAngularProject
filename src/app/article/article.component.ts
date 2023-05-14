import { Component } from '@angular/core';
import data from '../carousel/vientianeTimesData';
import { getArticles } from 'src/api';
import { Articles } from 'src/api/models/SearchAPIResponse';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  articles = data;
  temp: Articles[] = [];

  constructor() {}

  ngOnInit() {
    getArticles().then((res) => this.temp = res);
    console.log(data);
  }

}
