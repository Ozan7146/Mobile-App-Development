
import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'



export default function App() {
  return (
    <View >
      <Text style={sytles.prop}>App</Text>
    </View>
  )
}


const sytles=StyleSheet.create({
  prop:{
    textDecorationLine: 'line-through'
  }

})