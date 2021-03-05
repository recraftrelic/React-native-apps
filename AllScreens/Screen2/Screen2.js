import React from 'react';
import {Image} from 'react-native';
import screen2 from './screen2.json';
import {View} from 'react-native';

import {Text} from 'react-native';
import {styles} from './ScreenStyle';
import {shadow} from 'react-native-paper';
import {images} from '../../components/utilities/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonInput from '../Screen1/Component/CommonInput';

const Screen2 = () => {
  return (
    <View style={styles.main}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image style={styles.image1} source={images.Ellipse2} />
        <Image style={styles.circle2} source={images.Circle2} />
        <Image style={styles.arrow1} source={images.zigzag} />
        <Image style={styles.mark1} source={images.mark1} />
        <View>
          <Text style={styles.container}>{screen2.container}</Text>
          <Text style={styles.container1}>{screen2.container1}</Text>
          <Text style={styles.container2}>{screen2.container2}</Text>
        </View>
        <View style={[styles.boxShadow, shadow]}>
          <CommonInput
            style={styles.email}
            placeholder="Email or phone number"
            imageStyle={styles.emailIcon}
            imageSource={images.email2}
          />
        </View>
        <View style={[styles.boxShadow1, shadow]}>
          <CommonInput
            style={styles.password0}
            placeholder="Password"
            imageStyle={styles.password1}
            imageSource={images.password1}
          />
        </View>
        <View>
          <Text style={styles.password}>{screen2.password}</Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.button}>{screen2.button}</Text>
        </View>
        <View>
          <Text style={styles.account}>{screen2.account}</Text>
          <Text style={styles.Sign}>{screen2.Sign}</Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default Screen2;
