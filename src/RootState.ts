import { AuthState } from './auth/types';
import { NavigationState } from './navigation/types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState
};
