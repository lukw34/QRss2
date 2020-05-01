import { ActionType } from 'typesafe-actions';

import * as  profileActions from './profile.actions';

export type ProfileActions = ActionType< typeof profileActions>;

export type ProfileState = {
  email: string | null,
  displayName?: string | null
  avatar?: string | null,
};
