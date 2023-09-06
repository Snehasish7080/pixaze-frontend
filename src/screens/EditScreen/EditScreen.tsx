import {View, Text, Image, TouchableOpacity, PixelRatio} from 'react-native';
import React from 'react';
import {AuthenticatedNavProps} from '../../navigations/AuthenticatedNavigation/AuthenticatedNavigationTypes';
import AppHeader from '../../molecules/AppHeader/AppHeader';
import {styles} from './EditScreenStyles';
import AppText from '../../atoms/AppText/AppText';

const IMAGE_HEIGHT = 350;
const EditScreen: React.FC<AuthenticatedNavProps<'EditScreen'>> = ({
  navigation,
  route,
}) => {
  const {image} = route?.params;
  return (
    <>
      <AppHeader
        mainTitle="Edit"
        onBack={() => {
          navigation.goBack();
        }}
        rightSection={
          <TouchableOpacity>
            <AppText
              lineHeight={14}
              style={[
                styles.next,
                {
                  fontSize: 14 / PixelRatio.getFontScale(),
                },
              ]}>
              Next
            </AppText>
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.mainImage} />
      </View>
    </>
  );
};

export default EditScreen;
