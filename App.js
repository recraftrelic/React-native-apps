import React from 'react';
import {Route, Switch, NativeRouter} from 'react-router-native';
import Screen1 from './AllScreens/Screen1/Screen1';



const App = () => {
  return (
    <NativeRouter>
      <Switch>
        {/* <Route exact path="/" component={LoginScreen2} /> */}
        {/* <Route exact path="/base/" component={BaseNext} />  */}
        {/* <Route exact path="/" component={Screen2}></Route> */}
        <Route exact path="/" component={Screen1}></Route>
        {/* <Route exact path="/" component={Screen5}></Route> */}
        {/* <Route exact path="/" component={Screen6}></Route> */}
        {/* <Route exact path="/" component={Screen9}></Route> */}

       

      </Switch>
    </NativeRouter>
  );
};


export default App;
