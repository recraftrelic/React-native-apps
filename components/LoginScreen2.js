import React, { useState } from "react";
import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    CheckBox
} from 'react-native';
import { TextInput } from 'react-native-paper';

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
            <Text style={styles.inputext}> Welcome Back</Text>
            <Text style={styles.inputext1}> Sign in for continue</Text>

            <Image
                style={styles.tinyLogo}
                source={require('../images/email.jpg')}
            />
            <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                label='Enter your email'
                //    placeholder='Enter your email'
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
                secureTextEntry={true}
                //   placeholder='Password'
                style={styles.input}
            />
            {/* <View style={{
                height: 100, marginTop: 130,
            }}>
                <Button
                    title={'Sign in'}
                    style={styles.btnSize}
                    onPress={() => onLogin(email, password)}
                />
        </View> */}

            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.rememberText}> Remember me</Text>

            <Text style={styles.signupText}>Forgot Password? </Text>

            <View style={{
                height: 100, marginTop: 60,
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
                    >Sign In</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.changeText}>Or continue with </Text>
            <View style={{
                height: 100, marginTop: 130,
            }}>
                <Image
                    style={styles.googleIcon}
                    source={require('../images/Vector.png')}
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
                </TouchableOpacity>
                <Image
                    style={styles.facebookIcon}
                    source={require('../images/Shape.png')}
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
            <Text style={styles.accounText}>Don’t Have an Account </Text>

            <Text style={styles.signupAccountText}>Don’t Have an Account? Sign Up </Text>
        </View>
    );
};

export default LoginScreen2;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
        backgroundColor: 'white',
    },
    btnSize: {
        width: "100%"
    },
    input: {
        width: 300,
        height: 30,
        padding: 15,
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom: -15,
        textAlign: "left",
        backgroundColor: 'white',
        borderRadius: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    inputext: {
        bottom: 10,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        margin: 12,
    },
    inputext1: {
        bottom: 10,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 10,
    },
    tinyLogo: {
        width: 15,
        height: 15,
        top: 40,
        right: 138,
        zIndex: 9999999999,
    },
    Logo: {
        width: 25,
        display: "flex",
        height: 25,
        top: 68,
        right: 138,
        zIndex: 9999999999,
    },
    eye: {
        width: 25,
        height: 25,
        top: 43,
        right: -120,
        zIndex: 9999999999,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 300,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#2945FF',
    },
    checkbox: {
        top: 50,
        right: 130,
    },
    rememberText: {
        color: 'grey',
        top: 24,
        right: 60,
        fontSize: 15,
    },
    signupText: {
        color: '#2945FF',
        fontSize: 16,
        top: 5,
        left: 90,
    },
    changeText: {
        textAlign: "center",
        color: 'grey',
        bottom: 15,
        fontSize: 18,
    },
    googleButton: {
        alignItems: "center",
        backgroundColor: "#FC6A57",
        padding: 10,
        bottom: 100,
        width: 150,
        height: 50,
        right: 80,
        borderRadius: 12,
    },
    FacebookButton: {
        alignItems: "center",
        backgroundColor: "#298FFF",
        padding: 10,
        bottom: 175,
        width: 150,
        height: 50,
        left: 100,
        borderRadius: 12,
    },
    googleIcon: {
        width: 25,
        height: 25,
        bottom: 64,
        left: -70,
        // backgroundColor: 'black',
        zIndex: 9999999999,
    },
    facebookIcon: {
        width: 25,
        height: 25,
        bottom: 138,
        right: -102,
        // backgroundColor: 'black',
        zIndex: 9999999999,
    },
    accounText : {
        color: '#2945FF',
        fontSize: 16,
        backgroundColor: 'black',
        // top: 5,
        // left: 90,
    }
});
