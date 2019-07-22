import React, { Component } from "react";

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
        // console.log(data, "Documents");
        this.setState({
          documents: data.document
        });
      });
  }

  render() {
    const documentsList = this.state.documents;

    return (
      <div>
        <ul>
          {documentsList.deed ? (
            <li>
              <a href={documentsList.deed}>Deed</a>
            </li>
          ) : null}

          {documentsList.mortgage_1 ? (
            <li>
              <a href={documentsList.mortgage_1}>Mortgage 1</a>
            </li>
          ) : null}

          {documentsList.mortgage_2 ? (
            <li>
              <a href={documentsList.mortgage_2}>Mortgage 2</a>
            </li>
          ) : null}

          {documentsList.satisfaction_of_mortgage_1 ? (
            <li>
              <a href={documentsList.satisfaction_of_mortgage_1}>
                Satisfaction of Mortgage 1
              </a>
            </li>
          ) : null}

          {documentsList.satisfaction_of_mortgage_2 ? (
            <li>
              <a href={documentsList.satisfaction_of_mortgage_2}>
                Satisfaction of Mortgage 2
              </a>
            </li>
          ) : null}

          {documentsList.certificate_of_occupancy ? (
            <li>
              <a href={documentsList.certificate_of_occupancy}>
                Certificate of Occupancy
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default BuildingDocuments;
