import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logInWithCredentials } from '../auth.actions';
import { TextInput, Button, Text } from 'react-native-paper';
import { RootScreens } from '../../navigation/Navigation';
import logo from '../../assets/logo.jpeg';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPress = () => dispatch((logInWithCredentials(email, password)));
  const goToRegistration = () => navigation.navigate(RootScreens.REGISTRATION);
  return (
        <View style={styles.registrationContainer}>
          <View style={styles.imageContainer}>
          <Image style={styles.image} source={logo}/>
          </View>
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
              underlineColor="white"
            />
          </View>
            <Button mode="contained" dark={true} onPress={onPress}>
              Sign In
            </Button>
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>If you don't have an account, you can </Text>
              <Button onPress={goToRegistration}>sign up</Button>
            </View>
        </View>
  );
};

interface LoginStyles {
  registrationContainer: ViewStyle;
  textInputsContainer: ViewStyle;
  TextInput: TextStyle;
  signUpContainer: ViewStyle;
  signUpText: TextStyle;
  image: ImageStyle;
  imageContainer: ViewStyle;
}

const styles = StyleSheet.create<LoginStyles>({
  registrationContainer: {
    //gradient od tego szarego do ciemnego w dół jest sztos
    backgroundColor: '#4e4e4e',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    flexDirection: 'column',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  image: {
    width: 100,
    height: 100,

    alignSelf: 'center'
  },
  TextInput: {
    height: 45,
    marginVertical: 5,
    borderColor: 'white'
  },
  textInputsContainer: {
    marginVertical: 10
  },
  signUpContainer: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row'
  },
  signUpText: {
    color: 'white'
  }
});

export default Login;
