import { StyleSheet, useColorScheme } from "react-native";
import colors from "../../../core/constants/colors";

export const HeaderStyles = ({
  selectedFilters,
  selectedSort,
}: {
  selectedFilters: string[];
  selectedSort: string;
}) => {
  const isDarkMode = useColorScheme() === "dark";

  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      paddingVertical: 0,
      paddingHorizontal: 24,
      height: selectedFilters.length < 1 && !selectedSort ? 80 : 120,
      gap: 12,
    },

    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    button: {
      justifyContent: "center",
      alignItems: "center",
      width: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: isDarkMode ? colors.primaryDark : colors.primaryLight,
    },

    result: {
      paddingLeft: 4,
      color: colors.primaryDark,
      fontSize: 12,
      fontWeight: "bold",
    },
  });
};
