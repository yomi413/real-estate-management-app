import React, { Component } from "react";
import App from "./App";
import BuildingContainer from "./containers/BuildingContainer";
// import { Document } from 'react-pdf';

class BuildingDocuments extends Component {
  render() {
    return (
      <div>
        <h2>Building Documents</h2>
        <ul>
          <li>
            <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201497001">
              Deed
            </a>
          </li>

          <li>
            <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201497002">
              PHH Mortgage
            </a>
          </li>

          <li>
            <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201688001">
              Real Time Solutions Mortgage
            </a>
          </li>

          <li>
            <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2016101200971001">
              Real Time Solutions Satisfaction of Mortgage
            </a>
          </li>

          <li>
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/200861825T1%20(1).PDF">
              Temporary Certificate of Occupancy
            </a>
          </li>

          <li>
            <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/200861825F.PDF">
              Final Certificate of Occupancy
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BuildingDocuments;
