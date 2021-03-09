import { StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { moderateScale } from "react-native-size-matters"
import { AppColor } from "../AppUtil"


export  const styles = StyleSheet.create({
    image1: {
        position:'absolute',
        left: moderateScale(295),
      },
      circle2: {
        position:'absolute',
        top: moderateScale(90),
        left: moderateScale(300),
      },
      arrow1: {
        position:'absolute',
        left:moderateScale(280),
        top: moderateScale(105)
      },
      logo: {
          top: moderateScale(109),
          left: moderateScale(51),
          position:'absolute'
      },
      hello: {
          top: moderateScale(240),
          left: moderateScale(35),
          fontWeight:'700',
          fontSize: RFValue(30),
          lineHeight:35,
          fontFamily:'WorkSans-VariableFont'
      },
      state:{
          top: moderateScale(287),
          left: moderateScale(35),
          fontWeight:'400',
          fontSize: RFValue(16),
          position:'absolute',
          color:AppColor.content,
          fontFamily:'WorkSans-VariableFont'
      },
      user: {
          top: moderateScale(332),
          left: moderateScale(35),
          fontWeight:'400',
          fontSize: RFValue(12),
          position:'absolute',
          color:AppColor.greyContent,
          fontFamily:'WorkSans-VariableFont'
      },
      name:{
          top: moderateScale(355),
          left: moderateScale(35),
          position:'absolute',
          fontWeight:'400',
          fontSize: RFValue(12),
          lineHeight:14,
          color:AppColor.greyContent,
          fontFamily:'WorkSans-VariableFont',
      },
      childView: {
          position:'absolute',
          width: moderateScale(313),
          top: moderateScale(383),
          left: moderateScale(35),
          borderBottomColor:AppColor.purple,
          borderBottomWidth:1
        },
    password: {
         top: moderateScale(373),
         left: moderateScale(35),
         fontWeight:'400',
         fontSize: RFValue(12),
         lineHeight:14,
         color:AppColor.greyContent,
         fontFamily:'WorkSans-VariableFont',
        },
    childView1: {
        width: moderateScale(313),
        top: moderateScale(380),
        left: moderateScale(35),
        borderBottomWidth: 0.58,
        borderColor:AppColor.borderColor,
        },
    rectangle: {
        top: moderateScale(480),
        left: moderateScale(56),
        borderRadius:1,
        position:'absolute',
        borderColor:AppColor.greyContent
    },
    remember: {
        top: moderateScale(405),
        left: moderateScale(86),
        fontWeight:'400',
        fontSize: RFValue(12),
        lineHeight:12,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    forgot: {
        top: moderateScale(395),
        left: moderateScale(256),
        fontWeight:'400',
        fontSize: RFValue(12),
        lineHeight:12,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    button:{
        width: moderateScale(330),
        height: moderateScale(50),
        top: moderateScale(511),
        left:moderateScale(35),
        borderRadius:10,
        position:'absolute',
        backgroundColor:AppColor.purple
    },
    login: {
        fontSize: RFValue(15),
        lineHeight:17,
        color:AppColor.white,
        left: moderateScale(140),
        top: moderateScale(15),
        fontFamily:'WorkSans-VariableFont'
    },
    account:{
        top: moderateScale(471),
        left: moderateScale(113),
        fontWeight:'400',
        fontSize: RFValue(13),
        lineHeight:14,
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    sign: {
        top: moderateScale(570),
        left: moderateScale(240),
        fontWeight:'400',
        fontSize: RFValue(12),
        lineHeight:14,
        position:'absolute',
        color:AppColor.colorContent,
        fontFamily:'WorkSans-VariableFont'
    }

})