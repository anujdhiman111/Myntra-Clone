import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    const footerArray = ['Home', 'Hot Trends', 'Everyday', 'Brands', 'Anuj']
  return (
    <SafeAreaView style = {styles.footerContainer}>
        <View style = {styles.footerContent}>
            {footerArray.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    footerContainer:{
        display:'flex',
        backgroundColor: 'gold',
        justifyContent: 'end',
        paddingHorizontal: '5%',
        paddingVertical: '5%'
    },
    footerContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Footer