import React, { useState, useEffect } from "react";
import NewCampSiteForm from "./NewCampSiteForm";
import CampList from "./CampList";
// import Search from "./Search";

function CampPage() {

  const [ sites, setSites ] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/campSites')
    .then(response => response.json())
    .then(data => setSites(data))
  }, [])

  return (
    <main>
      <NewCampSiteForm />
      <CampList sites={sites} />
    </main>
  );
}

export default CampPage;