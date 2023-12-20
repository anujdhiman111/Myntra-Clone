import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import { Search, Camera, Mic } from "react-native-feather";
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
      <SafeAreaView style = {styles.mainContent}>
        <View style={styles.container}>
          <Header/>
          <View style = {styles.searchContainer}>
            <Search style = {styles.searchIcon} stroke="grey" fill="#fff" width={18} height={20}/>
            <Camera style = {styles.cameraIcon} stroke="grey" fill="#fff" width={18} height={20}/>
            <Mic style = {styles.micIcon} stroke="grey" fill="#fff" width={18} height={20}/>
            <TextInput
              placeholder = "Search for brands A to Z" 
              onChangeText = {setSearchText}
              value = {searchText} 
              onSubmitEditing = {search}
              style = {styles.SearchBar}
            />
          </View>
          <FashionTypes/>
        </View>
        <View style = {styles.saleImageContainer}>
          <Image source={require('../../images/myntraSalePoster.png')} style={styles.saleImage}/>
        </View>
        <Footer/>
      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  mainContent:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between',
    backgroundColor: 'white',
    paddingTop: '12%',
  },
  container: {
    paddingHorizontal:'3%'
  },
  searchContainer:{
    position:'relative'
  },
  SearchBar:{
    paddingHorizontal:45,
    paddingVertical:5,
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:20,
    
  },
  searchIcon:{
    position:'absolute',
    top:10,
    left:'5%'
  },
  cameraIcon:{
    position:'absolute',
    top:10,
    right:'15%'
  },
  micIcon:{
    position:'absolute',
    top:10,
    right:'5%'
  },
  saleImageContainer:{
    width:'100%',
    height:'27%',
    // resizeMode: 'contain',
  },
  saleImage:{
    width:'100%',
    height:'100%',
    resizeMode:'contain'
  }

});

export default Home