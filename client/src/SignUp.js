import React, { Component } from 'react';

const AccountForm = (props) => (
  <div>
    <div style={{color: 'red'}}>{props.error}</div>
    <form onSubmit={props.onSubmit}>
      <h1>{props.heading}</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" placeholder="Email" onChange={props.onChange}/>
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="Password" onChange={props.onChange}/>
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
);


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <AccountForm
        heading="Sign Up"
        error={this.state.error}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    )
  }
}

export default SignUp;
