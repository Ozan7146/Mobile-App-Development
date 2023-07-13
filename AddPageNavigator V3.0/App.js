import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './Screens/HomePage'
import SecondPage from './Screens/SecondPage'

export default function App(){
  
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
    
   

  );
}