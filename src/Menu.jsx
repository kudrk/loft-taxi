import React from "react";
import { Link } from "react-router-dom";

export class Menu extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/registration'>Registration</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
