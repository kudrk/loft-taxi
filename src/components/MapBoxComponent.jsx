import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import "../pages/Map.css";
import { connect } from "react-redux";
import { getRoute } from "../actions";

export const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};

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

  componentDidUpdate() {
    if (this.map.getLayer("route")) {
      this.map.removeLayer("route");
    }

    if (this.map.getSource("route")) {
      this.map.removeSource("route");
    }
    if (this.props.route.length > 0) {
      drawRoute(this.map, this.props.route)
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    console.log(this.props.route)
    return (
      <div className="map-wrapper" >
        <div className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}

export const MapBoxComponent = connect(
  state => ({ route: state.route.route }),
  { getRoute })
  (MapBox);
