import React, { Component } from "react";
import "./Map.css";
import "./Profile.css";
import { Menu } from "../components/Menu";
import { Logo } from 'loft-taxi-mui-theme';
import { MapComponent } from '../components/MapComponent'
import { saveCardData } from "../actions";
import { connect } from 'react-redux';
import { MapBox } from '../components/MapBox'

export class Map extends Component {

  componentDidMount() {
    if (this.props.getCard) {
      this.props.getCard(this.props.token)
    }
  }

  render() {
    return (
      <>
        <header className="header">
          <Logo />
          <Menu />
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
  { saveCardData }
)(Map);