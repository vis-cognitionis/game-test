import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import { CardStyles } from "./card.styles";

export interface CardProps {
  imgSrc: string;
  gameTitle: string;
  gamePlatform: string;
  gameCategory: string;
}

const Card = ({ imgSrc, gameTitle, gamePlatform, gameCategory }: CardProps) => {
  const limitTitle = (title: string, limit: number) => {
    if (title.length > limit) {
      return title.slice(0, limit) + "...";
    }
    return title;
  };

  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const styles = CardStyles();

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

export default Card;
