import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import CampPage from "./CampPage";
import CampingEthics from "./CampingEthics";
import Nav from "./Nav";
import NewCampSiteForm from "./NewCampSiteForm";
import Favorites from "./Favorites";

function App() {
  const [page, setPage] = useState("/")
  const [ sites, setSites ] = useState([]);
  const [favoriteSites, setFavoriteSites] = useState([]);

  function removeSite(siteId) {
    const updatedFavoriteSites = favoriteSites.filter((site) => site.id !== siteId);
    setFavoriteSites(updatedFavoriteSites);
  }

  function addSite(newSite){
    const newSites = [newSite, ...sites]
    setSites(newSites)
  }

  useEffect(() => {
    fetch('http://localhost:6001/campSites')
    .then(response => response.json())
    .then(data => setSites(data))
  }, [])

  return (
    <div>
    <Header />
      <Nav onChangePage={setPage} />
      <Switch>
        <Route  path="/camping-ethics">
            <CampingEthics />
        </Route>
        <Route  path="/favorites">
            <Favorites sites={sites} removeSite={removeSite} favoriteSites={favoriteSites} setFavoriteSites={setFavoriteSites} />
        </Route>
        <Route path="/submit">
            <NewCampSiteForm  addSite={addSite} sites={sites} setSites={setSites} />
        </Route>
        <Route path="/">
            <CampPage sites={sites} setSites={setSites} addSite={addSite} removeSite={removeSite} favoriteSites={favoriteSites} setFavoriteSites={setFavoriteSites} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;