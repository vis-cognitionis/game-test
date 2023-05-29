import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const HeaderStyles = () => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 100,
      paddingVertical: 0,
      paddingHorizontal: 16,
      backgroundColor: "pink",
    },
    text: {
      paddingTop: 10,
      fontSize: 18,
    },
  });
};

const Header = () => {
  const styles = HeaderStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> GAME TEST APP</Text>
      <Button title="Filter" />
    </SafeAreaView>
  );
};
export default Header;
