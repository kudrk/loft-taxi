import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate, logIn } from '../actions';
import { Button, Typography, TextField, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import './Login.css';
import { useHistory } from "react-router-dom";

const Login = ({ authenticate, isLoggedIn, logIn }) => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      logIn({ token })
    }
  }, []);
  if (isLoggedIn) {
    history.push('/map')
  }

  const auth = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    authenticate(email.value, password.value);
  };

  return (
    <Container fixed>
      <div className='grid'>
        <div>
          <Logo />
        </div>
        <div>
          <div className="form-div">
            <Typography variant="h4">Войти</Typography>
            <Typography variant="body1">Новый пользователь?<Link to="/registration" variant="inherit">Зарегистрируйтесь</Link></Typography>
            <form className="form-div_inputs" onSubmit={auth}>
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
  )
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.auth.isLoggedIn }
};


export const LoginWithConnect = connect(
  mapStateToProps,
  { authenticate, logIn }
)(Login);