import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import {Image, View} from 'react-native';
import screen5 from './screen5.json';
import {styles} from './ScreenStyle';
import picture from '../images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {images} from '../../components/utilities/images';

const Screen5 = (props) => {
  const [showHidePassword, setShowHidePassword] = useState(true);
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [password, setPassword] = useState('');

  const onEnterEmail = (value) => {
    // console.log(value, '989898');
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
  const onEnterText = (password) => {
    setPassword(password);
    if (password.trim().length < 8) {
      setPasswordErrorStatus(true);
    } else {
      setPasswordErrorStatus(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.style1}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.goBack();
                }}>
                <View style={styles.arrow}>
                  <Image source={images.arrow_backward} />
                </View>
              </TouchableOpacity>
              <Image style={styles.logo1} source={picture.logo1} />
              <View>
                <Text style={styles.userName}>{screen5.userName}</Text>
                <View style={styles.MainContainer}>
                  <TextInput
                    style={styles.email}
                    placeholder="username or email"
                    onChangeText={(email) => onEnterEmail(email)}
                  />
                  {emailErrorStatus == true ? (
                    <Text style={styles.errorMessage}>
                      * Please include an '@' in the email address.
                    </Text>
                  ) : null}
                  <Image style={styles.man} source={picture.man} />
                </View>
              </View>
              <View>
                <Text style={styles.pass}>{screen5.pass}</Text>
                <View style={styles.MainContainer}>
                  <TextInput
                    style={styles.password}
                    placeholder="password"
                    secureTextEntry={showHidePassword}
                    onChangeText={(password) => onEnterText(password)}
                  />
                  {passwordErrorStatus == true ? (
                    <Text style={styles.errorMessage1}>
                      Password should be minimum 8 characters.
                    </Text>
                  ) : null}
                  <TouchableOpacity
                    onPress={() => setShowHidePassword(!showHidePassword)}
                    style={styles.View5}
                    hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
                    {showHidePassword ? (
                      <Text style={styles.textStyle}>{screen5.Show}</Text>
                    ) : (
                      <Text style={styles.textStyle}>{screen5.Hide}</Text>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.loginButton}>
                  <Text style={styles.button}>{screen5.button}</Text>
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.account}>{screen5.account}</Text>
                  <Text style={styles.Sign}>{screen5.Sign}</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

export default Screen5;
