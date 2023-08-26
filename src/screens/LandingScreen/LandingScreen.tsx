import {StackActions, useNavigation} from '@react-navigation/native';
import {Skia} from '@shopify/react-native-skia';
import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
// import {logo} from '../../assets/icons/icons';
import AppButton from '../../atoms/AppButton/AppButton';
import AppInputBox from '../../atoms/AppInputBox/AppInputBox';
import AppLogo from '../../atoms/AppLogo/AppLogo';
import AppText from '../../atoms/AppText/AppText';
import {ParentRouteList} from '../../navigations/ParentNavigation/ParentNavigationTypes';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {horizontalScale} from '../../utils/scale';
import {styles} from './LandingScreenStyles';

const source = Skia.RuntimeEffect.Make(`
vec4 main(vec2 pos) {
  // normalized x,y values go from 0 to 1, the canvas is 256x256
  vec2 normalized = pos/vec2(256);
  return vec4(normalized.x, normalized.y, 0.5, 1);
}`)!;

const LandingScreen: React.FC<UnAuthenticatedNavProps<'LandingScreen'>> = ({
  navigation,
}) => {
  const parentNavigation = useNavigation<ParentRouteList>();
  return (
    <View style={styles.container}>
      <AppLogo />
      <AppText lineHeight={40} style={styles.logoTitle}>
        Pixaze
      </AppText>
      <KeyboardAvoidingView>
        <AppInputBox
          style={styles.inputBox}
          placeholder={'Enter Email Address'}
          label={'Email'}
          labelStyle={{
            fontSize: 14,
          }}
        />
        <AppInputBox
          style={[
            styles.inputBox,
            {
              marginTop: 16,
            },
          ]}
          placeholder={'Enter Password'}
          label={'Password'}
          labelStyle={{
            fontSize: 14,
          }}
        />
        <AppButton
          width={horizontalScale(302)}
          height={56}
          onPress={() => {
            navigation.dispatch(StackActions.replace('Authenticated'));
          }}>
          Login
        </AppButton>
      </KeyboardAvoidingView>
      <View style={styles.notRegisteredContainer}>
        <AppText lineHeight={14} style={styles.notRegistered}>
          Don't have an account?
        </AppText>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('SignupScreen');
          }}>
          <AppText lineHeight={14} style={styles.signUp}>
            Sign up
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;
