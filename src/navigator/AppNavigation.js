import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import Home from '../components/Home';
import VerifyOtp from '../components/VerifyOtp';
import ShowProducts from '../components/ShowProducts';
import FashionTypes from '../components/FashionTypes';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="ShowProducts" component={ShowProducts} options={{headerShown: false}} />
      <Stack.Screen name="FashionTypes" component={FashionTypes} options={{headerShown: false}}/>

    </Stack.Navigator>
  );
};
export default AppNavigation
