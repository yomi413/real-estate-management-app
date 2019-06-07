import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const url = window.location.pathname

    return (
      <div>
        <h1>Our House App</h1>

        <p>Recently we celebrated 13 years living in this house. In order to make life easier, I have developed this app to help us keep track of basic information as it pertains to the house.</p>
        <p>Now we will all be able to see the same information at the same time from the comfort of our home.</p>
        <p>Enjoy, and please provide feedback so that we can continue improving our experience.</p>
      </div>
    )
  }
}

export default Welcome;
