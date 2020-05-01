import React from 'react';
import { View, Text, ViewStyle, StyleSheet } from 'react-native';
import { Subheading } from 'react-native-paper';
import LoadingDot from './LoadingDot';
import { useSelector } from 'react-redux';
import { getLoadingMessage } from '../navigation.selectors';

const LoadingScreen = () => {
  const message = useSelector(getLoadingMessage);
  return (
    <View style={styles.loadingContainer}>
      <View style={styles.loadingDotsContainer}>
        <LoadingDot position={{ bottom: 6, left: 27 }} delay={0}/>
        <LoadingDot position={{ bottom: 2, left: 36 }} delay={100}/>
        <LoadingDot position={{ bottom: 0, left: 50 }} delay={200}/>
        <LoadingDot position={{ bottom: 2, left: 64 }} delay={300}/>
        <LoadingDot position={{ bottom: 6, left: 73 }} delay={400}/>
      </View>
      <Subheading>
        {message}
      </Subheading>
    </View>
  );
};

interface LoadingScreenStyles {
  loadingDotsContainer: ViewStyle;
  loadingContainer: ViewStyle;
}

const styles = StyleSheet.create<LoadingScreenStyles>({
  loadingDotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginBottom: 50
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default LoadingScreen;
