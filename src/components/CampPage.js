import React, { useState, useEffect } from "react";
import NewCampSiteForm from "./NewCampSiteForm";
import CampList from "./CampList";
import Search from "./Search";

function CampPage() {

  const [ sites, setSites ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      <NewCampSiteForm />
      <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
      <CampList sites={filteredSites} />
    </main>
  );
}

export default CampPage;