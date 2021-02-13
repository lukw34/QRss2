import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ViewStyle } from 'react-native';

const GradientBackground: React.FC = ({ children }) => (
    <LinearGradient
        colors={['#a6a5a7', '#7c7c7c', '#525252']}
        style={styles.backgroundContainer}
    >
        {children}
    </LinearGradient>
);

interface GradientBackgroundStyles {
  backgroundContainer: ViewStyle;
}

const styles = StyleSheet.create<GradientBackgroundStyles>({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
});

export default GradientBackground;
