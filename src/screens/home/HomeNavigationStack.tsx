import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserHeader } from '../profile/components/UserHeader';
import Home from './Home';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigationStack = () => (
  <Navigator>
    <Screen
      name="HomeView"
      component={Home}
      options={{
        header: ({ previous }) => <UserHeader previous={previous} />
      }}
    />
  </Navigator>
);

export default HomeNavigationStack;
