import { useState, useEffect } from "react";
import React from "react";
import DisplayItems from "./items_related/items.jsx";
import Items from "./data_storage/items.js";
import IndividualItem from "./items_related/individualitem.jsx";
import FilterItem from "./items_related/filteritem.jsx";
import Hero from "./hero_related/hero.jsx";
import HeroDetails from "./hero_related/herodetails.jsx";
import Home from "./homerelated/Home.jsx";

import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

// App.jsx ---> fetch API for hero details & obtain item details
// Home.jsx ===> user's input in textbox to search for desired hero, randomized hero of the day shown.
// Display overall hero and item list (hero.jsx / items.jsx)
// Single hero details (individualhero.jsx -----> individualherostats.jsx)
// Single hero recommended items display -----> recommendeditem.jsx
// Single item details (individualitem.jsx)

function App() {
  const [hero, setHero] = useState([]);
  const [item, setItem] = useState([]);

  const [status, setStatus] = useState("idle");
  // states for lifting states and prop passing for Individual ITEMS.
  const [itemImg, setItemImg] = useState("");
  const [itemSecret, setItemSecret] = useState("");
  const [itemSide, setItemSide] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [itemName, setItemName] = useState("");

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
            <Home currentHero={hero} status={status} />
          </Route>
          <Route exact path="/items">
            <DisplayItems currentItem={item} />
          </Route>
          <Route path="/items/:name/">
            <FilterItem
              listOfItems={item}
              setItemImg={setItemImg}
              setItemSecret={setItemSecret}
              setItemSide={setItemSide}
              setItemCost={setItemCost}
              setItemName={setItemName}
            />
            <IndividualItem
              itemImg={itemImg}
              itemSecret={itemSecret}
              itemSide={itemSide}
              itemCost={itemCost}
              itemName={itemName}
            />
          </Route>
          <Route exact path="/hero">
            <Hero hero={hero} />
          </Route>
          <Route path="/hero/:heroname/">
            <HeroDetails currentHero={hero} currentItem={item} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
