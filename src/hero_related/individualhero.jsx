import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import IndividualHeroStats from "./individualherostats.jsx";
import RecommendedItem from "../items_related/recommendeditem.jsx";
import "../App.css";

//-------------------------- Display information for single selected hero. -----------------------------------------

function IndividualHero(props) {
  const [currentItem, setCurrentItem] = useState("");
  const [itemStatus, setItemStatus] = useState("Idle");
  const [startGameItem, setStartGameItem] = useState([]);
  const [earlyGameItem, setEarlyGameItem] = useState([]);
  const [midGameItem, setMidGameItem] = useState([]);
  const [lateGameItem, setLateGameItem] = useState([]);

  const params = useParams();
  // array to hold different categories of items
  let itemStartGameArray = [];
  let itemEarlyGameArray = [];
  let itemMidGameArray = [];
  let itemLateGameArray = [];
  // array to hold filtered items
  let filterStartGameItems = [];
  let filterEarlyGameItems = [];
  let filterMidGameItems = [];
  let filterLateGameItems = [];

  // obtain selected hero details from the list of heros (app.jsx)
  const filterHero = props.currentHero.filter(
    (element) => element.localized_name === params.heroname
  );

  //--------------------------------- request recommended item from apidota---------------------------------------

  // unique id, --> fetch items
  const apiItems = ` https://api.opendota.com/api/heroes/${filterHero?.[0]?.id}/itemPopularity `;

  useEffect(() => {
    const listItems = async () => {
      setItemStatus("pending");
      try {
        console.log(apiItems);
        const response = await fetch(apiItems);
        const resdata = await response.json();

        console.log("Current Stats: ", itemStatus);
        setCurrentItem(resdata);
        console.log("ITEM STATS: ", resdata);
        setItemStatus("resolved");
      } catch (error) {
        setItemStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listItems();
  }, []);

  //---------------------------------------------- map items ------------------------------------------------------

  // fetch call returns object in objects.
  // use for ... in.. to shift start game, early game, mid game and late game items into different arrays.
  const sortDatatoArray = function (data) {
    let tempArr = [];
    for (const item in data) {
      const itemNum = Number(item);
      tempArr.push(itemNum);
    }
    return tempArr;
  };

  // with each value shifted into different arrays, compare it with main list of items
  // return filtered arrays which contain data of items.
  const filterItemsFromOverallArray = function (inputArr, refArr) {
    let holdingArr = refArr.filter((element) => {
      return inputArr.indexOf(element.id) > 0;
    });
    return holdingArr;
  };

  useEffect(() => {
    if (itemStatus === "resolved") {
      // segregate different groups of items into different arrays respectively!
      itemStartGameArray = sortDatatoArray(currentItem.start_game_items);
      itemEarlyGameArray = sortDatatoArray(currentItem.early_game_items);
      itemMidGameArray = sortDatatoArray(currentItem.mid_game_items);
      itemLateGameArray = sortDatatoArray(currentItem.late_game_items);

      filterStartGameItems = filterItemsFromOverallArray(
        itemStartGameArray,
        props.currentItem
      );

      filterEarlyGameItems = filterItemsFromOverallArray(
        itemEarlyGameArray,
        props.currentItem
      );
      filterMidGameItems = filterItemsFromOverallArray(
        itemMidGameArray,
        props.currentItem
      );
      filterLateGameItems = filterItemsFromOverallArray(
        itemLateGameArray,
        props.currentItem
      );

      // In Each State, push the corresponding filtered data in it.
      // Then, export it out to child as props.

      setStartGameItem(filterStartGameItems);
      setEarlyGameItem(filterEarlyGameItems);
      setMidGameItem(filterMidGameItems);
      setLateGameItem(filterLateGameItems);
    } else {
      console.log("NO ITEM DETECTED!");
    }
  }, [itemStatus]);

  return (
    <>
      <IndividualHeroStats filterHero={filterHero} />
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

// useEffect(() => {
//   // fetch call returns object in objects.
//   // use for ... in.. to shift start game, early game, mid game and late game items into different arrays.

//   if (itemStatus === "resolved") {
//     for (const item in currentItem.start_game_items) {
//       const itemNum = Number(item);
//       itemStartGameArray.push(itemNum);
//     }
//     for (const item in currentItem.early_game_items) {
//       const itemNum = Number(item);
//       itemEarlyGameArray.push(itemNum);
//     }
//     for (const item in currentItem.mid_game_items) {
//       const itemNum = Number(item);
//       itemMidGameArray.push(itemNum);
//     }
//     for (const item in currentItem.late_game_items) {
//       const itemNum = Number(item);
//       itemLateGameArray.push(itemNum);
//     }

//     // with each value shifted into different arrays, compare it with main list of items
//     // return filtered arrays which contain data of items.
//     const filterStartGameItems = props.currentItem.filter((element) => {
//       return itemStartGameArray.indexOf(element.id) > 0;
//     });

//     const filterEarlyGameItems = props.currentItem.filter((element) => {
//       return itemEarlyGameArray.indexOf(element.id) > 0;
//     });

//     const filterMidGameItems = props.currentItem.filter((element) => {
//       return itemMidGameArray.indexOf(element.id) > 0;
//     });

//     const filterLateGameItems = props.currentItem.filter((element) => {
//       return itemLateGameArray.indexOf(element.id) > 0;
//     });

//     // In Each State, push the corresponding filtered data in it.
//     // Then, export it out to child as props.
//     console.log("filter start game state is: ", filterStartGameItems);

//     setStartGameItem(filterStartGameItems);
//     setEarlyGameItem(filterEarlyGameItems);
//     setMidGameItem(filterMidGameItems);
//     setLateGameItem(filterLateGameItems);

//     // console.log("start game state: ", startGameItem);
//   } else {
//     console.log("NO ITEM DETECTED!");
//   }
// }, [itemStatus]);
