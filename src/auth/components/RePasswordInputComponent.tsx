import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {TextStyle, View, ViewStyle, StyleSheet} from 'react-native';
import ValidationInput from './ValidationInput';

interface EmailInputComponentProps {
    externalStyle?: TextStyle;
    setModelValue: (key: any, value: any) => void;
    fieldKey: string;
    error: string | null;
}

const RePasswordInputComponent: React.FC<EmailInputComponentProps> = (
    {externalStyle, error, fieldKey, setModelValue}) => {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const setRePasswordModelValue = () => {
        setModelValue(fieldKey, {
            password,
            rePassword
        });
    };

    const isError = !!error;
    return (
        <>
            <ValidationInput
                externalStyle={externalStyle}
                fieldKey={fieldKey}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                setModelValue={setRePasswordModelValue}
                placeholder='Type password'
                disableErrorMessage={true}
            />
            <ValidationInput
                externalStyle={externalStyle}
                fieldKey={fieldKey}
                value={rePassword}
                onChangeText={setRePassword}
                setModelValue={setRePasswordModelValue}
                disableErrorMessage={true}
                secureTextEntry={true}
                placeholder='Type password again'
            />
            <View style={styles.errorContainer}>
                {isError && <Text style={styles.errorText}>{error}</Text>}
            </View>
        </>
    );
};

interface EmailInputComponentStyles {
    errorContainer: ViewStyle;
    errorText: TextStyle;
}

const styles = StyleSheet.create<EmailInputComponentStyles>({
    errorContainer: {
        height: 20,
    },
    errorText: {
        color: '#c62828',
        fontSize: 13
    }
});

export default RePasswordInputComponent;
