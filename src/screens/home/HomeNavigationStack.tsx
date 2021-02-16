import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserHeader} from '../profile/components/UserHeader';
import Home from './Home';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigationStack: React.FC = () => (
    <Navigator>
        <Screen
            name='HomeView'
            component={Home}
            options={{
                header: UserHeader
            }}
        />
    </Navigator>
);

export default HomeNavigationStack;
