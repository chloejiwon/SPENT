import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  StatusBar, 
  TextInput, 
  Dimensions,
  Platform
 } from 'react-native';

const {height, width} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.title}>SPENT</Text>
      <View style ={styles.card}>
        <TextInput style={styles.input} placeholder={"Money"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    color:"gray",
    fontSize:30,
    marginTop:50,
    fontWeight: "400",
    marginBottom:30
  },
  card : {
    backgroundColor: "gray",
    flex : 1,
    width: width - 50,
    ...Platform.select({
      ios:{
        shadowColor : "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android:{
          elevation: 3
      }
    })
  }
});
