import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Login from '../auth/components/Login';
import BottomTabFeatureNavigation from './BottomTabFeatureNavigation';
import { RootStackParamsList, RootScreens } from './Navigation';
import { isUserLogged } from '../auth/auth.selectors';

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>();

const RootStackNavigation = () => {
  const isUserAuthenticated = useSelector(isUserLogged);
  return (
    <Navigator>
      {isUserAuthenticated ?  (
        <Screen
          options={{
            headerShown: false
          }}
          name={RootScreens.FEATURES}
          component={BottomTabFeatureNavigation}
        />) : (
        <Screen
          options={{
            headerShown: false
          }}
          name={RootScreens.LOGIN}
          component={Login}
        />)}
    </Navigator>
  );
};

export default RootStackNavigation;
