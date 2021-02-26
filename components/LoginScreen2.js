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
import login2 from './login2.json';

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
            <Text style={styles.inputext}> {login2.headername} </Text>
            <Text style={styles.inputext1}> {login2.header}</Text>

            <Image
                style={styles.tinyLogo}
                source={require('../images/email.jpg')}
            />
            <Image
                style={styles.ellipse}
                source={require('../images/Ellipse.png')}
            />
            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                label='Enter your email'
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
                label='Password'
                theme={{ colors: { primary: 'blue' } }}
                secureTextEntry={true}
                style={styles.input}
            />
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.rememberText}> {login2.remember}</Text>

            <Text style={styles.signupText}>{login2.forgote} </Text>

            <View style={styles.viewStyle}>
            <TouchableOpacity style={styles.button}
            onPress={() => onLogin(email, password)}
            >
            <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.changeText}>{login2.continue} </Text>
            <View style={styles.viewIcon}>
                <Image
                    style={styles.googleIcon}
                    source={require('../images/Vector.png')}
                />
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => onLogin(email, password)}
                >
                    <Text style={styles.googleText}>Google</Text>
                    <Text style={styles.signupAccountText}>{login2.account} </Text>
                    <Text style={styles.accounText}> {login2.signup} </Text>

                </TouchableOpacity>
                <Image
                    style={styles.facebookIcon}
                    source={require('../images/Shape.png')}
                />
                <TouchableOpacity
                    style={styles.FacebookButton}
                    onPress={() => onLogin(email, password)}
                >
                    <Text style={styles.FacebookLogo}>{login2.Facebook}</Text>
                </TouchableOpacity>
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
        bottom: -90,
    },
    ellipse: {
        left: 160,
        bottom: 200,

    },
    input: {
        width: 320,
        height: 44,
        padding: 15,
        bottom: 50,
        borderWidth: 2,
        borderColor: '#E5E5E5',
        marginBottom: -15,
        textAlign: "left",
        backgroundColor: 'white',
        borderRadius: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    inputext: {
        bottom: -80,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: -28,
        margin: 12,
    },
    inputext1: {
        bottom: -80,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 10,
    },
    tinyLogo: {
        top: 135,
        right: 145,
        zIndex: 9999999999,
    },
    Logo: {
        display: "flex",
        top: 25,
        right: 145,
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
    loginText: {
        color: 'white',
        fontSize: 20
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

    viewStyle: {
        height: 100,
        marginTop: -40,
    },
    viewIcon: {
        height: 100,
        marginTop: 90,
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
    googleText: {
        color: 'white',
        fontSize: 20
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
    FacebookLogo: {
        color: 'white',
        fontSize: 20
    },
    googleIcon: {
        width: 25,
        height: 25,
        bottom: 93,
        left: -70,
        zIndex: 9999999999,
    },
    facebookIcon: {
        width: 25,
        height: 25,
        bottom: 168,
        right: -102,
        zIndex: 9999999999,
    },
    accounText: {
        color: '#2945FF',
        fontSize: 14,
        bottom: 5,
        left: 160,
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
