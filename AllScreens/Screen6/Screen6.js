import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './ScreenStyle';
import screen from './Screen6.json';
import {images} from '../../components/utilities/images';
import CommonInput from './Component/CommonInput';

const Screen6 = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(false);
  const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
  const [check, setCheckStatus] = useState(false);

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
      <View>
        <Image style={styles.image1} source={images.Ellipse21} />
        <Image style={styles.circle2} source={images.pCircle1} />
        <Image style={styles.arrow1} source={images.arrow1} />
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <View style={styles.arrow}>
            <Image source={images.arrow_backward} />
          </View>
        </TouchableOpacity>
        <Image style={styles.logo} source={images.pLogo1} />
        <View>
          <Text style={styles.hello}>{screen.hello}</Text>
          <Text style={styles.state}>{screen.state}</Text>
          <Text style={styles.user}>{screen.user}</Text>
          <CommonInput
            style={styles.name}
            value={email}
            placeholderTextColor="grey"
            placeholder={screen.name}
            imageStyle={styles.tick}
            imageSource={images.Tick}
            onChangeText={(value) => onChangeEmail(value)}
            secureTextEntry={false}
          />

          <Text style={styles.childView} />
          {emailErrorStatus ? (
            <Text style={styles.errorMessage}>
              * Please include an '@' in the email address.
            </Text>
          ) : null}
          <CommonInput
            style={styles.password}
            value={password}
            placeholderTextColor="grey"
            placeholder={screen.password}
            onChangeText={(value) => onChangeText(value)}
            secureTextEntry={true}
          />

          <View style={styles.childView1} />
          {passwordErrorStatus == true ? (
            <Text style={styles.errorMessage1}>
              * Password should be minimum 8 characters.
            </Text>
          ) : null}
          <View style={styles.checkBoxView}>
            <TouchableOpacity
              style={styles.rectangle}
              onPress={() => setCheckStatus(!check)}>
              {check ? (
                <Image source={images.checkbox} style={styles.checkBox} />
              ) : (
                <Image source={images.checkIcon} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.remember}>{screen.remember}</Text>
          <Text style={styles.forgot}>{screen.forgot}</Text>
          <View style={styles.button}>
            <Text style={styles.login}>{screen.login}</Text>
          </View>
          <Text style={styles.account}>{screen.account}</Text>
          <Text style={styles.sign}>{screen.sign}</Text>
        </View>
      </View>
    </>
  );
};

export default Screen6;
