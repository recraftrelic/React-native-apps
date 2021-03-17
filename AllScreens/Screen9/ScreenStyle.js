import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
import {AppColor} from '../AppUtil';
import {fonts} from '../../components/utilities/images';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
  arrow: {
    left: moderateScale(30),
    marginTop: moderateScale(65),
  },
  main: {
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  sign: {
    position: 'absolute',
    left: moderateScale(70),
    top: moderateScale(60),
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: RFValue(18),
    lineHeight: 21,
    textAlign: 'right',
  },
  logo: {
    position: 'absolute',
    left: moderateScale(150),
    top: moderateScale(127),
  },
  email: {
    top: moderateScale(180),
    left: moderateScale(19),
    fontWeight: '400',
    fontSize: RFValue(12),
    color: AppColor.blackGrey,
    fontFamily: fonts.regular,
  },
  email1: {
    top: moderateScale(186),
    left: moderateScale(19),
    fontWeight: '500',
    fontSize: RFValue(14),
    lineHeight: 16,
    color: AppColor.blackGrey,
    fontFamily: fonts.regular,
  },
  childView: {
    width: moderateScale(292),
    top: moderateScale(186),
    left: moderateScale(19),
    borderBottomWidth: 0.58,
    borderColor: AppColor.borderColor,
    flex: 0.1,
  },
  password: {
    top: moderateScale(220),
    left: moderateScale(19),
    fontWeight: '400',
    fontSize: RFValue(12),
    lineHeight: 14,
    color: AppColor.blackGrey,
    fontFamily: fonts.regular,
  },
  password1: {
    top: moderateScale(230),
    left: moderateScale(19),
    fontWeight: '500',
    fontSize: RFValue(14),
    lineHeight: 16,
    color: AppColor.blackGrey,
    fontFamily: fonts.regular,
  },
  childView1: {
    width: moderateScale(292),
    top: moderateScale(10),
    left: moderateScale(19),
    borderBottomWidth: 0.58,
    borderColor: AppColor.borderColor,
  },
  eyes: {
    marginTop: moderateScale(200),
    left: moderateScale(275),
    color: AppColor.violet,
  },
  print: {
    top: moderateScale(453),
    left: moderateScale(43),
    position: 'absolute',
    flex: 0.2,
  },
  continue: {
    position: 'absolute',
    width: moderateScale(220),
    height: moderateScale(61),
    top: moderateScale(453),
    borderRadius: 10,
    left: moderateScale(111),
    backgroundColor: AppColor.purple,
    flex: 0.2,
  },
  content: {
    paddingTop: 20,
    color: AppColor.white,
    textAlign: 'center',
    fontSize: RFValue(16),
    fontWeight: '500',
    fontFamily: fonts.regular,
  },
  forgot: {
    top: moderateScale(325),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: RFValue(16),
    color: AppColor.purple,
    fontFamily: fonts.regular,
  },
  child: {
    width: moderateScale(135),
    height: moderateScale(5),
    top: moderateScale(595),
    left: moderateScale(120),
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: AppColor.background,
  },
  errorMessage: {
    position: 'absolute',
    top: moderateScale(350),
    left: moderateScale(40),
    color: AppColor.red,
  },
  errorMessage1: {
    position: 'absolute',
    top: moderateScale(445),
    left: moderateScale(40),
    color: AppColor.red,
  },
});
