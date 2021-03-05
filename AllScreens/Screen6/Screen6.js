import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './ScreenStyle';
import screen from './Screen6.json';
import {images} from '../../components/utilities/images';
import CommonInput from '../Screen1/Component/CommonInput';

const Screen6 = () => {
  return (
    <>
      <View>
        <Image style={styles.image1} source={images.Ellipse21} />
        <Image style={styles.circle2} source={images.pCircle1} />
        <Image style={styles.arrow1} source={images.arrow1} />
        <Image style={styles.logo} source={images.pLogo1} />
        <View>
          <Text style={styles.hello}>{screen.hello}</Text>
          <Text style={styles.state}>{screen.state}</Text>
          <Text style={styles.user}>{screen.user}</Text>
          <CommonInput
            style={styles.name}
            placeholderTextColor="grey"
            placeholder={screen.name}
            imageStyle={styles.tick}
            imageSource={images.Tick}
          />
          <Text style={styles.childView}></Text>
          <CommonInput
            style={styles.password}
            placeholderTextColor="grey"
            placeholder={screen.password}
          />

          <View style={styles.childView1}></View>
          <Image style={styles.rectangle} source={images.pRectangle} />
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
  );
};

export default Screen6;
