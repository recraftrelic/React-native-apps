import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {styles} from './loginStyle1';
import login1 from './login1.json';
import {images} from './utilities/images';

const LoginScreen1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showHidePassword, setShowHidePassword] = useState(true);
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);

  const onEnterText = (password) => {
    setPassword(password);
    if (password.trim().length < 8) {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
    }
  };

  const onEnterEmail = (value) => {
    console.log(value, '989898');
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (reg.test(value)) {
      setEmailErrorStatus(false);
    } else {
      if (value !== '') {
        setEmailErrorStatus(true);
      }
    }

    setEmail(value);
  };

  const onLogin = () => {
    if (email == '') {
      setEmailErrorStatus(true);
    } else {
      setEmailErrorStatus(false);
    }
    if (password == '') {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
      alert(`${email} + ${password}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Image source={images.Ellipse} style={styles.headLogo} />

          <Image source={images.EllipseCrcl} style={styles.crcl} />
          <Image source={images.zigzag} style={styles.zigzag} />

          <View style={styles.headText}>
            <Image source={images.logo} style={styles.logo} />

            <Text style={styles.name}>{login1.name}</Text>

            <Text style={styles.headerStyle}>{login1.header}</Text>
          </View>

          <View style={styles.signintxt}>
            <Text style={styles.signintxt1}>{login1.signing}</Text>

            <Text style={styles.siguptxt}>{login1.headerSigning}</Text>
          </View>

          <View style={styles.inputView}>
            <View>
              <TextInput
                value={email}
                onChangeText={(email) => onEnterEmail(email)}
                placeholder="Enter your email"
                style={styles.emailInput}
              />
              {emailErrorStatus == true ? (
                <Text style={styles.errorMessage}>
                  * Please include an '@' in the email address.
                </Text>
              ) : null}
              {email && !emailErrorStatus ? (
                <Image source={images.tick1} style={styles.tick} />
              ) : null}
              <Image style={styles.emailIcon} source={images.at} />
            </View>

            <View>
              <TextInput
                value={password}
                onChangeText={(password) => onEnterText(password)}
                placeholder="Enter password here."
                secureTextEntry={showHidePassword}
                style={styles.passwordInput}
              />
              {passwordErrorStatus == true ? (
                <Text style={styles.errorMessage}>
                  * Password should be minimum 8 characters.
                </Text>
              ) : null}
              <Image style={styles.lockImage} source={images.lock} />

              <TouchableOpacity
                onPress={() => setShowHidePassword(!showHidePassword)}
                style={styles.checkBoxbtn}
                hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                {showHidePassword ? (
                  <Image source={images.HideIcon} style={styles.hideIcon} />
                ) : (
                  <Image source={images.ic_ad_view} />
                )}
              </TouchableOpacity>
            </View>
            <Image style={styles.vector} source={images.Vector} />
            <Image style={styles.vector1} source={images.Vector} />
          </View>
          <View style={styles.forgotetext}>
            <Text style={styles.forgote}>{login1.forgote}</Text>

            <Text style={styles.reset}>{login1.reset}</Text>
          </View>

          <View style={styles.signInBtnView}>
            <TouchableOpacity style={styles.signInBtn} onPress={onLogin}>
              <Text style={styles.signInText}>{login1.login}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.skip}>{login1.skip}</Text>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen1;
