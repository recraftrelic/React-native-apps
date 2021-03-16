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
    borderBox:
    {
        height: moderateScale(480),
        width: moderateScale(315),
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 99,
        top: moderateScale(130),
        left: moderateScale(28),
        borderRadius: 12

    },
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
        marginTop: moderateScale(30),
        flex: 0.1,
    },
    signInText1: {
        marginTop: moderateScale(15),
        left: moderateScale(45),
        color: '#36455A',
        fontFamily: fonts.regular,

    },
    OpacitySignInText: {
        color: '#8F70FF',
        fontFamily: fonts.semiBold,

    },
    opacitybtn: {
        marginTop: moderateScale(15),
        flex: 0.1,
    },
    signInBtn:
    {
        backgroundColor: '#8F70FF',
        height: moderateScale(52),
        width: width - 80,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    opacitySignBtn: {
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
        marginTop: moderateScale(610),
    },
    regularStyle: {
        color: '#092C4C',
        fontFamily: fonts.regular
    },
    signUpTxt: {
        color: 'blue',
        marginLeft: moderateScale(5),
        fontFamily: fonts.regular,
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
        right: moderateScale(60),
        fontFamily: fonts.semiBold
    },
    remember: {
        marginLeft: moderateScale(10),
        marginTop: moderateScale(2),
        color: '#ABB3BB',
        fontFamily: fonts.regular
    },
    checkBox: {
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: 5
    },
    checkBoxView: {
        marginTop: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        right: moderateScale(28),
    },
    checkBoxTouch: {
        flexDirection: 'row',
    },
    checkBoxbtn: {
        position: 'absolute',
        top: moderateScale(33),
        right: moderateScale(51)
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        marginLeft: moderateScale(50),
        fontFamily: fonts.regular

    },
    tick: {
        bottom: moderateScale(35),
        left: moderateScale(285),
        height: moderateScale(20),
        width: moderateScale(20),

    },
    lockImage: {
        position: 'absolute',
        top: moderateScale(28),
        left: moderateScale(30)
    },
    textStyle: {
        color: '#8F70FF',
        fontFamily: fonts.semiBold,
    },

    passwordInput: {
        backgroundColor: '#EAEAEA',
        height: moderateScale(50),
        width: width - 80,
        alignSelf: 'center',
        borderRadius: moderateScale(25),
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(25),
        marginTop: moderateScale(20),
        fontFamily: fonts.regular,

    },
    logo: {
        position: 'absolute',
        top: moderateScale(55),
        left: moderateScale(30),
    },

    emailIcon: {
        position: 'absolute',
        top: moderateScale(15),
        left: moderateScale(30)
    },
    emailInput: {
        backgroundColor: '#EAEAEA',
        height: moderateScale(50),
        width: width - 80,
        alignSelf: 'center',
        borderRadius: moderateScale(25),
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(25),
        fontFamily: fonts.regular,

    },
    inputView: {
        flex: 0.2,
        marginTop: moderateScale(20)
    },
    headText: {
        marginTop: moderateScale(25),
        flex: 0.3,
        alignItems: 'center',
    },
    headLogo: {
        position: 'absolute',
        top: moderateScale(-30),
        right: moderateScale(-10)
    },
    logoView: {
        flex: 1
    },
    googleTxt: {
        color: 'white',
        marginLeft: moderateScale(10),
        fontFamily: fonts.bold
    },
    headerStyle: {
        marginTop: moderateScale(10),
        color: '#393F45',
        fontFamily: fonts.regular,
        right: moderateScale(122),
        fontSize: RFValue(18),

    },

    headtextStyle: {
        fontSize: RFValue(18),
        marginTop: moderateScale(145),
        fontFamily: fonts.regular,
        right: moderateScale(55),
        flex: 0.3
    },

});