import React, { Component } from 'react';
import { logIn, logOut } from './actions';
import { connect } from 'react-redux';
import { Menu } from './Menu';
import './Profile.css';
import { Logo, MCIcon } from 'loft-taxi-mui-theme';


export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <Menu />
        </header>
        <div>
          <p>
            Profile.
        <button onClick={this.unauthenticate}>Выйти</button>
          </p>
        </div>
      </>
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);