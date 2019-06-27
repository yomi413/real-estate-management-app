import React, { Component } from 'react';
import NavBar from './components/NavBar';

class Welcome extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <center>
          <h1 className="homeHeader">Escano Real Estate Services</h1>
          <img className="skyscrapers" src={"https://i.imgur.com/lpvbSRT.jpg"} className=""/>
        </center>
      </div>
    )
  }
}

export default Welcome;
