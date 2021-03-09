import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  moderateScale,
} from 'react-native-size-matters';

import login2 from './login2.json';
import { styles } from './loginStyle2';
import { images } from './utilities/images';


const LoginScreen10 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheckStatus] = useState(false);
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
  }

  const onEnterEmail = (value) => {
    console.log(value, "989898")
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (reg.test(value)) {
      setEmailErrorStatus(false);
    } else {
      if (value !== "") {
        setEmailErrorStatus(true);
      }
    }

    setEmail(value);
  }

  const onLogin = () => {
    if (email == '') {
      setEmailErrorStatus(true);
    }
    else {
      setEmailErrorStatus(false);
    }
    if (password == '') {
      setPasswordErrorStatus(true);
    }
    else {
      setPasswordErrorStatus(false);
      alert(`${email} + ${password}`);

    }
  }


  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.headText}>
        <Image source={images.logo} />
      </View>

      <View style={styles.borderBox}>
        <KeyboardAwareScrollView enableOnAndroid={true}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.headText}>
            <Text style={styles.headTxt}>
              {login2.welcome}
            </Text>

            <Text style={styles.headerStyle}>
              {login2.subHead}
            </Text>
            <Text style={styles.headerStyle}>
              {login2.subHead2}
            </Text>
            <View style={styles.inputView}>

              <View>
                <TextInput
                  value={email}
                  onChangeText={(email) => onEnterEmail(email)}
                  placeholder='Enter your email'
                  style={styles.emailInput}
                />
                {emailErrorStatus == true ? (
                  <Text style={styles.errorMessage} >
                    * Please include an '@' in the email address.
                  </Text>
                ) : null}
                {
                  email && !emailErrorStatus ?
                    <Image
                      source={images.tick1}
                      style={styles.tick}
                    />
                    :
                    null
                }
              </View>

              <View>
                <TextInput
                  value={password}
                  onChangeText={(password) => onEnterText(password)}
                  placeholder='Enter password here.'
                  secureTextEntry={showHidePassword}
                  style={styles.passwordInput}
                  underlineColorAndroid="transparent"
                />
                {passwordErrorStatus == true ? (
                  <Text style={styles.errorMessage} >
                    * Password should be minimum 8 characters.
                  </Text>
                ) : null}

                <TouchableOpacity
                  onPress={() => setShowHidePassword(!showHidePassword)}
                  style={styles.checkBoxbtn}
                  hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                >
                  {
                    showHidePassword ?
                      <Image
                        source={images.HideIcon}
                      />
                      :
                      <Image
                        source={images.ic_ad_view}
                      />
                  }

                </TouchableOpacity>


              </View>

            </View>

            <View style={styles.checkBoxView}>
              <TouchableOpacity style={styles.checkBoxTouch}
                onPress={() => setCheckStatus(!check)}
              >
                {
                  check ? <Image source={images.checkbox}
                    style={styles.checkBox} /> :
                    <Image source={images.checkIcon}
                      style={styles.checkBoxIcon} />
                }

                <Text style={styles.remember}>
                  {login2.remember}
                </Text>

              </TouchableOpacity>

              <Text style={styles.forgote}>
                {login2.forgote}
              </Text>

            </View>
            <View style={styles.signInBtnView}>
              <TouchableOpacity style={styles.signInBtn}
                onPress={onLogin}

              >
                <Text style={styles.signInText}>
                  {login2.signIn}
                </Text>

              </TouchableOpacity>

            </View>
            <Image source={images.oroptional} style={{ alignSelf: 'center', marginTop: moderateScale(10) }} />
            <View style={styles.googleView}>

              <View style={styles.googleInnerView}>
                <TouchableOpacity style={styles.googlebtn}>

                  <Image source={images.Google} />

                  <Text style={styles.googleTxt}>
                    {login2.google}
                  </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookImg}>

                  <Image source={images.Shape} />
                  <Text style={styles.facebookText}>
                    {login2.Facebook}
                  </Text>
                </TouchableOpacity>

              </View>
            </View>

          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.regularTxt}>

        <Text style={styles.regularStyle}>
          {login2.account}
        </Text>

        <TouchableOpacity
          onPress={() => console.log('SignUp')}
          hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        >
          <Text

            style={styles.signUpTxt}
          >
            {login2.signup}
          </Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>

  );
};

export default LoginScreen10;