import React from 'react';
import { Route, Switch, NativeRouter } from "react-router-native";
// import LoginScreen2 from './components/LoginScreen2';
import LoginScreen3 from './components/LoginScreen3';
// import LoginScreen1 from './components/login-pages/LoginScreen1';
// import LoginScreen2 from './components/LoginScreen2';
// import LoginScreen1 from './components/login-pages/LoginScreen1';

const App = () => {
    return (
      <NativeRouter>
      <Switch>
      <Route exact path="/" component={LoginScreen3} />
      </Switch>
      </NativeRouter>
    );
};

export default App;
