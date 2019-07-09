import React, { Component } from "react";
import AccountForm from "./AccountForm";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3001/users", {
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
      <AccountForm
        heading="Sign Up"
        error={this.state.error}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default SignUp;
