import React, { Component } from "react";
import { connect } from "react-redux";
import ShowBuildingLink from "../components/ShowBuildingLink";
import Table from "react-bootstrap/Table";
import { fetchBuildings } from "../actions";

class Buildings extends Component {
  componentDidMount() {
    this.props.fetchBuildings();
  }

  render() {
    const buildingsList = this.props.buildings.map(building => (
      <ShowBuildingLink key={building.id} building={building} />
    ));

    return (
      <Table>
        <thead>
          <tr>
            <th>Building</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {buildingsList}
      </Table>
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
