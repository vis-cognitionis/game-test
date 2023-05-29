import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const GameCardStyles = () => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 342,
      height: 110,
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
    },

    image: {
      width: 196,
      height: 112,
      borderRadius: 16,
    },
    textTitle: { fontSize: 18, color: "#424242", fontWeight: "bold" },
    textContent: {},
  });
};

export interface CardProps {
  imgSrc: string;
  gameTitle: string;
  gamePlatform: string;
  gameCategory: string;
}

const GameCard = ({
  imgSrc,
  gameTitle,
  gamePlatform,
  gameCategory,
}: CardProps) => {
  const styles = GameCardStyles();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imgSrc }} />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{gameTitle}</Text>
        <Text> {gamePlatform} </Text>
        <Text> {gameCategory} </Text>
      </View>
    </View>
  );
};
export default GameCard;
