import {BlurView} from '@react-native-community/blur';
import React, {useMemo} from 'react';
import {FlatList, PixelRatio, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import CommentButton from '../../atoms/CommentButton/CommentButton';
import HeartIconButton from '../../atoms/HeartIconButton/HeartIconButton';
import ShareButton from '../../atoms/ShareButton/ShareButton';
import PolaroidLargeFrame from '../../molecules/PolaroidLargeFrame/PolaroidLargeFrame';
import {ProfileNavProps} from '../../navigations/ProfileNavigation/ProfileNavigationTypes';
import {profileData} from '../../utils/dummyData';
import {verticalScale} from '../../utils/scale';
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
      {/* <Tag height={200} tag={tag} /> */}

      <View style={styles.tagContainer}>
        <AppText
          lineHeight={35}
          style={[
            styles.tag,
            {
              fontSize: 30 / PixelRatio.getFontScale(),
            },
          ]}>
          {tag}
        </AppText>
      </View>
      <View
        style={{
          height: verticalScale(320),
        }}>
        <FlatList
          data={data.photos}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          horizontal
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <PolaroidLargeFrame id={data.id} photo={item} tag={data.tag} />
            );
          }}
          directionalLockEnabled={true}
        />
      </View>
      <View style={styles.actionBtnContainer}>
        <View style={styles.actionBtn}>
          <HeartIconButton />
          <AppText lineHeight={14} style={styles.actionText}>
            1.1k
          </AppText>
        </View>
        <View style={styles.actionBtn}>
          <CommentButton />
          <AppText lineHeight={14} style={styles.actionText}>
            500
          </AppText>
        </View>
        <View style={styles.actionBtn}>
          <ShareButton />
          <AppText lineHeight={14} style={styles.actionText}>
            2K
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default MemoDetailScreen;
