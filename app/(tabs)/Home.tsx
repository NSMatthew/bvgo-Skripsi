import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Image source={require('../../assets/images/logo-bukitvista.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HomeScreen;