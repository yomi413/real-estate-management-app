import React, { Component } from 'react';

class TenantsListContainer extends Component {
  state = {
    tenants: []
  }

  render() {
    return (
      <div>
        <TenantsList tenants={this.state.users} />
      </div>
    )
  }
}

export default TenantsListContainer;
