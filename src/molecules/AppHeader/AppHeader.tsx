import {View, Text, PixelRatio, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './AppHeaderStyles';
import AppText from '../../atoms/AppText/AppText';
import BackButton from '../../atoms/BackButton/BackButton';

type AppHeaderProps = {
  title: string;
  hideBack?: boolean;
  style?: StyleProp<ViewStyle>;
  rightSection?: ReactNode;
  onBack?: () => void;
};
const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  hideBack = false,
  style,
  rightSection,
  onBack,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftSection}>
        {!hideBack && onBack && <BackButton onPress={onBack} />}
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
      {rightSection}
    </View>
  );
};

export default AppHeader;
