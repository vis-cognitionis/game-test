import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Header from "../components/header";
import GameList from "../components/game-list/game_list";
import StatsModal from "../components/stats/stats_modal";
import FilterSortModal from "../components/filter-sort/filter_sort_modal";

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState<string>("");

  return (
    <SafeAreaView>
      <Header setModalVisible={setModalVisible} />
      <GameList />
      <FilterSortModal
        visible={Boolean(modalVisible === "filter_sort")}
        onClose={() => setModalVisible("")}
      />
      <StatsModal
        visible={Boolean(modalVisible === "stats")}
        onClose={() => setModalVisible("")}
      />
    </SafeAreaView>
  );
};
export default MainScreen;
