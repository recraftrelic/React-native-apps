import React from 'react';
import { NativeRouter, Route, Router, Switch } from 'react-router-native';
import MainScreen from './AllScreens/MainScreen/MainScreen';
import 'react-native-gesture-handler';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './AllScreens/Screen1/Screen1';
import LoginScreen from './components/LoginScreen';
import LoginScreen2 from './components/LoginScreen2';
import LoginScreen3 from './components/LoginScreen3';
//import Screen1 from "./AllScreens/Screen1"
const Stack = createStackNavigator();
const App  = () => {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen
           name="page1"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="screen1" component ={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="screen2" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen3" component ={LoginScreen3} options={{headerShown: false}}/>
        <Stack.Screen name="screen4" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen5" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen6" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen7" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen8" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen9" component ={LoginScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen10" component ={LoginScreen2} options={{headerShown: false}}/>
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
// import React from 'react';
// import { View } from "react-native";
// import LoginScreen2 from './components/LoginScreen2';

// export default App = () => {
//     return (
//         <View style={{flex:1}}>
//         <LoginScreen2 />
//         </View>
//     )
// }