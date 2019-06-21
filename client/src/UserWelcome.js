import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Buildings from './components/Buildings';
import NavBar from './components/NavBar';

class UserWelcome extends Component {
  render() {

    return (

      <div>
        <NavBar />
        <h1>Welcome!</h1>
        
        <br></br>
        <Link to='/building/new'>New Building</Link>
        <br></br>
        <Link to="/buildings">Existing Building</Link>
      </div>
    )
  }
}

export default UserWelcome;
