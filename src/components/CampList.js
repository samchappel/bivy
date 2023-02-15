import React from "react";
import CampCard from "./CampCard";

function CampList({ sites, selectedState, setSelectedState, setSites }) {

  const filteredSites = selectedState === 'All States'
  ? sites
  : sites.filter(site => site.state === selectedState);

  const campCards = filteredSites.map((site) => (<CampCard key={site.id} site={site} setSites={setSites} />))


  
  return (
    <section>

      <div className="filter">
        <button onClick={() => setSelectedState('All States')}>All States</button>
        <button onClick={() => setSelectedState('Washington')}>Washington</button>
        <button onClick={() => setSelectedState('Oregon')}>Oregon</button>
        <button onClick={() => setSelectedState('California')}>California</button>
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