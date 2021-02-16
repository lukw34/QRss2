import {ActionType} from 'typesafe-actions';

import * as  authActions from './auth.actions';

export type AuthActions = ActionType< typeof authActions>;

export type AuthState = {
    userId: string | null,
    error: string | null,
    isProcessing: boolean,
};
