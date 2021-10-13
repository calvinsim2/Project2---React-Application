import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";

const style = {
  backgroundSize: "cover",
  width: 100,
  height: 80,
  borderRadius: 5,
  margin: 10,
};

//------------- map hero's recommended item, and provide routing to the selected item.

function RecommendedItem(props) {
  // map out start item
  const start = props.filterStart.map((element, index) => {
    return (
      <Tooltip title={`${element.localized_name} `} followCursor="true">
        <Link to={`/items/${element.localized_name}/`}>
          <div
            style={{ ...style, backgroundImage: `url(${element.url_image})` }}
            className="start-item"
            key={index}
          ></div>
        </Link>
      </Tooltip>
    );
  });
  // map out early game items
  const early = props.filterEarly.map((element, index) => {
    return (
      <Tooltip title={`${element.localized_name} `} followCursor="true">
        <Link to={`/items/${element.localized_name}/`}>
          <div
            style={{ ...style, backgroundImage: `url(${element.url_image})` }}
            className="early-item"
            key={index}
          ></div>
        </Link>
      </Tooltip>
    );
  });
  // map out middle game items
  const middle = props.filterMid.map((element, index) => {
    return (
      <Tooltip title={`${element.localized_name} `} followCursor="true">
        <Link to={`/items/${element.localized_name}/`}>
          <div
            style={{ ...style, backgroundImage: `url(${element.url_image})` }}
            className="middle-item"
            key={index}
          ></div>
        </Link>
      </Tooltip>
    );
  });
  // map out late game items
  const late = props.filterLate.map((element, index) => {
    return (
      <Tooltip title={`${element.localized_name} `} followCursor="true">
        <Link to={`/items/${element.localized_name}/`}>
          <div
            style={{ ...style, backgroundImage: `url(${element.url_image})` }}
            className="late-item"
            key={index}
          ></div>
        </Link>
      </Tooltip>
    );
  });

  return (
    <div className="recommend-item">
      <div className="start">
        <div className="startheader">
          <h3>Recommended Start Game Items:</h3>
        </div>
        <div className="startitem">{start}</div>
      </div>
      <div className="early">
        <div className="earlyheader">
          <h3>Recommended Early Game Items:</h3>
        </div>
        <div className="earlyitem">{early}</div>
      </div>
      <div className="middle">
        <div className="middleheader">
          <h3>Recommended Mid Game Items:</h3>
        </div>
        <div className="middleitem">{middle}</div>
      </div>
      <div className="late">
        <div className="lateheader">
          <h3>Recommended Late Game Items:</h3>
        </div>
        <div className="lateitem">{late}</div>
      </div>
    </div>
  );
}

export default RecommendedItem;
