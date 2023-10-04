import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './ColorPaletteModalStyles';
import {colorPalets} from '../../utils/ColorPalets';

const ColorPaletteModal = () => {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.colorContainer}>
            {colorPalets.map((item, index) => {
              return (
                <View
                  style={{
                    width: 22.2,
                    height: 22.2,
                    backgroundColor: item,
                  }}
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ColorPaletteModal;
