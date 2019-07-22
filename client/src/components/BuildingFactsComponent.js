import React from "react";

const BuildingFactsComponent = props => (
  <div>
    <ul>
      <li>
        <h6>Address</h6>
        {props.address}
      </li>

      <li>
        <h6>Building Description</h6>
        {props.description}
      </li>

      <li>
        <h6>Number of Apartments</h6>
        {props.numberOfApartments}
      </li>
    </ul>
  </div>
);

export default BuildingFactsComponent;
