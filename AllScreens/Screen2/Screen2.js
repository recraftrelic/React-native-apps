import React, { useState } from 'react';
import {Image} from 'react-native';
import screen2 from './screen2.json';
import {View} from 'react-native';

import {Text} from 'react-native';
import {styles} from './ScreenStyle';
import {shadow} from 'react-native-paper';
import {images} from '../../components/utilities/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonInput from '../Screen1/Component/CommonInput';

const Screen2 = () => {

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
    
    let reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(email)) {
      setEmailErrorStatus(true);
      return
    } else {
      setEmailErrorStatus(false);
    }

  };

  return (
    <View style={styles.main}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image style={styles.image1} source={images.Ellipse2} />
        <Image style={styles.circle2} source={images.Circle2} />
        <Image style={styles.arrow1} source={images.zigzag} />
        <Image style={styles.mark1} source={images.mark1} />
        <View>
          <Text style={styles.container}>{screen2.container}</Text>
          <Text style={styles.container1}>{screen2.container1}</Text>
          <Text style={styles.container2}>{screen2.container2}</Text>
        </View>
        <View style={[styles.boxShadow, shadow]}>
          <CommonInput
            style={styles.email}
            value={email}
            placeholder="Email"
            imageStyle={styles.emailIcon}
            imageSource={images.email2}
            onChangeText={(value)=> onChangeEmail(value)}
            secureTextEntry={false}
          />
          
        </View>
        {emailErrorStatus  ? (
              <Text style={styles.errorMessage}>
                * Please include an '@' in the email address.
              </Text>
            ) : null}
        <View style={[styles.boxShadow1, shadow]}>
          <CommonInput
            style={styles.password0}
            value={password}
            placeholder="Password"
            imageStyle={styles.password1}
            imageSource={images.password1}
            onChangeText={(value) => onChangeText(value)}
            secureTextEntry={true}
          />
          {passwordErrorStatus == true ? (
              <Text style={styles.errorMessage}>
                * Password should be minimum 8 characters.
              </Text>
            ) : null}
        </View>
        <View>
          <Text style={styles.password}>{screen2.password}</Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.button}>{screen2.button}</Text>
        </View>
        <View>
          <Text style={styles.account}>{screen2.account}</Text>
          <Text style={styles.Sign}>{screen2.Sign}</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Screen2;
