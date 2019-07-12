import React, { Component } from "react";
import NavBar from "./components/NavBar";
import FooterComponent from "./components/FooterComponent";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
          <center>
            <h1 className="homeHeader">Escano/Asis Real Estate</h1>
            <h5>
              Escano/Asis Real Estate is a service provided so that we may all
              be able to view the information available on our property at the
              same time.
            </h5>
            <img
              className="skyscrapers"
              src={"https://i.imgur.com/lpvbSRT.jpg"}
            />
          </center>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default Welcome;
