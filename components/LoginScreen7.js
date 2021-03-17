import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './loginStyle4';
import login4 from './login4.json';
import { images } from "./utilities/images";

const LoginScreen4 = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showHidePassword, setShowHidePassword] = useState(true);
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);

    const onEnterText = (password) => {
        setPassword(password);
        if (password.trim().length < 8) {
            setPasswordErrorStatus(true);
        } else {
            setPasswordErrorStatus(false);
        }
    }

    const onEnterEmail = (value) => {
        console.log(value, "989898")
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (reg.test(value)) {
            setEmailErrorStatus(false);
        } else {
            if (value !== "") {
                setEmailErrorStatus(true);
            }
        }

        setEmail(value);
    }

    const onLogin = () => {
        if (email == '') {
            setEmailErrorStatus(true);
        }
        else {
            setEmailErrorStatus(false);
        }
        if (password == '') {
            setPasswordErrorStatus(true);
        }
        else {
            setPasswordErrorStatus(false);
            alert(`${email} + ${password}`);

        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView enableOnAndroid={true}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.logoView}>
                    <Image source={images.group}
                        style={styles.groupLogo}
                    />
                    <Image source={images.logo}
                        style={styles.logo}
                    />
                </View>
                <View>

                <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                >
                <Image
                    source={images.backArrow}
                    style={styles.backArrow}
                />
                </TouchableOpacity>
                    <View style={styles.headText}>
                   
    

                        <Text style={styles.headerStyle}>
                            {login4.header}
                        </Text>


                        <Text style={styles.headtextStyle}>
                            {login4.headername}
                        </Text>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.emailtxt}
                        >
                            {login4.EmailAddress}
                        </Text>
                        <View>
                            <TextInput
                                value={email}
                                onChangeText={(email) => onEnterEmail(email)}
                                placeholder='Enter your email'
                                style={styles.emailInput}
                            />
                            {emailErrorStatus == true ? (
                                <Text style={styles.errorMessage} >
                                    * Please include an '@' in the email address.
                                </Text>
                            ) : null}
                            {
                                email && !emailErrorStatus ?
                                    <Image
                                        source={images.tick1}
                                        style={styles.tick}
                                    />
                                    :
                                    null
                            }
                        </View>

                        <View>
                            <Text style={styles.passtxt}
                            >
                                {login4.Password}


                            </Text>
                            <TextInput
                                value={password}
                                onChangeText={(password) => onEnterText(password)}
                                placeholder='Enter password here.'
                                secureTextEntry={showHidePassword}
                                style={styles.passwordInput}
                            />
                            {passwordErrorStatus == true ? (
                                <Text style={styles.errorMessage} >
                                    * Password should be minimum 8 characters.
                                </Text>
                            ) : null}

                            <TouchableOpacity
                                onPress={() => setShowHidePassword(!showHidePassword)}
                                style={styles.checkBoxbtn}
                                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                            >
                                {
                                    showHidePassword ?
                                        <Image
                                            source={images.HideIcon}

                                            style={styles.HideIcon}
                                        />
                                        :
                                        <Image
                                            source={images.ic_ad_view}
                                            style={styles.HideIcon}

                                        />

                                }

                            </TouchableOpacity>


                        </View>

                    </View>
                    <View style={styles.signInBtnView}>
                        <TouchableOpacity style={styles.signInBtn}
                            onPress={onLogin}

                        >
                            <Text style={styles.signInText}>
                                {login4.signIn}
                            </Text>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.regularTxt}>

                        <Text style={styles.regularStyle}>
                            {login4.account}
                        </Text>

                        <TouchableOpacity
                            onPress={() => console.log('SignUp')}
                            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                        >
                            <Text

                                style={styles.signUpTxt}
                            >
                                {login4.signup}
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>

    );
};

export default LoginScreen4;
