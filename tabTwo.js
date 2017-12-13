import React, {Component} from 'react';
import {Content,Container, Header, Button, Item, Input,Footer,FooterTab, Icon} from 'native-base';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import  {StackNavigator} from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Timeline from './timeline';

export default class TabTwo extends Component {
   static navigationOptions={
    header: ({navigation}) => (
       <View>
      <Item style={{
        borderColor: '#000080',
        borderWidth: 2
      }}>
      <TouchableOpacity onPress={()=>{ navigation.goBack() }}><Icon name="arrow-back"/></TouchableOpacity>
        <Input placeholder= "Search" style={{width: 300}}/>    
        <Icon name= "microphone" />
      </Item>  
       </View>
     )     
    }
    render(){
        return(
          <Container>
          <Content/>
          <Footer style={{backgroundColor: '#ffffff'}}>
                <FooterTab>
                    <Button><Text>All</Text></Button>
                    <Button><Text>Mentions</Text></Button>
                    <Button><Text></Text></Button>
                    <Button><EvilIcons name= "gear" size= {14}/></Button>
                    </FooterTab>
                </Footer> 
          </Container>
        );
    }
}