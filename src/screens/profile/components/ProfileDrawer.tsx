import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
// @ts-ignore
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import {
    Title,
    Caption,
    Avatar,
    Drawer
} from 'react-native-paper';

// import { logOut } from '../../../auth/auth.actions';
import {getProfileData} from '../profile.selectors';

const ProfileDrawer: React.FC<any> = (props: any) => {
    const {avatar, email, displayName} = useSelector(getProfileData);
    // const dispatch = useDispatch();
    // const onPress = () => {
    //   dispatch(logOut());
    // };

    return (
        <DrawerContentScrollView
            {...props}
            >
            <View style={styles.drawerContainer}>
                <View style={styles.userInfoContainer}>
                    <Avatar.Image
                        size={64}
                        source={{uri: avatar}}
                    />
                    <Title>{displayName}</Title>
                    <Caption>{email}</Caption>
                </View>
                <Drawer.Section>
                    <DrawerItem
                        icon={({size}) => <EvilIcons size={size} name='plus' />}
                        label='New QRss'
                        onPress={() => null}
                    />
                    <DrawerItem
                        icon={({size}) => <EvilIcons size={size} name='location' />}
                        label='Map'
                        onPress={() => null}
                    />
                </Drawer.Section>
                {/* <Button*/}
                {/*  color="red"*/}
                {/*  style={styles.logoutContainer}*/}
                {/*  mode="outlined"*/}
                {/*  onPress={onPress}*/}
                {/*  icon={({ size, color }) => <MaterialIcon color={color} size={size} name="power-settings-new"/>}*/}
                {/* >*/}
                {/*  Log out*/}
                {/* </Button>*/}
            </View>
        </DrawerContentScrollView>
    );
};
interface ProfileDrawerStyles {
  drawerContainer: ViewStyle;
  userInfoContainer: ViewStyle;
}

const styles = StyleSheet.create<ProfileDrawerStyles>({
    drawerContainer: {
        flex: 1,
    },
    userInfoContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    }
});

export default ProfileDrawer;
