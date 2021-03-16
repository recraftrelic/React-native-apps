import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import screen1 from './screen1.json';
import {styles} from './ScreenStyle';
import {images} from '../../components/utilities/images';
import CommonInput from './Component/CommonInput';
import {SafeAreaView} from 'react-native-safe-area-context';
const Screen1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);

  const onChangeText = (password) => {
    setPassword(password);
    if (password.trim().length < 8) {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
    }
  };

  const onChangeEmail = (email) => {
    setEmail(email);
    let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(email)) {
      setEmailErrorStatus(true);
      return;
    } else {
      setEmailErrorStatus(false);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image style={styles.image1} source={images.Ellipse1} />
        <Image style={styles.circle1} source={images.Circle1} />
        <Image style={styles.image2} source={images.Ellipse2} />
        <Image style={styles.circle2} source={images.Circle2} />
        <Image style={styles.arrow1} source={images.zigzag} />
        <Image style={styles.circle3} source={images.Circle3} />
        <Image style={styles.arrow2} source={images.zigzag} />
        <Image style={styles.image3} source={images.Ellipse3} />
        <Image style={styles.circle4} source={images.Circle1} />
        <View style={styles.container}>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <Text style={styles.login}>{screen1.name}</Text>
            <Text style={styles.email}>{screen1.email}</Text>
            <Text style={styles.number}>{screen1.number}</Text>

            <View>
              <CommonInput
                style={styles.inputEmail}
                value={email}
                placeholderTextColor="white"
                placeholder="Email or phone number"
                imageStyle={styles.emailIcon}
                imageSource={images.Vector1}
                viewStyle={styles.childView}
                onChangeText={(value) => onChangeEmail(value)}
                secureTextEntry={false}
              />
              {emailErrorStatus ? (
                <Text style={styles.errorMessage}>
                  * Please include an '@' in the email address.
                </Text>
              ) : null}
            </View>
            <View>
              <CommonInput
                style={styles.inputEmail}
                placeholderTextColor="white"
                placeholder="Password"
                value={password}
                imageStyle={styles.emailIcon}
                imageSource={images.open}
                viewStyle={styles.childView}
                secureTextEntry={true}
                onChangeText={(value) => onChangeText(value)}
              />
              {passwordErrorStatus == true ? (
                <Text style={styles.errorMessage}>
                  * Password should be minimum 8 characters.
                </Text>
              ) : null}
            </View>
            <View>
              <Text style={styles.forgotPassword}>{screen1.forgot}</Text>
            </View>
            <View style={styles.loginButton}>
              <Text style={styles.button}>{screen1.button}</Text>
            </View>
            <View>
              <Text style={styles.account}>{screen1.account}</Text>
              <Text style={styles.Sign}>{screen1.sign}</Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Screen1;
