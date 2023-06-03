import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Header from "../components/header";
import GameList from "../components/game-list/game_list";
import FilterSortModal from "../components/filter-sort/filter_sort_modal";

const MainScreen = () => {
  const [modalOpen, setFilterModalOpen] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <Header setFilterModalOpen={setFilterModalOpen} />
      <GameList />
      <FilterSortModal
        visible={modalOpen}
        onClose={() => setFilterModalOpen(false)}
      />
    </SafeAreaView>
  );
};
export default MainScreen;
