import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '10px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  border: '1px solid #4CAF50'
}

const NavBar = () => {
  
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Home</NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Login</NavLink>
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Sign Up</NavLink>
      <NavLink
        to="/building"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Building Info</NavLink>
    </div>
  )
}

export default NavBar;
