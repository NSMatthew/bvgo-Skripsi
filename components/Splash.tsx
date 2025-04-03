import React, { useEffect, useRef } from "react";
import { Text, Image, Animated, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Splash = () => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation on mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Transition to HomeScreen after 2 seconds
    setTimeout(() => {
      router.replace("/(tabs)/Home");
    }, 2000);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require("../../assets/images/logo-BV.png")}
        style={styles.logoBVGO}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "column", // Align elements vertically
    paddingHorizontal: 30, // Add padding to left and right for spacing
  },
  splashText: {
    position: "absolute",
    top: "60%", // Move closer to the BukitVista logo
    fontSize: 18, // Increased font size for better readability
    color: "#888",
    fontWeight: "bold",
    textAlign: "center", // Center text horizontally
    marginTop: 20, // Adjust the margin-top to make "from" text a little further
  },
  logoBVGO: {
    width: 220, // Increase the size of the BVGO logo
    height: 120, // Adjust height to maintain the proportions
    resizeMode: "contain",
    marginBottom: 30, // Adjust margin to create more space between logos and text
  },
  logoBV: {
    width: 180, // Adjust the size to make it proportionate to BVGO logo
    height: 90, // Adjust the height accordingly
    resizeMode: "contain",
  },
});

export default Splash;
