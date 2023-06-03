import React, { SetStateAction } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { IconGameTest } from "../../../core/components/icons/icons";
import { useAppContext } from "../../../state/app_context";
import { useFilterSort } from "../../../hooks/useFilterSort";
import { useGameData } from "../../../data/useGameData";
import { HeaderStyles } from "./header.styles";
import HeaderIcons from "./header_icons";
import HeaderChips from "./header_chips";

const Header = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<SetStateAction<string>>;
}) => {
  const { selectedFilters, selectedSort } = useAppContext();

  const { filteredGameCardList } = useFilterSort();
  const { gameData } = useGameData();

  const styles = HeaderStyles({ selectedFilters, selectedSort });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconGameTest />
        <HeaderIcons setModalVisible={setModalVisible} />
      </View>
      <Text style={styles.result}>
        {gameData && filteredGameCardList.length + " / " + gameData.length}
      </Text>
      <HeaderChips />
    </SafeAreaView>
  );
};

export default Header;
