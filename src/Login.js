import React from 'react';

const Login = () =>
  <form>
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

  export default Login;
