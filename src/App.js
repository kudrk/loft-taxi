import React from "react";
import { LoginWithConnect } from './Login';
import { Map } from './Map';
import { ProfileWithConnect } from './Profile';
import { Menu } from './Menu';
import { Registration } from './Registration';
import { connect } from 'react-redux';
import {
  Switch,
  Route
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {

  render() {
    return <>
      <header>
        <Menu />
      </header>
      <main data-testid="container">
        <section>
          <Switch>
            <Route exact path="/" component={LoginWithConnect} />
            <Route exact path="/registration" component={Registration} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileWithConnect} />
          </Switch>
        </section>
      </main>
    </>;
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};


export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);
