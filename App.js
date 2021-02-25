/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NativeRouter, Route, Router, Switch } from 'react-router-native';
import Screen1 from './AllScreens/Screen1/Screen1';
import Screen2 from './AllScreens/Screen2/Screen2';
import Screen5 from './AllScreens/Screen5/Screen5';
import Screen6 from './AllScreens/Screen5/Screen6';

const App  = () => {
  return (
  <NativeRouter>
   
    <Switch>
      {/* <Route exact path="/" component={Screen2}></Route> */}
      {/* <Route exact path="/" component={Screen1}></Route> */}
      <Route exact path="/" component={Screen5}></Route>
      {/* <Route exact path="/" component={Screen6}></Route> */}
    </Switch>
   
    </NativeRouter>
    
  );

};


export default App;
