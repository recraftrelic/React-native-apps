import React, { useState } from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Screen9/ScreenStyle';
import screen from '../Screen9/Screen9.json';
import CommonInput from '../Screen1/Component/CommonInput';
import {images} from '../../components/utilities/images';
import { TouchableOpacity } from 'react-native';

const Screen9 = () => {

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
    
    let reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(email)) {
      setEmailErrorStatus(true);
      return
    } else {
      setEmailErrorStatus(false);
    }

  };
  return (
    <>
      <View>
        <View>
          <Image style={styles.arrow} source={images.arrow_backward}></Image>
          <Text style={styles.sign}>{screen.sign}</Text>
          <Image style={styles.logo} source={images.Screen9logo}></Image>
          <Text style={styles.email}>{screen.email}</Text>
          <CommonInput
            style={styles.email1}
            value={email}
            placeholderTextColor="grey"
            placeholder="Youraddress@email.com"
            viewStyle={styles.childView}
            secureTextEntry={false}
            onChangeText={(value)=>onChangeEmail(value)}
          />
          {emailErrorStatus  ? (
              <Text style={styles.errorMessage}>
                * Please include an '@' in the email address.
              </Text>
            ) : null}
          <Text style={styles.password}>{screen.password}</Text>
          <CommonInput
            style={styles.password1}
            value={password}
            placeholderTextColor="grey"
            placeholder="Enter your password"
            viewStyle={styles.childView1}
            secureTextEntry={showHidePassword}
            onChangeText={(value)=>onChangeText(value)}

          />
             <TouchableOpacity
             onPress={() => setShowHidePassword(!showHidePassword)}
             style={styles.eyes}
             hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
             >
            {
              showHidePassword ?
                  <Image
                      
                      source={images.Eyes}
                  />
                  :
                  <Image
                      source={images.ic_ad_view}
                  />
          }
          </TouchableOpacity>
          {passwordErrorStatus == true ? (
              <Text style={styles.errorMessage1}>
                * Password should be minimum 8 characters.
              </Text>
            ) : null}
          <Image style={styles.print} source={images.print}></Image>
          <View style={styles.continue}>
            <Text style={styles.content}>{screen.continue}</Text>
          </View>
          <Text style={styles.forgot}>{screen.forgot}</Text>
          <View style={styles.child}></View>
        </View>
      </View>
    </>
  );
};

export default Screen9;
