import React, { Component } from "react";
import AccountForm from "../components/AccountForm";
import NavBar from "../components/NavBar";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3001/session", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => {
        return Promise.all([response.ok, response.json()]);
      })
      .then(([ok, json]) => {
        if (ok) {
          localStorage["json.sessionUid"] = json.sessionUid;
          this.props.history.push("/user-welcome");
        } else {
          this.setState({ error: json["errors"] });
        }
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div style={{ color: "red" }}>{this.state.error}</div>
        <h1 className="credential-heading">Login</h1>
        <AccountForm
          error={this.state.error}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Login;
