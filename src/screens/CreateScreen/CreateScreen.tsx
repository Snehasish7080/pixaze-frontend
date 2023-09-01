import React from 'react';
import {StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import AppText from '../../atoms/AppText/AppText';

const CreateScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) return <AppText lineHeight={14}>Loading ....</AppText>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CreateScreen;
