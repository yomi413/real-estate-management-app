import React, { Component } from 'react';
import tenantsInfo from './data';

class TenantsList extends Component {

  render() {
    const tenants = tenantsInfo.map((tenant, index) => <li key={index}>{tenant.name}</li>)

    return (
      <div>
        <h1>Current Residents</h1>
        <ul>
          {tenants}
        </ul>
      </div>
    )
  }
}

export default TenantsList;
