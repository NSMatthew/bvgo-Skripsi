import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/types';  // Pastikan path sesuai

// Tipe navigasi
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();  // Menggunakan navigasi yang terdefinisi
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi fade-in untuk Splash Screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      // Animasi fade-out dan navigasi ke Home setelahnya
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace('Home');  // Pindah ke Home setelah animasi selesai
      });
    }, 2000);  // Durasi animasi fade-in (2000ms)
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.splashText}>Splash Screen</Text>
      <Image source={require('../../assets/images/logo-bvgo.png')} style={styles.logo} />
      <Text style={styles.fromText}>from</Text>
      <Image source={require('../../assets/images/logo-bukitvista.png')} style={styles.footerLogo} />
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
    left: 20,
    fontSize: 16,
    color: '#888',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  fromText: {
    marginTop: 30,
    fontSize: 16,
    color: '#000',
  },
  footerLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default SplashScreen;