import React from 'react';
import { Text, TextInput } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';
import screen5 from './screen5.json';

const Screen5 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.style1}>
            <Image style={styles.logo1} source={require('../Images/logo1.png')} />
          <View>
           <Text style={styles.userName}>{screen5.userName}</Text>
           <View style={styles.MainContainer}>
                <TextInput style={styles.email} placeholder="userName or Email"/>
                <Image style={styles.man} source={require('../Images/man.png')} />
                </View> 
           </View>
           <View>
           <Text style={styles.pass}>{screen5.pass}</Text>
           <View style={styles.MainContainer}>
                <TextInput style={styles.password} placeholder="password"/>
               <Text style={styles.View}>{screen5.View}</Text>
                </View > 
                <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen5.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen5.account}</Text>
                <Text style={styles.Sign}>{screen5.Sign}</Text>
            </View>
           </View>
            </View>
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        // height:100
    },
    style1:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#fff',
        top:80
    },
    logo1: {
        width:62,
        height:110,
        top:121,
        left:156,
    },
    userName:{
        width:318,
        height:91,
        top:175,
        left:38,
        fontSize:15
    },
    MainContainer: {
 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
    email: {
        top:155,
        left:-8,
        height:65,
        width:318,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'blue',
        // backgroundColor : 'white',
        padding : 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    password: {
        top:180,
        left:-8,
        height:65,
        width:318,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffff',
        backgroundColor:'#F5F5F5',
        padding : 2,
        fontSize: 20,
        paddingLeft:10,
        margin: 10
    },
    pass:{
        width:318,
        height:91,
        top:190,
        left:38,
        fontSize:15
    },
    man: {
        top:105,
        left:-125
    },
    View:{
        borderRadius: 10,
        borderWidth: 2, 
        borderColor: 'blue', 
       paddingRight:10,
       paddingLeft:10,
       padding:2,
        top:125,
        left:95,
        textAlign:'center',
        color:'blue',
        backgroundColor:'#33B1FF'
    },
    loginButton: {
        width:240,
        height:50,
        marginTop:215,
        marginLeft:75,
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
        marginTop:20,
        marginLeft:85,
        color:'#000000',
    },
        Sign: {
        width:51,
        height:20,
        marginTop:20,
        marginLeft:225,
        position:'absolute',
        color:'#4E49FF'
    },
})

export default Screen5;