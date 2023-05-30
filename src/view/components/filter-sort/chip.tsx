import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { IconClose } from "../icons";

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
  const styles = StyleSheet.create({
    container: {
      width: "auto",
      minWidth: 80,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 4,
      backgroundColor: selected ? "#FC4C02" : "#FFFFFF",
      borderWidth: 2,
      borderColor: "#FC4C02",
      borderRadius: 50,
      paddingHorizontal: 10,
    },

    content: {
      color: selected ? "#FFFFFF" : "#FC4C02",
      fontSize: 12,
      fontWeight: "bold",
    },
  });

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
