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

renderItem=({item,i})=>{
return(
    <ListItem
    key={i}
    title={item.item_name}
    subTitle={item.description}
    titleStyle={{color:'black', fontWeight:'bold'}}
    rightElement={
        <TouchableOpacity>
            <Text style={{color:'#ffff'}}>Exchange</Text>
        </TouchableOpacity>
    }
    bottomDivider
    />
)
}
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.allRequests}
        renderItem={this.renderItem}/>
      </View>
    );
  }
}

export default HomeScreen;
