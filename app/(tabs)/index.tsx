import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles"; 

export default function Index() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        router.replace("/(tabs)/Home");
      } else {
        router.replace("../login");
      }
    }, 2000);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require("../../assets/images/logo-bvgo.png")}
        style={styles.logoBVGO}
      />
      <Text style={styles.splashText}>from</Text>
      <Image
        source={require("../../assets/images/logo-bukitvista.png")}
        style={styles.logoBV}
      />
    </Animated.View>
  );
}