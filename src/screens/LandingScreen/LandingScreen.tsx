import React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import AppButton from '../../atoms/AppButton/AppButton';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppText from '../../atoms/AppText/AppText';
import {horizontalScale} from '../../utils/scale';
import {styles} from './LandingScreenStyles';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <AppText lineHeight={40} style={styles.logoTitle}>
        Pixaze
      </AppText>
      <KeyboardAvoidingView>
        <AppInputBox
          style={styles.inputBox}
          placeholder={'Enter Mobile Number'}
          label={'Mobile'}
          labelStyle={{
            fontSize: 14,
          }}
        />
        <AppButton width={horizontalScale(302)} height={56}>
          Login
        </AppButton>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LandingScreen;
