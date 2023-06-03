import React from "react";
import { Text } from "react-native";

import Modal from "../../../core/components/modal/modal";

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
}

const StatsModal = ({ visible, onClose }: StatsModalProps) => {
  return (
    <Modal
      children={<Text>DENEME</Text>}
      handleApply={() => {}}
      onClose={onClose}
      visible={visible}
    />
  );
};
export default StatsModal;
