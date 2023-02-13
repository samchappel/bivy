import React from "react";

const NewCampSiteForm = () => {
  return (
    <div className="new-camp-form">
      <h2>New Site</h2>
      <form>
        <input type="text" name="name" placeholder="Location name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="cost" step="0.01" placeholder="Cost" />
        <input type="text" name="camping-period" placeholder="Camping Period" />
        <div className="fire-ban">
          <label htmlFor="fire-ban">Fire Ban: </label>
          <select name="fire-ban" id="fire-ban">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <button type="submit">Add Camp Site</button>
      </form>
    </div>
  );
};

export default NewCampSiteForm;