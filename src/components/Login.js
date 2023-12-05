import {SafeAreaView, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async() => {
    try {
      const response = await axios.post('http://192.168.0.107:3001/checkData', 
        {
          username:username,
          password:password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Login successfully:', response.data);
      navigation.navigate('Home')
    } 
    catch (error) {
      console.error('Error during Login:', error.message);
    }
  };
  const handleSignUp = () =>{
    navigation.navigate('Signup')
  }
    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.mainContent}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your username"
          />
    
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry = {true}
          />
          <TouchableOpacity onPress={handleLogin} style = {styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonText} onPress={handleSignUp}><Text>Not have an Account?</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'65%',
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

export default Login