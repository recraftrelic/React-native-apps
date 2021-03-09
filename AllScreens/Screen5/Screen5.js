import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Image, View } from 'react-native';
import screen5 from './screen5.json';
import { styles } from './ScreenStyle';
import picture from "../images"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity } from 'react-native';


const Screen5 = () => {

    const [showHidePassword, setShowHidePassword] = useState(true);
    
    return (
        <>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.style1}>
            <Image style={styles.logo1} source={picture.logo1} />
          <View>
           <Text style={styles.userName}>{screen5.userName}</Text>
           <View style={styles.MainContainer}>
                <TextInput style={styles.email} placeholder="userName or Email"/>
                <Image style={styles.man} source={picture.man} />
                </View> 
           </View>
           <View>
           <Text style={styles.pass}>{screen5.pass}</Text>
           <View style={styles.MainContainer}>
                <TextInput style={styles.password} placeholder="password" secureTextEntry={showHidePassword}/>
                <TouchableOpacity
                                onPress={() => setShowHidePassword(!showHidePassword)}
                                style={styles.View5}
                                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                            >
                                {
                                    showHidePassword ?
                                        <Text style={styles.textStyle}>
                                            {screen5.Show}
                                        </Text>
                                        :
                                        <Text style={styles.textStyle}>
                                            {screen5.Hide}

                                        </Text>

                                }

                            </TouchableOpacity>
               {/* <Text style={styles.View5}>{screen5.View}</Text> */}
                </View > 
                <View style={styles.loginButton}>            
                <Text style={styles.button} >{screen5.button}</Text>            
            </View>
            <View>
                <Text style={styles.account}>{screen5.account}</Text>
                <Text style={styles.Sign}>{screen5.Sign}</Text>
            </View>
           </View>
            </View>
            </View>
            </KeyboardAwareScrollView>
        </>
    )
};

export default Screen5;