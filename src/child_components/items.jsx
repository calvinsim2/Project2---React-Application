import React from "react";
import Items from "../data_storage/items.js";

function DisplayItems(props) {
  console.log("This is: ", Items);
  let allItems = Items.map((element, index) => {
    return (
      <li className={element.id} key={index}>
        {element.name} - {element.cost}
        <img src={element.url_image} alt={element.id} />"
      </li>
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
