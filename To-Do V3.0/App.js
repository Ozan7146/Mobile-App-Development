import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondPage from './component/Pages/SecondPage';
import Home from './component/Pages/Home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Second" component={SecondPage} />
          <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}