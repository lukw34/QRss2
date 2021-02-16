import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {TextStyle, View, ViewStyle, StyleSheet, TextInputProps} from 'react-native';
import {Item, Input} from 'native-base';

interface EmailInputComponentProps extends TextInputProps {
    externalStyle?: TextStyle;
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    error?: string | null;
    disableErrorMessage?: boolean;
}

const ValidationInputComponent: React.FC<EmailInputComponentProps> = (
    {externalStyle,
        setModelValue,
        fieldKey,
        error,
        disableErrorMessage = false,
        placeholder,
        ...props
    }) => {
    const [inputValue, setInputValue] = useState('');
    const isError = !!error;
    const showErrorMessage = !disableErrorMessage && error !== undefined;
    const onBlur = () => setModelValue(fieldKey, inputValue);
    return (
        <View style={externalStyle}>
            <Item error={isError} success={!isError}>
                <Input
                    style={styles.textInput}
                    value={inputValue}
                    onChangeText={setInputValue}
                    onBlur={onBlur}
                    placeholderTextColor='#868585'
                    placeholder={placeholder && placeholder.toLocaleUpperCase()}
                    {...props}
                />
                {/* <Icon name="close-circle" />*/}
            </Item>
            {showErrorMessage && (<View style={styles.errorContainer}>
                {isError && <Text style={styles.errorText}>{error}</Text>}
            </View>)}
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
        color: '#d90a0a',
        fontSize: 13
    },
    textInput: {
        color: 'white',
        fontSize: 16,
        height: 45,
        marginVertical: 5
    }
});

export default ValidationInputComponent;
