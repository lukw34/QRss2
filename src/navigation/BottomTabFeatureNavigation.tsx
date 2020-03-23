import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Boards from '../screens/boards/Boards';
import { FeatureScreens } from './Navigation';

const Tab = createBottomTabNavigator();

const BottomTabFeatureNavigation = () =>  (
    <Tab.Navigator initialRouteName={FeatureScreens.HOME}>
      <Tab.Screen
        name={FeatureScreens.HOME}
        options={{
          title: 'Home'
        }}
        component={Home}
      />
      <Tab.Screen name={FeatureScreens.BOARDS} component={Boards} />
    </Tab.Navigator>
  );

export default BottomTabFeatureNavigation;
