import React from 'react';

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import Profile from '../screens/profile';
import ScreenBottomTabNavigation from './ScreenBottomTabNavigation';

const Drawer = createDrawerNavigator();

const MainScreenNavigation = () => (
  <Drawer.Navigator drawerContent={() => <Profile/>}>
    <Drawer.Screen name="Home" component={ScreenBottomTabNavigation} />
  </Drawer.Navigator>
);

export default MainScreenNavigation;
