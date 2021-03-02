import React from 'react';
import { NativeRouter, Route, Router, Switch } from 'react-router-native';
import MainScreen from './AllScreens/MainScreen/MainScreen';
import 'react-native-gesture-handler';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './AllScreens/Screen1';
import LoginScreen1 from './components/login-pages/LoginScreen1'
import LoginScreen10 from './components/LoginScreen10';
import LoginScreen from './components/LoginScreen';
import LoginScreen8 from './components/LoginScreen8';
import LoginScreen4 from './components/LoginScreen4';
//import Screen1 from "./AllScreens/Screen1"
const Stack = createStackNavigator();
const App  = () => {
  
  return (
    // <LoginScreen/>
    <LoginScreen1/>
    // <LoginScreen10/>
    // <LoginScreen8/>
    // <LoginScreen4/>
    // <NavigationContainer>
    //  <Stack.Navigator>
    //     <Stack.Screen
    //        name="page1"
    //       component={MainScreen}
    //       options={{ title: 'Press to go to the Screen' }}
    //     />
    //     <Stack.Screen name="screen1" component ={LoginScreen2}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    
  );

};


export default App;
