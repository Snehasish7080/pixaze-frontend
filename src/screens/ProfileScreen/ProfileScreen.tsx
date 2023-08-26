import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import SettingsIcon from '../../atoms/SettingsIcon/SettingsIcon';
import ProfileHeader from './ProfileHeader';
import {styles} from './ProfileScreenStyles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
    </View>
  );
};

export default ProfileScreen;
