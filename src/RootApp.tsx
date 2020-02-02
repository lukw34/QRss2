import React from 'react';
import {
    StatusBar
} from 'react-native';
import 'react-native-gesture-handler';

import RootStackNavigation from './navigation/RootStackNavigation';
const App = () => (
    <>
        <StatusBar barStyle="light-content" />
        <RootStackNavigation/>
    </>
);

export default App;
