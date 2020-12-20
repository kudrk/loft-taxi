import React from "react";
import { Login } from './Login';
import { Registration } from './Registration';
import { Map } from './Map';
import { Profile } from './Profile';
import './App.css';


const PAGES = {   //компоненты страниц
  login: <Login />,
  registration: <Registration />,
  map: <Map />,
  profile: <Profile />,
};

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
        <section>{PAGES[this.state.currentPage]}</section>
      </main>
    </>;
  }
}

export default App;
