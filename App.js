import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import { NativeRouter, Route, Switch } from 'react-router-native';
// import Screen1 from './AllScreens/Screen1';
// import Screen2 from './AllScreens/Screen2';
// import LoginScreen1 from './components/login-pages/LoginScreen1';
 import LoginScreen1 from './components/login-pages/LoginScreen1';
// import LoginScreen2 from './components/LoginScreen2';

const App  = () => {
  return (
  <NativeRouter>
   
    <Switch>
     {/*  <Route exact path="/" component={Screen2}></Route> */}
      <Route exact path="/" component={LoginScreen1} />
      {/* <Route exact path="/" component={Screen1}></Route> */}
    </Switch>
   
    </NativeRouter>
    
  );

};


export default App;
