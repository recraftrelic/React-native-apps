import React from 'react';
import { NativeRouter, Route, Switch } from 'react-router-native';
import LoginScreen2 from './components/LoginScreen2';

const App  = () => {
  return (
  <NativeRouter>
   
    <Switch>
      <Route exact path="/" component={LoginScreen2} />
    </Switch>
   
    </NativeRouter>
    
  );

};


export default App;
