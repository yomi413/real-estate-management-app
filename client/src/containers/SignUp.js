import React, { Component } from "react";
import AccountForm from "../components/AccountForm";
import UserProfile from "../components/UserProfile";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/FooterComponent";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    first_name: "",
    last_name: ""
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
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name
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

        <div>
          <div style={{ color: "red" }}>{this.state.error}</div>
          <h1 className="credential-heading">Sign Up</h1>
          <UserProfile
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            firstName={this.state.first_name}
          />
          <br />
          <AccountForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
        </div>
        <br />

        <FooterComponent />
      </div>
    );
  }
}

export default SignUp;
