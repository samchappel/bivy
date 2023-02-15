import React, { useState, useEffect } from "react";
import NewCampSiteForm from "./NewCampSiteForm";
import CampList from "./CampList";
import Search from "./Search";
import Header from "./Header";

function CampPage() {

  const [ sites, setSites ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");

  useEffect(() => {
    fetch('http://localhost:6001/campSites')
    .then(response => response.json())
    .then(data => setSites(data))
  }, [])

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
      <Header />
      <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
      <CampList sites={filteredSites} selectedState={selectedState} setSelectedState={setSelectedState} />
    </main>
  );
}

export default CampPage;