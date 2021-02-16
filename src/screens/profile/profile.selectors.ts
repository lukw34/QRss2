import {createSelector} from 'reselect';
import {RootState} from '../../RootState';

const getProfile = (store: RootState) => store.profile;

export const getProfileData = createSelector(
    getProfile,
    ({avatar = null, displayName, email}) => ({
        displayName,
        email,
        avatar: avatar || 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    })
);
