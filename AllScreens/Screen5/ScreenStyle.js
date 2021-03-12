import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { moderateScale } from 'react-native-size-matters';
import { AppColor } from '../AppUtil'
import { fonts } from '../../components/utilities/images';



export const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColor.borderBlue,
    },
    style1:{
        borderTopLeftRadius: moderateScale(30),
        borderTopRightRadius: moderateScale(30),
        backgroundColor:AppColor.white,
        top: moderateScale(60),
        paddingBottom: moderateScale(100)
    },
    logo1: {
        top: moderateScale(81),
        left: moderateScale(160),
    },
    userName:{
        height: moderateScale(81),
        top: moderateScale(130),
        left: moderateScale(30),
        fontSize: RFValue(15),
        // fontFamily:'WorkSans-VariableFont'
        fontFamily: fonts.regular,


    },
    MainContainer: {
 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
    email: {
        top: moderateScale(65),
        height: moderateScale(60),
        width: moderateScale(340),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: AppColor.borderBlue,
        fontSize: RFValue(20),
        textAlign: 'center',
        margin: moderateScale(10)
    },
    password: {
        top: moderateScale(-15),
        height: moderateScale(65),
        width:moderateScale(348),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: AppColor.white,
        backgroundColor:AppColor.cream,
        fontSize: RFValue(20),
        paddingLeft: moderateScale(40),
        margin:  moderateScale(10)
    },
    pass:{
        height: moderateScale(91),
        top: moderateScale(60),
        left:moderateScale(30),
        fontSize: RFValue(15),
        // fontFamily:'WorkSans-VariableFont'
        fontFamily: fonts.regular,

    },
    man: {
        top: moderateScale(20),
        left: moderateScale(-115)
    },
    View5:{
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2), 
        paddingRight: moderateScale(10),
        paddingLeft: moderateScale(10),
        padding: moderateScale(3),
        top: moderateScale(-70),
        left: moderateScale(125),
        textAlign:'center',
        borderColor:AppColor.borderBlue,
        color:AppColor.borderBlue,
        backgroundColor:AppColor.lightPurple,
        // fontFamily:'WorkSans-VariableFont'
        fontFamily: fonts.regular,

    },
    loginButton: {
        width: moderateScale(330),
        height:moderateScale(50),
        marginTop:moderateScale(-35),
        marginLeft:moderateScale(15),
        backgroundColor:AppColor.darkSky,
        borderRadius:10
    },
  button: {
      paddingTop: moderateScale(15),
      textAlign:'center',
      color:AppColor.white,
      fontSize: RFValue(15),
    //   fontFamily:'WorkSans-VariableFont'
    fontFamily: fonts.regular,

   },
   account: {
        marginLeft: moderateScale(100),
        color:AppColor.black,
        // fontFamily:'WorkSans-VariableFont'
        fontFamily: fonts.regular,

    },
   Sign: {
        marginLeft: moderateScale(250),
        position:'absolute',
        color:AppColor.lightBlue,
        // fontFamily:'WorkSans-VariableFont'
        fontFamily: fonts.regular,

    },
    errorMessage: {
        color:'red',
        position:'absolute',
        top:moderateScale(135)
    },
    errorMessage1:{
        color:'red',
        position:'absolute',
        top:moderateScale(55)
    }
})