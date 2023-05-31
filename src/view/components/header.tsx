import React, { SetStateAction } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

import { IconFilterSort, IconGameTest } from "./icons";
import { useAppContext } from "../../view-model/app_context";
import { useFilterSort } from "../../custom-hook/useFilterSort";
import { useGameData } from "../../queries/useGameData";
import Chip from "./filter-sort/chip";

const Header = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
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
  const isDarkMode = useColorScheme() === "dark";

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      paddingVertical: 0,
      paddingHorizontal: 24,
      height: selectedFilters.length < 1 && !selectedSort ? 80 : 120,
      gap: 12,
    },

    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    button: {
      justifyContent: "center",
      paddingLeft: 9,
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: isDarkMode ? "#FC4C02" : "rgba(252, 76, 2, 0.35)",
    },

    result: {
      paddingLeft: 4,
      color: "#FC4C02",
      fontSize: 12,
      fontWeight: "bold",
    },
  });

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconGameTest />
        <Pressable style={styles.button} onPress={() => setModalOpen(true)}>
          <IconFilterSort />
        </Pressable>
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
