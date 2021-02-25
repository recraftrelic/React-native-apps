import React from 'react';
import { Route, Switch, NativeRouter } from "react-router-native";
import LoginScreen1 from './components/login-pages/LoginScreen1';
// import LoginScreen2 from './components/LoginScreen2';

const App = () => {
    return (
      <NativeRouter>
      <Switch>
      <Route exact path="/" component={LoginScreen1} />
      {/* <Route exact path="/base/" component={BaseNext} />  */}
      </Switch>
      </NativeRouter>
    );
};

export default App;