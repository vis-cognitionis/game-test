import React from "react";
import { StyleSheet, View } from "react-native";

const GameCardStyles = () => {
  return StyleSheet.create({
    container: {},
  });
};

const GameCard = () => {
  const styles = GameCardStyles();

  return <View style={styles.container}></View>;
};
export default GameCard;
