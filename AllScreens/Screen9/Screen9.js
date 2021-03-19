import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../Screen9/ScreenStyle';
import screen from '../Screen9/Screen9.json';
import CommonInput from '../Screen9/Component/CommonInput';
import {images} from '../../components/utilities/images';

import {SafeAreaView} from 'react-navigation';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Screen9 = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(true);

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
    <>
      <SafeAreaView style={styles.main}>
        <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <View style={styles.arrow}>
                <Image source={images.arrow_backward} />
              </View>
            </TouchableOpacity>
            <Text style={styles.sign}>{screen.sign}</Text>
            <Image style={styles.logo} source={images.Screen9logo} />
            <Text style={styles.email}>{screen.email}</Text>
            <CommonInput
              style={styles.email1}
              value={email}
              placeholderTextColor="grey"
              placeholder="Youraddress@email.com"
              secureTextEntry={false}
              onChangeText={(value) => onChangeEmail(value)}
            />
            {emailErrorStatus ? (
              <Text style={styles.errorMessage}>
                * Please include an '@' in the email address.
              </Text>
            ) : null}
            <View style={styles.childView} />
            <Text style={styles.password}>{screen.password}</Text>
            <CommonInput
              style={styles.password1}
              value={password}
              placeholderTextColor="grey"
              placeholder="Enter your password"
              viewStyle={styles.childView1}
              secureTextEntry={showHidePassword}
              onChangeText={(value) => onChangeText(value)}
            />
            <TouchableOpacity
              onPress={() => setShowHidePassword(!showHidePassword)}
              style={styles.eyes}
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
              {showHidePassword ? (
                <Image source={images.Eyes} />
              ) : (
                <Image source={images.ic_ad_view} />
              )}
            </TouchableOpacity>
            {passwordErrorStatus === true ? (
              <Text style={styles.errorMessage1}>
                * Password should be minimum 8 characters.
              </Text>
            ) : null}
            <View style={styles.childView1} />
            <Image style={styles.print} source={images.print} />
            <View style={styles.continue}>
              <Text style={styles.content}>{screen.continue}</Text>
            </View>
            <Text style={styles.forgot}>{screen.forgot}</Text>
            <View style={styles.child} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Screen9;
