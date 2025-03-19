import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Transition to Home after 2 seconds
    setTimeout(() => {
      router.replace("/(tabs)/Home");
    }, 2000);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require("../assets/images/logo-bvgo.png")}
        style={styles.logo}
      />
      <Text style={styles.splashText}>from</Text>
      <Image
        source={require("../assets/images/logo-bukitvista.png")}
        style={styles.logo}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  splashText: {
    position: "absolute",
    top: 40,
    fontSize: 16,
    color: "#888",
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
});
