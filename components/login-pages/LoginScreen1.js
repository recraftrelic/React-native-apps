import React, { useState } from 'react';
import {
    Text,
    Alert,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    CheckBox
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppColor } from '../../AllScreens/AppUtil';

const onLogin = (email, password) => {
    Alert.alert('Credentials', `${email} + ${password}`);
    console.log("title pressed");
};

const LoginScreen1 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../images/logo.png')}
            />
            <Text style={styles.inputext}> Hello,</Text>
            <Text style={styles.inputext1}> Login for continue</Text>

            <Text style={styles.inputext2}> Sign in </Text>
            <Text style={styles.inputext3}> / Sign up</Text>

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
            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder='Enter your email'
                theme={{colors: {primary: 'blue'}}}
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
                theme={{colors: {primary: 'blue'}}}
                secureTextEntry={true}
                style={styles.input}
            />
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.rememberText}> Remember me</Text>

            <Text style={styles.signupText}>Forgot Password? </Text>

            <View style={{
                height: 100, marginTop: -40,
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLogin(email, password)}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}
                    >Login</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.changeText}>Or continue with </Text>
            <View style={{
                height: 100, marginTop: 90,
            }}>
                <Image
                    style={styles.googleIcon}
                    source={require('../../images/Vector.png')}
                />
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => onLogin(email, password)}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}
                    >Google</Text>
                    <Text style={styles.signupAccountText}>Don’t Have an Account? </Text>
                    <Text style={styles.accounText}> Sign Up </Text>

                </TouchableOpacity>
                <Image
                    style={styles.facebookIcon}
                    source={require('../../images/Shape.png')}
                />
                <TouchableOpacity
                    style={styles.FacebookButton}
                    onPress={() => onLogin(email, password)}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20
                        }}
                    >Facebook</Text>
                </TouchableOpacity>
            </View>
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
        bottom: 200,

    },
    input: {
        width: 300,
        height: 44,
        padding: 15,
        bottom: 50,
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
        top: 210,
        right: 135,
        zIndex: 9999999999,
    },
    lineLogo: {
      top: 180,
      right: 125,
      height: 39,
      zIndex: 9999999999,
    },
    lineLogo1: {
      top: 255,
      right: 125,
      height: 39,
      zIndex: 9999999999,
    },
    Logo: {
        display: "flex",
        top: 25,
        right: 138,
        zIndex: 9999999999,
    },
    eye: {
        width: 25,
        height: 25,
        bottom: 2,
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
    checkbox: {
        bottom: 20,
        right: 130,
    },
    rememberText: {
        color: '#ABB3BB',
        bottom: 48,
        right: 60,
        fontSize: 15,
    },
    signupText: {
        color: '#2945FF',
        fontSize: 16,
        bottom: 70,
        left: 90,
    },
    changeText: {
        textAlign: "center",
        color: 'grey',
        bottom: 30,
        fontSize: 18,
    },
    googleButton: {
        alignItems: "center",
        backgroundColor: "#FC6A57",
        padding: 10,
        bottom: 130,
        width: 150,
        height: 50,
        right: 80,
        borderRadius: 12,
    },
    FacebookButton: {
        alignItems: "center",
        backgroundColor: "#298FFF",
        padding: 10,
        bottom: 205,
        width: 150,
        height: 50,
        left: 100,
        borderRadius: 12,
    },
    googleIcon: {
        width: 25,
        height: 25,
        bottom: 93,
        left: -70,
        // backgroundColor: 'black',
        zIndex: 9999999999,
    },
    facebookIcon: {
        width: 25,
        height: 25,
        bottom: 168,
        right: -102,
        // backgroundColor: 'black',
        zIndex: 9999999999,
    },
    accounText: {
        color: '#2945FF',
        fontSize: 14,
        bottom: 5,
        left: 150,
        lineHeight: 14,
        textAlign: "center",
    },
    signupAccountText: {
        fontSize: 16,
        top: 20,
        left: 50,
        width: 200,
        lineHeight: 40,
        
    }
});
