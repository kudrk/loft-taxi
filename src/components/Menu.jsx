import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { logOut } from '../actions';
import { connect } from 'react-redux';


export class Menu extends React.Component {

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <nav>
        <ul className="menu">
          <li className="menu_link">
            <Link to='/registration'>Registration</Link>
          </li>
          <li className="menu_link">
            <Link to="/map">Map</Link>
          </li>
          <li className="menu_link">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="menu_link">
            <Link onClick={this.unauthenticate}>LogOut</Link> 
          </li>
        </ul>
      </nav>
    )
  }
}

export const MenuWithConnect = connect(
  (state) => ({ token: state.auth.token }),
  { logOut }
)(Menu);
