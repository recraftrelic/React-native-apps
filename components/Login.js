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

import { styles } from './loginStyle3';
import login3 from './login3.json';
import { images, fonts } from "./utilities/images";


const LoginScreen3 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                <Image source={images.logo} 
                style={styles.logo}
                />
                    <View style={styles.headText}>


                        <Text style={{
                            fontSize: RFValue(18),
                            marginTop: moderateScale(130),
                            fontFamily: fonts.regular,
                            right: moderateScale(50)

                        }}>
                            {login3.headername}
                        </Text>

                        <Text style={styles.headerStyle}>
                            {login3.header}
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
                        </View>

                        <View>
                            <TextInput
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                placeholder='Enter password here.'
                                secureTextEntry={showHidePassword}
                                style={styles.passwordInput}
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

                    <View style={styles.signInBtnView}>
                        <TouchableOpacity style={styles.signInBtn}
                            onPress={onLogin}

                        >
                            <Text style={styles.signInText}>
                            {login3.signIn}
                        </Text>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.checkBoxView}>

                        <Text style={styles.forgote}>
                            {login3.forgote}
                        </Text>
                        <Text style={styles.reset}>
                        {login3.reset}
                    </Text>

                    </View>

                    <View style={styles.signInBtnView}>
                        
                            <Text style={styles.signInText1}>
                            {login3.ORSign}
                        </Text>


                    </View>

                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>

    );
};

export default LoginScreen3;
