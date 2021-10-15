import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "./search.jsx";
import RandomHero from "./randomhero.jsx";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Home(props) {
  const [textInput, setTextInput] = useState(""); // register captured input
  const [number, setNumber] = useState(1); // random number for random hero
  let myNumber;

  const detect = function (event) {
    // capture what is entered by users.
    setTextInput(event.target.value);
  };

  // obtain number, to select the random hero.
  const getNumber = function () {
    let num = Math.trunc(Math.random() * 114 + 1);
    if (num === 24) {
      num -= 1;
    }
    return num;
  };

  useEffect(() => {
    myNumber = getNumber();
    setNumber(myNumber);
  }, []);

  //-----------------------------------------------------------------------------------------------
  const wordStyle = {
    color: "primary.main",
  };
  return (
    <>
      {/* pass hero details & randomized number to randomhero */}
      <RandomHero heroDetails={props.currentHero} myNumber={number} />
      <Typography variant="h2" sx={{ ...wordStyle }}>
        DotA2 mini-guide
      </Typography>
      <Typography variant="h5" sx={{ ...wordStyle, mt: 0.2 }}>
        Explore to find out about Heros and items!
      </Typography>
      <TextField
        id="outlined-basic"
        label="Find Heros Here!"
        variant="outlined"
        sx={{ bgcolor: "primary.main", borderRadius: 5 }}
        onChange={detect}
      />
      <div className="homepagehero">
        {/* pass hero details & user text input to search */}
        <Search textInput={textInput} heroDetails={props.currentHero} />
      </div>
    </>
  );
}

export default Home;
