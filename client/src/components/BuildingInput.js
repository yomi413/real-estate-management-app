import React from "react";

const BuildingInput = props => (
  <div>
    <h1>{props.heading}</h1>
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Street Address, City, State Zip Code"
          value={props.address}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Building Description"
          value={props.description}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Building Photo</label>
        <input
          type="text"
          className="form-control"
          name="image"
          placeholder="Building Photo"
          value={props.image}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="numberOfApartments">Number of Apartments</label>
        <input
          type="number"
          className="form-control"
          name="numberOfApartments"
          placeholder="Number of Apartments"
          value={props.numberOfApartments}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="deed">Deed</label>
        <input
          type="text"
          className="form-control"
          name="deed"
          placeholder="Deed (from Public Records)"
          value={props.deed}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mortgage1">Mortgage 1</label>
        <input
          type="text"
          className="form-control"
          name="mortgage1"
          placeholder="Mortgage (from Public Record)"
          value={props.mortgage1}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mortgage2">
          Mortgage 2 - <i>Optional</i>
        </label>
        <input
          type="text"
          className="form-control"
          name="mortgage2"
          placeholder="Mortgage (from Public Record)"
          value={props.mortgage2}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="satisfactionOfMortgage1">
          Satisfaction of Mortgage 1
        </label>
        <input
          type="text"
          className="form-control"
          name="satisfactionOfMortgage1"
          placeholder="Satisfaction of Mortgage or Release (from Public Record)"
          value={props.satisfactionOfMortgage1}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="satisfactionOfMortgage2">
          Satisfaction of Mortgage 2 - <i>Optional</i>
        </label>
        <input
          type="text"
          className="form-control"
          name="satisfactionOfMortgage2"
          placeholder="Satisfaction of Mortgage or Release (from Public Record)"
          value={props.satisfactionOfMortgage2}
          onChange={props.onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="certificateOfOccupancy">Certificate of Occupancy</label>
        <input
          type="text"
          className="form-control"
          name="certificateOfOccupancy"
          placeholder="Certificate of Occupancy"
          value={props.certificateOfOccupancy}
          onChange={props.onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default BuildingInput;
