import React from 'react';
import {Button, Dialog, Portal} from 'react-native-paper';
import ImageUploader from './ImageUploader';

interface ImageUploaderProps {
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    defaultValue?: string;
    isVisible: boolean;
    dismissModal: () => void;
}

const ImageUploaderDialog: React.FC<ImageUploaderProps> = (
    {
        setModelValue,
        fieldKey,
        defaultValue,
        isVisible,
        dismissModal
    }) => (
        <Portal>
            <Dialog visible={isVisible} onDismiss={dismissModal}>
                <Dialog.Title>
                    Select your avatar
                </Dialog.Title>
                <Dialog.Content style={{alignItems: 'center'}}>
                    <ImageUploader
                    setModelValue={setModelValue}
                    fieldKey={fieldKey}
                    defaultValue={defaultValue}
                />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={dismissModal}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
);

export default ImageUploaderDialog;
