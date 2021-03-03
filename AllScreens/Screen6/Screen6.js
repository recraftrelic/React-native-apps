import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './ScreenStyle';
import screen from './Screen6.json'

const Screen6 = () => {
    return (
        <>
            <View>
            <Image style={styles.image1} source={require('../Images/Ellipse21.png')} />
            <Image style={styles.circle2} source={require('../Images/pCircle1.png')} />
            <Image style={styles.arrow1} source={require('../Images/arrow1.png')} />
            <Image style={styles.logo} source={require('../Images/pLogo1.png')} />  
            <View>
                <Text style={styles.hello}>{screen.hello}</Text>
                <Text style={styles.state}>{screen.state}</Text>
                <Text style={styles.user}>{screen.user}</Text>
                <Text style={styles.name}>{screen.name}</Text>
                <Image style={styles.tick} source={require('../Images/Tick.png')} />
                <Text style={styles.childView}></Text>
                <Text style={styles.password}>{screen.password}</Text>
                <View style={styles.childView1}></View>
                <Image style={styles.rectangle} source={require('../Images/pRectangle.png')} />
                <Text style={styles.remember}>{screen.remember}</Text>
                <Text style={styles.forgot}>{screen.forgot}</Text>
                <View style={styles.button}>
                    <Text style={styles.login}>{screen.login}</Text>
                </View>
                <Text style={styles.account}>{screen.account}</Text>
                <Text style={styles.sign}>{screen.sign}</Text>
            </View>
            </View>
        </>
    )
}

export default Screen6