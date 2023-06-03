import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const ChipStyles = (selected: boolean) => {
  return StyleSheet.create({
    container: {
      width: "auto",
      minWidth: 80,
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 4,
      backgroundColor: selected ? colors.primaryDark : colors.white,
      borderWidth: 2,
      borderColor: colors.primaryDark,
      borderRadius: 50,
      paddingHorizontal: 10,
    },

    content: {
      color: selected ? colors.white : colors.primaryDark,
      fontSize: 12,
      fontWeight: "bold",
    },
  });
};
