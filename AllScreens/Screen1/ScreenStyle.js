import { StyleSheet } from "react-native";
import { AppColor } from "../AppUtil"

export const styles = StyleSheet.create({
    container:{
        width:331,
        height:511,
        marginTop:176,
        marginLeft:40,
        borderRadius:40,
        backgroundColor:AppColor.black,
        position:'absolute'
    },
    login: {
        width:89,
        height:46,
        marginTop:62,
        marginLeft:116,
        fontWeight:'400',
        fontSize:34,
        color:AppColor.white, 
        fontFamily:'AbrilFatface-Regular',
    },
    email: {
        height:36,
        marginTop:15,
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    number: {
        fontSize:15,
        fontWeight:'400',
        textAlign:'center',
        color:AppColor.blackGrey,
        height:36,
        marginTop:-8,
        fontFamily:'WorkSans-VariableFont'
    },
    inputEmail:{
        color:AppColor.white,
        width: 192,
        height:60,
        marginLeft:80,
        fontWeight:'400',
        fontSize:14,
        // marginTop:5,
    },
    emailIcon: {
        width: 15,
        height: 12,
        marginLeft:50,
        marginTop:-34,   
    },
    childView: {
        marginTop:15,
        width: 256,
        height: 0,
        marginLeft:40,
        borderBottomWidth :1,
        borderBottomColor: AppColor.lineGrey     
    },
    forgotPassword: {
        width:140,
        height:20,
        marginTop:20,
        marginLeft:200,
        fontWeight:'400',
        fontSize:14,
        color:AppColor.white,
        fontFamily:'WorkSans-VariableFont'
    },
    loginButton: {
        width:260,
        height:50,
        marginTop:15,
        marginLeft:40,
        backgroundColor:AppColor.darkSky,
        borderRadius:10
    },
    button: {
        paddingTop:15,
        textAlign:'center',
        color:AppColor.white,
        fontSize:17,
        fontFamily:'WorkSans-VariableFont'
    },
   account: {
        width:200,
        height:20,
        marginTop:10,
        marginLeft:75,
        color:AppColor.white,
        fontSize:15,
        fontFamily:'WorkSans-VariableFont'
    },
    Sign: {
        width:55,
        height:20,
        marginTop:10,
        marginLeft:215,
        position:'absolute',
        color:AppColor.darkSky,
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