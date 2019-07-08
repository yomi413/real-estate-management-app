import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "10px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  border: "1px solid #4CAF50"
};

class NavBar extends Component {
  render() {
    const homeButton = (
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Home
      </NavLink>
    );

    const loginButton = (
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Login
      </NavLink>
    );

    const signupButton = (
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Sign Up
      </NavLink>
    );

    const logoutButton = (
      <NavLink
        to="/logout"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Logout
      </NavLink>
    );

    const buildingsButton = (
      <NavLink
        to="/buildings"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        Existing Buildings
      </NavLink>
    );

    const newBuildingButton = (
      <NavLink
        to="/building/new"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}
      >
        New Building
      </NavLink>
    );

    const url = window.location.pathname;

    if (url === "/") {
      return (
        <div className="navbar">
          {loginButton}
          {signupButton}
        </div>
      );
    } else if (url === "/user-welcome") {
      return (
        <div className="navbar">
          {buildingsButton}
          {newBuildingButton}
          {logoutButton}
        </div>
      );
    } else if (url === "/buildings") {
      return (
        <div className="navbar">
          {homeButton}
          {newBuildingButton}
          {logoutButton}
        </div>
      );
    } else if (url === "/building/new") {
      return (
        <div className="navbar">
          {homeButton}
          {buildingsButton}
        </div>
      );
    } else if (url === "/login" || url === "/signup") {
      return <div className="navbar">{homeButton}</div>;
    }
  }
}

// const NavBar = () => {
//   return (
//     <div className="navbar">
//       <NavLink
//         to="/"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'darkblue'
//         }}
//         >Home</NavLink>
// <NavLink
//   to="/login"
//   exact
//   style={link}
//   activeStyle={{
//     background: 'darkblue'
//   }}
//   >Login</NavLink>
// <NavLink
//   to="/signup"
//   exact
//   style={link}
//   activeStyle={{
//     background: 'darkblue'
//   }}
//   >Sign Up</NavLink>
//       <NavLink
//         to="/building"
//         exact
//         style={link}
//         activeStyle={{
//           background: 'darkblue'
//         }}
//         >Building Info</NavLink>
//   <NavLink
//     to="/logout"
//     exact
//     style={link}
//     activeStyle={{
//       background: 'darkblue'
//     }}
//     >Logout</NavLink>
// </div>
//   )
// }

export default NavBar;
