import React, {useEffect} from 'react';
import {Animated, Easing, StyleSheet, View, ViewStyle} from 'react-native';

interface LoadingDotProps {
  position: {
    bottom: number,
    left: number
  };
  delay: number;
}

const LoadingDot: React.FC<LoadingDotProps> = ({position, delay}) => {
    const rotation = new Animated.Value(0);
    const animationDuration = 700;
    const spinAnim =  Animated.sequence([
        Animated.timing(rotation, {
            delay,
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: true
        }),
        Animated.timing(rotation, {
            delay: (animationDuration - delay) + animationDuration - delay,
            toValue: 0,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: true
        }),
        Animated.delay(animationDuration + delay)
    ]);

    useEffect(() => {
        Animated.loop(spinAnim).start();
    }, []);

    const spin = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <Animated.View style={[styles.spinnerContainer, {transform: [{rotate: spin}]}]}>
            <View style={[styles.spinnerDot, position]}/>
        </Animated.View>
    );
};

interface LoadingScreenStyles {
  spinnerDot: ViewStyle;
  spinnerContainer: ViewStyle;
}

const styles = StyleSheet.create<LoadingScreenStyles>({
    spinnerContainer: {
        height: 100,
        marginVertical: 40,
        position: 'absolute',
        width: 100
    },
    spinnerDot: {
        borderColor: 'red',
        borderRadius: 3,
        borderWidth: 3,
        height: 3,
        position: 'absolute',
        width: 3
    },
});

export default LoadingDot;
