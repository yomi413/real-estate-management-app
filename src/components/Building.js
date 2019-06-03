import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TenantsList from '../TenantsList';

class Building extends Component {
  componentDidMount() {
    this.props.fetchBuilding(
      this.props.buildingId
    )
  }

  render () {
    // const address = "2942 Baisley Avenue, Bronx, NY"
    return (
      <div>
        <center><img src={'https://i.imgur.com/jJyv31d.png'} alt="Our House" /></center>
        <p>Address: {this.props.address}</p>
        <h2>Documents</h2>
        <h2>Tenants</h2>
        <h2>Important Links and Information</h2>

        //Picture of House
        //Address
        //Links to House Documents
        //Link TenantsList

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
