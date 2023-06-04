import React from "react";
import { View } from "react-native";

import ActionButton from "../../../core/components/buttons/action-button/action_button";
import colors from "../../../core/constants/colors";
import { useAppContext } from "../../../state/app_context";
import { styles } from "./filter_sort.styles";

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
