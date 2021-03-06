import React, {useState} from 'react';
import {TextStyle, View, ViewStyle, StyleSheet, TextInputProps, TextInput} from 'react-native';

interface EmailInputComponentProps extends TextInputProps {
    externalStyle?: TextStyle;
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    error?: string | null;
    name: string;
}

const SimpleFormInput: React.FC<EmailInputComponentProps> = (
    {externalStyle, setModelValue, fieldKey, ...props}) => {
    const [inputValue, setInputValue] = useState('');
    const onBlur = () => setModelValue(fieldKey, inputValue);
    return (
        <View style={externalStyle}>
            <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                onBlur={onBlur}
                {...props}
            />
        </View>
    );
};

interface EmailInputComponentStyles {
    errorContainer: ViewStyle;
    errorText: TextStyle;
    textInput: TextStyle;
}

const styles = StyleSheet.create<EmailInputComponentStyles>({
    errorContainer: {
        height: 20,
    },
    errorText: {
        color: '#c62828',
        fontSize: 10
    },
    textInput: {
        backgroundColor: 'white',
        height: 45,
        marginVertical: 5
    }
});

export default SimpleFormInput;
