import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/house')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="Username" />
        </div>

        <div>
        <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>

        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login;
