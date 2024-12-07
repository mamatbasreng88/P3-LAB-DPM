import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FoodCard from '../components/FoodCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Simulasi data
    setTimeout(() => {
      setFoods([
        { id: '1', name: 'Nasi Goreng', description: 'Nasi goreng spesial.', image: require('../../assets/food1.jpeg') },
        { id: '2', name: 'Mie Ayam', description: 'Mie ayam dengan kuah lezat.', image: require('../../assets/food2.jpeg') },
        { id: '3', name: 'Sate Ayam', description: 'Sate ayam dengan bumbu kacang.', image: require('../../assets/food3.jpeg') },
      ]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="FoodApp" />
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodCard name={item.name} description={item.description} image={item.image} />
        )}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
