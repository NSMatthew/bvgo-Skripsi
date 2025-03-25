import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const newsData = [
  { id: '1', title: 'News of the Day 1' },
  { id: '2', title: 'News of the Day 2' },
  { id: '3', title: 'News of the Day 3' },
];

const Announcement = () => {
  return (
    <View style={styles.AnnouncementContainer}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    AnnouncementContainer: {
    marginVertical: 20,
    padding: 10,
  },
  newsItem: {
    backgroundColor: '#EEE',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  newsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Announcement;