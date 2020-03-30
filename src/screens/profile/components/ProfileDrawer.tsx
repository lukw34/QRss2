import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { Button, Subheading, Avatar, Text } from 'react-native-paper';

import { logOut } from '../../../auth/auth.actions';

const ProfileDrawer = (props: any) => {

  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(logOut());
  };
  return (
    <DrawerContentScrollView
      style={styles.DrawerContainer}
      {...props}
      contentContainerStyle={styles.DrawerContentContainer}
    >
        <View style={styles.AvatarContainer}>
          <Avatar.Image
            size={64}
            source={{ uri: 'hhttps://www.conveyancemarketinggroup.com/subconveyance/wp-content/uploads/2015/09/Carolyn-Dobson-avatar-VPBD.png' }}
          />
          <Subheading style={styles.EmailText}>lukw34@gmail.com</Subheading>
        </View>
        <View>
          <Text> New Qrss</Text>
          <Text> Map </Text>
        </View>
        <Button style={styles.LogoutContainer} mode="contained" onPress={onPress}>
          Log out
        </Button>
    </DrawerContentScrollView>
  );
};
interface ProfileDrawerStyles {
  DrawerContainer: ViewStyle;
  DrawerContentContainer: ViewStyle;
  AvatarContainer: ViewStyle;
  EmailText: TextStyle;
  ProfileDetailContainer: ViewStyle;
  LogoutContainer: ViewStyle;
}

const styles = StyleSheet.create<ProfileDrawerStyles>({
  DrawerContainer: {
    flex: 1,
    backgroundColor: '#CB8749',
  },
  DrawerContentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  AvatarContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 35,
    justifyContent: 'center',
  },
  EmailText: {
    color: 'white',
    padding: 10
  },
  ProfileDetailContainer: {
  },
  LogoutContainer: {
    marginHorizontal: 50
  }
});

export default ProfileDrawer;
