import React from "react";
import { LoginWithConnect } from './Login';
import { Map } from './Map';
import { ProfileWithConnect } from './Profile';
import { Registration } from './Registration';
import {
  Switch,
  Route
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import './index.css';


class App extends React.Component {

  render() {
    return <>
      <div className='wrapper'>
        <main data-testid="container" >
          <section id="container">
            <Switch>
              <Route exact path="/" component={LoginWithConnect} />
              <Route exact path="/registration" component={Registration} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </div>
    </>;
  }
}



export default App;
