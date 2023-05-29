import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../components/header";
import GameList from "../components/game_list";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <GameList />
    </SafeAreaView>
  );
};
export default MainScreen;
