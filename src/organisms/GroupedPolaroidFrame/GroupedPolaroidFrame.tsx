import {View, Text} from 'react-native';
import React from 'react';
import PolaroidSmallFrame from '../../molecules/PolaroidSmallFrame/PolaroidSmallFrame';
import {styles} from './GroupedPolaroidFrameStyles';
import AppText from '../../atoms/AppText/AppText';

type GroupedPolaroidFrameProps = {
  photos: {
    id: string;
    url: string;
  }[];
  count: number;
  tag: string;
};
const GroupedPolaroidFrame: React.FC<GroupedPolaroidFrameProps> = ({
  count,
  photos,
  tag,
}) => {
  return (
    <View style={styles.container}>
      {photos.reverse().map((item, index) => {
        return (
          <View
            style={[index ? styles.frameContainer : styles.frameContainer1]}
            key={index}>
            <PolaroidSmallFrame image={item.url} tag={tag} id={item.id} />
          </View>
        );
      })}
      <View style={styles.countContainer}>
        <AppText lineHeight={10} style={styles.count}>
          {count}
        </AppText>
      </View>
    </View>
  );
};

export default GroupedPolaroidFrame;
