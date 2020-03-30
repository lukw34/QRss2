import { ActionType } from 'typesafe-actions';

import * as  navActions from './navigation.actions';

export type NavigationActions = ActionType< typeof navActions>;

export type NavigationState = {
  message: string
};
