import { View, Text, ScrollView,Image, StyleSheet } from 'react-native'
import React, { useState,useEffect} from 'react'

export default function App() {
  const[data,setData]=useState([])
  // const url = "https://jsonplaceholder.typicode.com/posts"
  const Pageurl = "https://jsonplaceholder.typicode.com/photos"
  const[loading,setLoading] = useState(true)
  useEffect(()=>{
    fetch(Pageurl)
    .then((response)=>response.json()
    .then((dat)=>setData(dat)))

    .catch((error)=>console.error(error))
    .finally(()=>setLoading(false))
  },[])
  
  return(
    
      loading ?
      <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
        <Image style={styles.logo}  source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'}}  />
      </View>
      :
      <ScrollView>
        <View style={styles.container}>
        {
          data.map((post)=>(
            <View>
              <Text>{post.title} </Text>
              {/* <Text>{post.body}</Text> */}
               <Image source={{uri:post.url}} style={{width:100,height:100}}/> 
            </View>
          ))
        }
       
        </View>
      </ScrollView>
      
      
    
  )
 
}

const styles = StyleSheet.create({
  logo: {
      alignSelf:'center',
      width: 100,
      height: 100,

  },
  container:{
    flex:1,
    backgroundColor:'#dcdcdc',

    

  }
});