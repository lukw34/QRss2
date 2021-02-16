import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Boards from '../../screens/boards/Boards';
import {Screens} from '../Navigation';
import HomeNavigationStack from '../../screens/home/HomeNavigationStack';

const Tab = createBottomTabNavigator();

const ScreenBottomTabNavigation: React.FC = () =>  (
    <Tab.Navigator initialRouteName={Screens.HOME}>
        <Tab.Screen
            name={Screens.HOME}
            options={{
                title: 'Home'
            }}
            component={HomeNavigationStack}
        />
        <Tab.Screen name={Screens.BOARDS} component={Boards} />
    </Tab.Navigator>
);

export default ScreenBottomTabNavigation;
