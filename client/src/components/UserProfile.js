import React, { Component } from "react";

const UserProfile = props => (
  <div>
    <form onSubmit={props.onSubmit}>
      <div className="form-row">
        <div className="col">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="First name"
            onChange={props.onChange}
          />
        </div>

        <div className="col">
          <label html="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Last name"
            onChange={props.onChange}
          />
        </div>
      </div>
    </form>
  </div>
);

export default UserProfile;
