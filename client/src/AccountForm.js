import React, { Component } from "react";
import NavBar from "./components/NavBar";

const AccountForm = props => (
  <div>
    <NavBar />
    <div style={{ color: "red" }}>{props.error}</div>

    <form onSubmit={props.onSubmit}>
      <h1 className="credential-heading">{props.heading}</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={props.onChange}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={props.onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default AccountForm;
