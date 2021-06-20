import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    KeyBoardAvoidingView,
    ScrollView,
} from 'react-native';
import{
    Avatar,
    Badge,
    Input,
    Card,
    Header,
    Icon,
    ListItem,
    SearchBar,
    Tile
} from 'react-native-elements'

import firebase from 'firebase'
import { Alert } from 'react-native';

class ExchangeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName:'',
        itemName:'',
        itemDescription:'',
    };
  }
  addItem=(itemName, itemDescription)=>{
    var userName=this.state.userName
    db.collection('exchange_request').add({
        'username':userName,
        'item_name':itemName,
        'Description':itemDescription
    })
    this.setState({
        itemName:'',
        itemDescription:'',
    })

    return Alert.alert(
        'item ready for exchange','',[
            {text:'OK',onPress:()=>{
                this.props.navigation.navigation('HomeScreen')
            }}
        ]
    )
  }
  render() {
    return (
      <View>
         <Input
   placeholder="Item name"
   onChangeText={value => this.setState({ itemName: value })}
  />
        <Input
   placeholder="Description"
   onChangeText={value => this.setState({ itemDescription: value })}
  />
    <TouchableOpacity
    style={{marginTop:10}}
    onPress={()=>{
        this.addItem(this.state.itemName,this.state.itemDescription)
    }}> 
        <Text style={{color:'#ffff' ,fontSize:18,fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>    
      </View>
    );
  }
}

export default ExchangeScreen;
