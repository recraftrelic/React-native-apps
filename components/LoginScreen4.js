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

import { styles } from "./loginStyle1";
import login1 from './login1.json';
import { images } from "./utilities/images";


const LoginScreen1 = () => {
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

                    <Image source={images.Ellipse} style={styles.headLogo} />

                    <Image source={images.EllipseCrcl} style={styles.crcl} />
                    <Image source={images.zigzag} style={styles.zigzag} />


                    <View style={styles.headText}>
                        <Image source={images.logo}
                            style={styles.logo}
                        />

                        <Text style={styles.name}>
                            {login1.name}
                        </Text>

                        <Text style={styles.headerStyle}>
                            {login1.header}
                        </Text>
                    </View>

                    <View style={styles.signintxt}>
                        <Text style={styles.signintxt1}>
                            {login1.signing}
                        </Text>

                        <Text style={styles.siguptxt}>
                            {login1.headerSigning}
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
                                source={images.at}
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
                                            style={styles.hideIcon}
                                        />
                                        :
                                        <Image
                                            source={images.ic_ad_view}
                                        />
                                }

                            </TouchableOpacity>


                        </View>
                        <Image
                            style={styles.vector}
                            source={images.Vector}
                        />
                        <Image
                            style={styles.vector1}
                            source={images.Vector}
                        />

                    </View>
                    <View style={styles.forgotetext}>
                        <Text style={styles.forgote}>
                            {login1.forgote}
                        </Text>

                        <Text style={styles.reset}>
                            {login1.reset}
                        </Text>
                    </View>

                    <View style={styles.signInBtnView}>
                        <TouchableOpacity style={styles.signInBtn}
                            onPress={onLogin}

                        >
                            <Text style={styles.signInText}>
                                {login1.login}
                            </Text>

                        </TouchableOpacity>

                    </View>

                    <Text style={styles.skip}>
                        {login1.skip}
                    </Text>


                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>

    );
};

export default LoginScreen1;