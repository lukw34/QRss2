import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import auth from './auth/auth.reducer';
import navigation from './navigation/navigation.reducer';

import {logInEpic, logOutEpic, authStatusChange, createUserWitProfileData} from './auth/auth.epic';

const epicMiddleware = createEpicMiddleware();

const reducers = combineReducers({
  auth,
  navigation
});

const rootEpic = combineEpics(
  logInEpic,
  logOutEpic,
  authStatusChange,
  createUserWitProfileData
);

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
