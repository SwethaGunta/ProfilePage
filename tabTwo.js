import React, {Component} from 'react';
import {Content,Container, Header, Button, Item, Input,Footer,FooterTab, Icon} from 'native-base';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import  {StackNavigator} from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class TabTwo extends Component {
   static navigationOptions={
    headerLeft: (<TouchableOpacity onPress={()=>navigation.goBack()}><Icon name="arrow-back"/></TouchableOpacity>), 
    header: (
       <View>
      <Item style={{
        borderColor: '#000080',
        borderWidth: 2
      }}>
        <Input placeholder= "Search" />    
        <Icon name= "microphone" />
      </Item>  
       </View>
     )     
    }
    render(){
        return(
          <Container>
            {/* <Header searchBar rounded style={{
        backgroundColor: 'grey'
        }}>
      <Item style={{
        borderColor: '#000080',
        borderWidth: 2
      }}>
        <Input placeholder= "Search" />    
        <Icon name= "microphone" />
      </Item>   
          </Header> */}
          <Content/>
          <Footer>
                <FooterTab>
                    <Button><Text>All</Text></Button>
                    <Button><Text>Mentions</Text></Button>
                    <Button><Text></Text></Button>
                    <Button><EvilIcons name= "gear" /></Button>
                    </FooterTab>
                </Footer> 
          </Container>
        );
    }
}