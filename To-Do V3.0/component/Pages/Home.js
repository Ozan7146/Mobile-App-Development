import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, onPress ,Alert,TouchableWithoutFeedback,Keyboard,Button} from 'react-native';
import Header from './component/header';
import ToDoItem from './component/Todoitem';
import AddTodo from  './component/addTodo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigate from './component/Pages/Navigate';


export default function Home({navigation}) {
 
const Stack = createNativeStackNavigator();
const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);

  });
}

const submitHandler=(text)=>{
if(text.length > 3){
 
setTodos((prevTodos)=>{
  return [
    {text: text,key: Math.random().toString()},
    ...prevTodos
  ];
})
}
  else{
    Alert.alert('Alert!','Must be Longer than 3',[
      {text:'close',onPress:()=> console.log('alert closed')}
    ]);
  }

}

  return (
  
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}> 
    
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          {/* to form */}
          <View style={styles.list}>
              <FlatList
              data={todos}
              renderItem={({item}) =>(
                  <ToDoItem item={item} pressHandler={pressHandler}/>
              )}
             />
              <Button title="next page" onPress={()=> navigation.navigate('Second')} />
              
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
 
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
    backgroundColor: 	'#DCDCDC',
    flex:1,
  },
  list: {
    marginTop: 20,
    backgroundColor:'#C0C0C0',
  },
});