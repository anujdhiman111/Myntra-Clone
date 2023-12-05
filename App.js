// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigator/AppNavigation';
// import { load } from 'react-native-feather';

// load();
export default function App() {
  // console.log("app executed")
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
