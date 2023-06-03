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
      <Button
        children={<IconFilterSort />}
        onPress={() => setModalVisible("filter_sort")}
      />
      <Button
        children={<IconStats />}
        onPress={() => setModalVisible("stats")}
      />
    </View>
  );
};

export default HeaderIcons;
