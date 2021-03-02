import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";
import { fonts } from "./utilities/images";

import {
    moderateScale,
} from 'react-native-size-matters';
const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    signInBtn:
    {
        backgroundColor: '#2945FF',
        height: moderateScale(44),
        width: width - 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    signInText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontFamily: fonts.bold
    },
    container: {
        marginTop: Platform.OS == "ios" ? 50 : 0,
        flex: 1,
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
        padding: 20,
        paddingTop: 0
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
    forgote: {
        color: 'blue',
        marginBottom: moderateScale(2),
        fontFamily: fonts.regular
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
    lockImage: {
        position: 'absolute',
        top: moderateScale(28),
        left: moderateScale(30)
    },
    passwordInput: {
        height: moderateScale(44),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(35),
        marginTop: moderateScale(20)
    },
    emailIcon: {
        position: 'absolute',
        top: moderateScale(15),
        left: moderateScale(30)
    },
    emailInput: {
        height: moderateScale(44),
        width: width - 50,
        alignSelf: 'center',
        borderRadius: moderateScale(10),
        borderColor: 'lightgrey',
        borderWidth: 0.5,
        paddingHorizontal: moderateScale(35)
    },
    inputView: {
        flex: 0.2,
        marginTop: moderateScale(10)
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
        fontFamily: fonts.regular
    }
});