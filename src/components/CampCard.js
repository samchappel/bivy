import React, { useState } from "react";
import CampDetails from "./CampDetails";

function CampCard({ site }) {
  const { id, name, city, state, cost, period, fire, gps, water, reservations, image, info } = site

  const [showDetails, setShowDetails] = useState(false);

  const [ isFavorite, setIsFavorite ] = useState(false)

  function toggleFavorite() {
    setIsFavorite((currentState) => !currentState)
  }

  function handleDetailsClick() {
    console.log('clicked!')
    setShowDetails((currentState) => !currentState);
  }

    const fireBan = fire ? <span className="fire">🔥</span> : <span className="fire-ban">😎</span>

    const favorite = isFavorite ? (
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
        {isFavorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <h3 className="center">{name}</h3>
        <p className="center">{city}, {state}</p>
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