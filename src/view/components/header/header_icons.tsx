import React from "react";
import { View } from "react-native";

import {
  IconFilterSort,
  IconStats,
} from "../../../core/components/icons/icons";
import Button from "../../../core/components/buttons/button/button";

const HeaderIcons = ({
  setModalVisible,
}: {
  setModalVisible: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View style={{ display: "flex", flexDirection: "row", gap: 14 }}>
      <Button onPress={() => setModalVisible("filter_sort")}>
        <IconFilterSort />
      </Button>
      <Button onPress={() => setModalVisible("stats")}>
        <IconStats />
      </Button>
    </View>
  );
};

export default HeaderIcons;
