import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import Home from '../components/Home';
import VerifyOtp from '../components/VerifyOtp';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
export default AppNavigation
