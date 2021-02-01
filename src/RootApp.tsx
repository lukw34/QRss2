import React from 'react';
import { Provider } from 'react-redux';
import {
    StatusBar, Text
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import RootStackNavigation from './navigation/components/RootStackNavigation';
import store from './store';
import { navigationRef } from './navigation/RootNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7fcd91',
    accent: '#ffb74d',
    background: '#8e8c8c',
    text: 'white'
  },
};

const App = () => (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle="light-content"/>
                <RootStackNavigation/>
            </NavigationContainer>
        </PaperProvider>
    </Provider>
  );

export default App;
