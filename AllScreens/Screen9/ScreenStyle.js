import { StyleSheet } from "react-native";
import { AppColor } from '../AppUtil'

export  const styles = StyleSheet.create({
   
    arrow:{
        position: 'absolute',
        width: 18,
        height: 13,
        left: 37,
        top: 70,
    },
    sign: {
        position: 'absolute',
        width: 60,
        height: 21,
        left: 70,
        top: 66,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'right'
    },
    logo: {
        position: 'absolute',
        right: '44.48%',
        bottom: '67.28%',
        width:67,
        height:118,
        top:147,
    },
    email: {
        width:81,
        height:13,
        top:342,
        left:49,
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    email1: {
        width:181,
        height:19,
        top:356,
        left:49,
        fontWeight:'500',
        fontSize:14,
        lineHeight:16,
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    childView: {
        width:262,
        top:375,
        left:49,
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor
    },
    password: {
        width:63,
        height:13,
        top:420,
        left:49,
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    password1: {
        width:162,
        height:20,
        top:434,
        left:49,
        fontWeight:'500',
        fontSize:14,
        lineHeight:16,
        color:AppColor.blackGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    childView1: {
        width:262,
        top:450,
        left:49,
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor,
    },
    eyes:{
        position:'absolute',
        width:19,
        height:16,
        top:477,
        left:292,
        color:AppColor.violet
    },
    print: {
        width:58,
        height:58,
        top:573,
        left:53,
        position:'absolute',
    },
    continue: {
        position:'absolute',
        width:220,
        height:61,
        top:573,
        borderRadius:10,
        left:121,
        backgroundColor:AppColor.purple,
        
    },
    content: {
        paddingTop:20,
        color:AppColor.white,
        paddingLeft:75,
        fontSize:16,
        fontWeight:'500',
        fontFamily:'Rubik-VariableFont'
    },
    forgot: {
        width:134,
        height:19,
        top:605,
        left:131,
        fontWeight:'400',
        fontSize:16,
        lineHeight:19,
        color:AppColor.purple,
        fontFamily:'Rubik-VariableFont'
    },
    child: {
        width:135,
        height:5,
        top:751,
        left:130,
        borderRadius:100,
        position:'absolute',
        backgroundColor:AppColor.background,
        opacity:30
    }

});