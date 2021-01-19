import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate } from '../actions';
import { Button, Typography, TextField, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import './Login.css';
import { Map } from './Map';


export class Login extends React.Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };


  render() {
    return (
      <>
        {this.props.isLoggedIn ? (
          <Map />
        ) : (
            <Container fixed>
              <div className='grid'>
                <div>
                  <Logo />
                </div>
                <div>
                  <div className="form-div">
                    <Typography variant="h4">Войти</Typography>
                    <Typography variant="body1">Новый пользователь?<Link to="/registration" variant="inherit">Зарегистрируйтесь</Link></Typography>
                    <form className="form-div_inputs" onSubmit={this.authenticate}>
                      <label htmlFor="email"></label>
                      <TextField normal fullWidth multiline id="email" type="email" name="email" placeholder="Имя пользователя*" />
                      <label htmlFor="password"></label>
                      <TextField fullWidth id="password" type="password" name="password" placeholder="Пароль*" />
                      <Button variant="contained" type="submit">Войти</Button>
                    </form>
                  </div>
                </div>
              </div>
            </Container>
          )}
      </>
    );
  }
}

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);