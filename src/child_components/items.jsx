import React from "react";

function DisplayItems(props) {
  console.log("This is: ", props.currentItem);
  let allItems = props.currentItem.map((element, index) => {
    return (
      <li className={element.id} key={index}>
        {element.localized_name} - {element.cost}
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
