import React from 'react'

function CampDetails({ water, gps, reservations, info }) {

  const reserve = reservations ? 'Required' : 'Not Required'

  return (
    <div className="center">
      <p>{water ? 'Water: Available' : 'Water: BYOW'}</p>
      <p>GPS Coordinates: {gps}</p>
      <p>
        Reservations: {reserve}
      </p>
      <p>Additional Info: {info}</p>
    </div>
  )
}

export default CampDetails;