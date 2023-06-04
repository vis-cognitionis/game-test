import React from "react";
import { ViewStyle, FlexStyle, TextStyle, Pressable, Text } from "react-native";

import { styles } from "./action_button.styles";

interface ActionButtonProps {
  customStyles: ViewStyle | FlexStyle;
  textColor: TextStyle;
  onPress: () => void;
  name: string;
}

const ActionButton = ({
  customStyles,
  textColor,
  onPress,
  name,
}: ActionButtonProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={[styles.action, customStyles]}
    >
      <Text style={[textColor]}> {name} </Text>
    </Pressable>
  );
};

export default ActionButton;
