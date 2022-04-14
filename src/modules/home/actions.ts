import { createAction, createAsyncAction } from 'typesafe-actions';
import { NewsArticle } from '../../core/api/models';

export const getNewsfeed = createAsyncAction(
  '@newsfeed/get/request',
  '@newsfeed/get/success',
  '@newsfeed/get/failure'
)<undefined, NewsArticle[], undefined>();

export const refreshNewsfeed = createAsyncAction(
  '@refreshNewsfeed/get/request',
  '@refreshNewsfeed/get/success',
  '@refreshNewsfeed/get/failure'
)<undefined, NewsArticle[], undefined>();
