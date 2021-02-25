import React, { useState } from 'react';
import {
  Text,
  Alert,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppColor } from '../../AllScreens/AppUtil';
import login from './login.json';

const onLogin = (email, password) => {
  Alert.alert('Credentials', `${email} + ${password}`);
  console.log("title pressed");
};

const LoginScreen1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
      />
      <Text style={styles.inputext}> {login.name}</Text>
      <Text style={styles.inputext1}> {login.header}</Text>

      <Text style={styles.inputext2}>{login.signing}</Text>
      <Text style={styles.inputext3}> {login.headerSigning} </Text>

      <Image
        style={styles.tinyLogo}
        source={require('../../images/atRate.png')}
      />
      <Image
        style={styles.lineLogo}
        source={require('../../images/VectorLine.png')}
      />
      <Image
        style={styles.lineLogo1}
        source={require('../../images/VectorLine.png')}
      />

      <Image
        style={styles.ellipse}
        source={require('../../images/Ellipse.png')}
      />

      <Image
        style={styles.zigzag}
        source={require('../../images/zigzag.png')}
      />

      <Image
        style={styles.circle}
        source={require('../../images/circle.png')}
      />
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder='Enter your email'
        theme={{ colors: { primary: 'blue' } }}
        style={styles.input}
      />

      <Image
        style={styles.Logo}
        source={require('../../images/lock.png')}
      />
      <Image
        style={styles.eye}
        source={require('../../images/Hide.png')}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder='Password'
        theme={{ colors: { primary: 'blue' } }}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.rememberText}>{login.forgote}</Text>

      <Text style={styles.signupText}> {login.reset} </Text>

      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLogin(email, password)}
        >
          <Text
            style={styles.Textbutton}
          >Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.changeText}> {login.skip} </Text>
    </View>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnSize: {
    width: "100%"
  },
  logo: {
    bottom: -125,
    right: 115,
  },
  ellipse: {
    left: 160,
    bottom: 330,
  },
  zigzag: {
    left: 105,
    bottom: 355,
    zIndex: 999999999,
  },
  circle: {
    left: 120,
    bottom: 380,
    // zIndex: 999999999,

  },
  input: {
    width: 300,
    height: 44,
    padding: 35,
    bottom: 140,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    marginBottom: -15,
    borderRadius: 15,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingVertical: 12,
    backgroundColor: AppColor.lightGrey,
    // textAlign: "center",
  },
  inputext: {
    bottom: -120,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    margin: 12,
    right: 110,
  },
  inputext1: {
    bottom: -110,
    fontSize: 30,
    right: 28,
    color: '#393F45',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputext2: {
    bottom: -120,
    fontSize: 20,
    right: 115,
    color: '#393F45',
    textAlign: 'center',
    marginBottom: 10,
  },
  inputext3: {
    bottom: -84,
    fontSize: 20,
    right: 34,
    color: '#D0D0D0',
    textAlign: 'center',
    marginBottom: 10,
  },
  tinyLogo: {
    top: 150,
    right: 135,
    zIndex: 9999999999,
  },
  lineLogo: {
    top: 126,
    right: 116,
    height: 30,
    zIndex: 9999999999,
  },
  lineLogo1: {
    top: 200,
    right: 116,
    height: 30,
    zIndex: 9999999999,
  },
  Logo: {
    bottom: 68,
    right: 135,
    zIndex: 9999999999,
  },
  eye: {
    width: 25,
    height: 25,
    bottom: 90,
    right: -120,
    zIndex: 9999999999,
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#2945FF',
  },

  viewStyle: {
    height: 100,
    marginTop: -90,
  },

  Textbutton: {
    color: 'white',
    fontSize: 20
  },

  rememberText: {
    color: AppColor.black,
    bottom: 95,
    right: 88,
    fontSize: 15,
  },
  signupText: {
    color: AppColor.textGrey,
    fontSize: 16,
    bottom: 115,
    left: 5,
  },
  changeText: {
    textAlign: "center",
    color: 'grey',
    bottom: 30,
    fontSize: 18,
  },
});
