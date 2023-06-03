import { StyleSheet, useColorScheme } from "react-native";
import colors from "../../constants/colors";

export const ButtonStyles = () => {
  const isDarkMode = useColorScheme() === "dark";

  return StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      minWidth: 36,
      height: 36,
      borderRadius: 12,
      backgroundColor: isDarkMode ? colors.primaryDark : colors.primaryLight,
    },
  });
};
