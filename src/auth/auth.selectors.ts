import {createSelector} from 'reselect';
import {RootState} from '../RootState';

const getAuth = (store: RootState) => store.auth;

export const isUserLogged = createSelector(
    getAuth,
    ({userId, error}) => error === null && userId !== null
);

export const isAuthLoading = createSelector(
    getAuth,
    ({isProcessing}) => isProcessing
);
