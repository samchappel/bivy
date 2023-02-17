import React, { useState } from "react";
import CampDetails from "./CampDetails";

function CampCard({ site, setSites, removeSite,  favoriteSites, setFavoriteSites }) {
  const { id, name, city, state, cost, period, fire, gps, water, reservations, image, info, initialIsFavorite } = site;

  const [showDetails, setShowDetails] = useState(false);

  const [ isFavorite, setIsFavorite ] = useState(initialIsFavorite);

  function toggleFavorite() {
    const updatedIsFavorite = !isFavorite;
    
    fetch(`http://localhost:6001/campSites/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        initialIsFavorite: updatedIsFavorite,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to update favorite status');
      })
      .then((updatedSite) => {
        setIsFavorite(updatedIsFavorite);
        setSites((currentSites) =>
          currentSites.map((site) =>
            site.id === updatedSite.id ? updatedSite : site
          )
        );
        if (!updatedIsFavorite) {
          setFavoriteSites((currentFavorites) =>
            currentFavorites.filter((favorite) => favorite.id !== updatedSite.id)
          );
        }
      })
      .catch((error) => {
        console.log('Error updating favorite status', error);
      });
  }

  function handleDetailsClick() {
    setShowDetails((currentState) => !currentState);
  }

    const fireBan = fire ? <span className="fire">🔥</span> : <img className="fire-ban" src="https://cdn1.iconfinder.com/data/icons/prohibition-3/64/no_fire_flame_prohibition_forbidden_ban_stop-512.png" alt="fire-ban"/>

    const favorite = initialIsFavorite ? (
      <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
    ) : (
      <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
    )

    const displayCost = typeof cost === "string" && cost === "Free" ? "Free" : `$${cost}.00`;


  return (
    <li className="card">
      <div className="image">
        {fireBan}
        <img src={image} alt={name} onClick={handleDetailsClick}/>
      </div>
      <div className="details">
        {favorite}
        <h2 className="center">{name}</h2>
        <h3 className="center">{city}, {state}</h3>
        <br />
        <p className="center">
        Cost: {displayCost}
        </p>
        <p className="center">Camping Period: {period}</p>
        {showDetails && <CampDetails 
          gps={gps}
          water={water}
          reservations={reservations}
          info={info}
        /> }
      </div>
    </li>
  );
}

export default CampCard;