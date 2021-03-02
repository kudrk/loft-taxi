import React, { Component, useEffect } from "react";
import "./Map.css";
import "./Profile.css";
import { MenuWithConnect } from "../components/Menu";
import { Logo } from 'loft-taxi-mui-theme';
import { MapFormComponent } from '../components/MapForm'
import { getCard } from "../actions";
import { connect } from 'react-redux';
import { MapBoxComponent } from '../components/MapBoxComponent'

const Map = ({ getCard, token }) => {
  useEffect(() => { getCard(token) }, [])

  return (
    <>
      <header className="header">
        <Logo />
        <MenuWithConnect />
      </header>
      <MapBoxComponent />
      <MapFormComponent />
    </>
  );
}

const mapStateToProps = (state) => {
  return { token: state.auth.token }
}

export const MapWithConnect = connect(
  mapStateToProps,
  { getCard }
)(Map);