import React, {ReactNode} from 'react';
import {PixelRatio, StyleProp, View, ViewStyle} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import BackButton from '../../atoms/BackButton/BackButton';
import {styles} from './AppHeaderStyles';

type AppHeaderProps = {
  title?: string;
  hideBack?: boolean;
  style?: StyleProp<ViewStyle>;
  rightSection?: ReactNode;
  onBack?: () => void;
  mainTitle?: string;
};
const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  hideBack = false,
  style,
  rightSection,
  onBack,
  mainTitle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSection}>
        {!hideBack && onBack && <BackButton onPress={onBack} />}
        {Boolean(title) && (
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
        )}
      </View>
      {Boolean(mainTitle) && (
        <AppText
          lineHeight={14}
          style={[
            styles.title,
            {
              fontSize: 14 / PixelRatio.getFontScale(),
            },
          ]}>
          {mainTitle}
        </AppText>
      )}
      <View>{rightSection}</View>
    </View>
  );
};

export default AppHeader;
