import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker, Dimensions } from 'react-native';
import {Content, Container, Thumbnail} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class SideBar extends Component{
render(){
    let screen_width = Dimensions.get('window').width;
    let screen_height = Dimensions.get('window').height;
    return(
        
        <Content style= {{backgroundColor : '#ffffff'
        }}>
        <View style ={{
            width: screen_width,
            height: screen_height
            //  flex: 1,
            // flexDirection: 'column'
            }}>
            <View style={{
            flex: 10,
            marginLeft: 40,
            marginTop: 5
             }}>
        {/* <View style={{flex: 0.7, marginLeft: 40, marginTop: 15}}> */}
        <Thumbnail source = {{uri:'https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg'}}/>
        {/* </View> */}
        </View>


        <View style={{
            flex: 10,
            margin: 5
             }}>

        <View style = {{
            flex: 1,
            flexDirection: 'row'
        }}>
        <View style= {{flex: 0.65}}> 
        <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
        }}>  Swetha Gunta </Text> 
        <Text style = {styles.smallfont}> @svgunta </Text>
        </View>
        {/* closed 0.65 */}
         <View style={{flex: 0.35}}>
        <Picker><Picker.Item label=""/></Picker>
         </View>
         {/* closed 0.35 */}
        </View>
        {/* closed flex:1 */}
        </View>
        {/* closed */}

        <View style= {{flex: 5}}> 
        <View style = {{
            flex: 1,
            flexDirection: 'row',
            marginLeft: 15,
            alignItems: 'center'
        }}>
        <Text style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold'
            }}>
        690 <Text style = {styles.smallfont}> Following </Text>
        
        <Text style={{
            color: '#000000',
            fontSize: 20,
            fontWeight: 'bold'
             }}>
        653 <Text style = {styles.smallfont}> Followers </Text>   </Text>
        </Text>
        </View>
        {/* closed row flex */}
        </View>
        {/* closed */}
        
        <View style={styles.hrline}/>
             
        <View style={{flex: 35, alignContent:'center'}}>

            <View style={{
                margin: 15
            }}>
         <Text style = {styles.sizemar}> 
         <Ionicons name = "ios-person-outline" size = {28} /> Profile </Text>
         </View>
         <View style={{
                margin: 15
            }}>
         <Text style = {styles.sizemar}> 
         <Ionicons name = "ios-list-box-outline" size = {28} /> Lists </Text>
         </View>
         <View style={{
                margin: 15
            }}>
         <Text style = {styles.sizemar}> 
         <Ionicons name = "ios-flash-outline" size = {28} /> Moments </Text>
         </View>
         <View style={{
                margin: 15
            }}>
         <Text style = {styles.sizemar}> 
         <Ionicons name = "ios-paper-outline" size = {28} /> Highlights </Text>     
         </View>
        </View>
         <View style={styles.hrline}/>

        <View style={{flex: 30}}>
         <View style = {{
             margin: 10
         }}>
         <Text style = {styles.sizemar}> Settings and privacy </Text>
         </View>
         <View style = {{
             margin: 10
         }}>
         <Text style = {styles.sizemar}> Help Centre </Text>
         </View>
         </View>

         <View style={styles.hrline}/>

         {/* the footer */}
         <View style= {{
             flex: 10
             }} >
         
          <View style={{
            margin: 15,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',       
         }}>
         <Ionicons name = "ios-moon-outline" size = {28} />      
         <Ionicons name = "ios-grid-outline" size = {28} />
         </View> 
         </View>
         </View>
    </Content>
    
);
    
}
}
 const styles = StyleSheet.create({
     sizemar: {
         color: '#000000',
         fontSize: 24
     },
     hrline: {
        borderBottomColor: '#808080',
        borderBottomWidth: 1
     },
     smallfont: {
        color: '#808080',
        fontSize: 18,
        marginRight: 20,
        marginLeft: 10
     }
 });