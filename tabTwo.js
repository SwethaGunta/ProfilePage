import React, {Component} from 'react';
import {Content, Header, Button, Item, Input, Icon} from 'native-base';
import {Text, View, Dimensions} from 'react-native';
import  {StackNavigator} from 'react-navigation';
export default class TabTwo extends Component {
  static navigationOptions = {
    header: null
  };
    render(){
        return(
        <Content>
        <View style={{
          flex:10
        }}>
      <Header searchBar rounded style={{
        backgroundColor: 'grey'
        }}>
      <Item style={{
        borderColor: '#000080',
        borderWidth: 2
      }}>
       <Icon name= "search"/>
        <Input placeholder= "Search" />    
        <Icon name= "microphone" />
      </Item>   
          </Header>
          </View>
          </Content>
        );
    }
}