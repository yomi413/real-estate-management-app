import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

const Welcome = () => (
  <React.Fragment>
    <div>
      <NavBar />
      <center>
        <h1 className="homeHeader">Escano/Asis Real Estate</h1>
        <h5>
          Escano/Asis Real Estate is a site designed and developed with the
          intention of providing a one-stop-shop for our group's real estate.
          This site will help keep us organized and ready to tackle the needs of
          our properties.
        </h5>
        <img className="skyscrapers" src={"https://i.imgur.com/lpvbSRT.jpg"} />
      </center>
    </div>
    <FooterComponent />
  </React.Fragment>
);

export default Welcome;
