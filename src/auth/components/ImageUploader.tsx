import React, { useState } from 'react';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
  View,
  Text, Image, ImageStyle,
} from 'react-native';
import { Toast } from 'native-base';

const options  = {
    mediaType: 'photo' as MediaType
};

interface ImageUploaderProps {
    setModelValue: (key: any, value: any) => void;
    fieldKey: any;
    defaultValue?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setModelValue, fieldKey, defaultValue }) => {
    const [imageSource, setImageSource] = useState<string | undefined>(defaultValue);
    const onPress = () => {
        launchImageLibrary(options, (response) => {
            if (response.uri) {
                setImageSource(response.uri);
            } else  {
                Toast.show({
                    text: 'Problem with uploading image!',
                    buttonText: 'Okay'
                });
            }

        });
    };

    const onLoad = () => {
        setModelValue(fieldKey, imageSource);
    };

    return (
    <TouchableWithoutFeedback
       onPress={onPress}
    >
      <View style={[styles.imageContainer, styles.emptyContainer]}>
        {imageSource ? (
          <Image onLoadEnd={onLoad} style={styles.imageStyle} source={{ uri: imageSource }} />) : (
          <Text>+</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
    );
};

interface ImageUploaderStyle {
    imageContainer: ViewStyle;
    emptyContainer: ViewStyle;
    imageStyle: ImageStyle;
}

const styles = StyleSheet.create<ImageUploaderStyle>({
    imageContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 150
    },
    imageStyle: {
        width: 100,
        height: 150
    },
    emptyContainer: {
        borderStyle: 'dotted',
        borderRadius: 1,
        borderWidth: 2
    }
});

export default ImageUploader;
