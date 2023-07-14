import React from 'react';
import {View,Text} from 'react-native';

export default function SecondPage({route}){ //App.js den second içindekilere erişmek içim route kullanırsın
 
  return(
    <View alignItems="center"> 
        <Text>{route.params.blogpost.name}</Text>
        <Text>{route.params.blogpost.content}</Text>
    </View>

  );
}