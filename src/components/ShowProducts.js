import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const ShowProducts = () => {
    const[products,setProducts] = useState() 
    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await axios.get(
              'http://192.168.0.107:3001/getProducts',
            );
            const data = response.data;
            console.log(data);
            setProducts(data)
          } catch (error) {
            console.error('Error:', error.message);
          }
        };
      getProducts();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
          <Text>All Products</Text>
        </SafeAreaView>
      );
}

export default ShowProducts