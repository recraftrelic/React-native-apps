import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Screen9/ScreenStyle';
import screen from '../Screen9/Screen9.json';
import CommonInput from '../Screen1/Component/CommonInput';
import {images} from '../../components/utilities/images';

const Screen9 = () => {
  return (
    <>
      <View>
        <View>
          <Image style={styles.arrow} source={images.arrow_backward}></Image>
          <Text style={styles.sign}>{screen.sign}</Text>
          <Image style={styles.logo} source={images.Screen9logo}></Image>
          <Text style={styles.email}>{screen.email}</Text>
          <CommonInput
            style={styles.email1}
            placeholderTextColor="grey"
            placeholder="Youraddress@email.com"
            viewStyle={styles.childView}
          />

          <Text style={styles.password}>{screen.password}</Text>
          <CommonInput
            style={styles.password1}
            placeholderTextColor="grey"
            placeholder="Enter your password"
            viewStyle={styles.childView1}
          />

          <Image style={styles.eyes} source={images.Eyes}></Image>

          <Image style={styles.print} source={images.print}></Image>
          <View style={styles.continue}>
            <Text style={styles.content}>{screen.continue}</Text>
          </View>
          <Text style={styles.forgot}>{screen.forgot}</Text>
          <View style={styles.child}></View>
        </View>
      </View>
    </>
  );
};

export default Screen9;
