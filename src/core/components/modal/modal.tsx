import React, { useState, useEffect } from "react";
import {
  View,
  Modal as ReactNativeModal,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

import { styles } from "./modal.styles";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  handleApply: () => void;
  children: React.ReactNode;
}

const Modal = ({
  visible,
  onClose,
  handleApply,
  children,
}: CustomModalProps) => {
  const translateY = useState<Animated.Value>(new Animated.Value(500))[0];

  const handleModalClose = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, translateY]);

  return (
    <ReactNativeModal visible={visible} transparent animationType="none">
      <TouchableWithoutFeedback
        onPress={() => {
          handleModalClose();
          handleApply();
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[styles.contentContainer, { transform: [{ translateY }] }]}
            >
              {children}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </ReactNativeModal>
  );
};

export default Modal;
