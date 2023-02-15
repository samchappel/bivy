import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import CampPage from "./CampPage";
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import NewCampSiteForm from "./NewCampSiteForm";


// function App() {              //I just commented out this code to add in the new code- we can add this back in
//   return (
//     <div className="app">
//       <Header />
//       <CampPage />
//     </div>
//   );
// }

function App() {
  const [page, setPage] = useState("/")

  return (
    <div>
      <Nav onChangePage={setPage} />
      <Switch>
        <Route  path="/about">
            <About />
        </Route>
        <Route path="/submit">
            <NewCampSiteForm />
        </Route>
        <Route path="/">
            <CampPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;