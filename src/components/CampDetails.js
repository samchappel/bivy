import React from 'react'

function CampDetails({ water, gps, reservations, info }) {
  return (
    <div className="center">
      <strong>{water ? 'Water: Available' : 'Water: BYOW'}</strong>
      <p>GPS Coordinates: <strong>{gps}</strong></p>
      <p>
        Reservations: <strong>{reservations ? 'Needed' : 'Not Needed'}</strong>
      </p>
      <p>Additional Info:{info}</p>
    </div>
  )
}

export default CampDetails;