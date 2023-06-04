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

  chartContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "red",
  },

  gameContainer: {
    marginBottom: 40,
    alignItems: "center",
  },

  gameId: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  graphContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "60%",
    height: 100,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },

  axis: {
    width: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: "12%",
    marginRight: "12%",
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
  },

  statsText: {
    fontSize: 12,
    color: "black",
    marginLeft: "8%",
    marginRight: "8%",
  },
});
