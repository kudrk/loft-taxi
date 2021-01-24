import React, { Component } from "react";
import "./Map.css";
import "./Profile.css";
import { MenuWithConnect } from "../components/Menu";
import { Logo } from 'loft-taxi-mui-theme';
import { MapComponent } from '../components/MapComponent'
import { getCard } from "../actions";
import { connect } from 'react-redux';
import { MapBox } from '../components/MapBox'

class Map extends Component {
  componentDidMount() {
    this.props.getCard(this.props.token)
  }

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <MenuWithConnect />
        </header>
        <MapBox />
        <MapComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { paymentData: state.payment.paymentData, token: state.auth.token }
}

export const MapWithConnect = connect(
  mapStateToProps,
  { getCard }
)(Map);