
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import React, { useState }  from 'react';
/*      <Text >Enter Name:</Text>
    <TextInput 
    multiline
    style={styles.TextInputContainer}  
    onChangeText={(val) => setName(val)}
    placeholder= 'e.g. John Doe'/>
    
    <Text>Enter Age:</Text>
    <TextInput style={styles.TextInputContainer}  
    onChangeText={(val) => setAge(val)}
    placeholder= 'e.g. 30'
    keyboardType='numeric'/>
    


      <Text>name: {name},age:{age}</Text>*/

export default function App() {
  //const [name, setName] = useState('Ozan');
  //const [age, setAge] =useState('30');
   const [people,setPeople]=useState([
    {name: "Ozan1",id:'6'},
    {name: "Ozan2",id:'5'},
    {name: "Ozan3",id:'4'},
    {name: "Ozan4",id:'3'},
    {name: "Ozan5",id:'2'},
    {name: "Ozan6",id:'1'},
   ]);
const pressHandler = (id) =>{
   console.log(id);
  setPeople((prevPeople)=>{
    //console.log(prevPeople)
    return prevPeople.filter(a=>a.id !=id)

  })


}
  
  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      //keyExtractor={(item)=>item.id}
      data={people}
      renderItem={({item})=>(
        <TouchableOpacity onPress = {() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>

        </TouchableOpacity>
        

        //kaydırdıkça yükleniyor,Çok fazla listelerde bv u daha mantıklı
      )}
      />
      
      
      {/* <ScrollView> 
        {people.map((item)=>{
          return(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
            //hepsini beraber yüklüyor.Daha kısa veri kümeleri için mantıklı
          )
        })}
    </ScrollView>
     */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:40,
    paddingHorizontal:20,

  },
  buttonContainer:{
    marginTop: 20
  },
  TextInputContainer:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width:200,

  },
  item:{

    marginTop:24,
    padding: 50,
    backgroundColor:'blue',
    fontSize:24,
    marginTop:24,
    marginHorizontal:10,

  }

});
