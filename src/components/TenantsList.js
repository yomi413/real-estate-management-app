import React, { Component } from 'react';

const TenantsList = props =>
  <ul>
    {props.tenants.map(tenant => (
      <li>{tenant.name}</li>
    ))}
  </ul>

export default TenantsList;
