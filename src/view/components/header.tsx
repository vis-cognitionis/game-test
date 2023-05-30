import React, { SetStateAction } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { IconFilterSort, IconGameTest } from "./icons";
import { useAppContext } from "../../view-model/app_context";
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

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      paddingVertical: 0,
      paddingHorizontal: 24,
      height: selectedFilters.length < 1 && !selectedSort ? 70 : 100,
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    chipContainer: {
      paddingTop: 16,
    },
    button: {
      justifyContent: "center",
      paddingLeft: 9,
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: "rgba(252, 76, 2, 0.35)",
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

      <FlatList
        horizontal
        contentContainerStyle={styles.chipContainer}
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
