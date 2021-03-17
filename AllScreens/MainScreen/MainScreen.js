import React from 'react';
import {styles} from './MainScreenStylesheet';
import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import data from './MainScreen.json';
const MainScreen = (props) => {
  return (
    <>
      <ScrollView style={styles.body}>
        <View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen1');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen1}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight > */}
            <Image
              style={styles.img}
              source={require('../../images/logo1.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen2');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen2}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo2.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen3');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen3}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo3.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen4');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen4}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo4.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen5');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen5}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo5.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen6');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen6}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo6.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen7');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen7}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo7.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen8');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen8}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo8.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen9');
              }}>
              <View style={styles.screen1}>
                <Text style={styles.text}>{data.screen9}</Text>
              </View>
            </TouchableHighlight>
            {/* < TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo9.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.containers}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() => {
                props.navigation.navigate('screen10');
              }}>
              <View style={styles.screen2}>
                <Text style={styles.text}>{data.screen10}</Text>
              </View>
            </TouchableHighlight>
            {/* <TouchableHighlight onPress={modalOpen}> */}
            <Image
              style={styles.img}
              source={require('../../images/logo10.png')}
            />
            {/* </TouchableHighlight> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MainScreen;
