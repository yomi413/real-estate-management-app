import React, { Component } from "react";
import Buildings from "../containers/Buildings";
import NavBar from "./NavBar";
import FooterComponent from "./FooterComponent";
import UserProfile from "./UserProfile";

const UserWelcome = props => (
  <div>
    <NavBar />
    <h1>Welcome!</h1>
    <p>Your detailed list of buildings is found below.</p>

    <Buildings />
    <FooterComponent />
  </div>
);

export default UserWelcome;
