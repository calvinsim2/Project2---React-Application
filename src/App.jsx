import { useState, useEffect } from "react";
import React from "react";
import DisplayItems from "./child_components/items.jsx";
import Items from "./data_storage/items.js";
import IndividualItem from "./child_components/individualitem.jsx";
import Hero from "./child_components/hero.jsx";
import HeroLore from "./data_storage/herolore.js";
import IndividualHero from "./child_components/individualhero.jsx";
import Home from "./child_components/Home.jsx";
import { Route, Link, Switch } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "./App.css";

function App() {
  const [hero, setHero] = useState([]);
  const [item, setItem] = useState([]);
  const [status, setStatus] = useState("idle");

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

  if (status === "resolved") {
    console.log("THIS IS: ", hero);
    console.log("and your ITEMS IS: ", item);
    heroList = hero.map((element, index) => {
      return (
        <Link to={`/hero/${element.localized_name}`}>
          <div key={index}>
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
          <Route path="/items/:name/">
            <IndividualItem currentItem={Items} />
          </Route>
          <Route exact path="/hero">
            <Hero heroList={heroList} />
          </Route>
          <Route path="/hero/:heroname/">
            <IndividualHero
              currentHero={hero}
              currentItem={Items}
              HeroLore={HeroLore}
            />
          </Route>
        </Switch>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </>
  );
}

export default App;
