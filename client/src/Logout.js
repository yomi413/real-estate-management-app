import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Logout extends Component {
  handleLogout = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/session', {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      return Promise.all([response.ok, response.json()]);
    }).then(([ok, json]) => {
      if (ok) {
        this.props.history.push('/user-welcome')
      } else {
        this.setState({ error: json['errors'] })
      }
    })
  }

  render() {
    return (

      <button type="button" onClick={this.handleLogout}>Logout Button</button>

    )
  }

}

export default withRouter(Logout);
