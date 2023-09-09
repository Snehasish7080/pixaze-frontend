import React, {useState} from 'react';
import {Image, PixelRatio, Vibration, View} from 'react-native';
import AppText from '../../atoms/AppText/AppText';
import CommentButton from '../../atoms/CommentButton/CommentButton';
import HeartIconButton from '../../atoms/HeartIconButton/HeartIconButton';
import LocationIcon from '../../atoms/LocationIcon/LocationIcon';
import OptionIcon from '../../atoms/OptionIcon/OptionIcon';
import ShareButton from '../../atoms/ShareButton/ShareButton';
import {Colors} from '../../utils/theme';
import {styles} from './TravelCardStyles';

type TravelCardProps = {
  image: string;
};
const TravelCard: React.FC<TravelCardProps> = ({image}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    Vibration.vibrate(1);
  };
  return (
    <View>
      <View style={styles.profileSection}>
        <View style={styles.imageSection}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
            }}
            style={styles.profilePic}
          />
          <View>
            <AppText
              lineHeight={16}
              style={[
                styles.name,
                {
                  fontSize: 14 / PixelRatio.getFontScale(),
                },
              ]}>
              markphilips
            </AppText>
            <AppText
              lineHeight={14}
              style={[
                styles.tag,
                {
                  fontSize: 12 / PixelRatio.getFontScale(),
                },
              ]}>
              Holiday
            </AppText>
          </View>
        </View>
        <OptionIcon />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.locationMark}>
          <LocationIcon />
          <View style={styles.dateContainer}>
            <AppText
              lineHeight={20}
              style={[
                styles.location,
                {
                  fontSize: 20 / PixelRatio.getFontScale(),
                },
              ]}>
              Jaipur, India
            </AppText>
            <AppText
              lineHeight={14}
              style={[
                styles.date,
                {
                  fontSize: 12 / PixelRatio.getFontScale(),
                },
              ]}>
              8 sep 2023
            </AppText>
          </View>
        </View>
        <View style={styles.actionBtnContainer}>
          <View style={styles.actionBtn}>
            <HeartIconButton
              liked={isLiked}
              handleLiked={handleLike}
              color={Colors.dark}
              width={20}
              height={20}
            />
            <AppText lineHeight={14} style={styles.actionText}>
              1.1k
            </AppText>
          </View>
          <View style={styles.actionBtn}>
            <CommentButton color={Colors.dark} width={20} height={20} />
            <AppText lineHeight={14} style={styles.actionText}>
              500
            </AppText>
          </View>
          <View style={styles.actionBtn}>
            <ShareButton color={Colors.dark} width={20} height={20} />
            <AppText lineHeight={14} style={styles.actionText}>
              2K
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TravelCard;
