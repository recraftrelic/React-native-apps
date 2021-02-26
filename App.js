import React from 'react';
import {Route, Switch, NativeRouter} from 'react-router-native';
import LoginScreen1 from './components/login-pages/LoginScreen1';
import LoginScreen2 from './components/LoginScreen2';
import Screen1 from './AllScreens/Screen1/Screen1';
import Screen2 from './AllScreens/Screen2/Screen2';
import Screen5 from './AllScreens/Screen5/Screen5';
import Screen6 from './AllScreens/Screen6/Screen6';
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

const App = () => {
  return (
    <NativeRouter>
      <Switch>
        {/* <Route exact path="/" component={LoginScreen2} /> */}
        {/* <Route exact path="/base/" component={BaseNext} />  */}
        <Route exact path="/" component={Screen2}></Route>
        {/* <Route exact path="/" component={Screen1}></Route> */}
        {/* <Route exact path="/" component={Screen5}></Route> */}
        {/* <Route exact path="/" component={Screen6}></Route> */}
      </Switch>
    </NativeRouter>
  );
};

export default App;
