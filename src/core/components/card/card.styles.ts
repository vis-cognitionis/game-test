import { StyleSheet, useColorScheme } from "react-native";
import colors from "../../constants/colors";

export const CardStyles = () => {
  const isDarkMode = useColorScheme() === "dark";

  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: 342,
      maxWidth: 342,
      height: 110,
      gap: 12,
      boxSizing: "border-box",
      overflow: "hidden",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
    },

    image: {
      width: 196,
      height: 112,
      borderRadius: 16,
    },
    textTitle: {
      overflow: "hidden",
      width: "100%",
      fontSize: 18,
      color: isDarkMode ? colors.tertiary : colors.secondary,
      fontWeight: "bold",
      paddingBottom: 16,
    },

    textContent: {
      color: isDarkMode ? colors.tertiary : colors.secondary,
    },

    loadingBox: {
      width: "100%",
      height: 110,
      borderRadius: 16,
      backgroundColor: "rgba(252, 76, 2, 0.15)",
    },
  });
};
