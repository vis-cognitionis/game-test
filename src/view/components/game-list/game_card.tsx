import React, { useState } from "react";
import { Image, StyleSheet, View, Text, useColorScheme } from "react-native";

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
  const isDarkMode = useColorScheme() === "dark";
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
      color: isDarkMode ? "#DEDEDE" : "#424242",
      fontWeight: "bold",
      paddingBottom: 16,
    },

    textContent: {
      color: isDarkMode ? "#DEDEDE" : "#424242",
    },

    loadingBox: {
      width: "100%",
      height: 110,
      borderRadius: 16,
      backgroundColor: "rgba(252, 76, 2, 0.4)",
    },
  });
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
        <Text style={styles.textContent}> {gamePlatform} </Text>
        <Text style={styles.textContent}> {gameCategory} </Text>
      </View>
    </View>
  );
};

export default GameCard;
