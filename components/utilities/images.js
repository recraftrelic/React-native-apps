import { Platform } from "react-native";
import logo from "../../images/icons/logo.png";
import Ellipse from "../../images/icons/Ellipse.png";
import oroptional from "../../images/icons/oroptional.png";
import Google from "../../images/icons/Google.png";
import Shape from "../../images/icons/Shape.png";
import checkIcon from "../../images/icons/check.png";
import checkbox from "../../images/icons/checkbox.png";
import emailIcon from "../../images/icons/email.png";
import lock from "../../images/icons/lock.png";
import HideIcon from "../../images/icons/Hide.png";
import ic_ad_view from "../../images/icons/ic_ad_view.png";
import group from "../../images/icons/Group.png";



const images = {
    logo,
    Ellipse,
    oroptional,
    Google,
    Shape,
    checkIcon,
    checkbox,
    emailIcon,
    lock,
    HideIcon,
    ic_ad_view,
    group
}

const fonts = Platform.select({
    ios: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
    },
    android: {
        regular: 'WorkSans-Regular',
        semiBold: 'WorkSans-SemiBold',
        bold: 'WorkSans-Bold',
        extraBold: 'WorkSans-ExtraBold',
    }
});

export {
    fonts,
    images
};
