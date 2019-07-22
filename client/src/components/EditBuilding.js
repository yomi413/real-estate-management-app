import React, { Component } from "react";
import { connect } from "react-redux";
import BuildingInput from "./BuildingInput";
import NavBar from "./NavBar";
import { fetchBuilding, updateBuilding } from "../actions";

class EditBuilding extends Component {
  state = {
    address: this.props.building.address,
    description: this.props.building.description,
    image: this.props.building.description,
    numberOfApartments: this.props.building.numberOfApartments,
    deed: this.props.building.deed,
    mortgage1: this.props.building.mortgage1,
    mortgage2: this.props.building.mortgage2,
    satisfactionOfMortgage1: this.props.building.satisfactionOfMortgage1,
    satisfactionOfMortgage2: this.props.building.satisfactionOfMortgage2,
    certificateOfOccupancy: this.props.building.certificateOfOccupancy,
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props
      .updateBuilding(
        {
          address: this.state.address,
          description: this.state.description,
          image: this.state.image,
          numberOfApartments: this.state.numberOfApartments,
          document_attributes: {
            deed: this.state.deed,
            mortgage_1: this.state.mortgage1,
            mortgage_2: this.state.mortgage2,
            satisfaction_of_mortgage_1: this.state.satisfactionOfMortgage1,
            satisfaction_of_mortgage_2: this.state.satisfactionOfMortgage2,
            certificate_of_occupancy: this.state.certificateOfOccupancy
          }
        },
        this.props.buildingId
      )
      .then(() => {
        this.props.history.push(`/building/${this.props.buildingId}`);
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    if (this.props.building === emptyObj) {
      this.props.fetchBuilding(this.props.buildingId).then(building =>
        this.setState({
          address: building.address,
          description: building.description,
          image: building.image,
          numberOfApartments: building.numberOfApartments,
          deed: building.deed,
          mortgage_1: building.mortgage1,
          mortgage_2: building.mortgage2,
          satisfaction_of_mortgage_1: building.satisfactionOfMortgage1,
          satisfaction_of_mortgage_2: building.satisfactionOfMortgage2,
          certificate_of_occupancy: building.certificateOfOccupancy
        })
      );
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <BuildingInput
          heading="Edit Building Information"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          address={this.state.address}
          description={this.state.description}
          image={this.state.image}
          numberOfApartments={this.state.numberOfApartments}
          deed={this.state.deed}
          mortgage1={this.state.mortgage1}
          mortgage2={this.state.mortgage2}
          satisfactionOfMortgage1={this.state.satisfactionOfMortgage1}
          satisfactionOfMortgage2={this.state.satisfactionOfMortgage2}
          certificateOfOccupancy={this.state.certificateOfOccupancy}
        />
      </div>
    );
  }
}

const emptyObj = {};
const mapStateToProps = (reduxState, ownProps) => {
  const building = reduxState.buildings.find(
    building => building.id === Number(ownProps.buildingId)
  );
  return { building: building || emptyObj };
};

const mapDispatchToProps = { updateBuilding, fetchBuilding };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBuilding);
