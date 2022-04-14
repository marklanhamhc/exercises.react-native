import { api } from '../../core/api';
import { SearchRequest } from '../../core/api/endpoints/news';
import { ThunkResult } from '../../store/redux';
import { getNewsfeed, refreshNewsfeed } from './actions';

export const getNewsfeedAsync = (
  searchParams: SearchRequest
): ThunkResult<Promise<void>> => {
  return async dispatch => {
    try {
      dispatch(getNewsfeed.request());
      dispatch(getNewsfeed.success(await api.news.get(searchParams)));
    } catch (error) {
      dispatch(getNewsfeed.failure());
    }
  };
};

// This can be used to refresh the news feed when the PTR fires
export const refreshNewsfeedAsync = (
  searchParams: SearchRequest
): ThunkResult<Promise<void>> => {
  return async dispatch => {
    try {
      dispatch(refreshNewsfeed.request());
      dispatch(refreshNewsfeed.success(await api.news.get(searchParams)));
    } catch (error) {
      dispatch(refreshNewsfeed.failure());
    }
  };
};
