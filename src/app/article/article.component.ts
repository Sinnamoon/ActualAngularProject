import { Component, OnDestroy, OnInit } from '@angular/core';
import data from '../carousel/vientianeTimesData';
import { getArticles } from 'src/api';
import { Articles } from 'src/api/models/SearchAPIResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
  articles = data;
  id: number | null = null;
  currentArticle: any; // Add this line to declare the currentArticle variable
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.currentArticle = this.articles[this.id]; // Assign currentArticle to this.articles[this.id]
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
