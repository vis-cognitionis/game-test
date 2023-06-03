import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./filter_sort.styles";

interface RowItemProps {
  title: string;
  children: React.ReactNode;
}
const RowItem = ({ title, children }: RowItemProps) => {
  return (
    <View style={styles.rowItemContainer}>
      <Text style={styles.subheading}>{title}</Text>
      <ScrollView
        contentContainerStyle={styles.chipContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};
export default RowItem;
