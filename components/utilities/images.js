import {Platform} from 'react-native';
import logo from '../../images/icons/logo.png';
import Ellipse from '../../images/icons/Ellipse.png';
import oroptional from '../../images/icons/oroptional.png';
import Google from '../../images/icons/Google.png';
import backArrow from '../../images/icons/backArrow.png';
import Shape from '../../images/icons/Shape.png';
import coLogo from '../../images/icons/coLogo.jpg';
import checkIcon from '../../images/icons/check.png';
import checkbox from '../../images/icons/checkbox.png';
import emailIcon from '../../images/icons/email.png';
import lock from '../../images/icons/lock.png';
import HideIcon from '../../images/icons/Hide.png';
import ic_ad_view from '../../images/icons/ic_ad_view.png';
import group from '../../images/icons/Group.png';
import at from '../../images/icons/at.png';
import Vector from '../../images/icons/Vector.png';
import EllipseCrcl from '../../images/icons/EllipseCrcl.png';
import zigzag from '../../images/icons/zigzag.png';
import contine from '../../images/icons/contine.png';
import Ellipse1 from '../../AllScreens/Images/Ellipse1.png';
import Circle1 from '../../AllScreens/Images/Circle1.png';
import Ellipse2 from '../../AllScreens/Images/Ellipse2.png';
import Circle2 from '../../AllScreens/Images/Circle2.png';
import Circle3 from '../../AllScreens/Images/Circle3.png';
import Ellipse3 from '../../AllScreens/Images/Ellipse3.png';
import Vector1 from '../../AllScreens/Images/Vector1.png';
import open from '../../AllScreens/Images/open.png';
import mark1 from '../../AllScreens/Images/mark1.png';
import email2 from '../../AllScreens/Images/email2.png';
import password1 from '../../AllScreens/Images/password1.png';
import Ellipse21 from '../../AllScreens/Images/Ellipse21.png';
import pCircle1 from '../../AllScreens/Images/pCircle1.png';
import arrow1 from '../../AllScreens/Images/arrow1.png';
import pLogo1 from '../../AllScreens/Images/pLogo1.png';
import pRectangle from '../../AllScreens/Images/pRectangle.png';
import Eyes from '../../AllScreens/Images/Eyes.png';
import print from '../../AllScreens/Images/print.png';
import arrow_backward from '../../AllScreens/Images/arrow_backward.png';
import Screen9logo from '../../AllScreens/Images/Screen9logo.png';
import tick1 from '../../images/icons/tick1.png';
import arr from '../../images/icons/arr.png';
import Mainlogo from '../../AllScreens/Images/Mainlogo.png';

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
  group,
  at,
  Vector,
  EllipseCrcl,
  zigzag,
  contine,
  Ellipse1,
  Circle1,
  Ellipse2,
  Circle2,
  Circle3,
  Ellipse3,
  Vector1,
  open,
  mark1,
  email2,
  password1,
  Ellipse21,
  pCircle1,
  arrow1,
  pLogo1,
  pRectangle,
  Eyes,
  print,
  arrow_backward,
  Screen9logo,
  tick1,
  arr,
  backArrow,
  Mainlogo,
  coLogo,
};

const fonts = Platform.select({
  ios: {
    regular: 'WorkSans-Regular',
    semiBold: 'WorkSans-SemiBold',
    bold: 'WorkSans-Bold',
    extraBold: 'WorkSans-ExtraBold',
    VariableFont: 'AbrilFatface-Regular',
    Rubik: 'Rubik-VariableFont',
  },
  android: {
    regular: 'WorkSans-Regular',
    semiBold: 'WorkSans-SemiBold',
    bold: 'WorkSans-Bold',
    extraBold: 'WorkSans-ExtraBold',
    VariableFont: 'AbrilFatface-Regular',
    Rubik: 'Rubik-VariableFont',
  },
});

export {fonts, images};
