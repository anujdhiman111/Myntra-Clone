// import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Bell, Heart, ShoppingBag } from "react-native-feather";
// import { SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
const Header = () => {
  return (
    <View style = {styles.header}>
        <View>
          <Text>Myntra</Text>
        </View>
        <View>
          <Text>BECOME INSIDER</Text>
        </View>
        <View style = {styles.headerIcon}>
          <Bell stroke="black" fill="#fff" width={25} height={25} />
          <Heart stroke="black" fill="#fff" width={25} height={25} />
          <ShoppingBag stroke="black" fill="#fff" width={25} height={25} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '4%'
    },
    headerIcon:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  
  });
  

export default Header