import React from "react";

const NewCampSiteForm = () => {
  return (
    <div id="form-wrapper">
     <form id="camp-form">

      <h2 id="submit-title">Submit Your Own</h2>

        <label htmlFor="form-imageUrl">Image url:</label>
        <input type="text" id="form-imageUrl" name="imageUrl"  />

        <label htmlFor="form-location">Site Name:</label>
        <input type="text" id="form-title" name="title"  />

        <label htmlFor="form-city">City:</label>
        <input type="text" id="form-city" name="city"  />

        <label htmlFor="form-state">State:</label>
        <input type="text" id="form-state" name="state"  />

        <label htmlFor="form-cost">Cost:</label>
        <input type="text" id="form-cost" name="cost"  />

        <label htmlFor="form-period">Camping Period:</label>
        <input type="text" id="form-period" name="period"  />

        <label htmlFor="form-info">Additional Info:</label>
        <input type="text" id="form-info" name="info"  />

        <label htmlFor="form-water">Water:</label>
        <select id="form-water" name="water" style={{width: "50%", margin: "0 0 6px"}}>
          <option value="Available">Available</option>
          <option value="BYOW">BYOW</option>
        </select>

        <label htmlFor="form-reserve">Reservations:</label>
        <select id="form-reservations" name="reservations" style={{width: "50%", margin: "0 0 6px"}}>
          <option value="Required">Required</option>
          <option value="Not Required">Not Required</option>
        </select>

        <label htmlFor="form-fire-ban">Fire Ban:</label>
        <select id="form-fire-ban" name="fire-ban" style={{width: "50%", margin: "0 0 8px"}}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Unknown">Unknown</option>
        </select>

      <input type="submit" value="Submit"/>
    </form>
  </div>
  );
};

export default NewCampSiteForm;