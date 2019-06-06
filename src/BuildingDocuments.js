import React, { Component } from 'react';
import App from './App';
// import { Document } from 'react-pdf';

class BuildingDocuments extends Component {
  render() {
    const mortgage = ""
    const deed = ""
    const cofo = ""

    return (

      <div>
        <h1>House Documents</h1>
        <ul>
          <li>Mortgage Documents</li>
          <li><App /></li>
          <li>Certificate of Occupancy</li>
        </ul>
      </div>
    )
  }
}

export default BuildingDocuments;
