import React from 'react';
import { NativeRouter, Route, Router, Switch } from 'react-router-native';
import MainScreen from './AllScreens/MainScreen/MainScreen';
import 'react-native-gesture-handler';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './AllScreens/Screen1';
import LoginScreen2 from './components/LoginScreen';
//import Screen1 from "./AllScreens/Screen1"
const Stack = createStackNavigator();
const App  = () => {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
           name="page1"
          component={MainScreen}
          options={{ title: 'Press to go to the Screen' }}
        />
        <Stack.Screen name="screen1" component ={LoginScreen2}/>
        </Stack.Navigator>
    </NavigationContainer>
  // <NativeRouter>
   
  //   <Switch>
  //     <Route exact path="/" component={MainScreen}></Route>
  //     {/* <Route exact path="/" component={Screen1}></Route> */}
  //   </Switch>
   
  //   </NativeRouter>
    
  );

};


export default App;
