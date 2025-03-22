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
        style={styles.logoBVGO}
      />
      <Text style={styles.splashText}>from</Text>
      <Image
        source={require("../assets/images/logo-bukitvista.png")}
        style={styles.logoBV}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column', // Align elements vertically
    paddingHorizontal: 30, // Add padding to left and right for spacing
  },
  splashText: {
    position: 'absolute',
    top: '60%', // Move closer to the BukitVista logo
    fontSize: 18, // Increased font size for better readability
    color: '#888',
    fontWeight: 'bold',
    textAlign: 'center', // Center text horizontally
  },
  logoBVGO: {
    width: 220, // Increase the size of the BVGO logo
    height: 120, // Adjust height to maintain the proportions
    resizeMode: 'contain',
    marginBottom: 10, // Adjust margin to create space between logos and text
  },
  logoBV: {
    width: 180, // Adjust the size to make it proportionate to BVGO logo
    height: 90,  // Adjust the height accordingly
    resizeMode: 'contain',
  },
});
