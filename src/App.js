import React from "react";
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';

class App extends React.Component {
  state = { currentPage: "login" }; //state, в котром содержится текущая станица (currentPage начальное значение)

  navigateTo = (page) => {
    this.setState({ currentPage: page }); //обновляем currentPage на новое значение страницы
  }; // метод для изменения текущей страницы

  render() {
    return <>
      <header>
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
      </header>
      <main data-testid="container">
        {this.state.currentPage === 'login' && <Login navigate={this.navigateTo} />}
        {this.state.currentPage === 'profile' && <Profile />}
        {this.state.currentPage === 'map' && <Map />}
        {this.state.currentPage === 'registration' && <Registration navigate={this.navigateTo} />}
      </main>
    </>;
  }
}

export default App;
