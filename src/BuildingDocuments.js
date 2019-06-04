import React, { Component } from 'react';
import { Document } from 'react-pdf';

class BuildingDocuments extends Component {
  render() {
    const mortgage = ""
    const deed = ""
    const cofo = ""

    return (

        // <p>The following documents comprise the mortgage documents for the building:</p>

      <div>
        <ul>
          <li>Mortgage Documents</li>
          <li>Deed</li>
          <li>Certificate of Occupancy</li>
        </ul>
      </div>
    )
  }
}

export default BuildingDocuments;
