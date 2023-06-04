import { StyleSheet } from "react-native";
import colors from "../../../core/constants/colors";

export const styles = StyleSheet.create({
  title: {
    width: 104,
    height: 25,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.primaryDark,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(156, 152, 152, 0.47);",
    margin: 12,
  },

  chartsContainer: {
    flexDirection: "column",
    marginTop: 10,
  },

  gameContainer: {
    marginBottom: 24,
    alignItems: "center",
    backgroundColor: "rgba(252, 76, 2, 0.1)",
    paddingVertical: 20,
    borderRadius: 20,
  },

  gameId: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },

  graphContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: "70%",
    height: 100,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
  },

  bar: {
    width: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: "14%",
    marginRight: "14%",
  },

  yAxis: {
    position: "absolute",
    left: -20,
    width: 20,
    alignItems: "center",
  },

  yAxisText: {
    fontSize: 10,
  },

  total: {
    fontSize: 12,
    color: "black",
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: "row",
    marginTop: 5,
    gap: 67,
  },

  statsText: {
    fontSize: 12,
    color: "black",
    marginLeft: "8%",
    marginRight: "8%",
  },

  statsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  stats: {
    fontSize: 12,
    color: colors.black,
  },

  statsValue: {
    fontSize: 12,
    color: colors.black,
  },

  playTimeText: {
    fontSize: 12,
    color: colors.black,
    marginTop: 10,
  },
});
