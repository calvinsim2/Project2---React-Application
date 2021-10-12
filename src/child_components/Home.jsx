import React from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <h1>
        Welcome to DotA2 guide, explore more to find the out more about Heros
        and items!
      </h1>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </>
  );
}

export default Home;
