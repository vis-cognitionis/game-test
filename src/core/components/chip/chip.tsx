import React from "react";
import { Text, Pressable } from "react-native";
import { IconClose } from "../icons/icons";
import { ChipStyles } from "./chip.styles";

interface ChipProps {
  content: string;
  onPress?: () => void;
  onPressClose?: () => void;
  selected: boolean;
  isFiltered?: boolean;
}

const Chip = ({
  content,
  onPress,
  onPressClose,
  selected,
  isFiltered,
}: ChipProps) => {
  const styles = ChipStyles(selected);
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Text style={styles.content}> {content} </Text>
      {isFiltered && (
        <Pressable onPress={onPressClose}>
          <IconClose />
        </Pressable>
      )}
    </Pressable>
  );
};

export default Chip;
