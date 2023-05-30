import React, { useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GameCard from "./game_card";
import GameCardProps from "../../../interface/interface";
import { useFilterSort } from "../../../custom-hook/useFilterSort";

const styles = StyleSheet.create({
  container: {
    height: "82%",
    paddingHorizontal: 24,
  },
});

const GameList = () => {
  const { filteredGameCardList } = useFilterSort();
  const memoizedFilteredGameCardList = useMemo(
    () => filteredGameCardList,
    [filteredGameCardList]
  );

  const itemSeparator = () => <View style={{ height: 24 }} />;

  const renderItem = ({ item }: { item: GameCardProps }) => (
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
      data={memoizedFilteredGameCardList}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default GameList;
