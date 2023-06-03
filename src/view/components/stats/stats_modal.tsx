import React from "react";
import { Text } from "react-native";

import Modal from "../../../core/modal/modal";

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
}

const StatsModal = ({ visible, onClose }: StatsModalProps) => {
  return (
    <Modal
      children={<Text>DENEME DENEME MİYAV</Text>}
      handleApply={() => {}}
      onClose={onClose}
      visible={visible}
    />
  );
};
export default StatsModal;
