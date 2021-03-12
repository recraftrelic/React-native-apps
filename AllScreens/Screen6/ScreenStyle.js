import { StyleSheet } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { moderateScale } from "react-native-size-matters"
import { AppColor } from "../AppUtil"
import { fonts } from '../../components/utilities/images';



export const styles = StyleSheet.create({
    image1: {
        position: 'absolute',
        left: moderateScale(295),
    },
    circle2: {
        position: 'absolute',
        top: moderateScale(90),
        left: moderateScale(300),
    },
    arrow1: {
        position: 'absolute',
        left: moderateScale(280),
        top: moderateScale(105)
    },
    logo: {
        top: moderateScale(99),
        left: moderateScale(51),
        position: 'absolute'
    },
    hello: {
        top: moderateScale(230),
        left: moderateScale(35),
        fontWeight: '700',
        fontSize: RFValue(30),
        lineHeight: 35,
        fontFamily: fonts.regular,

    },
    state: {
        top: moderateScale(277),
        left: moderateScale(35),
        fontWeight: '400',
        fontSize: RFValue(16),
        position: 'absolute',
        color: AppColor.content,
        fontFamily: fonts.regular,

    },
    user: {
        top: moderateScale(322),
        left: moderateScale(20),
        fontWeight: '400',
        fontSize: RFValue(12),
        position: 'absolute',
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    name: {
        top: moderateScale(345),
        left: moderateScale(20),
        position: 'absolute',
        fontWeight: '400',
        fontSize: RFValue(12),
        lineHeight: 14,
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    tick: {
        position: 'absolute',
        height: moderateScale(21),
        top: moderateScale(355),
        left: moderateScale(301),
    },
    childView: {
        position: 'absolute',
        width: moderateScale(313),
        top: moderateScale(363),
        left: moderateScale(20),
        //   borderBottomColor:AppColor.purple,
        //   borderBottomWidth:2,
        borderBottomWidth: 0.58,
        borderColor: AppColor.borderColor,

    },
    password: {
        top: moderateScale(360),
        left: moderateScale(20),
        fontWeight: '400',
        fontSize: RFValue(12),
        lineHeight: 14,
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    childView1: {
        width: moderateScale(313),
        top: moderateScale(370),
        left: moderateScale(20),
        borderBottomWidth: 0.58,
        borderColor: AppColor.borderColor,
    },
    rectangle: {
        top: moderateScale(420),
        left: moderateScale(20),
        borderRadius: 1,
        position: 'absolute',
        borderColor: AppColor.greyContent
    },
    checkBox: {
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: 5
    },
    remember: {
        top: moderateScale(425),
        left: moderateScale(55),
        fontWeight: '400',
        fontSize: RFValue(12),
        lineHeight: 12,
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    forgot: {
        top: moderateScale(415),
        left: moderateScale(236),
        fontWeight: '400',
        fontSize: RFValue(12),
        lineHeight: 12,
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    button: {
        width: moderateScale(320),
        height: moderateScale(50),
        top: moderateScale(511),
        left: moderateScale(20),
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: AppColor.purple
    },
    login: {
        fontSize: RFValue(15),
        color: AppColor.white,
        textAlign: 'center',
        top: moderateScale(15),
        fontFamily: fonts.regular,

    },
    account: {
        top: moderateScale(505),
        left: moderateScale(50),
        fontWeight: '400',
        fontSize: RFValue(13),
        lineHeight: 14,
        color: AppColor.greyContent,
        fontFamily: fonts.regular,

    },
    sign: {
        top: moderateScale(575),
        left: moderateScale(200),
        fontWeight: '400',
        fontSize: RFValue(12),
        lineHeight: 14,
        position: 'absolute',
        color: AppColor.colorContent,
        fontFamily: fonts.regular,

    },
    errorMessage: {
        top: moderateScale(370),
        marginLeft: moderateScale(50),
        position: 'absolute',
        color: AppColor.red
    },
    errorMessage1: {
        top: moderateScale(425),
        marginLeft: moderateScale(50),
        position: 'absolute',
        color: AppColor.red
    }

})