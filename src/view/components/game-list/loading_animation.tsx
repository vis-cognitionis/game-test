import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";

const LoadingAnimationView = () => {
  const [fadeAnim] = useState<Animated.Value>(new Animated.Value(0.3));
  const [bounceAnim] = useState<Animated.Value>(new Animated.Value(0.9));

  useEffect(() => {
    const fadeInOut = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => fadeInOut());
    };
    fadeInOut();

    const loadingAnim = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    loadingAnim();
  }, []);

  return (
    <Animated.View
      style={{
        width: "100%",
        height: 110,
        borderRadius: 16,
        backgroundColor: "rgba(252, 76, 2, 0.5)",
        opacity: fadeAnim,
        transform: [{ scaleY: bounceAnim }],
      }}
    />
  );
};

export default LoadingAnimationView;
