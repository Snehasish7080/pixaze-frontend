import {BlurView} from '@react-native-community/blur';
import {
  Box,
  BoxShadow,
  Canvas,
  rect,
  rrect,
  useFont,
} from '@shopify/react-native-skia';
import React, {useMemo} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import PolaroidLargeFrame from '../../molecules/PolaroidLargeFrame/PolaroidLargeFrame';
import {ProfileNavProps} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import {profileData} from '../../utils/dummyData';
import {Colors} from '../../utils/theme';
import {styles} from './MemoDetailScreenStyles';

const MemoDetailScreen: React.FC<ProfileNavProps<'MemoDetailScreen'>> = ({
  route,
}) => {
  const {tag} = route?.params;

  const data = useMemo(() => {
    const temp = profileData.filter(x => x.tag === tag)[0];
    return temp;
  }, [tag]);
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor={Colors.dark}
      />
      <Tag height={200} />

      <FlatList
        data={data.photos}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 40,
          paddingLeft: 70,
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <PolaroidLargeFrame id={data.id} photo={item} tag={data.tag} />
          );
        }}
      />
    </View>
  );
};

type TagProps = {
  height: number;
};

const Tag = ({height}: TagProps) => {
  const font = useFont(
    require('../../assets/fonts/MarckScript-Regular.ttf'),
    22,
  );
  const titleWidth = font?.getTextWidth('holiday');
  if (!titleWidth) {
    return null;
  }
  const calculatedHeight = titleWidth + 30;
  const calculatedWidth = 50;
  return (
    <View
      style={[
        styles.tag,
        {
          width: calculatedWidth,
          height: calculatedHeight,
        },
      ]}>
      <Canvas
        style={{
          width: calculatedWidth + 20,
          height: calculatedHeight + 50,
          position: 'absolute',
          top: -25,
        }}>
        <Box
          box={rrect(rect(10, 25, calculatedWidth, calculatedHeight), 4, 4)}
          color={Colors.white}>
          <BoxShadow dx={-2} dy={1} blur={8} color={Colors.polaroidShadow} />
        </Box>
      </Canvas>
      <View
        style={[
          styles.textContainer,
          {
            width: titleWidth,
          },
        ]}>
        <AppText lineHeight={18} style={styles.tagText}>
          Holiday
        </AppText>
      </View>
    </View>
  );
};

export default MemoDetailScreen;
