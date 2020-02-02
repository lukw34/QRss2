import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../login/Login';

const RootStackNavigation = createStackNavigator({
  Login: {
    screen: Login,
  }
});

export default  createAppContainer(RootStackNavigation);
