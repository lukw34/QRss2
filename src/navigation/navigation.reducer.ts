import { createReducer } from 'typesafe-actions';
import { showLoadingScreen, hideLoadingScreen } from './navigation.actions';
import { NavigationActions, NavigationState } from './types';

export default createReducer<NavigationState, NavigationActions>({
  message: ''
}).handleAction(showLoadingScreen, (state, { payload: { message } }) => ({
  ...state,
  message
})).handleAction(hideLoadingScreen, state => ({
  ...state,
  message: ''
}));
