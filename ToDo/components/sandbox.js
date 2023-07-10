import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Sandbox(){
    return (
        <View style = {styles.container}>
        <Text style ={styles.boxOne}> one </Text>
        <Text style ={styles.boxTwo}> two </Text>
        <Text style ={styles.boxThree}> three </Text>
        <Text style ={styles.boxFour}> four </Text>
        
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        paddingTop:50,
        backgroundColor: '#fff',
        flex:1, //takes all the available places
        flexDirection:'column ',
        justifyContent: 'space-around',//center,flex-start,flex-end,space-between,space-around
       // alignItems:'center',//hepsi farklı boyda olursa ortalamaya yarar

    },

    boxOne:{
        backgroundColor:'red',
        padding:10,
        //flex:1,
    },
    boxTwo:{
        backgroundColor:'gray',
        padding:10,
        //flex:1,
    }, 
    boxThree:{
        backgroundColor:'#ddd',
        padding:10,
        //flex:1,
    },
    boxFour:{
        backgroundColor:'blue',
        padding:10,
        //flex:1,
    },


});