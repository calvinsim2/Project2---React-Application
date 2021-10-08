import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function IndividualHero(props) {
  const [currentRole, setCurrentRole] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [itemStatus, setItemStatus] = useState("Idle");
  const params = useParams();
  let startGameItems = [];
  let earlyGameItems = [];
  let midGameItems = [];
  let lateGameItems = [];

  const filterHero = props.currentHero.filter(
    (element) => element.localized_name === params.heroname
  );
  console.log("Filtered array is: ", filterHero);

  useEffect(() => {
    const newRoles = filterHero?.[0]?.roles.join(" , ");
    setCurrentRole(newRoles);
  }, []);

  const apiItems = ` https://api.opendota.com/api/heroes/${filterHero?.[0]?.id}/itemPopularity `;

  useEffect(() => {
    const listItems = async () => {
      setItemStatus("pending");
      try {
        const response = await fetch(apiItems);
        const resdata = await response.json();
        setItemStatus("resolved");
        console.log("Current Stats: ", itemStatus);
        setCurrentItem(resdata);
      } catch (error) {
        setItemStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listItems();
  }, []);

  if (itemStatus === "resolved") {
    for (const item in currentItem.start_game_items) {
      const itemNum = Number(item);
      startGameItems.push(itemNum);
    }
    for (const item in currentItem.early_game_items) {
      const itemNum = Number(item);
      earlyGameItems.push(itemNum);
    }
    for (const item in currentItem.mid_game_items) {
      const itemNum = Number(item);
      midGameItems.push(itemNum);
    }
    for (const item in currentItem.late_game_items) {
      const itemNum = Number(item);
      lateGameItems.push(itemNum);
    }

    console.log("Start game: ", startGameItems);
    console.log("Early game: ", earlyGameItems);
    console.log("Mid game: ", midGameItems);
    console.log("Late game: ", lateGameItems);
  } else {
    console.log("NO ITEM DETECTED!");
  }

  //---------------------------------------------- map items ------------------------------------------------------

  const filterStartGameItems = props.currentItem.filter((element) => {
    return startGameItems.indexOf(element.id) > 0;
  });
  console.log("Filtered start game item is: ", filterStartGameItems);

  const filterEarlyGameItems = props.currentItem.filter((element) => {
    return earlyGameItems.indexOf(element.id) > 0;
  });
  console.log("Filtered early game item is: ", filterEarlyGameItems);

  const filterMidGameItems = props.currentItem.filter((element) => {
    return midGameItems.indexOf(element.id) > 0;
  });
  console.log("Filtered Mid game item is: ", filterMidGameItems);

  const filterLateGameItems = props.currentItem.filter((element) => {
    return lateGameItems.indexOf(element.id) > 0;
  });
  console.log("Filtered Late game item is: ", filterLateGameItems);

  return (
    <>
      <div>
        <img src={`https://api.opendota.com${filterHero?.[0]?.img}`} alt="" />
      </div>
      <div>
        <img src={`https://api.opendota.com${filterHero?.[0]?.icon}`} alt="" />
        <h2>{params.heroname}</h2>
        <h3>[ {currentRole} ]</h3>
      </div>
      <div>
        <p>Attack Type: {filterHero?.[0]?.attack_type}</p>
        <p>Attack Range: {filterHero?.[0]?.attack_range}</p>
        <p>Attack Rate: {filterHero?.[0]?.attack_rate}</p>
        <p>Movement Speed: {filterHero?.[0]?.move_speed}</p>
      </div>
      <div>
        <p>Primary Attribute: {filterHero?.[0]?.primary_attr}</p>
        <p>Base Str: {filterHero?.[0]?.base_str}</p>
        <p>Base Agi: {filterHero?.[0]?.base_agi}</p>
        <p>Base Int: {filterHero?.[0]?.base_int}</p>
      </div>
    </>
  );
}

export default IndividualHero;
