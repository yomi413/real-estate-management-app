import React, { Component } from "react";
import NavBar from "./components/NavBar";

const AccountForm = props => (
  <div>
    <NavBar />
    <div style={{ color: "red" }}>{props.error}</div>
    <form onSubmit={props.onSubmit}>
      <h1>{props.heading}</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.onChange}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.onChange}
        />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default AccountForm;
