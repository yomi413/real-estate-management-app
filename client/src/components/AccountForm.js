import React, { Component } from "react";

const AccountForm = props => (
  <div>
    <form onSubmit={props.onSubmit}>
      <div className="form-row">
        <div className="col">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter email"
            onChange={props.onChange}
          />
        </div>
        <div className="col">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter password"
            onChange={props.onChange}
          />
        </div>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default AccountForm;
