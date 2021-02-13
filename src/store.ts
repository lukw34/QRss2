import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import auth from './auth/auth.reducer';
import navigation from './navigation/navigation.reducer';
import profile from './screens/profile/profile.reducer';

import authEpic from './auth/auth.epic';

const epicMiddleware = createEpicMiddleware();

const reducers = combineReducers({
    auth,
    navigation,
    profile
});

const rootEpic = combineEpics(
  authEpic
);

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
