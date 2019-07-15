import React, { Component } from "react";
import NavBar from "../components/NavBar";

class BuildingContainer extends Component {
  state = {
    address: "",
    description: "",
    numberOfApartments: "",
    deed: "",
    mortgage_1: "",
    mortgage_2: "",
    satisfaction_of_mortgage_1: "",
    satisfaction_of_mortgage_2: "",
    certificate_of_occupancy: ""
  };

  handleSubmit = event => {
    event.preventDefault();
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
        numberOfApartments: this.state.numberOfApartments,
        document_attributes: {
          deed: this.state.deed,
          mortgage_1: this.state.mortgage_1,
          mortgage_2: this.state.mortgage_2,
          satisfaction_of_mortgage: this.state.satisfaction_of_mortgage_1,
          satisfaction_of_mortgage_2: this.state.satisfaction_of_mortgage_2,
          certificate_of_occupancy: this.state.certificate_of_occupancy
        }
      })
    }).then(() => {
      this.props.history.push("/user-welcome");
    });
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
        <form onSubmit={this.handleSubmit}>
          <h1>New Building</h1>
          <div>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="numberOfApartments">Number of Apartments: </label>
            <input
              type="number"
              name="numberOfApartments"
              placeholder="# of Apartments"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="deed">Deed: </label>
            <input
              type="text"
              name="deed"
              placeholder="Deed"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="mortgage_1">Mortgage: </label>
            <input
              type="text"
              name="mortgage_1"
              placeholder="Mortgage"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="mortgage_2">Mortgage: </label>
            <input
              type="text"
              name="mortgage_2"
              placeholder="Mortgage (optional)"
              onChange={this.handleChange}
            />
          </div>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BuildingContainer;
