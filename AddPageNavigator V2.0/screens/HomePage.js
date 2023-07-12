import React,{useState} from 'react';
import {View,TextInput,Button, StyleSheet} from 'react-native';



export default function HomePage({navigation}){
    const[post,setPost]=useState({
        name:' ',
        content: ' ', 
    })
    return(
        <View style={{height:'100%',justifyContent:'center',alignItems:'center'}}> 
            <TextInput style={styles.container_1} > 
                placeholder="Adiniz" 
                underlineColorAndroid="black"
                {/* style={{width:'50%',textAlign:'center',fontSize:18}} */}
                onChangeText={value=>setPost({...post,name:value})}
            </TextInput>  

            <TextInput style={styles.container_2}> 
                placeholder="Yaziniz" 
                underlineColorAndroid="black"
                multiline={true}
                numberOfLines={5}
                {/* style={{width:'50%',textAlign:'center',fontSize:18}} */}
                onChangeText={value=>setPost({...post,content:value})}
            </TextInput> 

                <Button 
                    title="send"
                    onPress={()=> navigation.navigate('second',{
                    blogpost:post //göndermek istediğimiz değer
                })}
                />
        </View>
        ); 
}

const styles = StyleSheet.create({
    container_1:{
        width:'50%',
        textAlign:'center',
        fontSize:18

    },
    container_2:{
        width:'50%',
        textAlign:'center',
        fontSize:18

    },


})


1