import React, { useState } from 'react';
import { TextInput, Text } from 'react-native-paper';
import { TextStyle, View, ViewStyle, StyleSheet } from 'react-native';

interface EmailInputComponentProps {
  externalStyle?: TextStyle;
  setModelValue: (key: any, value: any) => void;
  fieldKey: any;
  error?: string | null;
  name: string;
}

const FormInputComponent: React.FC<EmailInputComponentProps> = (
  { externalStyle, setModelValue, fieldKey, error, name }) => {
  const [inputValue, setInputValue] = useState('');
  const isError = !!error;
  const onBlur = () => setModelValue(fieldKey, inputValue);
  return (
    <View style={externalStyle}>
      <TextInput
        style={styles.input}
        mode="outlined"
        selectionColor="#0288d1"
        label={name}
        value={inputValue}
        onChangeText={setInputValue}
        onBlur={onBlur}
        error={isError}
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
  input: TextStyle;
}

const styles = StyleSheet.create<EmailInputComponentStyles>({
  input: {
    height: 35,
    marginVertical: 3
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
