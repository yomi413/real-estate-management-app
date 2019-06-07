import React, { Component } from 'react';

class BuildingContainer extends Component {
  render() {
    return (
      <form>
        <h1>New Building</h1>
        <div>
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" placeholder="Address" />
        </div>
        <br></br>

        <div>
          <label htmlFor="description">Description: </label>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <br></br>

        <div>
          <label htmlFor="numberOfApartments">Number of Apartments: </label>
          <input type="text" name="numberOfApartments" placeholder="# of Apartments" />
        </div>
        <br></br>
        
        <input type="button" value="Add Documents" />
      </form>
    )
  }
}

export default BuildingContainer;
