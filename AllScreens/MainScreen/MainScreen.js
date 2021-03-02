import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const MainScreen = (props) => {
  console.log(props.navigation.navigate,"props")
  const [openModal, setOpenModal] = useState(false)
  const changeColor = () => {
    props.navigation.navigate('screen1')
    // props.navigate('screen1');
    // useHistory.push('/screen1');
     // navigate('Screen1', { name: 'Jane' })
     }
    //console.log("anything")
  const modalOpen = () => {
    console.log(openModal)
    setOpenModal(!openModal)
  }
  return (
    <>
      <ScrollView style={styles.body}>
        <View>
          <View>
            <Text>Press to go on that screen</Text>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight onPress={changeColor}>
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 1</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo1.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            <TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 2</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo2.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 3</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 4</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 5</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 6</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 7</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 8</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 9</Text>
              </View>
            </TouchableHighlight>
            < TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
          <View style={styles.containers}>
            < TouchableHighlight underlayColor="white">
              <View style={styles.screen1}>
                <Text style={styles.text}>Screen 10</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={modalOpen}>
              <Image style={styles.img} source={require('../../images/logo3.png')} />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  )
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
  },
  containers: {
    backgroundColor: 'white',
    //    width:233,
    //    height:20,
    margin: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    // marginLeft:80
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 30,
    marginLeft: 15,
    marginTop: 5
  },
  screen1: {
    // color:'#0a0a0a',
    backgroundColor: '#4287f5',
    paddingBottom: 40,
    paddingRight: 150,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20


  },
  text: {
    color: '#0a0a0a',
    fontSize: 30,
    left: 25,
    top: 20
  }
})

export default MainScreen;