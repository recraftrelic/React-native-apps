import React from 'react';
import MainScreen from './AllScreens/MainScreen/MainScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './AllScreens/Screen1/Screen1';
import Screen2 from './AllScreens/Screen2/Screen2';
import Screen5 from './AllScreens/Screen5/Screen5';
import Screen6 from './AllScreens/Screen6/Screen6';
import LoginScreen4 from './components/LoginScreen4';
import LoginScreen3 from './components/LoginScreen3';
import LoginScreen7 from './components/LoginScreen7';
import LoginScreen8 from './components/LoginScreen8';
import LoginScreen10 from './components/LoginScreen10';
import Screen9 from "./AllScreens/Screen9/Screen9";
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
        
        <Stack.Screen name="screen1" component ={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name="screen2" component ={Screen2} options={{headerShown: false}}/>
        <Stack.Screen name="screen3" component ={LoginScreen3} options={{headerShown: false}}/>
        <Stack.Screen name="screen4" component ={LoginScreen4} options={{headerShown: false}}/>
        <Stack.Screen name="screen5" component ={Screen5} options={{headerShown: false}}/>
        <Stack.Screen name="screen6" component ={Screen6} options={{headerShown: false}}/>
        <Stack.Screen name="screen7" component ={LoginScreen7} options={{headerShown: false}}/>
        <Stack.Screen name="screen8" component ={LoginScreen8} options={{headerShown: false}}/>
        <Stack.Screen name="screen9" component ={Screen9} options={{headerShown: false}}/>
        <Stack.Screen name="screen10" component ={LoginScreen10} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>

   
 
    
  );

};
export default App;

