import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BuildingContainer from "./BuildingContainer";
import buildingInfo from "../data";
import NavBar from "../components/NavBar";
import BuildingDocuments from "./BuildingDocuments";
import Contacts from "../components/Contacts";
import FooterComponent from "../components/FooterComponent";
import BuildingFactsComponent from "../components/BuildingFactsComponent";

const fetchBuilding = buildingId => {
  return dispatch => {
    fetch(
      `http://localhost:3001/buildings/${buildingId}.json?uid=${
        localStorage["json.sessionUid"]
      }`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "ADD_BUILDINGS", buildings: [data.building] });
      });
  };
};

class Building extends Component {
  componentDidMount() {
    if (!this.props.building) {
      this.props.fetchBuilding(this.props.buildingId);
    }
  }

  render() {
    if (this.props.building === undefined) {
      return "Loading...";
    }

    return (
      <React.Fragment>
        <NavBar />
        <h2>{this.props.building.address}</h2>
        <div className="jumbotron">
          <div className="image-container">
            <img
              src={this.props.building.image}
              alt={this.props.building.address}
              className="img-responsive"
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Building Facts</h3>
              <BuildingFactsComponent
                address={this.props.building.address}
                description={this.props.building.description}
                numberOfApartments={this.props.building.numberOfApartments}
              />
            </div>

            <div className="col-md-4">
              <h3>Building Documents</h3>
              <BuildingDocuments buildingId={this.props.buildingId} />
            </div>

            <div className="col-md-4">
              <Contacts />
            </div>
          </div>
        </div>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  const building = reduxState.buildings.find(
    building => building.id === Number(ownProps.buildingId)
  );

  return { building };
};

const mapDispatchToProps = { fetchBuilding };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Building);
