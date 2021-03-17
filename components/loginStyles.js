import {StyleSheet, Dimensions, Platform} from 'react-native';
import {fonts} from './utilities/images';
import {RFValue} from 'react-native-responsive-fontsize';

import {moderateScale} from 'react-native-size-matters';
const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: '#2945FF',
    height: moderateScale(44),
    width: width - 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  signInText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: fonts.regular,
  },
  container: {
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    flex: 1,
    backgroundColor: 'white',
  },
  signInBtnView: {
    marginTop: moderateScale(20),
    flex: 0.1,
  },
  googleView: {
    flex: 0.2,
    marginTop: moderateScale(5),
  },
  googleInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    paddingTop: 0,
    top: moderateScale(25),
  },
  continue: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    color: '#ABB3BB',
  },
  googlebtn: {
    borderRadius: 10,
    height: moderateScale(44),
    width: width / 2 - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FC6A57',
    padding: moderateScale(10),
  },
  facebookImg: {
    borderRadius: 10,
    height: moderateScale(44),
    width: width / 2 - 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#298FFF',
    padding: moderateScale(10),
  },
  facebookText: {
    color: 'white',
    marginLeft: moderateScale(10),
    fontFamily: fonts.regular,
  },
  regularTxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(40),
  },
  regularStyle: {
    color: '#092C4C',
    fontFamily: fonts.regular,
  },
  signUpTxt: {
    color: 'blue',
    marginLeft: moderateScale(5),
    fontFamily: fonts.semiBold,
  },
  forgote: {
    color: '#2945FF',
    marginBottom: moderateScale(2),
    fontFamily: fonts.regular,
  },
  remember: {
    marginLeft: moderateScale(10),
    marginTop: moderateScale(2),
    color: '#ABB3BB',
    fontFamily: fonts.regular,
  },
  checkBox: {
    height: moderateScale(22),
    width: moderateScale(22),
    borderRadius: 5,
  },
  checkBoxView: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  checkBoxTouch: {
    flexDirection: 'row',
  },
  checkBoxbtn: {
    position: 'absolute',
    top: moderateScale(30),
    right: moderateScale(40),
  },
  lockImage: {
    position: 'absolute',
    top: moderateScale(28),
    left: moderateScale(27),
  },
  passwordInput: {
    height: moderateScale(44),
    width: width - 50,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    paddingHorizontal: moderateScale(38),
    marginTop: moderateScale(20),
    fontFamily: fonts.regular,
  },
  emailIcon: {
    position: 'absolute',
    top: moderateScale(18),
    left: moderateScale(30),
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    marginLeft: moderateScale(30),
    fontFamily: fonts.regular,
  },
  tick: {
    bottom: moderateScale(35),
    left: moderateScale(310),
    height: moderateScale(20),
    width: moderateScale(20),
  },
  emailInput: {
    height: moderateScale(50),
    width: width - 50,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    paddingHorizontal: moderateScale(38),
    fontFamily: fonts.regular,
  },
  inputView: {
    flex: 0.2,
    marginTop: moderateScale(10),
  },
  headText: {
    marginTop: moderateScale(40),
    flex: 0.3,
    alignItems: 'center',
  },
  logo: {
    marginTop: moderateScale(40),
  },
  headName: {
    fontSize: RFValue(24),
    marginTop: moderateScale(10),
    fontFamily: fonts.bold,
  },
  headLogo: {
    position: 'absolute',
    top: moderateScale(-30),
    right: moderateScale(-10),
  },
  logoView: {
    flex: 1,
  },
  googleTxt: {
    color: 'white',
    marginLeft: moderateScale(10),
    fontFamily: fonts.regular,
  },
  headerStyle: {
    marginTop: moderateScale(10),
    color: 'grey',
    fontFamily: fonts.regular,
  },
});
