import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const VerifyOtp = ({navigation}) => {
const [otp, setOtp] = useState();

const handleOtp = async () => {
  try {
    const realOtp = await AsyncStorage.getItem('otp');
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    const name = await AsyncStorage.getItem('name');
    console.log(realOtp,otp)
    if (realOtp == otp) {
      try {
        const response = await axios.post('http://192.168.0.107:3001/checkData', 
          {
            name: name,
            phoneNumber:phoneNumber,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        navigation.navigate('Home')
      } 
      catch (error) {
        console.error('Error during Login:', error.message);
      } 
    } 
    else {
      return null;
    }
  }
  catch (error) {
    console.error('Error retrieving otp information:', error);
    return null;
  }
}
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.mainContent}>
            <Text style={styles.title}>Enter OTP</Text>
            <TextInput
                style={styles.input}
                onChangeText={setOtp}
                value={otp}
                placeholder="Enter your OTP"
            />
            <TouchableOpacity onPress={handleOtp} style = {styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity> 
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:'65%',
  },
  // label: {
  //   fontSize: 16,
  //   marginBottom: 8,
  // },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius:10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom:10,
    textAlign: 'center',
    color:'#F41CB2'
  },
  button: {
    backgroundColor: '#F41CB2',
    padding: 10,
    borderRadius: 5,
    marginBottom: '5%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  mainContent:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
  }
});

export default VerifyOtp