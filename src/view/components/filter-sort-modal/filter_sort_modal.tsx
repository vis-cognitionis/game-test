import React from "react";
import { View } from "react-native";

import Modal from "../../../core/components/modal/modal";
import ActionButtons from "./action_buttons";
import FilterSection from "./filter_section";
import SortSection from "./sort_section";
import { useAppContext } from "../../../state/app_context";
import { styles } from "./filter_sort.styles";

interface FilterSortModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterSortModal = ({ visible, onClose }: FilterSortModalProps) => {
  const {
    setSelectedFilters,
    setSelectedSort,
    chipsSelectedFilters,
    chipsSelectedSorts,
  } = useAppContext();

  const handleApply = () => {
    onClose();
    setSelectedFilters(chipsSelectedFilters);
    setSelectedSort(chipsSelectedSorts[0]);
  };

  return (
    <Modal
      modalTitle="Filter & Sort"
      handleApply={() => handleApply()}
      onClose={() => onClose()}
      visible={visible}
    >
      <View style={styles.rowItemsContainer}>
        <FilterSection />
        <SortSection />
      </View>

      <View style={styles.line} />
      <ActionButtons onClose={onClose} handleApply={handleApply} />
    </Modal>
  );
};

export default FilterSortModal;
