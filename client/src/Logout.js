import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Logout extends Component {
  handleLogout() {
    localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <div>
        <h3>Are you sure you want to log out?</h3>
        <button type="button" onClick={this.handleLogout}>Logout Button</button>
      </div>
    )
  }
}

export default withRouter(Logout);
