import { createReducer } from 'typesafe-actions';
import { showLoadingScreen, hideLoadingScreen } from './navigation.actions';
import { NavigationActions, NavigationState } from './types';

export default createReducer<NavigationState, NavigationActions>({
  isLoading: false,
  message: ''
}).handleAction(showLoadingScreen, (state, { payload: { message } }) => ({
  ...state,
  message,
  isLoading: true
})).handleAction(hideLoadingScreen, state => ({
  ...state,
  message: '',
  isLoading: false
}));
