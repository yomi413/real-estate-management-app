import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    loginErrors: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/session', {
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
      this.props.history.push('/user-welcome')
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
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
        </div>
        <br></br>
        <div>
        <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
        </div>
        <br></br>
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login;
