import { AuthState } from './auth/types';
import { NavigationState } from './navigation/types';
import { ProfileState } from './screens/profile/types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState
  profile: ProfileState
};
