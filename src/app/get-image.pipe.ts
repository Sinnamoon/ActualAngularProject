import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/api/models/ArticleAPIResponse';

@Pipe({
  name: 'getImage',
})
export class GetImagePipe implements PipeTransform {
  transform(detailedArticle: Article): string {
    let found = detailedArticle.blocks.body[0].elements.find(
      (element) => element.type === 'image'
    );
    if (found) {
      // console.log(found);
      return found.assets[0].file;
    }
    return '';
  }
}
