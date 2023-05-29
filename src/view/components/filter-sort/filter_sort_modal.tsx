import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Chip from "./chip";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "flex-end",
  },

  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 28,
    height: 380,
  },

  chipContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  title: {
    width: 104,
    height: 25,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FC4C02",
  },

  subheading: {
    width: 104,
    height: 25,
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000",
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(156, 152, 152, 0.47);",
    margin: 14,
  },

  rowItemContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
    height: 70,
    justifyContent: "center",
  },

  rowItemsContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    rowGap: 24,
    width: "100%",
  },
});

interface FilterSortModalProps {
  visible: boolean;
  onClose: () => void;
}

const FilterSortModal = ({ visible, onClose }: FilterSortModalProps) => {
  const translateY = useState<Animated.Value>(new Animated.Value(500))[0];

  const handleModalClose = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, translateY]);

  const RowItem = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    return (
      <View style={styles.rowItemContainer}>
        <Text style={styles.subheading}>{title}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={1} style={styles.chipContainer}>
            {children}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[styles.contentContainer, { transform: [{ translateY }] }]}
            >
              <Text style={styles.title}>Filter & Sort</Text>
              <View style={styles.line} />
              <View style={styles.rowItemsContainer}>
                <RowItem
                  children={
                    <>
                      <Chip />
                      <Chip />
                      <Chip />
                      <Chip />
                      <Chip />
                      <Chip />
                    </>
                  }
                  title="Categories"
                />
                <RowItem children={<Chip />} title="Platforms" />
                <RowItem children={<Chip />} title="Sort" />
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterSortModal;
