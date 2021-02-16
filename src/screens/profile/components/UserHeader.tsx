import React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types';

export const UserHeader: React.FC<StackHeaderProps> = () => {
    const navigation = useNavigation() as DrawerNavigationProp<any>;
    return (
        <Appbar>
            <Appbar.Action icon='account' onPress={navigation.openDrawer} />
        </Appbar>
    );
};
