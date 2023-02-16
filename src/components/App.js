import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import CampPage from "./CampPage";
import About from "./About";
import Nav from "./Nav";
import NewCampSiteForm from "./NewCampSiteForm";
import Favorites from "./Favorites";

function App() {
  const [page, setPage] = useState("/")
  const [ sites, setSites ] = useState([]);

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
        <Route  path="/about">
            <About />
        </Route>
        <Route  path="/favorites">
            <Favorites sites={sites} />
        </Route>
        <Route path="/submit">
            <NewCampSiteForm  addSite={addSite} sites={sites} setSites={setSites} />
        </Route>
        <Route path="/">
            <CampPage sites={sites} setSites={setSites} addSite={addSite}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;