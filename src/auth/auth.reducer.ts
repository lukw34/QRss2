import { createReducer } from 'typesafe-actions';
import { authFailure, authSuccess, startAuthentication } from './auth.actions';
import { AuthActions, AuthState } from './types';

export default createReducer<AuthState, AuthActions>({
    userId: null,
    error: null,
    isProcessing: false
}).handleAction(authSuccess, (state, { payload: { userId } }) => ({
    ...state,
    userId,
    error: null,
    isProcessing: false
})).handleAction(authFailure, state => ({
    ...state,
    error: null,
    userId: null,
    isProcessing: false
})).handleAction(startAuthentication, state => ({
    ...state,
    isProcessing: true
}));
