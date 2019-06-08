import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {

    return (
      <div>
        <center><h1>Escano Real Estate Services</h1></center>
        <img src={"https://i.imgur.com/lpvbSRT.jpg"} />
        <button><Link to='/building/new'>New Building</Link></button>
        <button><Link to="/buildings">Existing Building</Link> </button>
      </div>
    )
  }
}

export default Welcome;
