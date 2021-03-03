import { StyleSheet } from "react-native"
import { AppColor } from "../AppUtil"


export  const styles = StyleSheet.create({
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
      logo: {
          width:62,
          height:110,
          top:109,
          left:51,
          position:'absolute'
      },
      hello: {
          width:78,
          height:36,
          top:270,
          left:45,
          fontWeight:'700',
          fontSize:30,
          lineHeight:35,
          fontFamily:'WorkSans-VariableFont'
      },
      state:{
          width:237,
          height:19,
          top:317,
          left:45,
          fontWeight:'400',
          fontSize:16,
          position:'absolute',
          color:AppColor.content,
          fontFamily:'WorkSans-VariableFont'
      },
      user: {
          width:60,
          height:15,
          top:362,
          left:45,
          fontWeight:'400',
          fontSize:12,
          position:'absolute',
          color:AppColor.greyContent,
          fontFamily:'WorkSans-VariableFont'
      },
      name:{
          width:96,
          height:20,
          top:391,
          left:45,
          position:'absolute',
          fontWeight:'500',
          fontSize:17,
          lineHeight:19,
          color:AppColor.borderColor,
          fontFamily:'WorkSans-VariableFont'
      },
      tick: {
          position:'absolute',
          width:18,
          height:21,
          top:395,
          left:311,
      },
      childView: {
          position:'absolute',
          width:293,
          top:413,
          left:46,
          borderBottomColor:AppColor.purple,
          borderBottomWidth:1
        },
    password: {
         width:56,
         height:15,
         top:443,
         left:50,
         fontWeight:'400',
         fontSize:12,
         lineHeight:14,
         color:AppColor.greyContent,
         fontFamily:'WorkSans-VariableFont'
        },
    childView1: {
        width:293,
        top:460,
        left:49,
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor,
        },
    rectangle: {
        width:13,
        height:13,
        top:540,
        left:56,
        borderRadius:1,
        position:'absolute',
        borderColor:AppColor.greyContent
    },
    remember: {
        width:81,
        height:13,
        top:490,
        left:86,
        fontWeight:'400',
        fontSize:12,
        lineHeight:12,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    forgot: {
        width:101,
        height:13,
        top:477,
        left:256,
        fontWeight:'400',
        fontSize:12,
        lineHeight:12,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    button:{
        width:330,
        height:50,
        top:581,
        left:35,
        borderRadius:10,
        position:'absolute',
        backgroundColor:AppColor.purple
    },
    login: {
        width:69,
        height:18,
        fontSize:15,
        lineHeight:17,
        color:AppColor.white,
        left:135,
        top:15,
        fontFamily:'WorkSans-VariableFont'
    },
    account:{
        width:122,
        height:15,
        top:571,
        left:103,
        fontWeight:'400',
        fontSize:13,
        lineHeight:14,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    sign: {
        width:45,
        height:15,
        top:646,
        left:230,
        fontWeight:'400',
        fontSize:12,
        lineHeight:14,
        position:'absolute',
        color:AppColor.colorContent,
        fontFamily:'WorkSans-VariableFont'
    }

})