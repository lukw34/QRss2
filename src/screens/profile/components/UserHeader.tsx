import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export const UserHeader = ({ previous }) => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <Appbar>
      <Appbar.Action icon="account" onPress={navigation.openDrawer} />
    </Appbar>
  );
};
