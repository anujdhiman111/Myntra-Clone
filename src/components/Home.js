import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import Header from './Header';
import FashionTypes from './FashionTypes';
import Footer from './Footer';
const Home = () => {
  const [searchText, setSearchText] = useState('');
  const search = () => {
    if(searchText != ''){
      console.log(searchText)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View>
        <SearchBar
          placeholder = "Search for brands" 
          backgroundColor = "white" 
          onChangeText = {setSearchText} 
          value = {searchText} 
          onSubmitEditing = {search}
         />
      </View>
      <FashionTypes/>
      <Footer/>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '10%',
    // justifyContent: 'space-between'
  },

});

export default Home