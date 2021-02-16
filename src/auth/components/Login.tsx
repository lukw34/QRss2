import React from 'react';
import {View, StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logInWithCredentials} from '../auth.actions';
import {Button, Text} from 'react-native-paper';
import {RootScreens} from '../../navigation/Navigation';
import GradientBackground from '../../ui-components/GradientBackground';
import AppLogo from '../../ui-components/AppLogo';
import SimpleFormInput from './SimpleFormInput';
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
    const {model, setModelValue} = useModal<FormModel, LoginFields>({
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
                <SimpleFormInput
                    setModelValue={setModelValue}
                    fieldKey={LoginFields.EMAIL}
                    placeholder='Email'
                    autoCompleteType='email'
                    name='Email'
                    externalStyle={styles.textInputsContainer}
                />
                <SimpleFormInput
                    setModelValue={setModelValue}
                    fieldKey={LoginFields.PASSWORD}
                    name='Password'
                    placeholder='Password'
                    autoCompleteType='password'
                    secureTextEntry={true}
                />
            </View>
            <Button mode='contained' dark={true} onPress={onPress}>
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
    image: {
        alignSelf: 'center',
        height: 100,
        width: 100
    },
    imageContainer: {
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    signUpContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    signUpText: {
        color: 'white'
    },
    textInput: {
        height: 45,
        marginVertical: 5,
    },
    textInputsContainer: {
        marginVertical: 10
    }
});

export default Login;
