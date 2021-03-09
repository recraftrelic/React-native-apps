import { Platform, StyleSheet } from "react-native";
import { AppColor } from "../AppUtil";
import {
    moderateScale,
 } from 'react-native-size-matters';
 import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container:{
        width: moderateScale(331),
        height: moderateScale(450),
        top: moderateScale(90),
        left: moderateScale(28),
        borderRadius:40,
        backgroundColor:AppColor.black,
        position:'absolute'
    },
    main: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 1,
        backgroundColor: 'white'
    },
    login: {
        marginTop: moderateScale(52),
        textAlign:'center',
        fontWeight:'400',
        fontSize: RFValue(34),
        color:AppColor.white, 
        fontFamily:'AbrilFatface-Regular',
    },
    email: {
        height: moderateScale(30),
        marginTop: moderateScale(10),
        fontSize: RFValue(15),
        fontWeight:'400',
        textAlign:'center',
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    number: {
        fontSize: RFValue(15),
        fontWeight:'400',
        textAlign:'center',
        color:AppColor.blackGrey,
        height: moderateScale(36),
        marginTop: moderateScale(-8),
        fontFamily:'WorkSans-VariableFont'
    },
    inputEmail:{
        color:AppColor.white,
        height: moderateScale(55),
        marginLeft: moderateScale(80),
        fontWeight:'400',
        fontSize: RFValue(14),
    },
    emailIcon: {
        width: moderateScale(15),
        height: moderateScale(12),
        marginLeft: moderateScale(50),
        marginTop: moderateScale(-34),   
    },
    childView: {
        marginTop:moderateScale(15),
        width: moderateScale(256),
        marginLeft: moderateScale(40),
        borderBottomWidth :1,
        borderBottomColor: AppColor.lineGrey     
    },
    forgotPassword: {
        marginTop: moderateScale(20),
        marginLeft: moderateScale(200),
        fontWeight:'400',
        fontSize: RFValue(14),
        color:AppColor.white,
        fontFamily:'WorkSans-VariableFont'
    },
    loginButton: {
        width: moderateScale(265),
        height: moderateScale(50),
        marginTop: moderateScale(15),
        marginLeft:moderateScale(40),
        backgroundColor:AppColor.darkSky,
        borderRadius:10
    },
    button: {
        paddingTop:15,
        textAlign:'center',
        color:AppColor.white,
        fontSize: RFValue(17),
        fontFamily:'WorkSans-VariableFont'
    },
   account: {
        marginTop: moderateScale(10),
        marginLeft: moderateScale(75),
        color:AppColor.white,
        fontSize: RFValue(15),
        fontFamily:'WorkSans-VariableFont'
    },
    Sign: {
        marginTop: moderateScale(10),
        marginLeft: moderateScale(215),
        position:'absolute',
        color:AppColor.darkSky,
        fontSize: RFValue(15),
        fontFamily:'WorkSans-VariableFont'
    },
    image1: {
        top: moderateScale(65),
        position:'absolute',   
    },
    circle1: {
        marginTop: moderateScale(58),
        marginLeft: moderateScale(56),
    },
    image2: {
        left: moderateScale(290),
        position:'absolute',
    },
    circle2: {
        position:'absolute',
        top: moderateScale(45),
        left: moderateScale(300),
    },
    arrow1: {
        position:'absolute',
        left: moderateScale(280),
        top: moderateScale(58),
    },
    circle3:{
        position:'absolute',
        top: moderateScale(505),
        left: moderateScale(80)
    },
    arrow2: {
        position:'absolute',
        top: moderateScale(570),
        left: moderateScale(105)
    },
    image3: {
        position:'absolute',
        top: moderateScale(300),
        left: moderateScale(190)
    },
    circle4: {
        position:'absolute',
        top: moderateScale(560),
        left: moderateScale(270)
    },
    errorMessage: {
       color:AppColor.red,
       textAlign:'center'
    }
    
})