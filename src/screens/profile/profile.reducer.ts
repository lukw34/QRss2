import { createReducer } from 'typesafe-actions';
import { ProfileActions, ProfileState } from './types';
import { clearProfileData, updateProfileData } from './profile.actions';

const initialState = {
  email: '',
  displayName: ''
};

export default createReducer<ProfileState, ProfileActions>(initialState)
  .handleAction(updateProfileData, (state, { payload }) => ({
    ...state,
    ...payload
  }))
  .handleAction(clearProfileData, () => ({
    ...initialState
  }));
