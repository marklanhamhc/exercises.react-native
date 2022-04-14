import { createReducer, ActionType } from 'typesafe-actions';
import { NewsArticle } from '../../core/api/models';
import * as actions from './actions';

export interface State {
  newsLoading: boolean;
  refreshingLoading: boolean;
  newsfeed: NewsArticle[];
}

export const defaultState: State = {
  newsLoading: false,
  refreshingLoading: false,
  newsfeed: []
};

// A stub is required for the sign out reducer (because of type-safe actions typing)
export default createReducer<State, ActionType<typeof actions>>(defaultState)
  // Get news feed
  .handleAction(actions.getNewsfeed.request, state => ({
    ...state,
    newsLoading: true
  }))
  .handleAction(actions.getNewsfeed.success, (state, action) => ({
    ...state,
    newsLoading: false,
    newsfeed: action.payload
  }))
  .handleAction(actions.getNewsfeed.failure, state => ({
    ...state,
    newsLoading: false
  }))

  // Refresh news feed
  .handleAction(actions.refreshNewsfeed.request, state => ({
    ...state,
    refreshLoading: true
  }))
  .handleAction(actions.refreshNewsfeed.success, (state, action) => ({
    ...state,
    refreshLoading: false,
    newsfeed: action.payload
  }))
  .handleAction(actions.refreshNewsfeed.failure, state => ({
    ...state,
    refreshLoading: false
  }));
