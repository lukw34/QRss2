import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logInWithCredentials } from '../auth.actions';
import { TextInput, Button, Text } from 'react-native-paper';
import { RootScreens } from '../../navigation/Navigation';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => dispatch((logInWithCredentials(email, password)));
  const goToRegistration = () => navigation.navigate(RootScreens.REGISTRATION);
  return (
        <View style={styles.registrationContainer}>
          <View style={styles.textInputsContainer}>
            <TextInput
              style={styles.TextInput}
              mode="outlined"
              selectionColor="#0288d1"
              label="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.TextInput}
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
            <Button mode="outlined" dark={true} onPress={onPress}>
              Sign In
            </Button>
            <View style={styles.SignUpContainer}>
              <Text>If you don't have an account, you can </Text>
              <Button onPress={goToRegistration}>sign up</Button>
            </View>
        </View>
  );
};

interface LoginStyles {
  registrationContainer: ViewStyle;
  textInputsContainer: ViewStyle;
  TextInput: TextStyle;
  SignUpContainer: ViewStyle;
}

const styles = StyleSheet.create<LoginStyles>({
  registrationContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 50
  },
  TextInput: {
    height: 35,
    marginVertical: 5
  },
  textInputsContainer: {
    marginVertical: 30
  },
  SignUpContainer: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row'
  }
});

export default Login;
