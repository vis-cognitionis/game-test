import React from "react";
import { View, Text, ScrollView } from "react-native";

import groupMissions from "./functions/group_mission";
import { statsData } from "./data/data";
import { styles } from "./stats_chart.style";
import StatsChartItem from "./stats_chart_item";

const StatsChart = () => {
  const missions = groupMissions(statsData);

  return (
    <>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.line} />
      <ScrollView
        contentContainerStyle={styles.chartsContainer}
        showsVerticalScrollIndicator={false}
      >
        {missions.map((mission, index) => (
          <StatsChartItem key={index} mission={mission} />
        ))}
      </ScrollView>
    </>
  );
};

export default StatsChart;
