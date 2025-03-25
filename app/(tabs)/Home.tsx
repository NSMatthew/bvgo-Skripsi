// Home.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "../styles";  // Make sure styles are imported correctly
import Carousel from '../../components/newsletterCard';
import Announcement from '../../components/sliderHome'; 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Home Screen</Text>
      <Announcement /> {/* Add the NewsSlider here */}
      <Carousel /> {/* Add Carousel component */}
    </View>
  );
};

export default HomeScreen;