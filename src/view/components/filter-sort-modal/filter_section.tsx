import React from "react";
import { View } from "react-native";

import Chip from "../../../core/components/chip/chip";
import RowItem from "./row_item";
import { useGameData } from "../../../data/useGameData";
import { useAppContext } from "../../../state/app_context";
import { styles } from "./filter_sort.styles";

const FilterSection = () => {
  const { gameData } = useGameData();
  const { chipsSelectedFilters, setChipsSelectedFilters } = useAppContext();

  const categories =
    gameData && Array.from(new Set(gameData.map((game) => game.genre)));

  const platforms =
    gameData && Array.from(new Set(gameData.map((game) => game.platform)));

  const handleFilter = (item: string) => {
    const updatedSelectedFilters = chipsSelectedFilters.includes(item)
      ? chipsSelectedFilters.filter((el) => el !== item)
      : [...chipsSelectedFilters, item];

    setChipsSelectedFilters(updatedSelectedFilters);
  };

  return (
    <View style={styles.rowItemsContainer}>
      <RowItem
        children={categories?.map((category) => (
          <Chip
            key={category}
            content={category}
            onPress={() => {
              handleFilter(category);
            }}
            selected={chipsSelectedFilters.includes(category)}
          />
        ))}
        title="Categories"
      />
      <RowItem
        children={platforms?.map((platform) => (
          <Chip
            key={platform}
            content={platform}
            selected={chipsSelectedFilters.includes(platform)}
            onPress={() => {
              handleFilter(platform);
            }}
          />
        ))}
        title="Platforms"
      />
    </View>
  );
};

export default FilterSection;
