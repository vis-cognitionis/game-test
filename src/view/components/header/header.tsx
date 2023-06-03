import React, { SetStateAction } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import {
  IconFilterSort,
  IconGameTest,
  IconStats,
} from "../../../core/components/icons/icons";
import { useAppContext } from "../../../view-model/app_context";
import { useFilterSort } from "../../../custom-hook/useFilterSort";
import { useGameData } from "../../../queries/useGameData";
import { HeaderStyles } from "./header.styles";
import Button from "../../../core/components/buttons/button";
import Chip from "../../../core/components/chip/chip";

const Header = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<SetStateAction<string>>;
}) => {
  const {
    selectedFilters,
    selectedSort,
    setSelectedFilters,
    setSelectedSort,
    setChipsSelectedFilters,
    setChipsSelectedSorts,
  } = useAppContext();

  const { filteredGameCardList } = useFilterSort();
  const { gameData } = useGameData();

  const chips = selectedFilters
    .concat(selectedSort ? [selectedSort] : [])
    .reverse();

  const handleReset = (item: string) => {
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

  const styles = HeaderStyles({ selectedFilters, selectedSort });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconGameTest />
        <View style={{ display: "flex", flexDirection: "row", gap: 14 }}>
          <Button
            children={<IconFilterSort />}
            onPress={() => setModalVisible("filter_sort")}
          />
          <Button
            children={<IconStats />}
            onPress={() => setModalVisible("stats")}
          />
        </View>
      </View>
      <Text style={styles.result}>
        {gameData && filteredGameCardList.length + " / " + gameData.length}
      </Text>

      <FlatList
        horizontal
        data={chips}
        renderItem={({ item }) => (
          <Chip
            selected={selectedFilters.includes(item) || selectedSort === item}
            key={item}
            content={item}
            isFiltered={true}
            onPressClose={() => handleReset(item)}
          />
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
        ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Header;
