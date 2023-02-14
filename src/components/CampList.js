import React from "react";
import CampCard from "./CampCard";

function CampList({ sites }) {

  const campCards = sites.map((site) => (<CampCard key={site.id} site={site} />))
  
  return (
    <main>
      <ul className="cards">
        {campCards}
      </ul>
    </main>
  );
}

export default CampList;