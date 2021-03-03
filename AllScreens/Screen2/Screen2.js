import React from 'react';
import {  Image, TextInput } from 'react-native';
import screen2 from './screen2.json';
import { View } from 'react-native';

import { Text } from "react-native";
import { styles } from './ScreenStyle';
import { shadow } from 'react-native-paper';
const Screen2 = () => {

    return (
        <>

        <View>
        <Image style={styles.image1} source={require('../Images/Ellipse21.png')} />
        <Image style={styles.circle2} source={require('../Images/Circle2.png')} />
        <Image style={styles.arrow1} source={require('../Images/arrow1.png')} />
        <Image style={styles.mark1} source={require('../Images/mark1.png')} />
            <View>
                <Text style={styles.container}>{screen2.container}</Text>
                <Text style={styles.container1}>{screen2.container1}</Text>
                <Text style={styles.container2}>{screen2.container2}</Text>
            </View>
            <View style={[styles.boxShadow, shadow]}>
                <TextInput style={styles.email} placeholder="Email or number phone"/>
                <Image style={styles.emailIcon} source={require('../Images/email2.png')} />
                </View>
            <View style={[styles.boxShadow1, shadow]}>
                <TextInput style={styles.password0} placeholder="Password"/>
                <Image style={styles.password1} source={require('../Images/password1.png')} />
            </View>
            <View>
                <Text style={styles.password}>{screen2.password}</Text>
                
            </View >
            <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen2.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen2.account}</Text>
                <Text style={styles.Sign}>{screen2.Sign}</Text>
            </View>
        </View>
        
        </>

    )

};
export default Screen2;