import React, { useCallback, useMemo, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";

import GameCard from "./game_card";
import GameCardProps from "../../../interface/interface";
import { useFilterSort } from "../../../custom-hook/useFilterSort";
import { useGameData } from "../../../queries/useGameData";

const GameList = () => {
  const { filteredGameCardList } = useFilterSort();
  const { refetch } = useGameData();
  const itemSeparator = () => <View style={{ height: 24 }} />;

  const renderItem = useMemo(
    () =>
      ({ item }: { item: GameCardProps }) => {
        return (
          <GameCard
            gameCategory={item.genre}
            gamePlatform={item.platform}
            gameTitle={item.title}
            imgSrc={item.thumbnail}
          />
        );
      },
    []
  );

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetch();
    }, 2000);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={filteredGameCardList}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: "82%",
    paddingHorizontal: 24,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "40%",
  },

  lazyComponent: {
    height: 110,
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 16,
  },
});

export default GameList;
