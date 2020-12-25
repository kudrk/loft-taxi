import React from "react";


export class Menu extends React.Component { //<Menu />

  onClick = event => {
    event.preventDefault();
    // Запрещаем перезагрузку страницы
    this.props.navigate('map');
    //Переход на страницу 
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
             onClick={() => {
              this.navigateTo("login");
            }}
            >
              Login
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.navigateTo("registration");
              }}
            >
              Registration
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.navigateTo("map");
              }}
            >
              Map
      </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.navigateTo("profile");
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
