import React from "react";
import { View } from "react-native";

import { styles } from "./filter_sort.styles";
import { useAppContext } from "../../../view-model/app_context";
import ActionButton from "../../../core/components/buttons/action_button";
import colors from "../../../core/constants/colors";

interface ActionButtonsProps {
  onClose: () => void;
  handleApply: () => void;
}

const ActionButtons = ({ onClose, handleApply }: ActionButtonsProps) => {
  const {
    setSelectedFilters,
    setSelectedSort,
    chipsSelectedFilters,
    setChipsSelectedFilters,
    chipsSelectedSorts,
    setChipsSelectedSorts,
  } = useAppContext();

  const handleReset = () => {
    setChipsSelectedFilters([]);
    setChipsSelectedSorts([]);
    setSelectedFilters([]);
    setSelectedSort("");
    (chipsSelectedFilters.length > 0 || chipsSelectedSorts.length > 0) &&
      onClose();
  };

  return (
    <View style={styles.filterAction}>
      <ActionButton
        customStyles={{ backgroundColor: "rgba(252, 76, 2, 0.2)" }}
        onPress={handleReset}
        textColor={{ color: colors.primaryDark, fontWeight: "bold" }}
        name="Reset"
      />
      <ActionButton
        customStyles={{ backgroundColor: colors.primaryDark }}
        onPress={handleApply}
        textColor={{ color: "white" }}
        name="Apply"
      />
    </View>
  );
};

export default ActionButtons;
