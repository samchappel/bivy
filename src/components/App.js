import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./Header";
import CampPage from "./CampPage";
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"


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
        <Route path="/sites">
            <CampPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;