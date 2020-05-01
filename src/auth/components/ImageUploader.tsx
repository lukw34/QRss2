import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
  View,
  Text, Image, ImageStyle,
} from 'react-native';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

interface ImageUploaderProps {
  setModelValue: (key: any, value: any) => void;
  fieldKey: any;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setModelValue, fieldKey }) => {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const onPress = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        setError(response.error);
      }

      setImageSource(response.uri);
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
        {imageSource !== null ? (
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
