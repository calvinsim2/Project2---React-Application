import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import IndividualHeroStats from "./individualherostats.jsx";
import RecommendedItem from "./recommendeditem.jsx";

function IndividualHero(props) {
  const [currentItem, setCurrentItem] = useState("");
  const [itemStatus, setItemStatus] = useState("Idle");
  const [currentLore, setCurrentLore] = useState(props.HeroLore);
  const [startGameItem, setStartGameItem] = useState([]);
  const [earlyGameItem, setEarlyGameItem] = useState([]);
  const [midGameItem, setMidGameItem] = useState([]);
  const [lateGameItem, setLateGameItem] = useState([]);

  const params = useParams();
  let itemStartGameArray = [];
  let itemEarlyGameArray = [];
  let itemMidGameArray = [];
  let itemLateGameArray = [];

  const filterHero = props.currentHero.filter(
    (element) => element.localized_name === params.heroname
  );
  console.log("Filtered array is: ", filterHero);

  //--------------------------------- request recommended item from apidota---------------------------------------

  const apiItems = ` https://api.opendota.com/api/heroes/${filterHero?.[0]?.id}/itemPopularity `;

  useEffect(() => {
    const listItems = async () => {
      setItemStatus("pending");
      try {
        const response = await fetch(apiItems);
        const resdata = await response.json();

        console.log("Current Stats: ", itemStatus);
        setCurrentItem(resdata);
        setItemStatus("resolved");
      } catch (error) {
        setItemStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listItems();
  }, []);

  //---------------------------------------------- map items ------------------------------------------------------

  useEffect(() => {
    // fetch call returns object in objects.
    // use for ... in.. to shift start game, early game, mid game and late game items into different arrays.

    if (itemStatus === "resolved") {
      for (const item in currentItem.start_game_items) {
        const itemNum = Number(item);
        itemStartGameArray.push(itemNum);
      }
      for (const item in currentItem.early_game_items) {
        const itemNum = Number(item);
        itemEarlyGameArray.push(itemNum);
      }
      for (const item in currentItem.mid_game_items) {
        const itemNum = Number(item);
        itemMidGameArray.push(itemNum);
      }
      for (const item in currentItem.late_game_items) {
        const itemNum = Number(item);
        itemLateGameArray.push(itemNum);
      }

      // with each value shifted into different arrays, compare it with main list of items
      // return filtered arrays which contain data of items.
      const filterStartGameItems = props.currentItem.filter((element) => {
        return itemStartGameArray.indexOf(element.id) > 0;
      });

      const filterEarlyGameItems = props.currentItem.filter((element) => {
        return itemEarlyGameArray.indexOf(element.id) > 0;
      });

      const filterMidGameItems = props.currentItem.filter((element) => {
        return itemMidGameArray.indexOf(element.id) > 0;
      });

      const filterLateGameItems = props.currentItem.filter((element) => {
        return itemLateGameArray.indexOf(element.id) > 0;
      });

      // In Each State, push the corresponding filtered data in it.
      // Then, export it out to child as props.

      setStartGameItem(filterStartGameItems);
      setEarlyGameItem(filterEarlyGameItems);
      setMidGameItem(filterMidGameItems);
      setLateGameItem(filterLateGameItems);
      // why NO SHOW? need ask justin/mike
      // console.log("start game state: ", startGameItem);
    } else {
      console.log("NO ITEM DETECTED!");
    }
  }, [itemStatus]);

  return (
    <>
      <IndividualHeroStats filterHero={filterHero} currentLore={currentLore} />
      <RecommendedItem
        filterStart={startGameItem}
        filterEarly={earlyGameItem}
        filterMid={midGameItem}
        filterLate={lateGameItem}
      />
    </>
  );
}

export default IndividualHero;
