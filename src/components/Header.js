import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Bell, Heart, ShoppingBag, ChevronDown, ChevronRight } from "react-native-feather";
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView style = {styles.header}>
      <View style = {styles.logoContainer}>
        <Text style = {styles.logo}>Myntra</Text>
        <ChevronDown style = {styles.chevronDownIcon} stroke="red"  width={21} height={21} />
      </View>

      <View style = {styles.contentContainer} marginLeft = {25}>
        <Image source={require('../../images/crownImage.jpg')} style={styles.image}/>
        <View style = {styles.insiderContainer}>
          <Text style = {styles.insiderContainerText1}>BECOME</Text>
          <View style = {styles.textContainer}>
            <Text style = {styles.insiderContainerText2}>INSIDER</Text>
            <ChevronRight style = {styles.chevronRightIcon} stroke="gold"  width={18} height={18} />
          </View>
        </View>
      </View>

      <View style = {styles.headerIcon}>
        <Bell stroke="black" fill="#fff" width={25} height={25} />
        <Heart stroke="black" fill="#fff" width={25} height={25} />
        <ShoppingBag stroke="black" fill="#fff" width={25} height={25} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '5%',
      width:'100%'

    },
    headerIcon:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width:'30%'

    },
    logo:{
      fontSize:18,
      fontWeight:'600'
    },
    logoContainer:{
      position:'relative',
    },
    chevronDownIcon:{
      position:'absolute',
      top:4,
      left:'100%'
    },
    contentContainer:{
      flexDirection: 'row',
      marginLeft:'5%',

    },
    image:{
      width:'30%',
      height:'90%',
      resizeMode: 'contain',
    },
    textContainer:{
      display:'flex',
      flexDirection:'row'
    },
    insiderContainerText1:{
      fontSize:11,
      fontWeight:'600',
    },
    insiderContainerText2:{
      fontSize:13,
      fontWeight:'600',
      color:'gold'
    },
  });

export default Header