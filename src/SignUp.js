import React from 'react';

const SignUp = () =>
  <form>
    <h1>Sign Up</h1>
    <div>
      <label htmlFor="email">Email: </label>
      <input type="text" name="email" placeholder="Email" />
    </div>

    <div>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" placeholder="Username" />
    </div>

    <div>
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" placeholder="Password" />
    </div>

    <input type="submit" value="Sign Up" />
  </form>

  export default SignUp;