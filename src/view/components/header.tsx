import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";

import { IconFilterSort, IconGameTest } from "./icons";
import { useGameData } from "../../queries/useGameData";

const HeaderStyles = () => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 100,
      paddingVertical: 0,
      paddingHorizontal: 24,
      backgroundColor: "rgba(252, 76, 2, 0.1)",
    },
    text: {
      paddingTop: 10,
      fontSize: 18,
    },
    button: {
      justifyContent: "center",
      paddingLeft: 9,
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: "rgba(252, 76, 2, 0.35)",
    },
  });
};

const Header = () => {
  const styles = HeaderStyles();

  const gameData = useGameData();

  return (
    <SafeAreaView style={styles.container}>
      <IconGameTest />
      <Pressable style={styles.button}>
        <IconFilterSort />
      </Pressable>
    </SafeAreaView>
  );
};
export default Header;
