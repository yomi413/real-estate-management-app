import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: ''
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
    .then(() => {
      this.props.history.push('/')
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
        </div>

        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default SignUp;
