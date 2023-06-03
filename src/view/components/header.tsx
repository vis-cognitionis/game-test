import React, { SetStateAction } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

import {
  IconFilterSort,
  IconGameTest,
  IconStats,
} from "../../core/components/icons/icons";
import { useAppContext } from "../../view-model/app_context";
import { useFilterSort } from "../../custom-hook/useFilterSort";
import { useGameData } from "../../queries/useGameData";
import Chip from "../../core/components/chip/chip";
import colors from "../../core/constants/colors";
import Button from "../../core/components/buttons/button";

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
      alignItems: "center",
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: isDarkMode ? colors.primaryDark : colors.primaryLight,
    },

    result: {
      paddingLeft: 4,
      color: colors.primaryDark,
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
