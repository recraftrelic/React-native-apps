import { Platform, StyleSheet } from 'react-native';
import { AppColor } from '../AppUtil';
import {
  moderateScale, scale, verticalScale,
} from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';


export  const styles = StyleSheet.create({
    container: {
        marginLeft: moderateScale(32),
        marginTop: moderateScale(120),
        height:moderateScale(25),
        width: moderateScale(73),
       fontWeight:'400',
        fontSize: RFValue(23),
        lineHeight: 26,
        fontFamily:'WorkSans-VariableFont'
        
      },
      main: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 1,
  
    },
      container1: {
          marginTop: moderateScale(10),
          marginLeft: moderateScale(30),
          fontSize:  RFValue(32),
          fontWeight:"700",
          fontFamily:'WorkSans-VariableFont'
      },
      container2: {
        marginLeft: moderateScale(32),
        fontSize: RFValue(18),
        color:AppColor.greyContent,
        fontFamily:'WorkSans-VariableFont'
    },
    boxShadow: {
        width: scale(310),
        height: verticalScale(75),
        top: moderateScale(260),
        left: moderateScale(20),
        backgroundColor:AppColor.white,
        position:'absolute',
        justifyContent:'center',
        paddingLeft:80,
        borderRadius: 25,
       
      },
      boxShadow1: {
        width: scale(310),
        height: verticalScale(75),
        top: moderateScale(358),
        left: moderateScale(20),
        backgroundColor:AppColor.white,
        position:'absolute',
        justifyContent:'center',
        paddingLeft:80,
        borderRadius: 25,
      },
      password: {
         width:scale(300),
          marginTop: moderateScale(250),
          marginLeft: moderateScale(240),
          fontSize: RFValue(15),
          fontWeight:'500',
          color:AppColor.lineGrey,
          fontFamily:'WorkSans-VariableFont'
      },
      loginButton: {
        width: scale(300),
        height: verticalScale(55),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(20),
        backgroundColor:AppColor.darkSky,
        borderRadius:10,
      },
      button: {
        paddingTop: moderateScale(15),
        textAlign:'center',
        color:AppColor.white,
        fontSize: RFValue(17),  
        fontFamily:'WorkSans-VariableFont'   
      },
      account: {
        marginTop: moderateScale(10),
        marginLeft: moderateScale(105),
        color:AppColor.black,
        fontFamily:'WorkSans-VariableFont'
      },
      Sign: {
        marginTop: moderateScale(10),
        marginLeft:moderateScale(250),
        position:'absolute',
        color:AppColor.lightBlue,
        fontFamily:'WorkSans-VariableFont'
      },
      image1: {
        position:'absolute',
        left: moderateScale(250),
      },
      circle2: {
        position:'absolute',
        top: moderateScale(80),
        left: moderateScale(300),
      },
      arrow1: {
        position:'absolute',
        left: moderateScale(280),
        top: moderateScale(95)
      },
      mark1: {
        position:'absolute',
        left: moderateScale(30),
        top: moderateScale(70)
      },
      
      emailIcon: {
        width:moderateScale(17),
        height:moderateScale(18),
        left:moderateScale(35),
        position:'absolute'
    },
    password1:{
        left: moderateScale(35),
        position:'absolute'
    },
    shadow: {
        shadowColor: AppColor.black,
        shadowRadius: 10, 
        shadowOpacity: 0.6,
        elevation:5,
        shadowOffset: {
        height : 11,
        width: 0,     
        },
        
    },
    errorMessage: {
      left:moderateScale(45),
      top:moderateScale(335),
      color:AppColor.red,
      position:'absolute'
    },
    errorMessage1: {
      left:moderateScale(45),
      top:moderateScale(75),
      color:AppColor.red,
      position:'absolute'
    }
});