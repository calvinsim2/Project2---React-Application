import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//---------- Single Item page, displays all the information regarding the item --------------------------

function IndividualItem(props) {
  const itemParam = useParams();
  const [secret, setSecret] = useState("No");
  const [side, setSide] = useState("No");

  const filterItem = props.currentItem.filter(
    (element) => element.localized_name === itemParam.name
  );
  console.log("Filtered Array Item NAME  is: ", filterItem);

  useEffect(() => {
    const findSecret = filterItem?.[0]?.secret_shop === 0 ? "No" : "Yes";
    const findSide = filterItem?.[0]?.side_shop === 0 ? "No" : "Yes";
    setSecret(findSecret);
    setSide(findSide);
  });

  return (
    <div>
      <img src={filterItem?.[0]?.url_image} />
      <h3>{filterItem?.[0]?.localized_name}</h3>
      <p>Total Gold to build: {filterItem?.[0]?.cost}</p>
      <p>Found in Secret Shop: {secret}</p>
      <p>Found in Side Shop: {side}</p>
    </div>
  );
}

export default IndividualItem;
