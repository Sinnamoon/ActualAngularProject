import { Pipe, PipeTransform } from '@angular/core';
import { getArticleContent } from 'src/api';
import { Article } from 'src/api/models/ArticleAPIResponse';

@Pipe({
  name: 'getArticleContentAsString'
})
export class GetArticleContentAsStringPipe implements PipeTransform {
  transform(article: Article): string {
    const additionalContent = getArticleContent(article.apiUrl); // Assuming getArticleContent returns a string
    return `${article.webTitle} - ${additionalContent}`;
  }  
}
