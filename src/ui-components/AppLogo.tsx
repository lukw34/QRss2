import {Image, ImageStyle, StyleSheet} from 'react-native';
// @ts-ignore
import logo from '../assets/logo.jpeg';
import React from 'react';

interface ImageProps {
    width?: number;
    height?: number;
}

const AppLogo: React.FC<ImageProps> = ({width = 100, height = 100}) => (
    <Image style={[styles.image, {width, height}]} source={logo}/>
);

interface ImageStyles {
    image: ImageStyle;
}

const styles = StyleSheet.create<ImageStyles>({
    image: {
        alignSelf: 'center',
        height: 100,
        width: 100
    },
});

export default AppLogo;
