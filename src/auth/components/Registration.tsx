import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { createUser } from '../auth.actions';
import FormInputComponent from './FormInputComponent';
import RePasswordInputComponent from './RePasswordInputComponent';
import emailValidator from '../../validators/emailValidator';
import rePasswordValidator from '../../validators/rePasswordValidator';
import useValidation from '../hooks/useValidation';
import ImageUploader from './ImageUploader';

enum RegistrationFields {
  PASSWORD = 'password',
  EMAIL = 'email',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AVATAR = 'avatar'
}

type FormModel = {
  [RegistrationFields.PASSWORD]?: {
    password: string,
    rePassword: string
  },
  [RegistrationFields.EMAIL]?: string,
  [RegistrationFields.LAST_NAME]?: string,
  [RegistrationFields.FIRST_NAME]?: string,
  [RegistrationFields.AVATAR]?: string
};
// TODO Add Keyboard Safe area view
const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const validators = {
    [RegistrationFields.EMAIL]: emailValidator,
    [RegistrationFields.PASSWORD]: rePasswordValidator,
  };
  const [model, setModel] = useState<FormModel>({});
  const {
    checkIsValid,
    errors,
    validateAllFields,
    isValid
  } = useValidation<RegistrationFields>([
    RegistrationFields.EMAIL,
    RegistrationFields.PASSWORD
  ], validators);

  const setModelValue = (key: RegistrationFields, value: any) => {
    const valid = checkIsValid(key, value);
    if (valid) {
      setModel({
        ...model,
        [key]: value
      });
    }
  };

  const onSubmit = () => {
    if (validateAllFields(model)) {
      const { email = '', password, firstName, lastName, avatar } = model;
      dispatch(createUser(email, password!.password, firstName, lastName, avatar));
    }
  };

  return (
    <View style={styles.registrationContainer}>
      <Title style={styles.registrationTitle}>Registration</Title>
      <View style={styles.textInputsContainer}>
        <ImageUploader
          setModelValue={setModelValue}
          fieldKey={RegistrationFields.AVATAR}
        />
        <FormInputComponent
          setModelValue={setModelValue}
          fieldKey={RegistrationFields.EMAIL}
          error={errors[RegistrationFields.EMAIL]}
          name="Email"
        />
        <RePasswordInputComponent
          setModelValue={setModelValue}
          fieldKey={RegistrationFields.PASSWORD}
          error={errors[RegistrationFields.PASSWORD]}
        />
        <FormInputComponent
          setModelValue={setModelValue}
          fieldKey={RegistrationFields.FIRST_NAME}
          name="First Name"
        />
        <FormInputComponent
          setModelValue={setModelValue}
          fieldKey={RegistrationFields.LAST_NAME}
          name="Last Name"
        />
      </View>
      <Button disabled={!isValid} mode="contained" onPress={onSubmit}>
        Submit
      </Button>
    </View>
  );
};

interface LoginStyles {
  registrationTitle: TextStyle;
  registrationContainer: ViewStyle;
  textInputsContainer: ViewStyle;
}

const styles = StyleSheet.create<LoginStyles>({
  registrationTitle: {
    textAlign: 'center'
  },
  registrationContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: 'black'
  },
  textInputsContainer: {
    flexDirection: 'column',
    marginVertical: 30,
    justifyContent: 'center',
  },

});

export default Registration;
