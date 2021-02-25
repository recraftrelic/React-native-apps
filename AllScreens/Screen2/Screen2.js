import React from 'react';
import {  Image, TextInput } from 'react-native';
import screen2 from './screen2.json';
import { View } from 'react-native';

import { Text, StyleSheet } from "react-native";
import { AppColor } from '../AppUtil';
const Screen2 = () => {

    return (
        <>

        <View>
        <Image style={styles.image1} source={require('../Images/Ellipse21.png')} />
        <Image style={styles.circle2} source={require('../Images/Circle2.png')} />
        <Image style={styles.arrow1} source={require('../Images/arrow1.png')} />
        <Image style={styles.mark1} source={require('../Images/mark1.png')} />
            <View>
                <Text style={styles.container}>{screen2.container}</Text>
                <Text style={styles.container1}>{screen2.container1}</Text>
                <Text style={styles.container2}>{screen2.container2}</Text>
            </View>
            <View style={[styles.boxShadow, shadow]}>
                <TextInput  placeholder="Email or number phone"/>
                <Image style={styles.emailIcon} source={require('../Images/email2.png')} />
                </View>
            <View style={[styles.boxShadow1, shadow]}>
                <TextInput placeholder="Password"/>
                <Image style={styles.password1} source={require('../Images/password1.png')} />
            </View>
            <View>
                <Text style={styles.password}>{screen2.password}</Text>
                
            </View >
            <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen2.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen2.account}</Text>
                <Text style={styles.Sign}>{screen2.Sign}</Text>
            </View>
        </View>
        
        </>

    )

};
const shadow = {
   
    color: '#000000',
    shadowRadius: 10, 
    shadowOpacity: 0.6,
    elevation:5,
    shadowOffset: {
        height : 11,
        width: 0,
         
    },
    

}
const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginTop: 140,
        height:25,
        width:73,
       fontWeight:'400',
        fontSize: 23,
        lineHeight: 26,
      },
      container1: {
          width:140,
          height:55,
          marginTop:10,
          marginLeft:30,
          fontSize: 32,
          fontWeight:"700",
      },
      container2: {
        width:500,
        marginLeft:32,
        fontSize: 20,
        color: AppColor.grey
    },
    boxShadow: {
        width: 330,
        height: 69,
        marginTop:308,
        marginLeft:35,
        backgroundColor:'#ffff',
        position:'absolute',
        justifyContent:'center',
        paddingLeft:80,
        borderRadius: 50,
      },
      boxShadow1: {
        width: 330,
        height: 69,
        marginTop:400,
        marginLeft:35,
        backgroundColor:'#ffff',
        position:'absolute',
        justifyContent:'center',
        paddingLeft:110,
        borderRadius: 50,
      },
      password: {
          width:122,
          height:20,
          marginTop:250,
          marginLeft:250,
          opacity:50,
          fontSize:15,
          fontWeight:'500',
      },
      loginButton: {
          width:250,
          height:70,
          marginTop:35,
          marginLeft:75,
          borderRadius:40,
          backgroundColor:"blue",
          borderRadius:10
      },
   
    button: {
         paddingTop:20,
        textAlign:'center',
        color:'#ffff',
        fontSize:25,     
          },
      account: {
          width:200,
          height:20,
          marginTop:20,
          marginLeft:85,
          color:'#000000',
      },
      Sign: {
          width:51,
          height:20,
          marginTop:20,
          marginLeft:265,
          position:'absolute',
          color:'#4E49FF'
      },
      image1: {
          position:'absolute',
          left:300,
      },
      circle2: {
          position:'absolute',
          top:96,
          left:310,
      },
      arrow1: {
          position:'absolute',
          left:285,
          top:110
      },
      mark1: {
          position:'absolute',
          left:30,
          top:70
      },
      emailIcon: {
        width:13,
        height:14,
        top:-25,
        left:-28,
    },
    password1:{
        top:-33,
        left:-50,
    }
    
});



export default Screen2;