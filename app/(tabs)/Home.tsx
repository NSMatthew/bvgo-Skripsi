import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { styles } from "../styles";
import Carousel from '../../components/newsletterCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Announcement</Text>
      <Carousel /> {/* Add the Carousel component here */}
    </View>
  );
};

export default HomeScreen;