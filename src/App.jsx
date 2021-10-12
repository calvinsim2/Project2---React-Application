import { useState, useEffect } from "react";
import React from "react";
import DisplayItems from "./child_components/items.jsx";
import Items from "./data_storage/items.js";
import IndividualItem from "./child_components/individualitem.jsx";
import Hero from "./child_components/hero.jsx";
import IndividualHero from "./child_components/individualhero.jsx";
import Home from "./child_components/Home.jsx";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

// App.jsx ---> fetch API for hero details & obtain item details
// Display overall hero and item list (hero.jsx / items.jsx)
// Single hero details (individualhero.jsx -----> individualherostats.jsx)
// Single hero recommended items display -----> recommendeditem.jsx
// Single item details (individualitem.jsx)

function App() {
  const [hero, setHero] = useState([]);
  const [item, setItem] = useState([]);
  const [status, setStatus] = useState("idle");

  // fetch initial list of heros API
  const api = `https://api.opendota.com/api/heroStats`;

  useEffect(() => {
    const listHero = async () => {
      setStatus("pending");
      try {
        const response = await fetch(api);
        const resdata = await response.json();
        setStatus("resolved");
        console.log("Current Stats: ", status);
        setHero(resdata);
        setItem(Items);
      } catch (error) {
        setStatus("Error");
        console.log("No Data Fetched!");
      }
    };
    listHero();
  }, []);
  let heroList;

  // map all hero out, push it to hero.jsx.
  if (status === "resolved") {
    heroList = hero.map((element, index) => {
      return (
        <Link to={`/hero/${element.localized_name}`}>
          <div className="eachhero" key={index}>
            <h2>{element.localized_name}</h2>
            <img src={`https://api.opendota.com${element.img}`} alt="" />
          </div>
        </Link>
      );
    });
  } else {
    console.log("Can't Map!");
  }

  return (
    <>
      <div className="nav">
        <div className="nav-item">
          <Link to="/">Home</Link>
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
          <Route path="/items/:name/">
            <IndividualItem currentItem={Items} />
          </Route>
          <Route exact path="/hero">
            <Hero heroList={heroList} />
          </Route>
          <Route path="/hero/:heroname/">
            <IndividualHero currentHero={hero} currentItem={Items} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
