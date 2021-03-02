import React, { Component } from 'react';
import { logIn, logOut } from '../actions';
import { connect } from 'react-redux';
import { MenuWithConnect } from '../components/Menu';
import './Profile.css';
import { Logo, MCIcon } from 'loft-taxi-mui-theme';
import { Paper, Button, Typography, Card, CardContent, Grid, Input } from '@material-ui/core';
import { saveCard } from "../actions";


export class Profile extends Component {

  savecard = (event) => {
    event.preventDefault();
    const { cardnumber, carddate, cardusername, cvc } = event.target;
    this.props.saveCard(cardnumber.value, carddate.value, cardusername.value, cvc.value, this.props.token);
  }

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <MenuWithConnect />
        </header>

        <div className="card">
          <Paper elevation={0}>
            <Card>
              <form onSubmit={this.savecard}>
                <CardContent>
                  <Typography variant="h4" component="h2">Профиль</Typography>
                  <Typography variant="body1" component="p">Способ оплаты</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Card variant="outlined">
                        <CardContent>
                          <div className="icon">
                            <MCIcon />
                          </div>
                          <Input fullWidth name="cardnumber" placeholder="Номер карты*" ></Input>
                          <Input fullWidth name="carddate" ></Input>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card variant="outlined">
                        <CardContent>
                          <Input fullWidth name="cardusername" placeholder="Имя владельца*"></Input>
                          <Input fullWidth name="cvc" placeholder="CVC*"></Input>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Button variant="contained" type="submit">Сохранить</Button>
                </CardContent>
              </form>
            </Card>
          </Paper>
        </div>
      </>
    );
  }
}

export const ProfileWithConnect = connect(
  (state) => ({ token: state.auth.token }),
  { logIn, logOut, saveCard }
)(Profile);