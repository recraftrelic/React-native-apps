import React from 'react';
import { Image, Text, View, TextInput } from 'react-native';
import { styles } from '../Screen9/ScreenStyle';
import screen from '../Screen9/Screen9.json'
 
const Screen9 = () => {

    return (
        <>
        <View>
            
                <View >
                <Image style={styles.arrow} source={require('../Images/arrow_backward.png')}></Image>
               <Text style={styles.sign}>{screen.sign}</Text>
                <Image style={styles.logo} source={require('../Images/Screen9logo.png')}></Image>
                <Text style={styles.email}>{screen.email}</Text>
                <TextInput style={styles.email1} placeholderTextColor="grey" placeholder="Youraddress@email.com"/>
                <View style={styles.childView}></View>
                <Text style={styles.password}>{screen.password}</Text>
                <TextInput style={styles.password1} placeholderTextColor="grey" placeholder="Enter your password"/>
                <Image style={styles.eyes} source={require('../Images/Eyes.png')}></Image>
                <View style={styles.childView1}></View>
                <Image style={styles.print} source={require('../Images/print.png')}></Image>
                <View style={styles.continue}>
                <Text style={styles.content} >{screen.continue}</Text>
                </View>
                <Text style={styles.forgot} >{screen.forgot}</Text>
                <View style={styles.child}></View>
               </View>
           
        </View>

        </>
    )
};

export default Screen9;