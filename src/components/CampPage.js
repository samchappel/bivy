import React from "react";
import NewCampSiteForm from "./NewCampSiteForm";
import CampList from "./CampList";
import Search from "./Search";

function CampPage() {
  return (
    <main>
      <NewCampSiteForm />
      <Search />
      <CampList />
    </main>
  );
}

export default CampPage;