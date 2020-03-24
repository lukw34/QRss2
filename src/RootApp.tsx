import React from 'react';
import { Provider } from 'react-redux';
import {
    StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import RootStackNavigation from './navigation/RootStackNavigation';
import store from './store';
import { navigationRef } from './navigation/RootNavigation';

const App = () => (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer ref={navigationRef}>
              <StatusBar barStyle="light-content"/>
              <RootStackNavigation/>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
  );

export default App;
