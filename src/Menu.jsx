import React from "react";

export class Menu extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                this.props.navigate("login");
              }}
            >
              Login
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.props.navigate("registration");
              }}
            >
              Registration
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.props.navigate("map");
              }}
            >
              Map
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.props.navigate("profile");
              }}
            >
              Profile
      </a>
          </li>
        </ul>
      </nav>
    )
  }
}
