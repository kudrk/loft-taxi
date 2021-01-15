import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import "./Map.css";
import "./Profile.css";
import { Menu } from "./Menu";
import { Logo, MCIcon } from 'loft-taxi-mui-theme';
import { Paper, Box, Button, Typography, TextField, Container, Card, CardContent } from '@material-ui/core';
import { Link } from "react-router-dom";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoia3VkcmsiLCJhIjoiY2tqNGw2a2NuMGxtMjMybm9pMnk2MmE3ciJ9.DJzxJ1oxvNJoxcFqIid4Gw';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [30.3140793, 59.9397392], // starting position Эрмитаж
      zoom: 9 // starting zoom
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <Menu />
        </header>
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer} />
          <div className="paper">
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2">Заполните платежные данные</Typography>
                <Typography variant="body1" component="p">Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
                <Button variant="contained"><Link to="/profile">Перейти в профиль</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div >
      </>
    );
  }
}

