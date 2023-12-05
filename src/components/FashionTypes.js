import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-web';

const FashionTypes = () => {
  const fashionArrayOne = ['SHIRTS', 'T-SHIRTS', 'CASUAL SHOES', 'JEANS', 'WINTERWEAR', 'KURTA SETS', 'TROUSERS', 'HEADPHONES']
  const fashionArrayTwo = ['DRESSES', 'KURTAS', 'KIDS', 'PENTS', 'JACKET', 'SAREES', 'HANDBAGS', 'PERSONALCARE']

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.selectFashion}>
        <Text>Fashion</Text>
        <Text>Beauty</Text>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.fashionType}>
          {fashionArrayOne.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
        <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.fashionType}>
          {fashionArrayTwo.map((item, index) => (
            <TouchableOpacity key={index} style={styles.listItem}>
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  selectFashion: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
  scrollView: {
    marginTop: '5%',
  },
  fashionType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height:'10%'
  },
});

export default FashionTypes;
