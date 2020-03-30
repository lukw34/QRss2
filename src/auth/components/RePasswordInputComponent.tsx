import React from 'react';
import { TextInput, Text } from 'react-native-paper';
import { TextStyle, View, ViewStyle, StyleSheet } from 'react-native';
import useRePassword from '../hooks/useRePassword';

interface EmailInputComponentProps {
  externalStyle?: TextStyle;
  setModelValue: (key: any, value: any) => void;
  fieldKey: string;
  error: string | null;
}

const RePasswordInputComponent: React.FC<EmailInputComponentProps> = (
  { externalStyle, error, fieldKey, setModelValue }) => {
  const {
    setRePassword,
    setPassword,
    rePassword,
    password,
    onBlur
  } = useRePassword(fieldKey, setModelValue);
  const isError = !!error;
  return (
    <View style={externalStyle}>
      <TextInput
        style={styles.passwordInput}
        mode="outlined"
        selectionColor="#0288d1"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        onBlur={onBlur}
        error={isError}
      />
      <TextInput
        style={styles.passwordInput}
        mode="outlined"
        selectionColor="#0288d1"
        label="Re-Password"
        value={rePassword}
        onChangeText={setRePassword}
        onBlur={onBlur}
        error={isError}
        secureTextEntry={true}
      />
      <View style={styles.errorContainer}>
        {isError && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </View>
  );
};

interface EmailInputComponentStyles {
  errorContainer: ViewStyle;
  errorText: TextStyle;
  passwordInput: TextStyle;
}

const styles = StyleSheet.create<EmailInputComponentStyles>({
  passwordInput: {
    height: 35,
    marginVertical: 5
  },
  errorContainer: {
    height: 20,
  },
  errorText: {
    color: '#c62828',
    fontSize: 10
  }
});

export default RePasswordInputComponent;
