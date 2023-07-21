import { View, Text, FlatList,StyleSheet,Image } from 'react-native'
import React from 'react' 
import Data from '../DATA.json'



export default function GetData() {


// console.log(Data)
// const renderItem = ({ item }) => (
//   <ProductItem title={item.title} description={item.description}  image={item.image} />
// );  

const data = Object.values(Data); // JSON'daki verileri diziye çeviriyoruz

return (
<View style={styles.main}>
    <FlatList
    data={data} // JSON dosyasından aldığımız verileri FlatList'e veriyoruz
    renderItem={({item}) => (
      <ProductItem title={item.title}  description={item.description}  image={item.image}/>
   )}
    keyExtractor={(item) => item.key} />
</View>

  )
}

const ProductItem = ({ description, title , image }) => (
    <View style={styles.container}>
        
        <View>
          <Image style={styles.image} source={{uri: image}}/>
        </View>     

        <View>
          <Text >{title}</Text>
          <Text >{description} </Text>
        </View>

    </View>
    
);


const styles = StyleSheet.create({
  main:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'black',
    justifyContent:'center',

    
  },
  container:{
      flex:1,
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 10,
      backgroundColor:'#dcdcdc',
      margin:10

  },  
  item: {
    marginTop: 20,
    color:'black',
  },
  title: {
    textAlign: 'center',
    padding: 16,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    marginLeft: 20,
    marginRight:20,
    
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
  },
});



