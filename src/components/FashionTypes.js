import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FashionTypes = ({navigation}) => {
  const[products,setProducts] = useState() 
  const fashionArrayOne = ['SHIRTS', 'T-SHIRTS', 'CASUAL SHOES', 'JEANS', 'WINTERWEAR', 'KURTA SETS', 'TROUSERS', 'HEADPHONES']
  const fashionArrayTwo = ['DRESSES', 'KURTAS', 'KIDS', 'PENTS', 'JACKET', 'SAREES', 'HANDBAGS', 'PERSONALCARE']

  const showProducts = () => {
    navigation.navigate('ShowProducts')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectFashion}>
        <Text style = {[styles.typeTag, styles.typeTagOne]}>Fashion</Text>
        <Text style = {styles.typeTag}>Beauty</Text>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.fashionType}>
          {fashionArrayOne.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem} onPress={showProducts}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.fashionType}>
          {fashionArrayTwo.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem} onPress={showProducts}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectFashion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
  },
  scrollView: {
    marginTop: '6%',
  },
  fashionType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  typeTag:{
    borderWidth:2,
    borderColor:"black",
    borderRadius:20,
    paddingHorizontal:'15%',
    paddingVertical:8,
    fontWeight:'600',
    fontSize:16
  },
  typeTagOne:{
    backgroundColor:'black',
    color:'white'
  }
});

export default FashionTypes;
