import {createAction} from 'typesafe-actions';

export const logOut = createAction('@auth/LOG_OUT')();

export const logInWithCredentials = createAction(
    '@auth/LOG_IN', (email: string, password: string) => ({
        email,
        password
    }))();

export const createUser = createAction(
    '@auth/CREATE_USER',
    (email: string, password: string, firstName?: string, lastName?: string, avatar?: string) => ({
        email,
        password,
        firstName,
        lastName,
        avatar
    }))();

export const authSuccess = createAction('@auth/AUTH_SUCCESS', (userId: string) => ({
    userId
}))();

export const authFailure = createAction('@auth/AUTH_FAILURE')();

export const authError = createAction('@auth/AUTH_ERROR', (error: string) => ({
    error
}))();

export const startAuthentication = createAction('@auth/START_AUTHENTICATION')();
