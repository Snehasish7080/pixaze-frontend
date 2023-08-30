import {BlurView} from '@react-native-community/blur';
import React, {useMemo} from 'react';
import {FlatList, Image, PixelRatio, View} from 'react-native';
import Animated from 'react-native-reanimated';
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
      <View style={styles.profileContainer}>
        <Animated.Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          }}
          style={[
            styles.profilePic,
            {
              width: PixelRatio.getPixelSizeForLayoutSize(
                50 / PixelRatio.get(),
              ),
              height: PixelRatio.getPixelSizeForLayoutSize(
                50 / PixelRatio.get(),
              ),
            },
          ]}
          sharedTransitionTag={'profile_Image'}
        />
        <AppText lineHeight={20} style={styles.name}>
          Mark Philips
        </AppText>
      </View>
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
          height: verticalScale(350),
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
