import React from 'react';
import { Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import { Text, StyleSheet } from "react-native";
import { AppColor } from './AppUtil';
const Screen2 = () => {

    return (
        <>

        <View>
            <View>
                <Text style={styles.container}>Sign in</Text>
                <Text style={styles.container1}>Account</Text>
                <Text style={styles.container2}>Sign in with your account to continue !</Text>
            </View>
            <View style={[styles.boxShadow, shadow]}>
                <TextInput  placeholder="Email or number phone"/>
                </View>
            <View style={[styles.boxShadow1, shadow]}>
                <TextInput placeholder="Password"/>
            </View>
            <View>
                <Text style={styles.password}>Forgot password?</Text>
            </View >
            <View style={styles.loginButton}>            
                <Text style={styles.button} >Sign in</Text>            
            </View>
            <View>
                <Text style={styles.account}>Don't have account?</Text>
                <Text style={styles.Sign}>Sign Up</Text>
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
    // backgroundColor: '#ed7171',
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
    //    fontFamily: 'Work Sans',
        fontSize: 23,
        lineHeight: 26,
      },
      container1: {
          width:140,
          height:55,
          marginTop:10,
          marginLeft:30,
          fontSize: 32,
        //   fontFamily: 'Work Sans',
          fontWeight:"700",
      },
      container2: {
        width:500,
        marginLeft:32,
        fontSize: 20,
        // fontFamily: 'Work Sans',
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
          
        //  position:'absolute'
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
      }
    
});



export default Screen2;