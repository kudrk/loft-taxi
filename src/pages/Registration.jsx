import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, TextField, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import './Login.css';
import { connect } from "react-redux";
import { registr } from '../actions'

export class Registration extends React.Component {

  reguser = (event) => {
    event.preventDefault();
    this.props.registr(event.target.email.value, event.target.password.value, event.target.name.value, event.target.surname.value);
  }

  render() {
    return (
      <Container fixed>
        <div className='grid'>
          <div>
            <Logo />
          </div>
          <div>
            <div className="form-div">
              <Typography variant="h4">Регистрация</Typography>
              <Typography variant="body1">Уже зарегистрированы?<Link to="/profile" variant="inherit">Войти</Link></Typography>
              <form className="form-div_inputs" onSubmit={this.reguser}>
                <label htmlFor="email"></label>
                <TextField normal fullWidth multiline id="email" type="email" name="email" placeholder="Адрес электронной почты" />

                <label htmlFor="name"></label>
                <TextField normal fullWidth multiline id="name" type="text" name="name" placeholder="Имя*" />

                <label htmlFor="name"></label>
                <TextField normal fullWidth multiline id="surname" type="text" name="surname" placeholder="Фамилия*" />

                <label htmlFor="password"></label>
                <TextField normal fullWidth multiline id="password" type="password" name="password" placeholder="Пароль*" />

                <Button variant="contained" type="submit">Зарегистрироваться</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
};

const regStateToProps = (state) => {
  return { registrationData: state.registration.isRegistrated, token: state.registration.token }
}

export const RegistrationWithConnect = connect(
  regStateToProps,
  { registr }
)(Registration);
