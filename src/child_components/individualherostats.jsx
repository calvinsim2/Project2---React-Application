import React from "react";
import { useState, useEffect } from "react";

//------------- Single Hero information, lifted to individualhero.jsx----------------------------------------------

function IndividualHeroStats(props) {
  const [currentRole, setCurrentRole] = useState("");

  // display all the information regarding the selected hero in page.
  useEffect(() => {
    const newRoles = props.filterHero?.[0]?.roles.join(" , ");
    setCurrentRole(newRoles);
  }, []);
  return (
    <>
      <div>
        <img
          src={`https://api.opendota.com${props.filterHero?.[0]?.img}`}
          alt=""
        />
      </div>
      <div>
        <img
          src={`https://api.opendota.com${props.filterHero?.[0]?.icon}`}
          alt=""
        />
        <h2>{props.filterHero?.[0]?.localized_name}</h2>
        {/* <p>{lore}</p> */}
        <p>[ {currentRole} ]</p>
      </div>
      <div>
        <p>Attack Type: {props.filterHero?.[0]?.attack_type}</p>
        <p>Attack Range: {props.filterHero?.[0]?.attack_range}</p>
        <p>Attack Rate: {props.filterHero?.[0]?.attack_rate}</p>
        <p>Movement Speed: {props.filterHero?.[0]?.move_speed}</p>
      </div>
      <div>
        <p>Primary Attribute: {props.filterHero?.[0]?.primary_attr}</p>
        <p>Base Str: {props.filterHero?.[0]?.base_str}</p>
        <p>Base Agi: {props.filterHero?.[0]?.base_agi}</p>
        <p>Base Int: {props.filterHero?.[0]?.base_int}</p>
      </div>
    </>
  );
}

export default IndividualHeroStats;

// console.log(
//   "In individual hero stats jsx file, the lore is: ",
//   props.currentLore
// );

// useEffect(() => {
//   const selectedHeroLore = props.filterHero?.[0]?.name.replace(
//     "npc_dota_hero_",
//     ""
//   );
//   console.log("selected hero for lore now is: ", selectedHeroLore);
//   const selectLore = props.currentLore.;
//   setLore(selectLore);
// });
