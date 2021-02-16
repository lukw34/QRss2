import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileDrawer} from '../../screens/profile';
import ScreenBottomTabNavigation from './ScreenBottomTabNavigation';

const Drawer = createDrawerNavigator();

const MainScreenNavigation: React.FC = () => (
    <Drawer.Navigator drawerContent={() => <ProfileDrawer />}>
        <Drawer.Screen name='Home' component={ScreenBottomTabNavigation} />
    </Drawer.Navigator>
);

export default MainScreenNavigation;
