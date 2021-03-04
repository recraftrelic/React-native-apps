import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    moderateScale,
} from 'react-native-size-matters';

import { styles } from "./loginStyles";
import login2 from './login2.json';
import { images, fonts } from "./utilities/images";


const LoginScreen3 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheckStatus] = useState(false);
    const [showHidePassword, setShowHidePassword] = useState(true);

    const onLogin = () => {
        alert(`${email} + ${password}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoView}>
                <KeyboardAwareScrollView enableOnAndroid={true}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >

                    <Image source={images.Ellipse} style={styles.headLogo} />

                    <View style={styles.headText}>
                        <Image source={images.logo}
                        style={styles.logo}
                        />

                        <Text style={{
                            fontSize: RFValue(24),
                            marginTop: moderateScale(10),
                            fontFamily: fonts.bold

                        }}>
                            {login2.headername}
                        </Text>

                        <Text style={styles.headerStyle}>
                            {login2.header}
                        </Text>
                    </View>


                    <View style={styles.inputView}>

                        <View>
                            <TextInput
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                placeholder='Enter your email'
                                style={styles.emailInput}
                            />
                            <Image
                                style={styles.emailIcon}
                                source={images.emailIcon}
                            />
                        </View>

                        <View>
                            <TextInput
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                placeholder='Enter password here.'
                                secureTextEntry={showHidePassword}
                                style={styles.passwordInput}
                            />
                            <Image
                                style={styles.lockImage}
                                source={images.lock}
                            />

                            <TouchableOpacity
                                onPress={() => setShowHidePassword(!showHidePassword)}
                                style={styles.checkBoxbtn}
                                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                            >
                                {
                                    showHidePassword ?
                                        <Image
                                            source={images.HideIcon}
                                        />
                                        :
                                        <Image
                                            source={images.ic_ad_view}
                                        />
                                }

                            </TouchableOpacity>


                        </View>

                    </View>

                    <View style={styles.checkBoxView}>
                        <TouchableOpacity style={styles.checkBoxTouch}
                            onPress={() => setCheckStatus(!check)}
                        >
                            {
                                check ? <Image source={images.checkbox}
                                    style={styles.checkBox} /> :
                                    <Image source={images.checkIcon} />
                            }

                            <Text style={styles.remember}>
                                {login2.remember}
                            </Text>

                        </TouchableOpacity>

                        <Text style={styles.forgote}>
                            {login2.forgote}
                        </Text>

                    </View>

                    <View style={styles.signInBtnView}>
                        <TouchableOpacity style={styles.signInBtn}
                            onPress={onLogin}

                        >
                            <Text style={styles.signInText}>
                            {login2.signIn}
                        </Text>

                        </TouchableOpacity>

                    </View>

                    <Image source={images.contine} style={{ alignSelf: 'center', marginTop: moderateScale(10) }} />

                    <View style={styles.googleView}>

                        <View style={styles.googleInnerView}>
                            <TouchableOpacity style={styles.googlebtn}>

                                <Image source={images.Google} />

                                <Text style={styles.googleTxt}>
                                {login2.google}
                            </Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.facebookImg}>

                                <Image source={images.Shape} />
                                <Text style={styles.facebookText}>
                                {login2.Facebook}
                            </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.regularTxt}>

                            <Text style={styles.regularStyle}>
                            {login2.account}
                            </Text>

                            <TouchableOpacity
                                onPress={() => console.log('SignUp')}
                                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                            >
                                <Text

                                    style={styles.signUpTxt}
                                >
                            {login2.signup}
                            </Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>

    );
};

export default LoginScreen3;