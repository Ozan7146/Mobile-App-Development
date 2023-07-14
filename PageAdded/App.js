import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './Screens/HomePage'
import SecondPage from './Screens/SecondPage'

export default function App(){
  
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
       <Stack.Navigator> 
        <Stack.Screen name = 'Anasayfa' 
          options = {{title:'Home Page',
            headerTitleStyle: {
              color: 'black',
              fontWeight: 'bold',
              alignItems:'center',
              justifyContent:'center'
      
            },
            headerStyle: {
              backgroundColor: 'gray',
            },
          }} 
            component={HomePage} />
        <Stack.Screen name = "Second" options = {{title:'Second Page'}} component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
   

  );
}





{/* initialRouteName="Second" */}