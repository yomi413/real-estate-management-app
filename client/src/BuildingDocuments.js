import React, { Component } from "react";
import App from "./App";
import BuildingContainer from "./containers/BuildingContainer";
// import { Document } from 'react-pdf';

class BuildingDocuments extends Component {
  state = {
    documents: {
      deed: "",
      mortgage_1: "",
      mortgage_2: "",
      satisfaction_of_mortgage_1: "",
      satisfaction_of_mortgage_2: "",
      certificate_of_occupancy: ""
    }
  };

  componentDidMount() {
    fetch(
      `http://localhost:3001/buildings/${this.props.buildingId}/documents.json`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          documents: data.document
        });
      });
  }

  render() {
    const documentsList = this.state.documents;

    return (
      <div>
        <h2>Building Documents</h2>
        <ul>
          <li>
            <a href={documentsList.deed}>Deed</a>
          </li>

          <li>
            <a href={documentsList.mortgage_1}>Mortgage</a>
          </li>
        </ul>
      </div>
    );

    // return (
    //   <div>
    //     <h2>Building Documents</h2>
    //     <ul>
    //       <li>
    //         <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201497001">
    //           Deed
    //         </a>
    //       </li>

    //       <li>
    //         <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201497002">
    //           PHH Mortgage
    //         </a>
    //       </li>

    //       <li>
    //         <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2006060201688001">
    //           Real Time Solutions Mortgage
    //         </a>
    //       </li>

    //       <li>
    //         <a href="https://a836-acris.nyc.gov/DS/DocumentSearch/DocumentImageView?doc_id=2016101200971001">
    //           Real Time Solutions Satisfaction of Mortgage
    //         </a>
    //       </li>

    //       <li>
    //         <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/200861825T1%20(1).PDF">
    //           Temporary Certificate of Occupancy
    //         </a>
    //       </li>

    //       <li>
    //         <a href="chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///Users/yomairaescano/Downloads/200861825F.PDF">
    //           Final Certificate of Occupancy
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // );
  }
}

export default BuildingDocuments;
