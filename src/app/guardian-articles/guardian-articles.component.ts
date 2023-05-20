import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { getArticles } from 'src/api';
import { Articles } from 'src/api/models/SearchAPIResponse';
import { ActivatedRoute } from '@angular/router';
import { GetArticleContentAsStringPipe } from '../get-article-content-as-string.pipe';
import { GetArticlePipe } from '../get-article.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-guardian-articles',
  templateUrl: './guardian-articles.component.html',
  styleUrls: ['./guardian-articles.component.css'],
})
export class GuardianArticlesComponent implements OnInit {
  articles: Articles[] = [];
  currentArticle: any;
  private sub: any;
  Articleid: any;
  temp: Articles[] = [];
  id: number | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    getArticles().then((res) => {
      this.temp = res;
      console.log('articles', this.temp);
      this.Articleid = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('article id', this.Articleid);

      const getArticlePipe = new GetArticlePipe();

      //cosole log every webTitle in temp
      this.temp.forEach((article) => {
        console.log(article.webTitle);
        const transformedArticle = getArticlePipe.transform(article);
        transformedArticle.subscribe((articleData) => {
          console.log('transformed article', articleData);
          console.log('transformed article id', articleData.blocks.body[0].id);
          if (articleData.blocks.body[0].id === this.Articleid) {
            this.currentArticle = articleData; // Set currentArticle
          }
        });
      });

      // console.log(
      //   'find article according to id',
      //   this.temp.find((article) => article.id)
      // );
      // this.currentArticle = this.temp.find(
      //   (article) => article.id === this.Articleid
      // );
      // console.log('current article', this.currentArticle.webTitle);
    });
  }

  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     const id = params['id']; // Get the ID parameter from the route
  //     getArticles().then((res) => {
  //       // this.articles = res;
  //       // let ligma of this.articles;
  //        this.id = detailedArticle.blocks.body[0].id
  //     });
  //   });
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
