import {Platform, StyleSheet} from 'react-native';
import {AppColor} from '../AppUtil';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../components/utilities/images';

export const styles = StyleSheet.create({
  container: {
    width: scale(311),
    height: verticalScale(450),
    top: moderateScale(100),
    left: moderateScale(20),
    borderRadius: 40,
    backgroundColor: AppColor.black,
    position: 'absolute',
  },
  arrow: {
    left: moderateScale(35),
    marginTop: moderateScale(65),
    color: AppColor.white,
  },
  arr: {
    width:18,
    height:18,
  },
  main: {
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  login: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: RFValue(34),
    color: AppColor.white,
    fontFamily: fonts.VariableFont,
  },
  email: {
    height: moderateScale(30),
    marginTop: moderateScale(10),
    fontSize: RFValue(15),
    fontWeight: '400',
    textAlign: 'center',
    color: AppColor.blackGrey,
    fontFamily: fonts.regular,
  },
  number: {
    fontSize: RFValue(15),
    fontWeight: '400',
    textAlign: 'center',
    color: AppColor.blackGrey,
    height: moderateScale(36),
    marginTop: moderateScale(-8),
    fontFamily: fonts.regular,
  },
  inputEmail: {
    color: AppColor.white,
    height: moderateScale(55),
    left: moderateScale(70),
    fontWeight: '400',
    fontSize: RFValue(14),
    margin: moderateScale(5),
    top: moderateScale(2),
    borderBottomEndRadius: 23,
  },
  childView: {
    borderBottomWidth: 1,
    borderBottomColor: AppColor.lineGrey,
    left: moderateScale(35),
    top: moderateScale(10),
    width: moderateScale(250),
  },
  line: {
    bottom: moderateScale(22),
  },
  emailIcon: {
    width: moderateScale(15),
    height: moderateScale(12),
    marginLeft: moderateScale(50),
    marginTop: moderateScale(-34),
  },
  forgotPassword: {
    marginLeft: moderateScale(180),
    color: AppColor.white,
    fontFamily: fonts.regular,
  },
  loginButton: {
    width: moderateScale(265),
    height: moderateScale(50),
    marginTop: moderateScale(10),
    marginLeft: moderateScale(40),
    backgroundColor: AppColor.darkSky,
    borderRadius: 10,
  },
  button: {
    paddingTop: 15,
    textAlign: 'center',
    color: AppColor.white,
    fontSize: RFValue(17),
    fontFamily: fonts.regular,
  },
  account: {
    marginTop: moderateScale(5),
    marginRight: moderateScale(45),
    color: AppColor.white,
    fontSize: RFValue(15),
    fontFamily: fonts.regular,
  },
  accountView: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Sign: {
    marginTop: moderateScale(5),
    marginLeft: moderateScale(155),
    position: 'absolute',
    color: AppColor.darkSky,
    fontSize: RFValue(15),
    fontFamily: fonts.regular,
  },
  image1: {
    top: moderateScale(65),
    position: 'absolute',
  },
  circle1: {
    marginTop: moderateScale(58),
    marginLeft: moderateScale(56),
  },
  image2: {
    left: moderateScale(290),
    position: 'absolute',
  },
  circle2: {
    position: 'absolute',
    top: moderateScale(45),
    left: moderateScale(300),
  },
  arrow1: {
    position: 'absolute',
    left: moderateScale(280),
    top: moderateScale(58),
  },
  circle3: {
    position: 'absolute',
    top: moderateScale(550),
    left: moderateScale(80),
  },
  arrow2: {
    position: 'absolute',
    top: moderateScale(600),
    left: moderateScale(105),
  },
  image3: {
    position: 'absolute',
    top: moderateScale(350),
    left: moderateScale(190),
  },
  circle4: {
    position: 'absolute',
    top: moderateScale(600),
    left: moderateScale(270),
  },
  errorMessage1: {
    color: AppColor.red,
    textAlign: 'center',
    top: moderateScale(20),
  },
  errorMessage: {
    color: AppColor.red,
    textAlign: 'center',
    top: moderateScale(15),
  },
});
