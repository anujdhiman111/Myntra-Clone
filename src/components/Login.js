import {SafeAreaView, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [verifyCode, setVerifyCode] = useState(0);

  
  const handleLogin = async() => {
    try {
      const response = await axios.post('http://192.168.0.107:3001/sendOtp', 
        {
          phoneNumber:phoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Login successfully:', response.data);
      const OTP = response.data.otp
      // setVerifyCode(OTP)
      console.log(OTP)
      // console.log(name,phoneNumber,verifyCode)
      saveInfo(name,phoneNumber,OTP)
      navigation.navigate('VerifyOtp')
    } 
    catch (error) {
      console.error('Error during Login:', error.message);
    }
  };
  
  const saveInfo = async (name,phoneNumber,OTP) =>{
    try {
      await AsyncStorage.setItem('name', name.toString());
      await AsyncStorage.setItem('phoneNumber', phoneNumber.toString());
      await AsyncStorage.setItem('otp', OTP.toString());
      console.log('Login information saved successfully');
    } 
    catch (error) {
      console.error('Error saving login information:', error);
    }
  }
    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.mainContent}>
          <Text style={styles.title}>Login <Text style = {styles.orText}>or</Text> Signup</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter your Name"
          />
    
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Enter your Number"
            secureTextEntry = {true}
          />
          <Text style={styles.loginPara}>By continuing, I agree to the <Text style = {styles.subLoginText}>Terms of Use</Text> & <Text style = {styles.subLoginText}>Privacy Policy</Text></Text>

          <TouchableOpacity onPress={handleLogin} style = {styles.button}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>

          <Text style={styles.loginPara}>Having trouble logging in? <Text style = {styles.subLoginText}>Get help</Text></Text>

        </View>
      </SafeAreaView>
    );
  };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'65%',
        // fontFamily:'Verdana'
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderRadius:5
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginBottom:10,
        textAlign: 'left',
        // fontFamily:'Verdana'
      },
      button: {
        backgroundColor: '#FF3F6C',
        padding: 10,
        borderRadius: 5,
        marginBottom: '12%'
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'500',
        fontSize:15
      },
      mainContent:{
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
      },
      orText:{
        fontSize: 18,
        fontWeight: '300'
      },
      loginPara:{
        color:'#535665',
        fontSize:15,
        marginBottom:'8%'
      },
      subLoginText:{
        color:'#FF3F6C',
        fontWeight:'800'
      }
    });

export default Login