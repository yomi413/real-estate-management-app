import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BuildingInput from "../components/BuildingInput";

class CreateBuilding extends Component {
  state = {
    address: "",
    description: "",
    image: "",
    numberOfApartments: "",
    deed: "",
    mortgage1: "",
    mortgage2: "",
    satisfactionOfMortgage1: "",
    satisfactionOfMortgage2: "",
    certificateOfOccupancy: "",
    error: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('A')
    fetch("http://localhost:3001/buildings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        uid: localStorage["json.sessionUid"],
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
      })
    }).then(() => {
      // console.log('C')
      this.props.history.push("/user-welcome");
    });
    // console.log('B')
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <NavBar />

        <BuildingInput
          heading="New Building Submission"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CreateBuilding;
