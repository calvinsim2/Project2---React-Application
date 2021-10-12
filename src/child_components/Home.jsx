import React from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Home() {
  const detect = function (event) {
    console.log(event.target.value);
  };
  return (
    <>
      <h1>
        Welcome to DotA2 guide, explore more to find the out more about Heros
        and items!
      </h1>
      <TextField
        id="outlined-basic"
        label="Find Heros Here!"
        variant="outlined"
        onChange={detect}
      />
    </>
  );
}

export default Home;
