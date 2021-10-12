import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

//------------- map hero's recommended item, and provide routing to the selected item.

function RecommendedItem(props) {
  // map out start item
  const start = props.filterStart.map((element, index) => {
    return (
      <Link to={`/items/${element.localized_name}/`}>
        <div className="start-item" key={index}>
          <img src={element.url_image} alt={element.localized_name} />
          <p>{element.localized_name}</p>
        </div>
      </Link>
    );
  });
  // map out early game items
  const early = props.filterEarly.map((element, index) => {
    return (
      <Link to={`/items/${element.localized_name}/`}>
        <div className="early-item" key={index}>
          <img src={element.url_image} alt={element.localized_name} />
          <p>{element.localized_name}</p>
        </div>
      </Link>
    );
  });
  // map out middle game items
  const middle = props.filterMid.map((element, index) => {
    return (
      <Link to={`/items/${element.localized_name}/`}>
        <div className="middle-item" key={index}>
          <img src={element.url_image} alt={element.localized_name} />
          <p>{element.localized_name}</p>
        </div>
      </Link>
    );
  });
  // map out late game items
  const late = props.filterLate.map((element, index) => {
    return (
      <Link to={`/items/${element.localized_name}/`}>
        <div className="late-item" key={index}>
          <img src={element.url_image} alt={element.localized_name} />
          <p>{element.localized_name}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="recommend-item">
      <div className="start">
        <h3>Recommended Start Game Items:</h3>
        {start}
      </div>
      <div className="early">
        <h3>Recommended Early Game Items:</h3>
        {early}
      </div>
      <div className="middle">
        <h3>Recommended Mid Game Items:</h3>
        {middle}
      </div>
      <div className="late">
        <h3>Recommended Late Game Items:</h3>
        {late}
      </div>
    </div>
  );
}

export default RecommendedItem;
