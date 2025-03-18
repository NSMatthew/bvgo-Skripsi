import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RootStackParamList } from '../Navigation/types'; // Import RootStackParamList

// Mendefinisikan tipe navigasi untuk SplashScreen
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  // Menggunakan useNavigation dengan tipe yang sesuai
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi untuk fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Transisi setelah 2 detik ke HomeScreen
    setTimeout(() => {
      navigation.replace('Home'); // Navigasi ke Home setelah animasi selesai
    }, 2000);
  }, [navigation, fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.splashText}>Splash Screen</Text>
      <Image source={require('./assets/images/logo-bukitvista.png')} style={styles.logo} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  splashText: {
    position: 'absolute',
    top: 40,
    fontSize: 24,
    color: '#888',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SplashScreen;