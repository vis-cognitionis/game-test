import React from "react";
import { FlexStyle, Pressable, ViewStyle } from "react-native";

import { ButtonStyles } from "./button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onPress: (() => void) | null | undefined;
  customStyles?: ViewStyle | FlexStyle;
}

const Button = ({ children, onPress, customStyles }: ButtonProps) => {
  const styles = ButtonStyles();
  return (
    <Pressable style={[styles.button, customStyles]} onPress={onPress}>
      {children}
    </Pressable>
  );
};
export default Button;
