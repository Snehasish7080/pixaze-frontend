import {View, Text, PixelRatio} from 'react-native';
import React from 'react';
import {styles} from './AppHeaderStyles';
import AppText from '../../atoms/AppText/AppText';
import BackButton from '../../atoms/BackButton/BackButton';

type AppHeaderProps = {
  title: string;
  hideBack?: boolean;
};
const AppHeader: React.FC<AppHeaderProps> = ({title, hideBack = false}) => {
  return (
    <View style={styles.container}>
      {!hideBack && <BackButton />}
      <AppText
        lineHeight={14}
        style={[
          styles.title,
          {
            fontSize: 14 / PixelRatio.getFontScale(),
          },
        ]}>
        {title}
      </AppText>
    </View>
  );
};

export default AppHeader;
