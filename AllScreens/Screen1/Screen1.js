import React from 'react';
import { Image, Text, View } from "react-native";
import screen1 from "./screen1.json";
import { styles } from './ScreenStyle';

const Screen1 = () => {

    return (
    <View>
        <Image style={styles.image1} source={require('../Images/Ellipse1.png')} />
        <Image style={styles.circle1} source={require('../Images/Circle1.png')} />
        <Image style={styles.image2} source={require('../Images/Ellipse2.png')} />
        <Image style={styles.circle2} source={require('../Images/Circle2.png')} />
        <Image style={styles.arrow1} source={require('../Images/arrow1.png')} />
        <Image style={styles.circle3} source={require('../Images/Circle3.png')} />
        <Image style={styles.arrow2} source={require('../Images/arrow2.png')} />
        <Image style={styles.image3} source={require('../Images/Ellipse3.png')} />
        <Image style={styles.circle4} source={require('../Images/Circle4.png')} />
        <View style={styles.container}>
                <Text style={styles.login}>{screen1.name}</Text>
                <Text style={styles.email}>{screen1.email}</Text>
                <Text style={styles.number}>{screen1.number}</Text>
            <View>
            <Text style={styles.inputEmail}>{screen1.email2}</Text>
            <Image style={styles.emailIcon} source={require('../Images/Vector.png')} />
                    <View style={styles.childView}>
                    </View>
            </View>
            <View >
                <Text style={styles.inputEmail}>{screen1.password}</Text>
                <Image style={styles.emailIcon} source={require('../Images/bx_bx-lock-open.png')} />
                    <View style={styles.childView}>
                    </View>
            </View>
            <View >
                <Text style={styles.forgotPassword}>{screen1.forgot}</Text>   
            </View>
            <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen1.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen1.account}</Text>
                <Text style={styles.Sign}>{screen1.sign}</Text>
            </View>
        </View>
    </View>
    );
};


export default Screen1;