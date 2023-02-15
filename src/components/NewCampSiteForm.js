import React,{ useState } from "react";
import { useHistory } from "react-router-dom";


const initialSite = { city:"", state:"", name:"", cost:"", period:"", fire:true, gps:"", water:false, reservations:"", info:"", image:""}


function NewCampSiteForm({ addSite }) {
  const [ newCampSite, setNewCampSite] = useState(initialSite)
  let history = useHistory();
  
  function handleChange(e){
    setNewCampSite({...newCampSite, [e.target.name]:(e.target.value)})
  }
  
  function handleSubmit(e){
    e.preventDefault();
    addSite(newCampSite)
    history.push("/CampPage")
 }

  return (
    <div id="form-wrapper">
     <form onSubmit={handleSubmit} id="camp-form">

      <h2 id="submit-title">Submit Your Own</h2>

        <label htmlFor="form-imageUrl">Image url:</label>
        <input value={newCampSite.image} onChange={handleChange} type="text" id="form-imageUrl" name="image"  />

        <label htmlFor="form-location">Site Name:</label>
        <input value={newCampSite.name} onChange={handleChange} type="text" id="form-title" name="name"  />

        <label htmlFor="form-city">City:</label>
        <input value={newCampSite.city} onChange={handleChange} type="text" id="form-city" name="city"  />

        <label htmlFor="form-state">State:</label>
        <input value={newCampSite.state} onChange={handleChange} type="text" id="form-state" name="state"  />

        <label htmlFor="form-cost">Cost:</label>
        <input value={newCampSite.cost} onChange={handleChange} type="text" id="form-cost" name="cost"  />

        <label htmlFor="form-period">Camping Period:</label>
        <input value={newCampSite.period} onChange={handleChange} type="text" id="form-period" name="period"  />

        <label htmlFor="form-info">Additional Info:</label>
        <input value={newCampSite.info} onChange={handleChange} type="text" id="form-info" name="info"  />

        <label htmlFor="form-water">Water:</label>
        <select onChange={handleChange} id="form-water" name="water" style={{width: "50%", margin: "0 0 6px"}}>
          <option value={true}>Available</option>
          <option value={false}>BYOW</option>
        </select>

        <label htmlFor="form-reserve">Reservations:</label>
        <select onChange={handleChange} id="form-reservations" name="reservations" style={{width: "50%", margin: "0 0 6px"}}>
          <option value={true}>Required</option>
          <option value={false}>Not Required</option>
        </select>

        <label htmlFor="form-fire-ban">Fire Ban:</label>
        <select id="form-fire-ban" name="fire" style={{width: "50%", margin: "0 0 8px"}}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default NewCampSiteForm;