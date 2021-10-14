import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "../App.css";

function RandomHero(props) {
  const wordStyle = {
    color: "success.main",
    fontSize: 20,
    fontWeight: "bold",
  };

  // obtain data for that randomized hero
  const getMyHero = props.heroDetails.filter((element) => {
    return element.id === props.myNumber;
  });

  // map data for that randomized hero!
  const randHero = getMyHero.map((element, index) => {
    return (
      <Tooltip title={`${element.localized_name}`} followCursor={true}>
        <Link to={`/hero/${element.localized_name}`}>
          <div
            style={{
              backgroundImage: `url(https://api.opendota.com${element.img})`,

              backgroundSize: "cover",
              width: 256,
              height: 144,
              borderRadius: 15,
              margin: 10,
            }}
            className="hero"
            key={index}
          ></div>
        </Link>
      </Tooltip>
    );
  });

  return (
    <div className="randomhero">
      <Typography variant="p" sx={{ ...wordStyle }}>
        Check out THIS HERO!
      </Typography>
      <div>{randHero}</div>
    </div>
  );
}

export default RandomHero;
