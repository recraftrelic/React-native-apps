import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import screen1 from "./screen1.json";

const Screen1 = () => {

    return (
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
            <View>
            <Text style={styles.inputEmail}>{screen1.email2}</Text>
            <Image style={styles.emailIcon} source={require('../Images/Vector.png')} />
                    <View style={styles.childView}>
                    </View>
            </View>
            <View >
                <Text style={styles.inputEmail}>{screen1.password}</Text>
                <Image style={styles.emailIcon} source={require('../Images/bx_bx-lock-open.png')} />
                    <View style={styles.childView}>
                    </View>
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
    </View>
    );
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
        color:'#ffff', 
        fontFamily:'AbrilFatface-Regular',
    },
    email: {
        height:36,
        marginTop:15,
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:'#696969',
        fontFamily:'WorkSans-VariableFont'
    },
    number: {
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:'#696969',
        height:36,
        marginTop:-8,
        fontFamily:'WorkSans-VariableFont'
    },
    inputEmail:{
        width: 172,
        height:26,
        marginTop:27,
        marginLeft:85,
        fontWeight:'400',
        fontSize:14,
        color:'#ffffff',
        fontFamily:'WorkSans-VariableFont'
    },
    emailIcon: {
        width: 15,
        height: 12,
        marginLeft:50,
        marginTop:-22,   
    },
    childView: {
        marginTop:15,
        width: 256,
        height: 0,
        marginLeft:40,
        borderBottomWidth :1,
        borderBottomColor: '#393F45',     
    },
    forgotPassword: {
        width:140,
        height:20,
        marginTop:20,
        marginLeft:200,
        fontWeight:'400',
        fontSize:14,
        color:'#696969',
        fontFamily:'WorkSans-VariableFont'
    },
    loginButton: {
        width:260,
        height:50,
        marginTop:15,
        marginLeft:40,
        backgroundColor:'#2945FF',
        borderRadius:10
    },
    button: {
        paddingTop:15,
        textAlign:'center',
        color:'#ffff',
        fontSize:17,
        fontFamily:'WorkSans-VariableFont'
    },
   account: {
        width:200,
        height:20,
        marginTop:10,
        marginLeft:75,
        color:'#ffff',
        fontSize:15,
        fontFamily:'WorkSans-VariableFont'
    },
    Sign: {
        width:55,
        height:20,
        marginTop:10,
        marginLeft:215,
        position:'absolute',
        color:'#202D7E',
        fontSize:15,
        fontFamily:'WorkSans-VariableFont'
    },
    image1: {
        width:206,
        height: 306,
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