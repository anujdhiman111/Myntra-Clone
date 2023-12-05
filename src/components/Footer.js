import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    const footerArray = ['Home', 'Hot Trends', 'Everyday', 'Brands', 'Anuj']
  return (
    <SafeAreaView style = {styles.container}>
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
    container:{
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    footerContent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Footer