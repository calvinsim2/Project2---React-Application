import { useState, useEffect } from "react";
import React from "react";
import DisplayItems from "./child_components/items.jsx";
import Items from "./data_storage/items.js";
import Hero from "./child_components/hero.jsx";
import IndividualHero from "./child_components/individualhero.jsx";
import Home from "./child_components/Home.jsx";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [currentHero, setCurrentHero] = useState([]);

  useEffect(() => {
    console.log("Currently, this data is: ", currentHero);
  }, [currentHero]);

  return (
    <>
      <div className="nav">
        <div className="nav-item">
          <span className="nav-logo">
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className="nav-item">
          <Link to="/hero">Hero</Link>
        </div>
        <div className="nav-item">
          <Link to="/items">Items</Link>
        </div>
      </div>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <DisplayItems currentItem={Items} />
          </Route>
          <Route exact path="/hero">
            <Hero setCurrentHero={setCurrentHero} />
          </Route>
          <Route path="/hero/:heroname/">
            <IndividualHero currentHero={currentHero} currentItem={Items} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
