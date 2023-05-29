import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../components/header";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
};
export default MainScreen;
