import React from "react";
import { Link } from "react-router-dom";

function DisplayItems(props) {
  console.log("This is: ", props.currentItem);
  let allItems = props.currentItem.map((element, index) => {
    return (
      <Link to={`/items/${element.localized_name}`}>
        <li className={element.id} key={index}>
          {element.localized_name} - {element.cost}
          <img src={element.url_image} alt={element.id} />"
        </li>
      </Link>
    );
  });

  return (
    <>
      <h2>Items here!</h2>
      <div>{allItems}</div>
    </>
  );
}

export default DisplayItems;
