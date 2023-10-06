import {View, Text, Modal, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './ColorPaletteModalStyles';
import {colorPalets} from '../../utils/ColorPalets';
import {horizontalScale} from '../../utils/scale';

type ColorPaletteModalProps = {
  visible: boolean;
  handleModal: () => void;
  selectedColor: string;
  handleSelectedColor: (color: string) => void;
};
const ColorPaletteModal: React.FC<ColorPaletteModalProps> = ({
  handleModal,
  visible,
  selectedColor,
  handleSelectedColor,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={handleModal}
      animationType="slide">
      <Pressable style={styles.container} onPress={handleModal}>
        <View style={styles.modalBody}>
          <View style={styles.colorContainer}>
            {colorPalets.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    width: horizontalScale(20.63),
                    height: horizontalScale(20.63),
                    backgroundColor: item,
                    borderWidth: selectedColor === item ? 2 : 1,
                    borderColor: selectedColor === item ? 'black' : item,
                  }}
                  key={index}
                  onPress={() => handleSelectedColor(item)}
                />
              );
            })}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ColorPaletteModal;
