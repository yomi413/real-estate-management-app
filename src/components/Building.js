import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import building from '../data';
// import TenantsList from '../TenantsList';

class Building extends Component {
  componentDidMount() {
    this.props.fetchBuilding(
      this.props.buildingId
    )
  }

  render () {
    const address = "2942 Baisley Avenue, Bronx, New York"
    const description = "This is a 3-family house located in the Pelham Bay section of the Bronx, New York. The white brick facade gives the house a beautiful appearance."
    const image = "https://i.imgur.com/jJyv31d.png"

    return (
      <div>
        <center><img src={image} alt="Our House" /></center>
        <h2>Address</h2>
        {address}
        <h2>Building Description</h2>
          <p>{description}</p>
        <h2>Building Documents: </h2>
          <ul>
            <li>Mortgage Documents</li>
            <li>Deed</li>
            <li>Certificate of Occupancy</li>
          </ul>
        <h2><Link to="/tenants">Tenants</Link></h2>
          <ul>
            <li>Apartment 1</li>
            <li>Apartment 2</li>
            <li>Apartment 3</li>
          </ul>
        <h2>Important Links and Information</h2>
          <ul>
            <li>Ocwen</li>
            <li>NYC Department of Finance</li>
            <li>NYC Department of Buildings</li>
          </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ address }) => {
  return { address };
};

const fetchBuilding = (id) => ({
  type: 'FETCH_BUILDING',
  id
});

const mapDispatchToProps = dispatch => {
  return {
    fetchBuilding: (id) => {
      dispatch(fetchBuilding(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Building);
