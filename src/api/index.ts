import axios from 'axios';
import { SearchAPIResponse, Articles } from './models/SearchAPIResponse';
import { ArticleAPIResponse, Article } from './models/ArticleAPIResponse';

const API_KEY = '330ee8c9-caa7-4e2d-8eff-3e993de10920';

export async function getArticles(): Promise<Articles[]> {
  return axios
    .get<SearchAPIResponse>(
      `https://content.guardianapis.com/search?api-key=${API_KEY}&sectionId=uk-news&page-size=5`
    )
    .then((res) => {
      return res.data.response.results;
    });
}

export async function getArticleContent(apiUrl: string): Promise<Article> {
  return axios
    .get<ArticleAPIResponse>(`${apiUrl}?api-key=${API_KEY}&show-blocks=body`)
    .then((res) => {
      return res.data.response.content;
    });
}
