// import React,{useState} from 'react';
// import { View, Text,TextInput, FlatList, Button,StyleSheet, TouchableOpacity } from 'react-native';




// export default function HomePage() {

//   const [text,setText] = useState('');
//   const [task,setTask] = useState([
//     {text:'Buy Coffee',key:'1'}
//   ])
//   const submitHandler=(text)=>{
//     setTask((prevTask)=>{
//       return [
//         {text:text,key:Math.random().toString()},...prevTask]
//     })
//   }


//   return (
//    <View> 
    
//       <TextInput
//         style ={styles.input}
//         placeholder='Enter To Do Here'
//         onChangeText = {text=>setText(text)}
//       />
//      <TouchableOpacity>
//       <Button
//         onPress={()=>submitHandler(text)}
//         title='Add To Do' color='black'/>
//         {/* style={styles.input} */}
//     </TouchableOpacity>
//    </View>
//   );}


//   const styles =StyleSheet.create({
//     input:{
//         marginBottom:10,
//         paddingHorizontal:8,
//         paddingVertical:6,
//         borderBottomWidth:1,
//         borderBottomColor: '#ddd'

//     }


// })
//-------------------------------------------------------------------------------------------------------------------



import React, {cloneElement, useState} from 'react';
import {StyleSheet, Text, View, FlatList,onPress,Alert,TouchableWithoutFeedback,Keyboard,Button} from 'react-native';
import Header from './components/header';
import ToDoItem from './components/Todoitem';
import AddTodo from  './components/addTodo';


export default function HomePage({navigation}) {
 
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);
    
const [deleted, sendDeleted] = useState([])

const pressHandler = (item) => {
 
  
    //const deletedItem = prevTodos.find((todo) => todo.key === key);
    sendDeleted((prevTodos)=> {
    return [{text:item.text,key:item.key},
            ...prevTodos
    ]
  })
    
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != item.key)     
  });
}
// console.log({deleted})

const submitHandler=(text)=>{
if(text.length > 3){

setTodos((prevTodos)=>{
  return [
    {text: text,id: Math.random().toString()},
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
            <Button 
            title='Other Page'
            onPress={()=>navigation.navigate('SecondPage', {blogpost:deleted})
          }
            />
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