import React from "react";
import {
  ViewStyle,
  FlexStyle,
  TextStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import colors from "../../../core/constants/colors";

interface FilterActionProps {
  customStyles: ViewStyle | FlexStyle;
  textColor: TextStyle;
  onPress: () => void;
  name: string;
}

const styles = StyleSheet.create({
  filterAction: {
    width: "45%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryDark,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});
const FilterAction = ({
  customStyles,
  textColor,
  onPress,
  name,
}: FilterActionProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={[styles.filterAction, customStyles]}
    >
      <Text style={[textColor]}> {name} </Text>
    </Pressable>
  );
};

export default FilterAction;
