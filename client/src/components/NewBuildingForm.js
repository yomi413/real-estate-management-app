import React from "react";

const NewBuildingForm = props => (
  <div>
    <form onSubmit={props.onSubmit}>
      <h1>New Building Submission</h1>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Street Address, City, State Zip Code"
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
          onChange={props.onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Building
      </button>
    </form>
  </div>
);

export default NewBuildingForm;
