import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import groupData from "./functions/group_data";
import StatsChartItem from "./stats_chart_item";
import { statsData } from "./data/data";
import { styles } from "./stats_chart.style";

const StatsChartList = () => {
  const statsDataArr = groupData(statsData);
  console.log("problem's output:", statsDataArr);

  return (
    <ScrollView
      contentContainerStyle={styles.chartsContainer}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity activeOpacity={1}>
        {statsDataArr.map((data, index) => (
          <StatsChartItem key={index} data={data} />
        ))}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default StatsChartList;
