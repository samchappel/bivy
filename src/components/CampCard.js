import React from "react";

function CampCard() {
  return (
    <li className="card">
      <img src={"https://cdn.pixabay.com/photo/2021/10/09/00/15/landscape-6692712__340.jpg"} alt={"camp name"} />
      <h4>Site Name</h4>
      <p>Cost: </p>
      <p>Camping Period: </p>
      {true ? (
        <p className="fire-logo">In Stock</p>
      ) : (
        <p>Out of Stock</p>
      )}
    </li>
  );
}

export default CampCard;