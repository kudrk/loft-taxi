import React from "react";
import { Button, Typography, Card, CardContent, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link } from "react-router-dom";
import "../pages/Map.css";
import { connect } from "react-redux";

const Map = ({ cardData }) => {
  return (
    <>
      {cardData ? (
        <div div className="destination">
          <Card>
            <CardContent>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Откуда</InputLabel>
                <Select>
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Куда</InputLabel>
                <Select>
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>) : (
          <div className="paper">
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2">Заполните платежные данные</Typography>
                <Typography variant="body1" component="p">Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
                <Button variant="contained"><Link to="/profile">Перейти в профиль</Link></Button>
              </CardContent>
            </Card>
          </div>
        )}
    </>
  );
}

export const MapComponent = connect(
  state => ({cardData: state.payment.cardData}),
)(Map);