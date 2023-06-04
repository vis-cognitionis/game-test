import React from "react";

import Modal from "../../../core/components/modal/modal";
import StatsChart from "./stats_chart";

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
}

const StatsModal = ({ visible, onClose }: StatsModalProps) => {
  return (
    <Modal children={<StatsChart />} onClose={onClose} visible={visible} />
  );
};
export default StatsModal;
