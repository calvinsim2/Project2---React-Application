import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FilterItem(props) {
  const itemParam = useParams();
  const [secret, setSecret] = useState("No");
  const [side, setSide] = useState("No");
  const [cost, setCost] = useState(0);
  const [nameOfItem, setNameOfItem] = useState("");

  console.log("item param name in filter is: ", itemParam.name);
  const filterItem = props.listOfItems.filter((element) => {
    return element.localized_name === itemParam.name;
  });

  useEffect(() => {
    const findSecret = filterItem?.[0]?.secret_shop === 0 ? "No" : "Yes";
    const findSide = filterItem?.[0]?.side_shop === 0 ? "No" : "Yes";
    setSecret(findSecret);
    setSide(findSide);
    setCost(filterItem?.[0]?.cost);
    setNameOfItem(filterItem?.[0]?.localized_name);
    // lift state back to parent, for IndividualItem to use as props.
    props.setItemSecret(secret);
    props.setItemSide(side);
    props.setItemImg(filterItem?.[0]?.url_image);
    props.setItemCost(cost);
    props.setItemName(nameOfItem);
  });
  return null;
}

export default FilterItem;
