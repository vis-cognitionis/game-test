import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";

import GameCard from "./game_card";
import GameCardProps from "../../../interface/interface";
import { useFilterSort } from "../../../custom-hook/useFilterSort";
import { useGameData } from "../../../queries/useGameData";

const GameList = () => {
  const { filteredGameCardList } = useFilterSort();
  const { isLoading } = useGameData();
  const [fadeAnim] = useState<Animated.Value>(new Animated.Value(0));

  const animateLoading = () => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 }
      ).start();
    } else {
      fadeAnim.setValue(0);
    }
  };

  useEffect(() => {
    animateLoading();
  }, [isLoading]);

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

  const renderLoading = () => {
    const opacity = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    });

    return (
      <View style={styles.loadingContainer}>
        <Animated.View style={[styles.loadingContainer, { opacity }]}>
          <ActivityIndicator size="large" color="#FC4C02" />
        </Animated.View>
      </View>
    );
  };

  if (isLoading) {
    return renderLoading();
  } else {
    return (
      <FlatList
        style={styles.container}
        data={filteredGameCardList}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  }
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
