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
        <tbody>
          <tr>{buildingsList}</tr>
        </tbody>
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
