import React from "react";
import { View, Text } from "react-native";

import Modal from "../../../core/components/modal/modal";
import ActionButtons from "./filter_action_buttons";
import FilterSection from "./filter_section";
import SortSection from "./sort_section";
import { useAppContext } from "../../../view-model/app_context";
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
      children={
        <>
          <Text style={styles.title}>Filter & Sort</Text>
          <View style={styles.line} />
          <View style={styles.rowItemsContainer}>
            <FilterSection />
            <SortSection />
          </View>

          <View style={styles.line} />
          <ActionButtons onClose={onClose} handleApply={handleApply} />
        </>
      }
      handleApply={() => handleApply()}
      onClose={() => onClose()}
      visible={visible}
    />
  );
};

export default FilterSortModal;
