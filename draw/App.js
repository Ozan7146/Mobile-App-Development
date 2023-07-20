
import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'

const [line,setLine] = useState([
  {key:'1',name:'Hello',stateof:false},
  {key:'2',name:'Hello',stateof:false},
])

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