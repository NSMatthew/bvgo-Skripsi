import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/types'; 

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace('Home');
      });
    }, 2000);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={require('../assets/images/logo-bvgo.png')} style={styles.logo} />
      <Text style={styles.fromText}>from</Text>
      <Image source={require('../assets/images/logo-bukitvista.png')} style={styles.footerLogo} />
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
    marginTop: 20,
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