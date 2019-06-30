import React, { Component } from 'react';

class Buildings extends Component {
  state = {
    buildings: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/buildings.json')
    .then(response => response.json())
    .then(data => {
      // debugger
      this.setState({
        buildings: data.buildings
      })
    })
    .catch(error => {
      debugger
    })
  }

  render() {

    const buildingsList = this.state.buildings.map(building => {
      return <li>{building.address}</li>
    })

    return (
      <div>
        <h1>Buildings</h1>
        {buildingsList}
      </div>
    )
    // const buildingsList = [
    //   "2942 Baisley Avenue, Bronx, NY",
    //   "1373 Ellison Avenue, Bronx, NY",
    //   "2940 Baisley Avenue, Bronx, NY",
    // ]
    //
    // const buildings = buildingsList.map((building, index) => <li key={index}>{building}</li>)
    //
    // return (
    //   <div>
    //     <h1>All Buildings</h1>
    //     {buildings}
    //   </div>
    // )
  }
}

export default Buildings;
