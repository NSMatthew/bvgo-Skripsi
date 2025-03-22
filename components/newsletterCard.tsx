import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Tipe untuk item yang digunakan dalam FlatList
interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Data untuk Carousel
const data: Item[] = [
  {
    id: '1',
    title: 'Pricing Adjustment',
    description: 'Every Date = Different Price!',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Upcoming Maintenance',
    description: 'Scheduled for 2PM today',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Marketing Tips',
    description: 'Get more clients with these strategies',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Untuk melacak slide aktif

  // Fungsi untuk merender setiap item dalam FlatList
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      {/* FlatList untuk carousel */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffsetX / 300); // 300 adalah lebar setiap slide
          setActiveIndex(index); // Memperbarui indeks aktif saat scroll
        }}
      />
      {/* Menampilkan indeks slide aktif */}
      <View style={styles.pagination}>
        <Text>{`Slide: ${activeIndex + 1} of ${data.length}`}</Text>
      </View>
    </View>
  );
};

// Menambahkan style dan mengganti warna ke format hex
const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: '#FFFFFF',  // Ganti warna putih dengan hex
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
    shadowColor: '#000000',  // Warna hitam dalam hex
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333333',  // Warna abu-abu gelap dalam hex
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
    color: '#555555',  // Warna abu-abu dalam hex
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007BFF',  // Warna biru dalam hex
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',  // Warna putih
    textAlign: 'center',
  },
  pagination: {
    marginTop: 10,
    padding: 5,
    backgroundColor: '#D3D3D3',  // Warna abu-abu muda dalam hex
    borderRadius: 5,
  },
});

export default Carousel;