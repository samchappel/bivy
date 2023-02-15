import React from "react";
import CampCard from "./CampCard";

function CampList({ sites }) {

  const campCards = sites.map((site) => (<CampCard key={site.id} site={site} />))
  
  return (
    <section>
      <h2>Camp Sites</h2>

      <div className="filter">
        <button>All States</button>
        <button>Washington</button>
        <button>Oregon</button>
        <button>California</button>
      </div>
      {/* <div className="searchbar">
        <label htmlFor="search">Search Camp Sites:</label>
        <input type="text" placeholder="Search..." />
      </div> */}

      <ul className="cards">{campCards}</ul>
    </section>
    // <main>
    //   <ul className="cards">
    //     {campCards}
    //   </ul>
    // </main>
  );
}

export default CampList;