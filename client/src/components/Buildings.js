import React, { Component } from 'react';

class Buildings extends Component {
  render() {
    const buildingsList = [
      "2942 Baisley Avenue, Bronx, NY",
      "1373 Ellison Avenue, Bronx, NY",
      "2940 Baisley Avenue, Bronx, NY",
    ]

    const buildings = buildingsList.map((building, index) => <li key={index}>{building}</li>)

    return (
      <div>
        <h1>All Buildings</h1>
        {buildings}
      </div>
    )
  }
}

export default Buildings;
