import React, { Component } from 'react';
import  { Body, Right, Container, Content, Button, Icon, Header, Left, Thumbnail, Tab, TabHeading} from 'native-base';
import { Tabs, StyleProvider, Drawer, Segment } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Dimensions} from 'react-native';
import {StackNavigator, NavigationActions} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import getvectoriconTheme from './native-base-theme/components';
import SideBar from "./SideBar";
import TabOne from './tabOne';
//import TabTwo from './tabTwo';
//import TabThree from './TabThree';

export default class Timeline extends Component {
    static navigationOptions= {
        header: null
    }
    openDrawer = () => {
        this.drawer._root.open()
        }
    closeDrawer = () => {
          this.drawer._root.close()
    }
    render(){
        let screen_width = Dimensions.get('window').width;
        let screen_height = Dimensions.get('window').height;
        return(
            // Main Container
            <StyleProvider style={getTheme(commonColor)}>
             <Drawer 
                  ref = { (ref)=> {this.drawer = ref;}}
                 content = { <SideBar />}
                  onClose = {this.closeDrawer}
                  >  
                
                {/* Beautify Header */}
            <Container>
             <Header hasTabs style={{
                 backgroundColor: '#ffffff',
             }}>
               <Left>
               <Button transparent iconLeft onPress= {this.openDrawer}>  
               <Thumbnail small source = {{uri: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg'}}/>
               </Button>
               </Left>
                   <Text style={{
                       fontSize: 20,
                       fontWeight: 'bold',
                       margin:15
                   }}>Home</Text>
               <Body/>
               <Right/>
               </Header>
                               
                   {/* Dealing with Tabs */}
                <Segment style={{
                    backgroundColor: '#ffffff',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: 60
                }}>
                <Button first active style={{
                    width: 0.25*screen_width,
                    backgroundColor: '#ffffff'
                }}><MaterialCommunityIcons size={40} name="home-circle" /></Button>    
                <Button style = {{
                    width: 0.25*screen_width,
                    backgroundColor: '#ffffff'
                }}onPress={()=>{this.props.navigation.navigate('TabTwo')}}><Feather size={40} name="search" /></Button>
                <Button style={{width: 0.25*screen_width}}><EvilIcons size={40} name="bell" /></Button>
                <Button last style={{width: 0.25*screen_width}}><SimpleLineIcons size={40} name="envelope" /></Button>
                </Segment>   

                <Content>
                <TabOne/>
                </Content>
              
                </Container>
                </Drawer>
            </StyleProvider>
    );
    }
}
