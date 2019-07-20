import React, { Component } from "react";
import { connect } from "react-redux";
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
  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    const buildingsList = this.props.buildings.map((building, index) => {
      return (
        <li key={index}>
          <Link to={`building/${building.id}`}>{building.address}</Link>
        </li>
      );
    });

    return (
      <div>
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
