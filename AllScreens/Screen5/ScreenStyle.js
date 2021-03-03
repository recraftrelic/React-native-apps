import { StyleSheet } from 'react-native';
import { AppColor } from '../AppUtil'


export const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColor.borderBlue,
    },
    style1:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:AppColor.white,
        top:70,
        paddingBottom:100
    },
    logo1: {
        width:62,
        height:110,
        top:111,
        left:160,
    },
    userName:{
        width:318,
        height:91,
        top:165,
        left:58,
        fontSize:15,
        fontFamily:'WorkSans-VariableFont'
    },
    MainContainer: {
 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     
      },
    email: {
        top:145,
        left:8,
        height:65,
        width:348,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: AppColor.borderBlue,
        padding : 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    password: {
        top:160,
        left:8,
        height:65,
        width:348,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: AppColor.white,
        backgroundColor:AppColor.cream,
        padding : 2,
        fontSize: 20,
        paddingLeft:40,
        margin: 10
    },
    pass:{
        width:318,
        height:91,
        top:180,
        left:58,
        fontSize:15,
        fontFamily:'WorkSans-VariableFont'
    },
    man: {
        top:95,
        left:-105
    },
    View5:{
        borderRadius: 10,
        borderWidth: 2, 
        paddingRight:10,
        paddingLeft:10,
        padding:3,
        top:105,
        left:105,
        textAlign:'center',
        borderColor:AppColor.borderBlue,
        color:AppColor.borderBlue,
        backgroundColor:AppColor.lightPurple,
        fontFamily:'WorkSans-VariableFont'
    },
    loginButton: {
        width:320,
        height:50,
        marginTop:205,
        marginLeft:65,
        backgroundColor:AppColor.darkSky,
        borderRadius:10
    },
  button: {
       paddingTop:15,
      textAlign:'center',
      color:AppColor.white,
      fontSize:15,
      fontFamily:'WorkSans-VariableFont'
   },
   account: {
        width:200,
        height:20,
        marginTop:25,
        marginLeft:125,
        color:AppColor.black,
        fontFamily:'WorkSans-VariableFont'
    },
   Sign: {
        width:51,
        height:20,
        marginTop:25,
        marginLeft:260,
        position:'absolute',
        color:AppColor.lightBlue,
        fontFamily:'WorkSans-VariableFont'
    },
})