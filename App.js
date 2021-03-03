
import {Route, Switch, NativeRouter} from 'react-router-native';
import Screen1 from './AllScreens/Screen1/Screen1';



const App = () => {
  return (
    <NativeRouter>
      <Switch>

        <Route exact path="/" component={Screen1}></Route>

      </Switch>
    </NativeRouter>
  );
};


export default App;
