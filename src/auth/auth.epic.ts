import { Epic, ofType, combineEpics } from 'redux-observable';
import { ActionType, getType } from 'typesafe-actions';
import { catchError, mergeMap, mapTo } from 'rxjs/operators';
import { NextObserver, Observable, of } from 'rxjs';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

import {
  authError,
  authFailure,
  authSuccess,
  logInWithCredentials,
  logOut,
  createUser
} from './auth.actions';
import { AuthActions } from './types';
import { ProfileActions } from '../screens/profile/types';
import { updateProfileData } from '../screens/profile/profile.actions';
import { showLoadingScreen, hideLoadingScreen } from '../navigation/navigation.actions';
import { NavigationActions } from '../navigation/types';

type EpicActions = AuthActions | ProfileActions | NavigationActions;

const authChanged = Observable
  .create((obs: NextObserver<FirebaseAuthTypes.User | null>) => auth().onUserChanged(
  (user: FirebaseAuthTypes.User | null) => obs.next(user)
));

export const logInEpic: Epic<EpicActions> = action$ => action$.pipe(
  ofType(getType(logInWithCredentials)),
  mergeMap(async (action) => {
      const { payload: { email, password } } = action as ActionType<typeof logInWithCredentials>;
      await auth().signInWithEmailAndPassword(email, password);
      return hideLoadingScreen();
  }),
  catchError(error => of(authError(error.message))),
);

export const logOutEpic: Epic<EpicActions> = action$ => action$.pipe(
  ofType(getType(logOut)),
  mergeMap(async () => {
      await auth().signOut();
      return hideLoadingScreen();
  }),
  catchError((error: any) =>  of(authError(error.message)))
);

export const createUserWitProfileData: Epic<EpicActions> = action$ => action$.pipe(
  ofType(getType(createUser)),
  mergeMap(async (action) => {
      const {
      payload: {
        email,
        password,
        firstName,
        lastName,
        avatar
      } } = action as ActionType<typeof createUser>;
      const { user } = await auth().createUserWithEmailAndPassword(email, password);
      await user.updateProfile({
          displayName: `${firstName} ${lastName}`,
      });
      if (avatar) {
          const ext = avatar.split('.').pop();
          const ref = storage().ref(`avatars/${user.uid}.${ext}`);
          await ref.putFile(avatar, { contentType: 'image/jpg' });
          await user.updateProfile({
              photoURL: await ref.getDownloadURL()
          });
      }
      return hideLoadingScreen();
  }),
  catchError(error => of(authError(error.message)))
);

export const authStatusChange = () => authChanged.pipe(
  mergeMap((user: FirebaseAuthTypes.User) => {
      if (user === null) {
          return of(authFailure());
      }
      return of(
      authSuccess(user.uid),
      updateProfileData(user.email, user.displayName, user.photoURL)
    );
  })
);

export const authLoadingScreen: Epic<EpicActions> = action$ => action$.pipe(
  ofType(getType(createUser), getType(logOut), getType(logInWithCredentials)),
  mapTo(showLoadingScreen('Authentication'))
);

export const authStopLoadingScreen: Epic<EpicActions> = action$ => action$.pipe(
  ofType(getType(authError)),
  mapTo(hideLoadingScreen())
);

export default combineEpics(
  authStopLoadingScreen,
  authLoadingScreen,
  logInEpic,
  logOutEpic,
  authStatusChange,
  createUserWitProfileData
);
