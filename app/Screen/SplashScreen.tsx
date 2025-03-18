import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/types';  // Pastikan ini diimport

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
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
      navigation.replace('Home');
    }, 2000); // Adjust the delay to match your splash screen duration
  }, [navigation, fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={require('../../assets/images/logo-bvgo.png')} style={styles.logo} />
      <Text style={styles.splashText}>from</Text>
      <Image source={require('../../assets/images/logo-bukitvista.png')} style={styles.logo} />
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