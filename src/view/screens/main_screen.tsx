import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Header from "../components/header";
import GameList from "../components/game-list/game_list";
import FilterSortModal from "../components/filter-sort/filter_sort_modal";
import StatsModal from "../components/stats/stats_modal";

const MainScreen = () => {
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [statsModalOpen, setStatsModalOpen] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <Header
        setStatsModalOpen={setStatsModalOpen}
        setFilterModalOpen={setFilterModalOpen}
      />
      <GameList />
      <FilterSortModal
        visible={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
      />
      <StatsModal
        visible={statsModalOpen}
        onClose={() => setStatsModalOpen(false)}
      />
    </SafeAreaView>
  );
};
export default MainScreen;
