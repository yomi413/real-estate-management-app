import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

class Logout extends Component {
  handleLogout = () => {
    fetch("http://localhost:3001/session", {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify({
        uid: localStorage["json.sessionUid"]
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        return Promise.all([response.ok, response.json()]);
      })
      .then(([ok, json]) => {
        if (ok) {
          localStorage.clear(json.sessionUid);
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <br />
        <center>
          <h3>Are you sure you want to log out?</h3>
        </center>
        <br />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default withRouter(Logout);
