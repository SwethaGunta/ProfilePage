import React, { Component } from 'react';
import  { Body, Right, Container, Button, Icon, Header, Left, Thumbnail, Tab, TabHeading} from 'native-base';
import { Tabs, StyleProvider, Drawer } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Dimensions} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import getvectoriconTheme from './native-base-theme/components';
import SideBar from "./SideBar";
import TabOne from './tabOne';
import TabTwo from './tabTwo';

export default class timeline extends Component {
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
               
            {/* <StyleProvider style={getvectoriconTheme(commonColor)}> */}
                               
                   {/* Dealing with Tabs */}
               <Tabs initialPage= {0}>               
               <Tab  heading={<TabHeading><MaterialCommunityIcons size={40} name="home-circle" /></TabHeading>}>
                <TabOne />
                 </Tab>
                 {/* onPress={this.props.navigation.navigate('TabTwo')} */}
                <Tab heading={<TabHeading><Feather size={40} name="search" /></TabHeading>}>
                 <TabTwo /> 
                 </Tab>
                
                 <Tab heading= {<TabHeading><EvilIcons size={40} name="bell" /></TabHeading>} >
                 {/*  */}
                 <Text> Welcom </Text>
                 </Tab>
                 
                 <Tab heading= {<TabHeading><SimpleLineIcons size={40} name="envelope" /></TabHeading>}>
                 {/*  */}
                 <Text> Welcome </Text>
                 </Tab>
        </Tabs>
                {/* </StyleProvider>   */}
                </Drawer>
            </StyleProvider>
    );
    }
}