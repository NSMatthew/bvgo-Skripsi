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
      {/* BVGO Logo */}
      <Image
        source={require('../../assets/images/logo-bvgo.png')}
        style={styles.logoBVGO}
      />
      {/* "from" text */}
      <Text style={styles.splashText}>from</Text>
      {/* BukitVista Logo */}
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
    marginTop: 20, // Adjust the margin-top to make "from" text a little further
  },
  logoBVGO: {
    width: 220, // Increase the size of the BVGO logo
    height: 120, // Adjust height to maintain the proportions
    resizeMode: 'contain',
    marginBottom: 30, // Adjust margin to create more space between logos and text
  },
  logoBV: {
    width: 180, // Adjust the size to make it proportionate to BVGO logo
    height: 90,  // Adjust the height accordingly
    resizeMode: 'contain',
  },
});

export default Splash;