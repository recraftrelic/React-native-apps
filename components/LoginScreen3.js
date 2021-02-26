import React, { useState } from 'react';
import {
    Text,
    Alert,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    CheckBox,
    // CheckBox
} from 'react-native';
import { TextInput } from 'react-native-paper';
import login3 from './login3.json';

const onLogin = (email, password) => {
    Alert.alert('Credentials', `${email} + ${password}`);
    console.log("title pressed");
};

const LoginScreen2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    return (

        <View style={styles.container}>
        
      <Image
        style={styles.logo}
        source={require('../images/logo.png')}
      />
      <Text style={styles.inputext}> {login3.headername}</Text>
      <Text style={styles.inputext1}> {login3.header}</Text>

      <Text style={styles.inputext2}>{login3.signing}</Text>
      <Text style={styles.inputext3}> {login3.headerSigning} </Text>

      <Image
        style={styles.tinyLogo}
        source={require('../images/envolep.jpg')}
      />

      <Image
        style={styles.ellipse}
        source={require('../images/Ellipse.png')}
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
        source={require('../images/lock.png')}
      />
      <Image
        style={styles.eye}
        source={require('../images/Hide.png')}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder='Password'
        theme={{ colors: { primary: 'blue' } }}
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.rememberText}>{login3.forgote}</Text>
      <Text style={styles.rememberText1}> {login3.remember}</Text>
      <Text style={styles.signupText}> {login3.reset} </Text>

      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onLogin(email, password)}
        >
          <Text
            style={styles.Textbutton}
          >Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
  />
      </View>
      <View>
      <Text style={styles.continueText}>{login3.continue} </Text>
      </View>
      <Image
      style={styles.lineImage}
      source={require('../images/line.png')}
        />
        <Image
        style={styles.lineImage2}
        source={require('../images/line.png')}
          />
          <View>
          <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => onLogin(email, password)}
                >
                    <Text style={styles.googleText}>Google</Text>

                </TouchableOpacity>
          </View>
          <View>
          <Image
        style={styles.gooleIcon}
        source={require('../images/Vector.png')}
          />
          </View>
          <View>
          <Image
          style={styles.facebookIcon}
          source={require('../images/Shape.png')}
      />
      <TouchableOpacity
          style={styles.FacebookButton}
          onPress={() => onLogin(email, password)}
      >
          <Text style={styles.FacebookLogo}>{login3.Facebook}</Text>
      </TouchableOpacity>
          </View>
          <View>
          <Image
          style={styles.gooleIcon}
          source={require('../images/Component/Icon/Shape.png')}
            />
          </View>
                
    </View>
    );
};

export default LoginScreen2;

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
        bottom: -45,
        right: 15,
      },
      ellipse: {
        left: 160,
        bottom: 330,
      },
      
      input: {
        width: 330,
        height: 44,
        padding: 45,
        bottom: 160,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        marginBottom: -15,
        borderRadius: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        paddingVertical: 12,
        backgroundColor: 'white',
        // backgroundColor: AppColor.lightGrey,
      },
      inputext: {
        bottom: -60,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 12, //change over here
        right: 20,
      },
      inputext1: {
        bottom: -50,
        fontSize: 16,
        right: 18,
        color: '#393F45',
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
        top: 24,
        right: 135,
        zIndex: 9999999999,
        // backgroundColor: 'red',
      },
      Logo: {
        bottom: 86,
        right: 135,
        zIndex: 9999999999,
      },
      eye: {
        width: 25,
        height: 25,
        bottom: 110,
        right: -120,
        zIndex: 9999999999,
      },
      button: {
        alignItems: "center",
        padding: 10,
        width: 330,
        height: 60,
        bottom: 50,
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
        // color: AppColor.black,
        bottom: 112,
        right: -98,
        fontSize: 15,
      },
      rememberText1: {
        bottom: 132,
        right: 80,
        fontSize: 15,
      },
      signupText: {
        // color: AppColor.textGrey,
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
      checkbox: {
        bottom: 190,
        right: 150,
    },
    continueText: {
        bottom: 100,
        right: 1,
        fontSize: 16,
    },
    lineImage: {
        bottom: 108,
        right: 130,
        backgroundColor: 'grey',
        width: 105,
    },
    lineImage2: {
        bottom: 110,
        right: -120,
        backgroundColor: 'grey',
        width: 105,
    },
    googleButton: {
        alignItems: "center",
        backgroundColor: "#FC6A57",
        padding: 15,
        bottom: 90,
        width: 180,
        height: 48,
        right: 90,
        borderRadius: 12,
    },
    googleText: {
        color: 'white',
        fontSize: 15,
        right: -10,
        bottom: 1,

    },
    gooleIcon: {
        padding: 10,
        bottom: 125,
        right: 125,
        zIndex: 99999999,
    },
    FacebookButton: {
        alignItems: "center",
        backgroundColor: "#298FFF",
        padding: 15,
        bottom: 180,
        width: 160,
        height: 50,
        left: 100,
        borderRadius: 12,
    },
    FacebookLogo: {
        color: 'white',
        fontSize: 15,
        right: -10,
        bottom: 1,
    },
    gooleLogo: {
        width: 25,
        height: 25,
        bottom: 168,
        right: -102,
        zIndex: 9999999999,
    },
    facebookIcon: {
        padding: 10,
        bottom: 144,
        right: -128,
        zIndex: 9999999999,
    }
});
