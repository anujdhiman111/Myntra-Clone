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
        <View>
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
    
          <Button title="Login" onPress={handleLogin}/>
          <TouchableOpacity onPress={handleSignUp}><Text>Not have an Account?</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'20%',
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
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom:10
      },
    });

export default Login