import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { IconFilterSort, IconGameTest } from "./icons";
import { useGameData } from "../../queries/useGameData";
import Chip from "./filter-sort/chip";

const HeaderStyles = () => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      height: 100,
      paddingVertical: 0,
      paddingHorizontal: 24,
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
};

const Header = () => {
  const styles = HeaderStyles();
  const gameData = useGameData();

  const mockData = [
    { id: 1, genre: "Shooting" },
    { id: 2, genre: "Nature" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconGameTest />
        <Pressable style={styles.button}>
          <IconFilterSort />
        </Pressable>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={styles.chipContainer}
        data={mockData}
        renderItem={({ item }) => <Chip key={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ marginRight: 20 }} />}
      />
    </SafeAreaView>
  );
};

export default Header;
