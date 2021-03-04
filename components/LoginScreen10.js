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
<<<<<<< HEAD
//import { styles } from './loginStyle2';
import { images, fonts } from './utilities/images';
=======
import { styles } from './loginStyle2';
import { images } from './utilities/images';
>>>>>>> 01755a9f447ed959e87b5d822292ef7938b5374a



const LoginScreen10 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheckStatus] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(true);

  const onLogin = () => {
    alert(`${email} + ${password}`);
  };


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
                  onChangeText={(email) => setEmail(email)}
                  placeholder='Enter your email'
                  style={styles.emailInput}
                  
                />
              </View>

              <View>
                <TextInput
                  value={password}
                  onChangeText={(password) => setPassword(password)}
                  placeholder='Enter password here.'
                  secureTextEntry={showHidePassword}
                  style={styles.passwordInput}
                />

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
                    style={styles.checkBoxIcon}/>
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
            <Image source={images.oroptional} style={{ alignSelf: 'center', marginTop: moderateScale(20) }} />
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
