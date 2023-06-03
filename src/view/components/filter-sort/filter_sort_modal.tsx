import React, { useMemo } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { useGameData } from "../../../queries/useGameData";
import { useAppContext } from "../../../view-model/app_context";
import Modal from "../../../core/components/modal/modal";
import Chip from "../../../core/components/chip/chip";
import colors from "../../../core/constants/colors";
import ActionButton from "../../../core/components/buttons/action_button";

interface FilterSortModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterSortModal = ({ visible, onClose }: FilterSortModalProps) => {
  const { gameData } = useGameData();
  const {
    setSelectedFilters,
    setSelectedSort,
    chipsSelectedFilters,
    setChipsSelectedFilters,
    chipsSelectedSorts,
    setChipsSelectedSorts,
  } = useAppContext();

  const RowItem = useMemo(
    () =>
      ({ title, children }: { title: string; children: React.ReactNode }) => {
        return (
          <View style={styles.rowItemContainer}>
            <Text style={styles.subheading}>{title}</Text>
            <ScrollView
              contentContainerStyle={styles.chipContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </View>
        );
      },
    []
  );

  const categories =
    gameData && Array.from(new Set(gameData.map((game) => game.genre)));

  const platforms =
    gameData && Array.from(new Set(gameData.map((game) => game.platform)));

  const sortItems = ["Latest Release", "Oldest Release", "A-Z", "Z-A"];

  const handleFilter = (item: string) => {
    const updatedSelectedFilters = chipsSelectedFilters.includes(item)
      ? chipsSelectedFilters.filter((el) => el !== item)
      : [...chipsSelectedFilters, item];

    setChipsSelectedFilters(updatedSelectedFilters);
  };

  const handleSort = (item: string) => {
    const updatedSelectedSorts = chipsSelectedSorts.includes(item)
      ? chipsSelectedSorts.filter((el) => el !== item)
      : [item];

    setChipsSelectedSorts(updatedSelectedSorts);
  };

  const handleApply = () => {
    onClose();
    setSelectedFilters(chipsSelectedFilters);
    setSelectedSort(chipsSelectedSorts[0]);
  };

  const handleReset = () => {
    setChipsSelectedFilters([]);
    setChipsSelectedSorts([]);
    setSelectedFilters([]);
    setSelectedSort("");
    (chipsSelectedFilters.length > 0 || chipsSelectedSorts.length > 0) &&
      onClose();
  };

  return (
    <Modal
      children={
        <>
          <Text style={styles.title}>Filter & Sort</Text>
          <View style={styles.line} />
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
            <RowItem
              children={sortItems?.map((sort) => (
                <Chip
                  key={sort}
                  content={sort}
                  selected={chipsSelectedSorts.includes(sort)}
                  onPress={() => {
                    handleSort(sort);
                  }}
                />
              ))}
              title="Sort"
            />
          </View>
          <View style={styles.line} />
          <View style={styles.filterAction}>
            <ActionButton
              customStyles={{ backgroundColor: "rgba(252, 76, 2, 0.2)" }}
              onPress={handleReset}
              textColor={{ color: colors.primaryDark, fontWeight: "bold" }}
              name="Reset"
            />
            <ActionButton
              customStyles={{ backgroundColor: colors.primaryDark }}
              onPress={handleApply}
              textColor={{ color: "white" }}
              name="Apply"
            />
          </View>
        </>
      }
      handleApply={() => handleApply()}
      onClose={() => onClose()}
      visible={visible}
    />
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 28,
    paddingBottom: "12%",
    minHeight: 380,
    height: "auto",
  },

  chipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  title: {
    width: 104,
    height: 25,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primaryDark,
  },

  subheading: {
    width: 104,
    height: 25,
    fontWeight: "bold",
    fontSize: 15,
    color: colors.black,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(156, 152, 152, 0.47);",
    margin: 12,
  },

  rowItemContainer: {
    display: "flex",
    flexDirection: "column",
    height: 70,
  },

  rowItemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    rowGap: 18,
    width: "100%",
  },

  scrollContainer: {
    flexGrow: 1,
    overflow: "hidden",
  },

  filterAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default FilterSortModal;
