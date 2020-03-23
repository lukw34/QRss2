import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logOut } from '../../auth/auth.actions';

const Home = () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(logOut());
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Log out" onPress={onPress} />
    </View>
  );
};
export default Home;
