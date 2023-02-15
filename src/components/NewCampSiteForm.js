import React from "react";

const NewCampSiteForm = () => {
  return (
    <div id="form-wrapper">
     <form id="camp-form">

      <h2 id="submit-title">Submit Your Own</h2>

        <label for="form-imageUrl">Image url:</label>
        <input type="text" id="form-imageUrl" name="imageUrl"  />

        <label for="form-location">Site Name:</label>
        <input type="text" id="form-title" name="title"  />

        <label for="form-city">City:</label>
        <input type="text" id="form-city" name="city"  />

        <label for="form-state">State:</label>
        <input type="text" id="form-state" name="state"  />

        <label for="form-tmz">Cost:</label>
        <input type="text" id="form-cost" name="cost"  />

        <label for="form-tmz">Camping Period:</label>
        <input type="text" id="form-period" name="period"  />

        <label for="form-tmz">Water:</label>
        <input type="text" id="form-water" name="water"  />

        <label for="form-tmz">Reservations:</label>
        <input type="text" id="form-reservations" name="reservations"  />

        <label for="form-tmz">Additional Info:</label>
        <input type="text" id="form-info" name="info"  />

      <input type="submit" value="Submit"/>
    </form>
  </div>
  );
};

export default NewCampSiteForm;