import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Button} from 'react-native';

export default function HomePage({navigation}){ //sayfa değiştirmek için navigate diyorsun
  const [post,setPost] = useState({
    name:'',
    content:''


  })

  return(
    <View style={styles.item} > 
        <TextInput 
          placeholder="Your Name"
          underlineColorAndroid='black'
          style={{width:'50%',textAlign:'center',fontSize:18}}
          onChangeText={value => setPost({...post,name:value})} // kullanıcının yazdığı text i alır ve bunu value içine atar
          >
        </TextInput>

        <TextInput 
          placeholder="Describe Yourself"
          underlineColorAndroid='black'
          multiline={true} //çoklu yazmayı aktif eder
          numberOfLines={5} //yazı yazma alanını büyütür
          style={{width:'50%',textAlign:'center',fontSize:18}}
          onChangeText={value => setPost({...post,content:value})} 
          >
        </TextInput>

        <Button
          title="Send"
          onPress={()=>navigation.navigate('Second',{blogpost:post // (gitmek istediğn sayfanın adı,{göndermek istediğin parametre})
})} //gitmek istediğimiz sayfanın adı(name)
        
        /> 
    </View>

  );
 
}

const styles = StyleSheet.create({
  item:{
    height:'100%',
    justifyContent:'center', //sadece y eksenşnde ortalar
    alignItems:'center', //kullandığın eksenin karşıt ekseni için düzenler
    backgroundColor: '#dcdcdc'  
  },   


});