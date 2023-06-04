import React from "react";
import { View, Text, ScrollView } from "react-native";

import groupMissions from "./functions/group_mission";
import { statsData } from "./data/data";
import { styles } from "./stats_modal.styles";

const StatsChart = () => {
  const missions = groupMissions(statsData);

  const maxWins = Math.max(...missions.map((mission) => mission.wins));
  const maxFails = Math.max(...missions.map((mission) => mission.fails));
  const max = Math.max(maxWins, maxFails);
  const yAxisValues: number[] = [];

  for (let i = 0; i <= max; i += 5) {
    yAxisValues.push(i);
  }

  return (
    <>
      <Text style={styles.title}>Statistics</Text>
      <View style={styles.line} />
      <ScrollView
        contentContainerStyle={styles.chartContainer}
        showsVerticalScrollIndicator={false}
      >
        {missions.map((mission, index) => (
          <View key={index} style={styles.gameContainer}>
            <View style={styles.graphContainer}>
              {yAxisValues.map((value) => (
                <View
                  key={value}
                  style={[styles.yAxis, { bottom: `${(value / max) * 100}%` }]}
                >
                  <Text style={styles.yAxisText}>{value}</Text>
                </View>
              ))}
              <View
                style={[
                  styles.axis,
                  {
                    height: (mission.wins / max) * 100,
                    backgroundColor: "green",
                  },
                ]}
              />
              <View
                style={[
                  styles.axis,
                  {
                    height: (mission.fails / max) * 100,
                    backgroundColor: "#FC4C02",
                  },
                ]}
              />
            </View>
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>Wins: {mission.wins}</Text>
              <Text style={styles.statsText}>Fails: {mission.fails}</Text>
            </View>
            <Text style={styles.gameId}>{mission.gameId}</Text>
            <Text> play time:{mission.playTime}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default StatsChart;
