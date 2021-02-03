import React, { useEffect, useState } from "react";
import { Button, Typography, Card, CardContent, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link } from "react-router-dom";
import "../pages/Map.css";
import { connect } from "react-redux";
import "./MapComponent.css";
import { getAdressList, getRoute } from "../actions";



const Map = ({ cardData, adressList, getAdressList, getRoute }) => {

  useEffect(() => { getAdressList() }, []);

  const [adress1, changeadress1] = useState('');
  const [adress2, changeadress2] = useState('')

  return (
    <>
      {cardData ? (
        <div className="destination">
          <Card>
            <CardContent className='destination__form'>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Откуда</InputLabel>
                <Select onChange={(event) => {
                  changeadress1(event.target.value)
                }}>
                  {adressList.map((Item) => <option value={Item}>{Item}</option>)}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Куда</InputLabel>
                <Select className="select" onChange={(event) => {
                  changeadress2(event.target.value)
                  console.log(event.target.value)
                }}>
                  {adressList.filter((item) => { return item !== adress1 }).map((Item) => <option value={Item}>{Item}</option>)}
                </Select>
              </FormControl>
              <Button onClick={(event) => { getRoute(adress1, adress2) }} variant="contained" type="submit">Вызвать такси</Button>
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
  state => ({ cardData: state.payment.cardData, adressList: state.adress.list }),
  { getAdressList, getRoute })
  (Map);