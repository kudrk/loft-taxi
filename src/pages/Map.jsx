import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import "./Map.css";
import "./Profile.css";
import { Menu } from "../components/Menu";
import { Logo, MCIcon } from 'loft-taxi-mui-theme';
import { MapComponent } from '../components/MapComponent'
import { getCard } from "../actions";
import { connect } from 'react-redux';

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    this.props.getCard(this.props.token);
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
        <MapComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { paymentData: state.payment.paymentData, token: state.payment.token }
}

export const MapWithConnect = connect(
  mapStateToProps,
  { getCard }
)(Map);