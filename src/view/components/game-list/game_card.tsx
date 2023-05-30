import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { useGameData } from "../../../queries/useGameData";

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
  const limitTitle = (title: string, limit: number) => {
    if (title.length > limit) {
      return title.slice(0, limit) + "...";
    }
    return title;
  };

  const [imageLoading, setImageLoading] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      {imageLoading && <View style={styles.loadingBox} />}
      <Image
        style={styles.image}
        source={{ uri: imgSrc }}
        onLoad={() => setImageLoading(false)}
      />

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{limitTitle(gameTitle, 11)}</Text>
        <Text> {gamePlatform} </Text>
        <Text> {gameCategory} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 342,
    maxWidth: 342,
    height: 110,
    gap: 12,
    boxSizing: "border-box",
    overflow: "hidden",
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
  textTitle: {
    overflow: "hidden",
    width: "100%",
    fontSize: 18,
    color: "#424242",
    fontWeight: "bold",
    paddingBottom: 16,
  },

  loadingBox: {
    width: "100%",
    height: 110,
    borderRadius: 16,
    backgroundColor: "rgba(252, 76, 2, 0.4)",
  },
});

export default GameCard;
