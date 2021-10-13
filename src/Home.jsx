import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./search.jsx";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Home(props) {
  const [textInput, setTextInput] = useState("");
  const [heroDetails, setHeroDetails] = useState(props.currentHero);
  const [itemDetails, setItemDetails] = useState(props.currentItem);
  const detect = function (event) {
    // capture what is entered by users.
    setTextInput(event.target.value);
  };

  useEffect(() => {
    setHeroDetails(props.currentHero);
  }, [textInput]);

  const wordStyle = {
    mt: 25,
    color: "error.main",
  };
  return (
    <>
      <Typography variant="h2" sx={{ ...wordStyle }}>
        Welcome to DotA2 guide
      </Typography>
      <Typography variant="h5" sx={{ ...wordStyle, mt: 0.2 }}>
        Explore to find the out about Heros and items!
      </Typography>
      <TextField
        id="outlined-basic"
        label="Find Heros Here!"
        variant="outlined"
        onChange={detect}
      />
      <div className="homepagehero">
        <Search
          textInput={textInput}
          heroDetails={heroDetails}
          itemDetails={itemDetails}
        />
      </div>
    </>
  );
}

export default Home;
