import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../type';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const Splash = () => {
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
      <Image
        source={require('../../assets/images/logo-bvgo.png')}
        style={styles.logoBVGO}
      />
      <Text style={styles.splashText}>from</Text>
      <Image
        source={require('../../assets/images/logo-bukitvista.png')}
        style={styles.logoBV}
      />
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
    top: '55%', // Adjust to a more appropriate position
    fontSize: 16,
    color: '#888',
    fontWeight: 'bold',
  },
  logoBVGO: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10, // Adjust margin to create space between logos
  },
  logoBV: {
    width: 160, // Adjust the size to make it proportionate to BVGO logo
    height: 80,  // Adjust the height accordingly
    resizeMode: 'contain',
  },
});

export default Splash;