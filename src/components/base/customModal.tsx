import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

interface CustomModalProps {
  onClose: () => void;
  visible: boolean;
  children: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

export default function CustomModal({
  visible,
  onClose,
  children,
  height,
  width,
}: CustomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={[
                styles.modalContainer,
                {
                  width: width ?? Dimensions.get('window').width * 1,
                  height: height ?? Dimensions.get('window').height * 0.9,
                  marginTop: Dimensions.get('window').height * 0.1
                },
              ]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});
