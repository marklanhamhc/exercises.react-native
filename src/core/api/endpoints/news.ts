import { NewsArticle } from '../models';
import { newsMocks } from './news.mocks';
export interface SearchRequest {
  page: number;
  pageSize: number;
}
export interface SearchResponse<T> {
  page: number; // Starts at 0
  pageSize: number;
  results: T[];
}

export const get = (request: SearchRequest): Promise<NewsArticle[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const startIndex = request.page * request.pageSize;
      const range = newsMocks.slice(startIndex, startIndex + request.pageSize);
      resolve(range);
    }, 500);
  });
};
