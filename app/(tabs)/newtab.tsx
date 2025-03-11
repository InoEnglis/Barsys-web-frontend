import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

// Sample data for carousel items
const data = [
  { id: 1, title: 'Item 1', image: 'https://via.placeholder.com/300x200?text=Item+1' },
  { id: 2, title: 'Item 2', image: 'https://via.placeholder.com/300x200?text=Item+2' },
  { id: 3, title: 'Item 3', image: 'https://via.placeholder.com/300x200?text=Item+3' },
  { id: 4, title: 'Item 4', image: 'https://via.placeholder.com/300x200?text=Item+4' },
  { id: 5, title: 'Item 5', image: 'https://via.placeholder.com/300x200?text=Item+5' },
];

const Carousel = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselContainer}
    >
      {data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
  },
  item: {
    width: 300,
    height: 200,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Carousel;
