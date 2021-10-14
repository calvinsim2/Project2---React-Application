import React from "react";

//---------- Single Item page, displays all the information regarding the item --------------------------

function IndividualItem(props) {
  return (
    <div>
      <div className="itemspec">
        <img src={props.itemImg} />

        <h3>{props.itemName}</h3>
        <p>Total Gold to build: {props.itemCost}</p>
        <p>Found in Secret Shop: {props.itemSecret}</p>
        <p>Found in Side Shop: {props.itemSide}</p>
      </div>
    </div>
  );
}

export default IndividualItem;
