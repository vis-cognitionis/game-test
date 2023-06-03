import React, { useCallback, useState } from "react";
import { RefreshControl, View, VirtualizedList } from "react-native";

import GameCardProps from "../../../interface/data_types";
import Card from "../../../core/components/card/card";
import { useFilterSort } from "../../../hooks/useFilterSort";
import { useGameData } from "../../../data/useGameData";
import { styles } from "./game_list.styles";

const GameList = () => {
  const { filteredGameCardList } = useFilterSort();
  const { refetch } = useGameData();
  const itemSeparator = () => <View style={{ height: 24 }} />;

  const renderItem = useCallback(({ item }: { item: GameCardProps }) => {
    return (
      <Card
        gameCategory={item.genre}
        gamePlatform={item.platform}
        gameTitle={item.title}
        imgSrc={item.thumbnail}
      />
    );
  }, []);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      refetch();
    }, 2000);
  }, []);

  const getItemCount = useCallback(
    () => filteredGameCardList.length,
    [filteredGameCardList]
  );

  const getItem = useCallback(
    (_: any, index: number) => filteredGameCardList[index],
    [filteredGameCardList]
  );

  return (
    <VirtualizedList
      style={styles.container}
      data={filteredGameCardList}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparator}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

export default React.memo(GameList);
