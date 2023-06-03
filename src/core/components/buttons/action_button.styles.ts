import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  filterAction: {
    width: "45%",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryDark,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});
