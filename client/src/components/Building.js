import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BuildingContainer from "../containers/BuildingContainer";
import buildingInfo from "../data";
import NavBar from "./NavBar";
import BuildingDocuments from "../BuildingDocuments";
import FooterComponent from "./FooterComponent";
// import building from '../data';
// import TenantsList from '../TenantsList';

class Building extends Component {
  state = {
    building: {
      address: "",
      description: "",
      numberOfApartments: ""
    }
  };

  componentDidMount() {
    // debugger;
    fetch(
      `http://localhost:3001/buildings/${this.props.buildingId}.json?uid=${
        localStorage["json.sessionUid"]
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          building: {
            address: data.building.address,
            description: data.building.description,
            numberOfApartments: data.building.numberOfApartments
          }
        });
      });
    // .catch(error => {});
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>Address</h2>
        {this.state.building.address}

        <h2>Building Description</h2>
        {this.state.building.description}

        <h2>Number of Apartments</h2>
        {this.state.building.numberOfApartments}

        <BuildingDocuments />
        {/* <center>
          <img src={buildingInfo.image} alt="Our House" />
        </center>
        <h2>Address</h2>
        {buildingInfo.address}
        <h2>Building Description</h2>
        <p>{buildingInfo.description}</p>

        <BuildingDocuments />

        <h2>
          <Link to="/tenants">Tenants</Link>
        </h2>

        <h2>Important Links and Information</h2>
        <ul>
          <li>Ocwen</li>
          <li>NYC Department of Finance</li>
          <li>NYC Department of Buildings</li>
        </ul> */}

        <FooterComponent />
      </div>
    );
  }
}

// const mapStateToProps = ({ address }) => {
//   return { address };
// };

const fetchBuilding = id => ({
  type: "FETCH_BUILDING",
  id
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchBuilding: id => {
//       dispatch(fetchBuilding(id));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Building);

export default Building;
