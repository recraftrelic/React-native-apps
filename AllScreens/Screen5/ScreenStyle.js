import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
import {AppColor} from '../AppUtil';
import {fonts} from '../../components/utilities/images';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.borderBlue,
  },
  arrow: {
    left: moderateScale(40),
    marginTop: moderateScale(65),
  },
  main: {
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  style1: {
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    backgroundColor: AppColor.white,
    top: moderateScale(60),
    paddingBottom: moderateScale(100),
  },
  logo1: {
    left: moderateScale(160),
  },
  userName: {
    height: moderateScale(81),
    top: moderateScale(20),
    left: moderateScale(30),
    fontSize: RFValue(15),
    fontFamily: fonts.regular,
  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    top: moderateScale(-35),
    height: moderateScale(60),
    width: moderateScale(340),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppColor.borderBlue,
    fontSize: RFValue(15),
    textAlign: 'center',
    margin: moderateScale(10),
    flex: 0.1,
  },
  password: {
    top: moderateScale(-105),
    height: moderateScale(65),
    width: moderateScale(348),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppColor.white,
    backgroundColor: AppColor.cream,
    fontSize: RFValue(15),
    paddingLeft: moderateScale(40),
    margin: moderateScale(10),
    flex: 0.1,
  },
  pass: {
    height: moderateScale(91),
    top: moderateScale(-30),
    left: moderateScale(30),
    fontSize: RFValue(15),
    fontFamily: fonts.regular,
  },
  man: {
    top: moderateScale(-85),
    right: moderateScale(125),
    flex: 0.1,
  },
  View5: {
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(2),
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(10),
    padding: moderateScale(3),
    top: moderateScale(-160),
    left: moderateScale(125),
    textAlign: 'center',
    borderColor: AppColor.borderBlue,
    color: AppColor.borderBlue,
    backgroundColor: AppColor.lightPurple,
    fontFamily: fonts.regular,
  },
  loginButton: {
    width: moderateScale(330),
    height: moderateScale(50),
    marginTop: moderateScale(-105),
    marginLeft: moderateScale(15),
    backgroundColor: AppColor.darkSky,
    borderRadius: 10,
    flex: 0.1,
  },
  button: {
    paddingTop: moderateScale(15),
    textAlign: 'center',
    color: AppColor.white,
    fontSize: RFValue(15),
    fontFamily: fonts.regular,
  },
  account: {
    marginLeft: moderateScale(60),
    color: AppColor.black,
    fontFamily: fonts.regular,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: moderateScale(10),
  },
  Sign: {
    marginLeft: moderateScale(230),
    position: 'absolute',
    color: AppColor.lightBlue,
    fontFamily: fonts.regular,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: moderateScale(10),
  },
  errorMessage: {
    color: 'red',
    position: 'absolute',
    top: moderateScale(40),
  },
  errorMessage1: {
    color: 'red',
    position: 'absolute',
    top: moderateScale(-25),
  },
});
