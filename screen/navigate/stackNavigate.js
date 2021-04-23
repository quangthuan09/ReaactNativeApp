
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './../home';
import AddCustomerScreen from './../home/addCustomer';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {

    
const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AddCustomerScreen" component={AddCustomerScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}