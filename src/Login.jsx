import React from "react";
import { withAuth } from "./AuthContext";
import {PropTypes} from 'prop-types';

export class Login extends React.Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  onClick = event => {
    event.preventDefault();
    this.props.navigate('registration');
  };

  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <div>
            <h1>Войти</h1>
          </div>
        ) : (
            <div>
              <p>Новый пользователь?<a onClick={this.onClick}>Зарегистрируйтесь</a></p>
              <form onSubmit={this.authenticate}>
                <label htmlFor="email"></label>
                <input id="email" type="email" name="email" size="28" placeholder="Имя пользователя*" />
                <label htmlFor="password"></label>
                <input id="password" type="password" name="password" size="28" placeholder="Пароль*" />
                <button type="submit">Войти</button>
              </form>
            </div>
          )}
      </>
    );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);