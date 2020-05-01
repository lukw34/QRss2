import { createAction } from 'typesafe-actions';

export const updateProfileData = createAction(
  '@profile/UPDATE_PROFILE_DATA',
  (email: string | null, displayName: string | null, avatar: string | null) => ({
    email,
    displayName,
    avatar
  })
)();

export const clearProfileData = createAction(
  '@profile/CLEAR_PROFILE_DATA'
)();
