import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/api/models/ArticleAPIResponse';

@Pipe({
  name: 'getContent'
})
export class GetContentPipe implements PipeTransform {
  transform(detailedArticle: Article): string {
    const bodyElement = detailedArticle.blocks.body[0];
    const textElement = bodyElement.elements.find(element => element.type === 'bodyTextSummary');
    if (textElement) {
      return textElement.assets[0].file;
    }
    return '';
  }
}

