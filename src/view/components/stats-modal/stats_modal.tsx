import React from "react";

import Modal from "../../../core/components/modal/modal";
import StatsChartList from "./stats_chart_list";

interface StatsModalProps {
  visible: boolean;
  onClose: () => void;
}

const StatsModal = ({ visible, onClose }: StatsModalProps) => {
  return (
    <Modal modalTitle="Game Statistics" onClose={onClose} visible={visible}>
      <StatsChartList />
    </Modal>
  );
};
export default StatsModal;
