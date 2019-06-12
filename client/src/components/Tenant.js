import React, { Component } from 'react';

class Tenant extends Component {
  
  render() {
    return (
      <div>
        <h2>Welcome!</h2>

        <h2>Your Basic Information</h2>
        Name: {this.props.name}
        Lease: {this.props.lease}
        Rent: {this.props.rent}
      </div>
    )
  }
}

export default Tenant;
