import React from 'react';
<<<<<<< HEAD
import { Route, Switch, NativeRouter } from "react-router-native";
import LoginScreen1 from './components/login-pages/LoginScreen1';
import LoginScreen2 from './components/LoginScreen2';

const App = () => {
    return (
      <NativeRouter>
      <Switch>
      <Route exact path="/" component={LoginScreen2} />
      {/* <Route exact path="/base/" component={BaseNext} />  */}
      </Switch>
      </NativeRouter>
    );
};

export default App;
=======
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
import Screen1 from './AllScreens/Screen1';
import Screen2 from './AllScreens/Screen2';

const App  = () => {
  return (
  <NativeRouter>
   
    <Switch>
      <Route exact path="/" component={Screen2}></Route>
      {/* <Route exact path="/" component={Screen1}></Route> */}
    </Switch>
   
    </NativeRouter>
    
  );

};


export default App;
>>>>>>> 535b887739bf4dc9a398665b47b85239cd7137a0
