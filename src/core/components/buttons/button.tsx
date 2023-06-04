import React from "react";
import { FlexStyle, Pressable, ViewStyle } from "react-native";

import { ButtonStyles } from "./button.styles";

const Button = ({
  children,
  onPress,
  customStyles,
}: {
  children: React.ReactNode;
  onPress: (() => void) | null | undefined;
  customStyles?: ViewStyle | FlexStyle;
}) => {
  const styles = ButtonStyles();
  return (
    <Pressable style={[styles.button, customStyles]} onPress={onPress}>
      {children}
    </Pressable>
  );
};
export default Button;
