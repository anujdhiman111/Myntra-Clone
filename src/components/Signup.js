import { StyleSheet, Text, View,SafeAreaView, TextInput, TouchableOpacity, Button} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://192.168.0.107:3001/sendData', 
        {
          username:username,
          password:password,
          email:email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('User registered successfully:', response.data);
      navigation.navigate('Login')
    } 
    catch (error) {
      console.error('Error during registration:', error.message);
    }
  }
  const redirectLogin = () => {
    navigation.navigate('Login')
  }
    return (
      <SafeAreaView style = {styles.container}>
        <View>
          <Text style={styles.title}>Signup</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your username"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry = {true}
          />
          
          <Button title='Signup' onPress={handleSignup}>Signup</Button>

          <TouchableOpacity onPress={redirectLogin}><Text>Login</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop:'20%'
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
      marginBottom: 10
    },
    error:{
      color: 'red',
    }
  });

export default Signup