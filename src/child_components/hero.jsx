import React, { useState } from "react";
import "../App.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HeroTest(props) {
  // ---------------------Utilise every single state to keep track of CHECKBOX state!-------------------------------------
  const [chooseAll, setChooseAll] = useState(true);
  const [chooseStr, setChooseStr] = useState(false);
  const [chooseAgi, setChooseAgi] = useState(false);
  const [chooseInt, setChooseInt] = useState(false);
  const [chooseMelee, setChooseMelee] = useState(false);
  const [chooseRange, setChooseRange] = useState(false);

  let heroList;
  let heroFilter;
  console.log(props.status);

  // ---------------------Function to filter hero depending on attribute and attack type-------------------------------------
  const filterHero = function (stats) {
    // we DECONSTRUCT the input into these local variables.
    const {
      chooseAll,
      chooseStr,
      chooseAgi,
      chooseInt,
      chooseMelee,
      chooseRange,
    } = stats;
    // If we select ALL, no need to filter at all.... DUH!
    if (chooseAll) {
      return props.hero;
    }

    // If some other shitty checkbox are selected then bo bian....
    heroFilter = props.hero.filter((element) => {
      let switchConditionAttr = true;
      if (chooseStr) switchConditionAttr = "str"; // if chooseStr selected, attribute switch to "str"
      if (chooseAgi) switchConditionAttr = "agi"; // if chooseAgi selected, attribute switch to "ago"
      if (chooseInt) switchConditionAttr = "int"; // if chooseInt selected, attribute switch to "int"
      let switchConditionAtk = true;
      if (chooseMelee) switchConditionAtk = "Melee"; // if chooseMelee seleccted, attack type change to "Melee"

      if (chooseRange) switchConditionAtk = "Ranged"; // if chooseRange seleccted, attack type change to "Ranged"
      console.log("current hero attack type is ", element.attack_type);
      console.log("current SELECTED attack type is ", switchConditionAtk);
      console.log("current hero attribute is ", element.primary_attr);
      console.log("current SELECTED attribute is ", switchConditionAttr);
      console.log("------------------------------------------------------");
      // if BOTH attributes and ATTACK TYPE are SELECTED
      if (
        element.attack_type == switchConditionAtk &&
        element.primary_attr == switchConditionAttr
      ) {
        return element;
      }
      // if attributes ARE NOT SELECTED
      else if (
        switchConditionAtk == element.attack_type &&
        switchConditionAttr == true
      ) {
        return element;
      }
      // if attack type IS NOT SELECTED
      else if (
        switchConditionAtk == true &&
        switchConditionAttr == switchConditionAttr
      ) {
        return element.primary_attr == switchConditionAttr;
      }
      // WHY WOULD YOU EVEN DO THAT?
      else if (switchConditionAtk == true && switchConditionAttr == true) {
        return null;
      }
    });

    console.log("THIS IS ", heroFilter);
    return heroFilter;
  };
  // FILTER FIRST, THEN MAP!
  heroList = filterHero({
    chooseAll,
    chooseStr,
    chooseAgi,
    chooseInt,
    chooseMelee,
    chooseRange,
  }).map((element, index) => {
    return (
      <Link to={`/hero/${element.localized_name}`}>
        <div className="eachhero" key={index}>
          <h2>{element.localized_name}</h2>
          <img src={`https://api.opendota.com${element.img}`} alt="" />
        </div>
      </Link>
    );
  });

  const checkedAll = function (event) {
    console.log("ALL Heroes Selected!");
    setChooseStr(false);
    setChooseAgi(false);
    setChooseInt(false);
    setChooseMelee(false);
    setChooseRange(false);
    setChooseAll(event.target.checked);
  };

  const checkedStr = function (event) {
    setChooseAll(false);
    setChooseStr(event.target.checked);
    setChooseAgi(false);
    setChooseInt(false);
  };
  const checkedAgi = function (event) {
    setChooseAll(false);
    setChooseAgi(event.target.checked);
    setChooseStr(false);
    setChooseInt(false);
  };
  const checkedInt = function (event) {
    console.log("ALL Heroes Selected!");
    setChooseAll(false);
    setChooseInt(event.target.checked);
    setChooseStr(false);
    setChooseAgi(false);
  };
  const checkedMelee = function (event) {
    console.log("ALL Heroes Selected!");
    setChooseAll(false);
    setChooseMelee(event.target.checked);
    setChooseRange(false);
  };
  const checkedRange = function (event) {
    console.log("ALL Heroes Selected!");
    setChooseAll(false);
    setChooseMelee(false);
    setChooseRange(event.target.checked);
  };

  return (
    <div className="herohead">
      <h2 className="herobody">Heroes</h2>
      <FormGroup sx={{ display: "inline" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={chooseAll}
              color="primary"
              onChange={checkedAll}
            />
          }
          label="All"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="error"
              id="2"
              checked={chooseStr}
              onChange={checkedStr}
            />
          }
          label="Strength"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              checked={chooseAgi}
              onChange={checkedAgi}
            />
          }
          label="Agility"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={chooseInt}
              onChange={checkedInt}
            />
          }
          label="Intelligence"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="warning"
              checked={chooseMelee}
              onChange={checkedMelee}
            />
          }
          label="Melee"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="warning"
              checked={chooseRange}
              onChange={checkedRange}
            />
          }
          label="Ranged"
        />
      </FormGroup>
      <div className="overallhero">{heroList}</div>
    </div>
  );
}

export default HeroTest;
