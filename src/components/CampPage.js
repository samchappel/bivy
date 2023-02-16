import React, { useState } from "react";
import CampList from "./CampList";
import Search from "./Search";

function CampPage({ sites, setSites }) {

  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  function updateSearchTerm(search) {
    setSearchTerm(search);
  }

    const filteredSites = sites.filter((site) => {
    const name = site.name.toLowerCase();
    const cost = site.cost.toLowerCase();
    const state = site.state.toLowerCase();
    const city = site.city.toLowerCase();
    const search = searchTerm.toLowerCase();
    const numPriceSearch = parseInt(searchTerm);
    const isPrice = site.cost <= numPriceSearch;
    return name.includes(search) || cost.includes(search) || city.includes(search) || state.includes(search) || isPrice;
  });
  

  return (
    <main>
      <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
      <CampList sites={filteredSites} selectedState={selectedState} setSelectedState={setSelectedState} setSites={setSites} />
    </main>
  );
}

export default CampPage;