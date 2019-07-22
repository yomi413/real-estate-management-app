import React from "react";
import Buildings from "../containers/Buildings";
import NavBar from "./NavBar";
import FooterComponent from "./FooterComponent";

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
