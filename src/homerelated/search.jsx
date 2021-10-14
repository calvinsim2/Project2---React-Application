import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";

function SearchBackup(props) {
  //---------------------- Depending on keyboard input, matched alphabets with hero's name will show!----------------
  const searchHero = props.heroDetails.filter((element) => {
    if (props.textInput === "") {
      return element.localized_name.includes("!@##");
    } else {
      return element.localized_name.includes(props.textInput);
    }
  });

  const showHero = searchHero.map((element, index) => {
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

  return <>{showHero}</>;
}

export default SearchBackup;
