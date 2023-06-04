import React from "react";

import Modal from "../../../core/components/modal/modal";
import StatsChartList from "./stats_chart_list";

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
}

const StatsModal = ({ visible, onClose }: StatsModalProps) => {
  return (
    <Modal
      modalTitle="Game Statistics"
      children={<StatsChartList />}
      onClose={onClose}
      visible={visible}
    />
  );
};
export default StatsModal;
