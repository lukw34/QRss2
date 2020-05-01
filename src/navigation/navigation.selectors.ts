import { createSelector } from 'reselect';
import { RootState } from '../RootState';

const getNavigation = (store: RootState) => store.navigation;

export const isLoadingScreen = createSelector(
 getNavigation,
  ({ isLoading }) => isLoading
);

export const getLoadingMessage = createSelector(
  getNavigation,
  ({ message }) => message
);
