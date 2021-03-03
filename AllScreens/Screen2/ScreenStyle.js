import { StyleSheet } from 'react-native';
import { AppColor } from '../AppUtil'


export  const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginTop: 140,
        height:25,
        width:73,
       fontWeight:'400',
        fontSize: 23,
        lineHeight: 26,
        fontFamily:'WorkSans-VariableFont'
        
      },
      container1: {
          width:140,
          height:55,
          marginTop:10,
          marginLeft:30,
          fontSize: 32,
          fontWeight:"700",
          fontFamily:'WorkSans-VariableFont'
      },
      container2: {
        width:500,
        marginLeft:32,
        fontSize: 18,
        color: AppColor.lightGrey,
        fontFamily:'WorkSans-VariableFont'
    },
    boxShadow: {
        width: 330,
        height: 69,
        marginTop:308,
        marginLeft:35,
        backgroundColor:AppColor.white,
        position:'absolute',
        justifyContent:'center',
        paddingLeft:80,
        borderRadius: 25,
      },
      boxShadow1: {
        width: 330,
        height: 69,
        marginTop:400,
        marginLeft:35,
        backgroundColor:AppColor.white,
        position:'absolute',
        justifyContent:'center',
        paddingLeft:110,
        borderRadius: 25,
      },
      password: {
          width:122,
          height:20,
          marginTop:250,
          marginLeft:250,
          opacity:50,
          fontSize:15,
          fontWeight:'500',
          color:AppColor.black,
          fontFamily:'WorkSans-VariableFont'
      },
      loginButton: {
        width:301,
        height:56,
        marginTop:35,
        marginLeft:55,
        backgroundColor:AppColor.darkSky,
        borderRadius:10,
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
        marginTop:20,
        marginLeft:105,
        color:AppColor.black,
        fontFamily:'WorkSans-VariableFont'
      },
      Sign: {
        width:55,
        height:20,
        marginTop:20,
        marginLeft:250,
        position:'absolute',
        color:AppColor.lightBlue,
        fontFamily:'WorkSans-VariableFont'
      },
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
      mark1: {
        position:'absolute',
        left:30,
        top:70
      },
      emailIcon: {
        width:17,
        height:18,
        left:35,
        position:'absolute'
    },
    email: {
        width: 172,
        height:56,
        marginLeft:-10,
        fontWeight:'400',
        fontSize:14,
    },
    password1:{
        width:14,
        height:16,
        left:35,
        position:'absolute'
    },
    password0:{
        width: 172,
        height:56,
        marginLeft:-38,
        fontWeight:'400',
        fontSize:14,
    },
    shadow: {
        color: AppColor.black,
        shadowRadius: 10, 
        shadowOpacity: 0.6,
        elevation:5,
        shadowOffset: {
        height : 11,
        width: 0,     
        },
    }
});