import React, { Component } from "react";
import { Link } from "react-router-dom";
import Buildings from "../containers/Buildings";
import NavBar from "./NavBar";
import FooterComponent from "./FooterComponent";

const UserWelcome = props => (
  <React.Fragment>
    <div>
      <NavBar />
      <h1>Welcome !</h1>
      <p>Your buildings.</p>

      <Buildings />
      <FooterComponent />
    </div>
  </React.Fragment>
);

export default UserWelcome;
