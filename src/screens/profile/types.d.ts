import {ActionType} from 'typesafe-actions';

import * as  profileActions from './profile.actions';
import {StackNavigationProp} from '@react-navigation/stack';

export type ProfileActions = ActionType< typeof profileActions>;

export type ProfileState = {
  email: string | null,
  displayName?: string | null,
  avatar?: string | null,
};


export type ProfileScreenNavigation = {
  navigation: StackNavigationProp<ProfileState>,
}
