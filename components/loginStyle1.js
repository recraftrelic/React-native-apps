import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";
import { fonts } from "./utilities/images";

import {
    moderateScale,
} from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: moderateScale(55),
        left: moderateScale(30),
    },
    name: {
        fontSize: RFValue(24),
        marginTop: moderateScale(160),
        fontFamily: fonts.bold,
        right: moderateScale(120),
        color: '#393F45',

    },
    signInBtn:
    {
        backgroundColor: '#3D57FF',
        height: moderateScale(58),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    skip: {
        marginTop: moderateScale(33),
        left: moderateScale(160),
        flex: 0.1,
    },
    signInText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontFamily: fonts.semiBold
    },
    container: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 1,
        backgroundColor: 'white'
    },
    signInBtnView: {
        marginTop: moderateScale(20),
        flex: 0.1,
    },
    googleView: {
        flex: 0.2,
        marginTop: moderateScale(20)
    },
    googleInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: moderateScale(50),
        paddingTop: 0,
    },
    googlebtn: {
        borderRadius: 10,
        height: moderateScale(44),
        width: width / 2 - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FC6A57',
        padding: moderateScale(10)
    },
    signintxt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: moderateScale(50),
        paddingTop: 0,
        top: moderateScale(12)
    },
    signintxt1: {
        color: '#393F45',
        marginRight: moderateScale(185),
        fontFamily: fonts.regular,
        fontSize: RFValue(18),
        left: moderateScale(2),
    },

    siguptxt: {
        color: '#D0D0D0',
        marginLeft: moderateScale(14),
        fontFamily: fonts.regular,
        right: moderateScale(155),
        fontSize: RFValue(18),

    },
    facebookImg: {
        borderRadius: 10,
        height: moderateScale(44),
        width: width / 2 - 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#298FFF',
        padding: moderateScale(10)
    },
    facebookText: {
        color: 'white',
        marginLeft: moderateScale(10),
        fontFamily: fonts.bold
    },
    regularTxt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateScale(40)
    },
    regularStyle: {
        color: '#092C4C',
        fontFamily: fonts.regular
    },
    signUpTxt: {
        color: 'blue',
        marginLeft: moderateScale(5),
        fontFamily: fonts.regular
    },
    forgotetext: {
        marginTop: moderateScale(20),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    forgote: {
        color: '#393F45',
        fontFamily: fonts.regular,
        bottom: moderateScale(7),
        right: moderateScale(28),
        fontSize: RFValue(14),

    },
    reset: {
        fontFamily: fonts.regular,
        bottom: moderateScale(6),
        right: moderateScale(126),
        fontSize: RFValue(14),
        color: '#D0D0D0',

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
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    checkBoxTouch: {
        flexDirection: 'row',
    },
    checkBoxbtn: {
        position: 'absolute',
        top: moderateScale(30),
        right: moderateScale(40)
    },
    hideIcon: {
        top: moderateScale(5)
    },

    lockImage: {
        position: 'absolute',
        top: moderateScale(33),
        left: moderateScale(26)
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        marginLeft: moderateScale(30),
        fontFamily: fonts.regular

    },
    tick: {
        bottom: moderateScale(35),
        left: moderateScale(310),
        height: moderateScale(20),
        width: moderateScale(20),

    },
    passwordInput: {
        height: moderateScale(53),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(39),
        marginTop: moderateScale(20),
        backgroundColor: '#F5F5F5'

    },
    emailIcon: {
        position: 'absolute',
        top: moderateScale(21),
        left: moderateScale(30),

    },
    vector: {
        position: 'absolute',
        top: moderateScale(18),
        left: moderateScale(52),

    },
    vector1: {
        position: 'absolute',
        top: moderateScale(94),
        left: moderateScale(52),
    },
    emailInput: {
        height: moderateScale(56),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(39),
        backgroundColor: '#F5F5F5'
    },
    inputView: {
        flex: 0.2,
        marginTop: moderateScale(5)
    },
    headText: {
        marginTop: moderateScale(40),
        flex: 0.3,
        alignItems: 'center',
    },
    headLogo: {
        position: 'absolute',
        top: moderateScale(-30),
        right: moderateScale(-10)
    },
    crcl: {
        position: 'absolute',
        top: moderateScale(60),
        right: moderateScale(60),
    },
    zigzag: {
        position: 'absolute',
        top: moderateScale(72),
        right: moderateScale(75),
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
        fontSize: RFValue(24),
        marginTop: moderateScale(5),
        color: '#393F45',
        fontFamily: fonts.bold,
        right: moderateScale(46),
    }
});