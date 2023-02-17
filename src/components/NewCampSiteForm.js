import React,{ useState } from "react";
import { useHistory } from "react-router-dom";


const initialSite = { city:"", 
state:"", 
name:"", 
cost:"", 
period:"", 
fire:false, 
gps:"", 
water:false, 
reservations:false, 
info:"", 
image:"", 
initialIsFavorite:false
};

function NewCampSiteForm({ sites, setSites, addSite }) {
  const [ newCampSite, setNewCampSite] = useState(initialSite)
  let history = useHistory();
  
  // function handleChange(e){
  //   setNewCampSite({...newCampSite, [e.target.name]:(e.target.value)})
  // }

  function handleChange(e){
    const { name, value } = e.target;
    const updatedValue = name === 'water' || name === 'reservations' || name === 'fire' ? value === 'true' : value;
    setNewCampSite({ ...newCampSite, [name]: updatedValue });
  }


  function handleSubmit(e){
    e.preventDefault();
    const city = e.target[2].value;
    const state = e.target[3].value;
    const cityJoin = city.split(' ').join('%20');
    const stateJoin = state.split(' ').join('%20');
    const finalJoin = `${cityJoin}%20${stateJoin}`;
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${finalJoin}&key=AIzaSyAB5eyiNK9m0yvGgtFxazs0BwXNd9-u_6w`)
    .then(response => response.json())
    .then((data) => {
        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        const updatedSite = {...newCampSite, gps: `${latitude}, ${longitude}`};
        fetch('http://localhost:6001/campSites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedSite)
        })
        .then(response => {
          if (response.ok) {
            history.push("/campsites");
          } else {
            console.log('Error: ', response.statusText);
          }
          addSite(updatedSite);
        })
        .catch(error => {
          console.log('Error: ', error);
        });
    })
    .catch(error => {
      console.log('Error: ', error);
    });
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
        <select onChange={handleChange} id="form-fire-ban" name="fire" style={{width: "50%", margin: "0 0 8px"}}>
          <option value={false}>Yes</option>
          <option value={true}>No</option>
        </select>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default NewCampSiteForm;