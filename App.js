import React from 'react';
import {Route, Switch, NativeRouter} from 'react-router-native';
import Screen1 from './AllScreens/Screen1/Screen1';
import Screen2 from './AllScreens/Screen2/Screen2';
import Screen5 from './AllScreens/Screen5/Screen5';
import Screen6  from './AllScreens/Screen6/Screen6';
import Screen9 from './AllScreens/Screen9/Screen9'
import LoginScreen10 from './components/LoginScreen10';


const App = () => {
  return (
    <NativeRouter>
      <Switch>
        {/* <Route exact path="/" component={LoginScreen2} /> */}
        {/* <Route exact path="/base/" component={BaseNext} />  */}
        <Route exact path="/" component={LoginScreen10}></Route>
        {/* <Route exact path="/" component={Screen1}></Route> */}
        {/* <Route exact path="/" component={Screen5}></Route> */}
        {/* <Route exact path="/" component={Screen6}></Route> */}
        {/* <Route exact path="/" component={Screen9}></Route> */}

       

      </Switch>
    </NativeRouter>
  );
};


export default App;
