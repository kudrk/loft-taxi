import React, { Component } from 'react';
import { logIn, logOut } from './actions';
import { connect } from 'react-redux';
import { Menu } from './Menu';
import './Profile.css';
import { Logo, MCIcon } from 'loft-taxi-mui-theme';
import { Paper, Box, Button, Typography, TextField, Container, Card, CardContent, Grid, Input } from '@material-ui/core';



export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <Menu />
        </header>
        <div className="card">
          <Paper elevation={0}>
            <Card>
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
                        <Input fullWidth placeholder="Номер карты*"></Input>
                        <Input fullWidth defaultValue="01/21"></Input>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card variant="outlined">
                      <CardContent>
                        <Input fullWidth placeholder="Имя владельца*"></Input>
                        <Input fullWidth placeholder="CVC*"></Input>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Button variant="contained">Сохранить</Button>
              </CardContent>
            </Card>
          </Paper>

          {/* <p>
            Profile.
        <button onClick={this.unauthenticate}>Выйти</button>
          </p> */}
        </div>
      </>
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);