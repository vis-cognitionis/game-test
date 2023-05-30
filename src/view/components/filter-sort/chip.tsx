import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const Chip = ({
  content,
  onPress,
  selected,
}: {
  content?: string;
  onPress?: () => void;
  selected: boolean;
}) => {
  const styles = StyleSheet.create({
    container: {
      width: "auto",
      minWidth: 80,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: selected ? "#FC4C02" : "#FFFFFF",
      borderWidth: 2,
      borderColor: "#FC4C02",
      borderRadius: 50,
      paddingHorizontal: 10,
    },
    content: {
      color: selected ? "#FFFFFF" : "#FC4C02",
      fontSize: 12,
    },
  });

  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <Text style={styles.content}> {content} </Text>
    </Pressable>
  );
};
export default Chip;
