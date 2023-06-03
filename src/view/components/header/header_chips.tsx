import React from "react";
import { View, FlatList } from "react-native";

import { useAppContext } from "../../../state/app_context";
import Chip from "../../../core/components/chip/chip";

const HeaderChips = () => {
  const {
    selectedFilters,
    selectedSort,
    setSelectedFilters,
    setSelectedSort,
    setChipsSelectedFilters,
    setChipsSelectedSorts,
  } = useAppContext();

  const chips = selectedFilters
    .concat(selectedSort ? [selectedSort] : [])
    .reverse();

  const handleResetFilters = (item: string) => {
    {
      if (selectedFilters.includes(item)) {
        const updatedFilters = selectedFilters.filter(
          (filter) => filter !== item
        );
        setSelectedFilters(updatedFilters);
        setChipsSelectedFilters(updatedFilters);
      } else if (selectedSort === item) {
        setSelectedSort("");
        setChipsSelectedSorts([]);
      }
    }
  };
  return (
    <FlatList
      horizontal
      data={chips}
      renderItem={({ item }) => (
        <Chip
          selected={selectedFilters.includes(item) || selectedSort === item}
          key={item}
          content={item}
          isFiltered={true}
          onPressClose={() => handleResetFilters(item)}
        />
      )}
      keyExtractor={(item, index) => `${item}-${index}`}
      ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HeaderChips;
