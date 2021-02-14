import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Button, Portal, Title, Modal, Text, Dialog, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { createUser } from '../auth.actions';
import RePasswordInputComponent from './RePasswordInputComponent';
import emailValidator from '../../validators/emailValidator';
import rePasswordValidator from '../../validators/rePasswordValidator';
import useValidation from '../hooks/useValidation';
import GradientBackground from '../../ui-components/GradientBackground';
import useModal from '../hooks/useModal';
import ValidationInput from './ValidationInput';
import ImageUploader from './ImageUploader';

enum RegistrationFields {
  PASSWORD = 'password',
  EMAIL = 'email',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AVATAR = 'avatar',
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

const Registration: React.FC = () => {
    const dispatch = useDispatch();
    const validators = {
        [RegistrationFields.EMAIL]: emailValidator,
        [RegistrationFields.PASSWORD]: rePasswordValidator,
    };
    const [imageModalStatus, setImageModalStatus] = useState(false);
    const { model, setModelValue } = useModal<FormModel, RegistrationFields>({});
    const openModal = () => setImageModalStatus(true);
    const dismissModal = () => setImageModalStatus(false);
    const {
    errors,
    validateAllFields,
    isValid,
    setModelValueWithValidation,
  } = useValidation<RegistrationFields>([
      RegistrationFields.EMAIL,
      RegistrationFields.PASSWORD
  ], validators, setModelValue);

    const onSubmit = () => {
        if (validateAllFields(model)) {
            const { email = '', password, firstName, lastName } = model;
            dispatch(createUser(email, password!.password, firstName, lastName));
        }
    };

    return (
    <GradientBackground>
      <Title style={styles.registrationTitle}>Registration</Title>
      <View style={styles.textInputsContainer}>
        <ValidationInput
          externalStyle={styles.textInputsContainer}
          setModelValue={setModelValueWithValidation}
          fieldKey={RegistrationFields.EMAIL}
          error={errors[RegistrationFields.EMAIL]}
          name="Email"
          placeholder="Type your e-mail"
        />
        <RePasswordInputComponent
          externalStyle={styles.textInputsContainer}
          setModelValue={setModelValueWithValidation}
          fieldKey={RegistrationFields.PASSWORD}
          error={errors[RegistrationFields.PASSWORD]}
        />
        <ValidationInput
          externalStyle={styles.textInputsContainer}
          setModelValue={setModelValueWithValidation}
          fieldKey={RegistrationFields.FIRST_NAME}
          name="First Name"
          placeholder="Type your first name"
        />
        <ValidationInput
          externalStyle={styles.textInputsContainer}
          setModelValue={setModelValueWithValidation}
          fieldKey={RegistrationFields.LAST_NAME}
          name="Last Name"
          placeholder="Type your last name"
        />
          <Button onPress={openModal}>
              {model[RegistrationFields.AVATAR] ? 'Edit avatar photo' : 'Upload avatar'}
          </Button>
      </View>
        <Portal>
            <Dialog visible={imageModalStatus} onDismiss={dismissModal}>
                <Dialog.Title>Select your avatar</Dialog.Title>
                <Dialog.Content style={{ alignItems: 'center' }}>
                    <ImageUploader
                        setModelValue={setModelValueWithValidation}
                        fieldKey={RegistrationFields.AVATAR}
                        defaultValue={model[RegistrationFields.AVATAR]}
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={dismissModal}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
        <Button disabled={!isValid} mode="contained" onPress={onSubmit}>
            Submit
        </Button>
    </GradientBackground>
    );
};

interface LoginStyles {
    registrationTitle: TextStyle;
    registrationContainer: ViewStyle;
    textInputsContainer: ViewStyle;
}

const styles = StyleSheet.create<LoginStyles>({
    registrationTitle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23
    },
    registrationContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
        backgroundColor: 'black'
    },
    textInputsContainer: {
        flexDirection: 'column',
        marginVertical: 5,
        justifyContent: 'center',
    },

});

export default Registration;
