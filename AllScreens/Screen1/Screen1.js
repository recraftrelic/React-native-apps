import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import screen1 from "./screen1.json";

const Screen1 = () => {

    return (
        <>
    <View>
        <Image style={styles.image1} source={require('../Images/Ellipse1.png')} />
        <Image style={styles.circle1} source={require('../Images/Circle1.png')} />
        <Image style={styles.image2} source={require('../Images/Ellipse2.png')} />
        <Image style={styles.circle2} source={require('../Images/Circle2.png')} />
        <Image style={styles.arrow1} source={require('../Images/arrow1.png')} />
        <Image style={styles.circle3} source={require('../Images/Circle3.png')} />
        <Image style={styles.arrow2} source={require('../Images/arrow2.png')} />
        <Image style={styles.image3} source={require('../Images/Ellipse3.png')} />
        <Image style={styles.circle4} source={require('../Images/Circle4.png')} />
        <View style={styles.container}>
            <Text style={styles.login}>{screen1.name}</Text>
            <Text style={styles.email}>{screen1.email}</Text>
           
            <Text style={styles.number}>{screen1.number}</Text>
           
            <View >
           
            <Text style={styles.inputEmail}>{screen1.email2}</Text>
            <Image style={styles.emailIcon} source={require('../Images/Vector.png')} />
            <View style={styles.childView}></View>
            </View>
            <View >
            <Text style={styles.inputEmail}>{screen1.password}</Text>
            <Image style={styles.emailIcon} source={require('../Images/bx_bx-lock-open.png')} />
            <View style={styles.childView}></View>
            </View>
            <View >
            <Text style={styles.forgotPassword}>{screen1.forgot}</Text>
            
            </View>
            <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen1.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen1.account}</Text>
                <Text style={styles.Sign}>{screen1.sign}</Text>
            </View>
        </View>
        <View>   
        </View>
    </View>
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        width:331,
        height:511,
        marginTop:176,
        marginLeft:40,
        borderRadius:40,
        backgroundColor:'#000000',
        position:'absolute'
    },
    login: {
        width:89,
        height:46,
        marginTop:62,
        marginLeft:116,
        fontWeight:'400',
        fontSize:34,
        color:'#ffff'
    },
    email: {
        height:36,
        marginTop:15,
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#ffffff'
    },
    number: {
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        color:'#ffffff',
        height:36,
        marginTop:-5,
    },
    inputEmail:{
        width: 162,
        height:16,
        marginTop:30,
        marginLeft:85,
        fontWeight:'400',
        fontSize:14,
        color:'#ffffff',
    },
    emailIcon: {
        width: 13,
        height: 11,
        marginLeft:50,
        marginTop:-9,
    },
    childView: {
        marginTop:22,
        width: 256,
        height: 0,
        marginLeft:40,
        borderBottomWidth :1,
        borderBottomColor: '#393F45',     
      },
      forgotPassword: {
          width:97,
          height:20,
          marginTop:20,
          marginLeft:200,
          fontWeight:'400',
          fontSize:12,
          color:'#ffffff',
      },
      loginButton: {
        width:240,
        height:50,
        marginTop:15,
        marginLeft:55,
        borderRadius:40,
        backgroundColor:"blue",
        borderRadius:10
    },
  button: {
       paddingTop:15,
      textAlign:'center',
      color:'#ffff',
      fontSize:15,
   },
   account: {
        width:200,
        height:20,
        marginTop:10,
        marginLeft:85,
        color:'#ffff',
    },
    Sign: {
        width:51,
        height:20,
        marginTop:10,
        marginLeft:225,
        position:'absolute',
        color:'#4E49FF'
    },
    image1: {
        width:316,
        height: 516,
        top:125,
        opacity:30,
        position:'absolute',
       
    },
    circle1: {
        width:18,
        height:18,
        marginTop:120,
        marginLeft:56,
    },
    image2: {
        left:270,
        position:'absolute',
    },
    circle2: {
        position:'absolute',
        top:96,
        left:340,
    },
    arrow1: {
        position:'absolute',
        left:320,
        top:110,
    },
    circle3:{
        position:'absolute',
        top:645,
        left:80
    },
    arrow2: {
        position:'absolute',
        top:720,
        left:105
    },
    image3: {
        position:'absolute',
        top:420,
        left:210
    },
    circle4: {
        position:'absolute',
        top:710,
        left:310
    }
    
})

export default Screen1;