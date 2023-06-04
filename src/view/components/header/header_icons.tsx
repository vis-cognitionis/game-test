import React from "react";
import { View } from "react-native";
import Button from "../../../core/components/buttons/button";
import {
  IconFilterSort,
  IconStats,
} from "../../../core/components/icons/icons";

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
