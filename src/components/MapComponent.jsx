import React, { useEffect } from "react";
import { Button, Typography, Card, CardContent, FormControl, InputLabel, Select } from '@material-ui/core';
import { Link } from "react-router-dom";
import "../pages/Map.css";
import { connect } from "react-redux";
import "./MapComponent.css";
import { getAdressList } from "../actions";



const Map = ({ cardData, adressList, getAdressList }) => {

  useEffect(() => { getAdressList() }, []);
  const adressItems = adressList.map((Item) => <option>{Item}</option>);


  return (
    <>
      {cardData ? (
        <div className="destination">
          <Card>
            <CardContent className='destination__form'>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Откуда</InputLabel>
                <Select>
                  {adressItems}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Куда</InputLabel>
                <Select className="select">
                  {adressItems}
                </Select>
              </FormControl>
              <Button variant="contained" type="submit">Вызвать такси</Button>
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
  { getAdressList })
  (Map);