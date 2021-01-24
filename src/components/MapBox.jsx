import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import "../pages/Map.css";


export class MapBox extends Component {
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
      <div className="map-wrapper">
        <div className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}
