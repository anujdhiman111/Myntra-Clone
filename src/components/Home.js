// import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, Button, TextInput} from 'react-native';


const Home = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <View>
            <Text>Home Page</Text>
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop:'20%',
    },
    // label: {
    //   fontSize: 16,
    //   marginBottom: 8,
    // },
    // input: {
    //   height: 40,
    //   borderColor: 'gray',
    //   borderWidth: 1,
    //   marginBottom: 16,
    //   paddingHorizontal: 10,
    // },
    // title: {
    //   fontSize: 20,
    //   fontWeight: 'bold',
    //   color: 'blue',
    //   marginBottom:10
    // },
});

export default Home