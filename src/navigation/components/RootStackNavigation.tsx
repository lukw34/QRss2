import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Login from '../../auth/components/Login';
import { RootScreens, RootStackParamsList } from '../Navigation';
import MainScreenNavigation from './MainScreenNavigation';
import { isUserLogged } from '../../auth/auth.selectors';
import Registration from '../../auth/components/Registration';
import { isLoadingScreen } from '../navigation.selectors';
import LoadingScreen from './LoadingScreen';

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>();

const RootStackNavigation = () => {
  const isUserAuthenticated = useSelector(isUserLogged);
  const isLoading = useSelector(isLoadingScreen);
  return (
    <Navigator>
      {isLoading ? (
        <Screen
          options={{
            headerShown: false
          }}
          name={RootScreens.LOADING}
          component={LoadingScreen}
        />
      ) : (isUserAuthenticated ? (
        <Screen
          options={{
            headerShown: false
          }}
          name={RootScreens.MAIN}
          component={MainScreenNavigation}
        />) : (
        <React.Fragment>
          <Screen
            options={{
              headerShown: false
            }}
            name={RootScreens.LOGIN}
            component={Login}
          />
          <Screen
            options={{
              headerShown: false
            }}
            name={RootScreens.REGISTRATION}
            component={Registration}
          />
        </React.Fragment>
      ))}

    </Navigator>
  );
};

export default RootStackNavigation;