import { View, Text } from 'react-native'
import React from 'react'

export default function SecondPage({route,navigation}) {
    // const deletedToDos = [route.params]
    const { deleted } = route.params;
    return (
    <View>
       <Text >{deleted} </Text>
    </View>
  )
}