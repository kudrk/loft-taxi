import React from "react";
import { LoginWithConnect } from './pages/Login';
import { MapWithConnect } from './pages/Map';
import { ProfileWithConnect } from './pages/Profile';
import { RegistrationWithConnect } from './pages/Registration';
import {
  Switch,
  Route
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import './index.css';


class App extends React.Component {

  render() {
    return <>
      <div className='wrapper'>
        <main data-testid="container" >
          <section id="container">
            <Switch>
              <Route exact path="/" component={LoginWithConnect} />
              <Route exact path="/registration" component={RegistrationWithConnect} />
              <PrivateRoute path="/map" component={MapWithConnect} />
              <PrivateRoute path="/profile" component={ProfileWithConnect} />
            </Switch>
          </section>
        </main>
      </div>
    </>;
  }
}



export default App;
