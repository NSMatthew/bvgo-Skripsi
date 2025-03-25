import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from "../styles";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Home Screen</Text>
      <Image source={require('../../assets/images/logo-bukitvista.png')} style={styles.logo} />
    </View>
  );
};


export default HomeScreen;