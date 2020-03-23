import React from 'react';
import { Provider } from 'react-redux';
import {
    StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigation from './navigation/RootStackNavigation';
import store from './store';
import { navigationRef } from './navigation/RootNavigation';

const App = () => (
      <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
              <StatusBar barStyle="light-content"/>
              <RootStackNavigation/>
          </NavigationContainer>
      </Provider>
  );

export default App;
