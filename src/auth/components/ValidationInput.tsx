import React, { useState } from 'react';
import { Text } from 'react-native-paper';
import { TextStyle, View, ViewStyle, StyleSheet, TextInputProps, TextInput } from 'react-native';
import { Icon, Input, Item } from 'native-base';

interface EmailInputComponentProps extends TextInputProps {
    externalStyle?: TextStyle;
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    error?: string | null;
    name: string;
    disableErrorMessage?: boolean;
}

const ValidationInputComponent: React.FC<EmailInputComponentProps> = (
  { externalStyle,
      setModelValue,
      fieldKey,
      error,
      name,
      disableErrorMessage= false,
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
                placeholderTextColor="#868585"
                placeholder={placeholder && placeholder.toLocaleUpperCase()}
                {...props}
            />
            {/*<Icon name="close-circle" />*/}
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
    textInput: {
        height: 45,
        marginVertical: 5,
        color: 'white',
        fontSize: 16
    },
    errorContainer: {
        height: 20,
    },
    errorText: {
        color: '#d90a0a',
        fontSize: 13
    }
});

export default ValidationInputComponent;
