import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const newsData = [
  {
    id: "1",
    title: "Upcoming Maintenance",
    description: "Scheduled for 2PM today",
  },
  { id: "2",
    title: "Follow up Maintenance",
    description: "TBD" },
];

const NewsSlider = () => {
  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true} // Make it scroll horizontally
        showsHorizontalScrollIndicator={false} // Hide the horizontal scrollbar
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    padding: 15,
    marginVertical: 10,
  },
  flatList: {
    flexDirection: "row",
  },
  newsItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 20,
    borderRadius: 10,
    width: 250, // You can adjust this width to match your design
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF", // Blue color for the button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Satoshi',
    color: "#fff",
    textAlign: "center",
  },
});

export default NewsSlider;
