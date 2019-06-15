import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

class Welcome extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <center>
          <h1 className="homeHeader">Escano Real Estate Services</h1>
          <img className="skyscrapers" src={"https://i.imgur.com/lpvbSRT.jpg"} className=""/>
          <button><Link to='/building/new'>New Building</Link></button>
          <button><Link to="/buildings">Existing Building</Link> </button>
        </center>
      </div>
    )
  }
}

export default Welcome;
