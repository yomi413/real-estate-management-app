import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/session', {
      credentials: 'include',
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
      <div>
        <div style={{color: 'red'}}>{this.state.error}</div>
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

      </div>
    )
  }
}

export default Login;
