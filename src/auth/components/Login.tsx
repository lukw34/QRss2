import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootScreens, RootStackParamsList } from '../../navigation/Navigation';
import { useDispatch } from 'react-redux';
import { logInWithCredentials } from '../auth.actions';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParamsList, RootScreens.LOGIN>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const onPress = () => dispatch((logInWithCredentials('l@g.com', 'test1234')));
  return (
        <View>
            <Text>Login Screen</Text>
            <Button title="go to features" onPress={onPress} />
        </View>
  );
};

export default Login;
