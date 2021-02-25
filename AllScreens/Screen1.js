import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Screen1 = () => {

    return (
        <>
    <View>
        <ImageBackground style={styles.image1} source={require('./Images/Ellipse1.png')} />
        <View style={styles.container}>
            <Text style={styles.login}>Login</Text>
            <Text style={styles.email}>Please enter your email & phone</Text>
           
            <Text style={styles.number}>number to Login</Text>
           
            <View >
           
            <Text style={styles.inputEmail}>Email or phone number</Text>
            <Image style={styles.emailIcon} source={require('./Images/Vector.png')} />
            <View style={styles.childView}></View>
            </View>
            <View >
            <Text style={styles.inputEmail}>Password</Text>
            <Image style={styles.emailIcon} source={require('./Images/bx_bx-lock-open.png')} />
            <View style={styles.childView}></View>
            </View>
            <View >
            <Text style={styles.forgotPassword}>Forgot password</Text>
            
            </View>
            <View style={styles.loginButton}>            
                <Text style={styles.button} >Log in</Text>            
            </View>
            <View>
                <Text style={styles.account}>Don't have account?</Text>
                <Text style={styles.Sign}>Sign Up</Text>
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
        // width:200,
        height:36,
        marginTop:15,
        // marginLeft:50,
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
        // backgroundColor: '#00BCD4',
     
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
        height: 316,
        marginTop:120,
        marginLeft:-154,
        opacity:30,
        position:'absolute',
        color:'black'
    }
    
})

export default Screen1;