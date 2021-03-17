import {Platform, StyleSheet} from 'react-native';
import {AppColor} from '../AppUtil';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    marginLeft: moderateScale(32),
    marginTop: moderateScale(20),
    height: moderateScale(25),
    width: moderateScale(73),
    fontWeight: '400',
    fontSize: RFValue(23),
    lineHeight: 26,
  },
  main: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    flex: 1,
  },
  container1: {
    marginLeft: moderateScale(30),
    fontSize: RFValue(32),
    fontWeight: '700',
  },
  container2: {
    marginLeft: moderateScale(32),
    fontSize: RFValue(18),
    color: AppColor.greyContent,
  },
  boxShadow: {
    width: scale(310),
    height: verticalScale(45),
    top: moderateScale(258),
    left: moderateScale(20),
    backgroundColor: AppColor.white,
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: 80,
    borderRadius: 25,
  },
  boxShadow1: {
    width: scale(310),
    height: verticalScale(45),
    top: moderateScale(358),
    left: moderateScale(20),
    backgroundColor: AppColor.white,
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: 80,
    borderRadius: 25,
  },
  password: {
    width: scale(300),
    marginTop: moderateScale(230),
    marginLeft: moderateScale(200),
    fontSize: RFValue(15),
    fontWeight: '500',
    color: AppColor.lineGrey,
  },
  loginButton: {
    width: scale(300),
    height: verticalScale(55),
    marginTop: moderateScale(10),
    marginLeft: moderateScale(20),
    backgroundColor: AppColor.darkSky,
    borderRadius: 10,
    flex: 0.1,
  },
  button: {
    paddingTop: moderateScale(15),
    textAlign: 'center',
    color: AppColor.white,
    fontSize: RFValue(17),
  },
  account: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(105),
    color: AppColor.black,
  },
  Sign: {
    marginTop: moderateScale(10),
    marginLeft: moderateScale(250),
    position: 'absolute',
    color: AppColor.lightBlue,
  },
  image1: {
    position: 'absolute',
    left: moderateScale(250),
  },
  circle2: {
    position: 'absolute',
    top: moderateScale(80),
    left: moderateScale(300),
  },
  arrow1: {
    position: 'absolute',
    left: moderateScale(280),
    top: moderateScale(95),
  },
  mark1: {
    left: moderateScale(30),
    marginTop: moderateScale(100),
  },

  emailIcon: {
    top: moderateScale(10),
    right: moderateScale(290),
    position: 'absolute',
  },
  password1: {
    top: moderateScale(10),
    right: moderateScale(290),
    position: 'absolute',
  },
  errorMessage: {
    left: moderateScale(50),
    top: moderateScale(310),
    color: AppColor.red,
    position: 'absolute',
  },
  errorMessage1: {
    left: moderateScale(50),
    top: moderateScale(50),
    color: AppColor.red,
    position: 'absolute',
  },
});
