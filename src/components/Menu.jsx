import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";


export class Menu extends React.Component {

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
            <Link onClick={this.props.unauthenticate}>LogOut</Link> {/*не работает*/}
          </li>
        </ul>
      </nav>
    )
  }
}
