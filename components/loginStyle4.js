import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import { fonts } from "./utilities/images";
import { RFValue } from 'react-native-responsive-fontsize';

import {
    moderateScale,
} from 'react-native-size-matters';
import { color } from 'react-native-reanimated';
const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({

    signInText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontFamily: fonts.semiBold
    },
    container: {
        marginTop: Platform.OS == 'ios' ? 50 : 0,
        flex: 1,
        backgroundColor: 'white'
    },
    signInBtnView: {
        marginTop: moderateScale(40),
        flex: 0.1,
    },
    signInText1: {
        marginTop: moderateScale(30),
        left: moderateScale(45),
        color: '#36455A',
        fontFamily: fonts.regular,

    },
    OpacitySignInText: {
        color: '#8F70FF'
    },
    opacitybtn: {
        marginTop: moderateScale(30),
        flex: 0.1,
    },
    signInBtn:
    {
        backgroundColor: '#8F70FF',
        height: moderateScale(48),
        width: width - 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    opacitySignBtn:{
        backgroundColor: 'white',
        height: moderateScale(48),
        width: width - 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(10),
        borderColor: '#8F70FF',
        borderWidth: 0.5,
        marginTop: moderateScale(20)
    },
    googleView: {
        flex: 0.2,
        marginTop: moderateScale(20)
    },
    googleInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        paddingTop: 0
    },
    googlebtn: {
        borderRadius: 10,
        height: moderateScale(44),
        width: width / 2 - 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FC6A57',
        padding: moderateScale(10),
        right: moderateScale(15)

    },
    facebookImg: {
        borderRadius: 10,
        height: moderateScale(44),
        width: width / 2 - 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#298FFF',
        padding: moderateScale(10),
        left: moderateScale(12)
    },
    facebookText: {
        color: 'white',
        marginLeft: moderateScale(10),
        fontFamily: fonts.bold
    },
    regularTxt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(40),
    },
    regularStyle: {
        color: '#092C4C',
        fontFamily: fonts.regular
    },
    signUpTxt: {
        color: '#7957F3',
        marginLeft: moderateScale(5),
        fontFamily: fonts.bold,
    },
    forgote: {
        color: 'grey',
        marginBottom: moderateScale(2),
        left: moderateScale(70),
        fontFamily: fonts.regular
    },
    reset: {
        color: '#8F70FF',
        marginBottom: moderateScale(2),
        right: moderateScale(77),
        fontFamily: fonts.regular
    },
    remember: {
        marginLeft: moderateScale(10),
        marginTop: moderateScale(2),
        color: '#ABB3BB',
        fontFamily: fonts.regular
    },

    checkBoxTouch: {
        flexDirection: 'row',
    },
    checkBoxbtn: {
        position: 'absolute',
        top: moderateScale(33),
        right: moderateScale(51)
    },
    HideIcon: {
        top: moderateScale(18)
    },

    textStyle: {
        color: '#8F70FF',
        fontFamily: fonts.regular,
    },
    errorMessage: {
        fontSize: 12,
        color:"red",
        marginLeft: moderateScale (40),
        fontFamily: fonts.regular
      },


    passwordInput: {
        height: moderateScale(44),
        width: width - 80,
        alignSelf: 'center',
        borderBottomWidth: moderateScale(1),
        borderColor: 'grey',
        // paddingHorizontal: moderateScale(25),
        marginTop: moderateScale(20),
        fontFamily: fonts.regular,

    },
    logo: {
        position: 'absolute',
        top: moderateScale(95),
        left: moderateScale(155),

    },
    groupLogo: {
        position: 'absolute',
        top: moderateScale(55),
        left: moderateScale(90),
    },

    emailInput: {
        height: moderateScale(44),
        width: width - 80,
        alignSelf: 'center',
        borderColor: 'grey',
        borderBottomWidth: moderateScale(1),
        // paddingHorizontal: moderateScale(25),
        fontFamily: fonts.regular,

    },
    inputView: {
        flex: 0.2,
        marginTop: moderateScale(40),
    },
    emailtxt: {
        left: moderateScale(40),
        color: 'grey'
    },
    passtxt: {
        left: moderateScale(40),
        top: moderateScale(20),
        color: 'grey'
    },
    headText: {
        marginTop: moderateScale(125),
        flex: 0.1,
        alignItems: 'center',
        fontFamily: fonts.bold,
        marginLeft: moderateScale(250),

    },
    headLogo: {
        position: 'absolute',
        top: moderateScale(-30),
        right: moderateScale(-10)
    },
    logoView: {
        flex: 0.3,
    },
        headerStyle: {
        marginTop: moderateScale(120),
        color: '#393F45',
        fontFamily: fonts.bold,
        right: moderateScale(127),
        fontSize: RFValue(28),

    },

    headtextStyle: {
        marginTop: moderateScale(10),
        color: 'grey',
        fontFamily: fonts.regular,
        marginRight: moderateScale(140),
        width: width - 20

    },
    headtextStyle1: {
        fontSize: RFValue(18),
        marginTop: moderateScale(65),
        fontFamily: fonts.regular,
        right: moderateScale(59),
        backgroundColor: 'red'

    },
    
});