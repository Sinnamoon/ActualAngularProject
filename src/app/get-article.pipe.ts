import { Pipe, PipeTransform } from '@angular/core';
import { getArticleContent } from 'src/api';
import { from, map, Observable } from 'rxjs';
import { Articles } from 'src/api/models/SearchAPIResponse';
import { Article } from 'src/api/models/ArticleAPIResponse';

@Pipe({
  name: 'getArticle',
})
export class GetArticlePipe implements PipeTransform {
  transform(article: Articles): Observable<Article> {
    return from(getArticleContent(article.apiUrl));
  }
}
