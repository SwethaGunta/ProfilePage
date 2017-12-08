import React, {Component} from 'react';
import {Content, Container, Button, Thumbnail, Header, ListItem} from 'native-base';
import {View, Picker, StyleSheet, Text, Dimensions, Image} from 'react-native';
import  SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TabOne extends Component {
    static navigationOptions = {tabBarLabel: 'Home'}
    render(){
        //let screen_width = Dimensions.get('window').width;
        // let screen_height = Dimensions.get('window').height;
        return(
            <Content>
            <View style={{
                // width: screen_width,
                // height: screen_height,
                flex: 1,
                flexDirection: 'column'
                // margin:10,
                //considering entire screen as 1
            }}>
            <View style={{flex: 0.60, marginTop: 10}}> 
             {/* getting 60% of screen */}
            <View style= {[styles.full, styles.row_dir]}>
            {/* Considering 60% of screen as full */}
            <View style={{
                flex: 0.20,
                 // take 20% in the 60%
                 marginLeft: 20
            }}>
            <Thumbnail size={50} source = {{uri: 'https://cdn.pixabay.com/photo/2017/07/18/15/37/idea-2516126_960_720.png'}} />
            </View>
            <View style={{
                //take 80% in the 60%
                flex: 0.80 
            }}>
            <View style={[styles.full, styles.col_dir]}>
            <View style={{flex: 0.30}}> 
            <View style={[styles.full, styles.row_dir]}>
            <View style={{flex: 0.90, justifyContent:'flex-start'}}>
            <Text style={styles.mainname}>Smarter Every Day <Text style={styles.subname}>@smart... 30m</Text></Text>
            <Text style={styles.text}>What can you do and where are you from? <Text style={styles.link}> ift.tt/365hfcbdQLd </Text></Text>  
            </View>
            <View style= {{flex: 0.10}}>
            <Picker><Picker.Item label=" "/></Picker>         
            </View>
            </View>
            </View> 
            {/* closed flex: 0.30 */}
            <View style={{flex: 0.60, marginTop: 5, marginBottom: 5}}>
              <Image  style={{
                width: 300,
                height:210,
                borderRadius: 7
                 }}  
                    source= {{uri: 'https://www.readytowakeup.biz/wp-content/uploads/2017/04/What-is-your-big-idea.png'}}/>
            </View>
            <View style={{flex: 0.10, marginTop: 3, marginBottom: 3}}>
            <View style = {[styles.full, styles.row_dir]}>
            
            <View style = {[styles.quarter, styles.row_dir]}><SimpleLineIcons name="bubble" size= {18}/><Text style={styles.myicon}>60</Text></View>
            <View style = {[styles.quarter,styles.row_dir]}><Ionicons name="ios-repeat-outline" size= {22}/><Text style={styles.myicon}>2</Text></View>
            <View style = {styles.quarter}><SimpleLineIcons name="heart" size= {18}/></View>
            <View style = {styles.quarter}><SimpleLineIcons name="envelope" size= {18}/></View>
            {/* <Text style={{
          
            }}></Text> */}
            </View>
            </View>
            </View>
            </View>
            </View>
            </View>
            <View style={styles.hrline}/>
            <View style={{flex: 0.40, marginTop: 10}}>
            
            {/* second thumbmsg */}
            
            <View style= {[styles.full, styles.row_dir]}>
            {/* Considering 60% of screen as full */}
            <View style={{
                flex: 0.20,
                 // take 20% in the 60%
                marginLeft: 20
           }}>
            <Thumbnail size={50} source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Jack-o%27-Lantern_2003-10-31.jpg'}} />
            </View>
            <View style={{
                //take 80% in the 60%
                flex: 0.80 
            }}>
            <View style={[styles.full, styles.col_dir]}>
            <View style={{flex: 0.30}}> 
            <View style={[styles.full, styles.row_dir]}>
            <View style={{flex: 0.90, justifyContent:'flex-start'}}>
            <Text style={styles.mainname}>Halloween <Text style={styles.subname}>@hal... 24m</Text></Text>
            <Text style={styles.text}>Welcome to my Halloween Party! </Text>  
            </View>
            <View style= {{flex: 0.10}}>
            <Picker><Picker.Item label=" "/></Picker>         
            </View>
            </View>
            </View> 
            {/* closed flex: 0.30 */}
            <View style={{flex: 0.60}}>
              <Image  style={{
                width: 300,
                height:210,
                borderRadius: 7
                 }}  
                    source= {{uri: 'http://cdn.lamag.com/wp-content/uploads/sites/9/2017/09/halloween4-1.jpg'}}/>
            </View>
            {/* <View style={{flex: 0.10}}>
            <View style = {[styles.full, styles.row_dir]}>
             */}
            {/* <View style = {[styles.quarter, styles.row_dir]}><SimpleLineIcons name="bubble" size= {18}/><Text style={styles.myicon}>60</Text></View>
            <View style = {[styles.quarter,styles.row_dir]}><Ionicons name="ios-repeat-outline" size= {22}/><Text style={styles.myicon}>2</Text></View>
            <View style = {styles.quarter}><SimpleLineIcons name="heart" size= {18}/></View>
            <View style = {styles.quarter}><SimpleLineIcons name="envelope" size= {18}/></View> */}
            {/* <Text style={{
          
            }}></Text> */}
            {/* </View>
            </View> */}
            </View>
            </View>
            </View>

            {/* end of mesg */}
            
            
            </View>
            </View>  
            </Content>             
        );
    }
}

const styles = StyleSheet.create({
    mainname: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subname: {
        color:'#808080',
        fontSize: 16,
    },
    text:{
        fontSize: 18,
        color: '#000000'
    },
    link: {
        color: '#00bfff',
        fontSize: 18
    },
    myicon:{
        fontSize: 14,
        color: '#808080',
        textAlignVertical: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    full:{flex: 1},
    half:
    {
        flex: 0.5
    },
    quarter:{ flex: 0.25},
    row_dir: { flexDirection:'row'},
    col_dir: {flexDirection: 'column'},
    hrline: {
        borderBottomColor: '#808080',
        borderBottomWidth: 1
     }
});