import React, { useState } from 'react';
import { TextInput, Text } from 'react-native-paper';
import { TextStyle, View, ViewStyle, StyleSheet, TextInputProps } from 'react-native';

interface EmailInputComponentProps extends TextInputProps {
    externalStyle?: TextStyle;
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    error?: string | null;
    name: string;
}

const FormInputComponent: React.FC<EmailInputComponentProps> = (
  { externalStyle, setModelValue, fieldKey, error, name, ...props }) => {
    const [inputValue, setInputValue] = useState('');
    const isError = !!error;
    const onBlur = () => setModelValue(fieldKey, inputValue);
    return (
    <View style={externalStyle}>
      <TextInput
        style={styles.textInput}
        label={name}
        value={inputValue}
        onChangeText={setInputValue}
        onBlur={onBlur}
        error={isError}
        {...props}
      />
      { error !== undefined  && (<View style={styles.errorContainer}>
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
    textInput: {
        height: 45,
        marginVertical: 5,
    },
    errorContainer: {
        height: 20,
    },
    errorText: {
        color: '#c62828',
        fontSize: 10
    }
});

export default FormInputComponent;
