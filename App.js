import React ,{Component} from 'react';
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


class Friend extends Component{
  render(){
    return(
      <View style = {{alignItems:'center'}}>
        <TextInput 
        style={styles.input} 
        placeholder={"Put Friends Number"} 
      //  value={this.newFriend}
      //  onChangeText={this._controlFriend}
        placeholderTextColor={"#999"}
        returnKeyType={"done"}
        autoCorrect={false}
        />
      </View>
    )
  }
}

export default class App extends Component{
  state = {
    newFriend:"",
    newMoney:""
  }
  render(){
    const {newMoney} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.title}>SPENT</Text>
        <View style ={styles.card}>
          <Friend />
        </View>
        <View style ={styles.card}>
          <TextInput style={styles.input} placeholder={"Money"}/>
        </View>
      </View>
    );
  }
  _controlMoney = text => {
    this.setState({
      newMoney: text
    })
  }
  _controlFriend = text=>{
    this.setState({
      newFriend:text
    })
  }

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
    flex : 0.3,
    width: width - 50,
    marginTop:10,
    textAlign:'center',
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
  },
  input:{
    textAlign:'center',
    fontSize:20
  }
});
