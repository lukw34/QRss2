import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Image, ImageStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logInWithCredentials } from '../auth.actions';
import { TextInput, Button, Text } from 'react-native-paper';
import { RootScreens } from '../../navigation/Navigation';
import GradientBackground from '../../ui-components/GradientBackground';
import AppLogo from '../../ui-components/AppLogo';
import FormInputComponent from './FormInputComponent';
import useModal from '../hooks/useModal';

enum LoginFields {
    PASSWORD = 'password',
    EMAIL = 'email',
}

type FormModel = {
    [LoginFields.PASSWORD]:string,
    [LoginFields.EMAIL]: string,
};

const Login: React.FC = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { model, setModelValue } = useModal<FormModel, LoginFields>({
        [LoginFields.PASSWORD]: '',
        [LoginFields.EMAIL]: ''
    });
    const onPress = () => dispatch((
        logInWithCredentials(model[LoginFields.EMAIL], model[LoginFields.PASSWORD])));

    const goToRegistration = () => navigation.navigate(RootScreens.REGISTRATION);

    return (
            <GradientBackground>
              <View style={styles.imageContainer}>
                <AppLogo />
              </View>
              <View style={styles.textInputsContainer}>
                  <FormInputComponent
                      setModelValue={setModelValue}
                      fieldKey={LoginFields.EMAIL}
                      placeholder="Email"
                      autoCompleteType="email"
                      name="Email"
                  />
                  <FormInputComponent
                      setModelValue={setModelValue}
                      fieldKey={LoginFields.PASSWORD}
                      name="Password"
                  />
              </View>
                <Button mode="contained" dark={true} onPress={onPress}>
                  Sign In
                </Button>
                <View style={styles.signUpContainer}>
                  <Text style={styles.signUpText}>If you don't have an account, you can </Text>
                  <Button onPress={goToRegistration}>sign up</Button>
                </View>
            </GradientBackground>
    );
};

interface LoginStyles {
    textInputsContainer: ViewStyle;
    textInput: TextStyle;
    signUpContainer: ViewStyle;
    signUpText: TextStyle;
    image: ImageStyle;
    imageContainer: ViewStyle;
}

const styles = StyleSheet.create<LoginStyles>({
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    textInput: {
        height: 45,
        marginVertical: 5,
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
