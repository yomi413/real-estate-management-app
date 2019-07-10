import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";

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
          // window.location.href = "/";
        } else {
          this.setState({ error: json["errors"] });
        }
      });
  };

  render() {
    return (
      <div>
        <h3>Are you sure you want to log out?</h3>
        <button type="button" onClick={this.handleLogout}>
          Logout Button
        </button>
      </div>
    );
  }
}

export default withRouter(Logout);
