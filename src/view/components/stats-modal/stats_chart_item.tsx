import React from "react";
import { View, Text } from "react-native";

import { styles } from "./stats_chart.style";
import colors from "../../../core/constants/colors";

const StatsChartItem = ({ mission }: any) => {
  const { wins, fails, playTime, gameId } = mission;
  const max = Math.max(wins, fails);
  const yAxisValues = [];

  for (let i = 0; i <= max; i += 5) {
    yAxisValues.push(i);
  }

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.gameId}>{gameId}</Text>

      <View style={styles.graphContainer}>
        {yAxisValues.map((value) => (
          <YAxisBar key={value} value={value} max={max} />
        ))}
        <Bar height={(wins / max) * 100} color={colors.wins} />
        <Bar height={(fails / max) * 100} color={colors.fails} />
      </View>
      <View style={styles.statsContainer}>
        <StatsText label="Wins" value={wins} />
        <StatsText label="Fails" value={fails} />
      </View>
      <Text style={styles.playTimeText}>Play time: {playTime}</Text>
    </View>
  );
};

const YAxisBar = ({ value, max }: { value: number; max: number }) => {
  const barHeight = (value / max) * 100;

  return (
    <View style={[styles.yAxis, { bottom: `${barHeight}%` }]}>
      <Text style={styles.yAxisText}>{value}</Text>
    </View>
  );
};

const Bar = ({ height, color }: { height: number; color: string }) => {
  return (
    <View style={[styles.bar, { height: height, backgroundColor: color }]} />
  );
};

const StatsText = ({ label, value }: { label: string; value: number }) => {
  return (
    <View style={styles.statsTextContainer}>
      <Text style={styles.stats}>{label}:</Text>
      <Text style={styles.stats}>{value}</Text>
    </View>
  );
};

export default StatsChartItem;
