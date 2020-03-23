import { Epic, ofType } from 'redux-observable';
import { ActionType, getType } from 'typesafe-actions';
import { catchError, mergeMap, map, ignoreElements } from 'rxjs/operators';
import { EMPTY, NextObserver, Observable, of } from 'rxjs';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { authError, authFailure, authSuccess, logInWithCredentials, logOut } from './auth.actions';
import { AuthActions } from './types';

const authChanged = Observable
  .create((obs: NextObserver<FirebaseAuthTypes.User | null>) => auth().onAuthStateChanged(
  (user: FirebaseAuthTypes.User | null) => obs.next(user)
));

export const logInEpic: Epic<AuthActions> = action$ => action$.pipe(
  ofType(getType(logInWithCredentials)),
  mergeMap(async (action) => {
    const { payload: { email, password } } = action as ActionType<typeof logInWithCredentials>;
    await auth().signInWithEmailAndPassword(email, password);
    return EMPTY;
  }),
  catchError(error => of(authError(error.message))),
  ignoreElements(),
);

export const logOutEpic: Epic<AuthActions> = action$ => action$.pipe(
  ofType(getType(logOut)),
  mergeMap(async () => {
    await auth().signOut();
    return EMPTY;
  }),
  catchError((error: any) =>  of(authError(error.message))),
  ignoreElements()
);

export const authStatusChange = () => authChanged.pipe(
  map((user: FirebaseAuthTypes.User) => {
    if (user === null) {
      return authFailure();
    }
    return authSuccess(user.uid);
  })
);
