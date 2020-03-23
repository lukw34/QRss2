import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import auth from './auth/auth.reducer';

import { logInEpic, logOutEpic, authStatusChange } from './auth/auth.epic';

const epicMiddleware = createEpicMiddleware();

const reducers = combineReducers({
  auth
});

const rootEpic = combineEpics(
  logInEpic,
  logOutEpic,
  authStatusChange
);

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
