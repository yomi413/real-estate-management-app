import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const fetchBuildings = () => {
  return dispatch => {
    fetch(
      `http://localhost:3001/buildings.json?uid=${
        localStorage["json.sessionUid"]
      }`
    )
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "ADD_BUILDINGS", buildings: data.buildings });
      });
  };
};

class Buildings extends Component {
  state = {
    buildings: []
  };

  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    const buildingsList = this.props.buildings.map((building, index) => {
      return (
        <li key={index}>
          <a href={`building/${building.id}`}>{building.address}</a>
        </li>
      );
    });

    return (
      <div>
        <h1>Buildings</h1>
        <ul>{buildingsList}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchBuildings };

const mapStateToProps = state => ({
  buildings: state.buildings
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buildings);
