import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GameCard from "./game_card";
import GameProps from "../../../interface/interface";
import { useGameData } from "../../../queries/useGameData";

const styles = StyleSheet.create({
  container: {
    height: "80%",
    paddingHorizontal: 24,
  },
});

const GameList = () => {
  const { gameData } = useGameData();

  const itemSeparator = () => <View style={{ height: 24 }} />;

  const renderItem = ({ item }: { item: GameProps }) => (
    <GameCard
      gameCategory={item.genre}
      gamePlatform={item.platform}
      gameTitle={item.title}
      imgSrc={item.thumbnail}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={gameData!}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default GameList;
