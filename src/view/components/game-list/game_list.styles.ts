import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "82%",
    paddingHorizontal: 24,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "40%",
  },

  lazyComponent: {
    height: 110,
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 16,
  },
});
