import React, {Component} from 'react';
import {Content, Container, Button, Thumbnail, Header} from 'native-base';
import {View, Picker, StyleSheet, Text, Dimensions} from 'react-native';

export default class firsttab extends Component {
    render(){
        let screen_width = Dimensions.get('window').width;
        let screen_height = Dimensions.get('window').height;
    return(
        <View style={{
            width: screen_width,
            height: screen_height,
            flex: 1,
            flexDirection: 'column'
        }}>

        <View style = {{
            flex: 0.5,
            backgroundColor: '#000000'
        }}>
        {/* <View style={{width: 0.20*screen_width, height: 0.50*screen_height, backgroundColor: '#FF00FF'}}></View><View style={{width: 0.80*screen_width, height: 0.50*screen_height, backgroundColor:'#98AFC7'}}> </View> */}
            
        <View style={{flex: 1, flexDirection: 'row'}}><View style={{flex: 0.25, backgroundColor: '#FF00FF'}}></View></View>    
            </View>
        <View style={{
            flex: 0.5,
            backgroundColor: '#808080'
        }}>
            </View>            
        </View>
    );
    }
}