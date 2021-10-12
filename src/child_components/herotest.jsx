import React, { useState } from "react";
import "../App.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HeroTest(props) {
  const [chooseAll, setChooseAll] = useState(true);
  const [chooseStr, setChooseStr] = useState(false);
  const [chooseAgi, setChooseAgi] = useState(false);
  const [chooseInt, setChooseInt] = useState(false);
  const [chooseMelee, setChooseMelee] = useState(false);
  const [chooseRange, setChooseRange] = useState(false);
  const [chooseState, setChooseState] = useState([
    { key: "str", value: 1 },
    { key: "agi", value: 1 },
    { key: "int", value: 0 },
    { key: "Melee", value: 0 },
    { key: "Ranged", value: 0 },
  ]);
  let heroList;
  let heroFilter;
  console.log(props.status);

  console.log(myNewState);

  //   if (props.status === "resolved") {
  const myNewState = chooseState.filter((element) => element.value === 1);

  const { oneMoreState, oneOneMore } = myNewState.map((element, index) => {
    <p>{element.key}</p>; // 2 keys, --> 2 variable.
  });
  //     if (chooseAll) {
  //       heroList = props.hero.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     } else if (chooseState.str == 1) {
  //       heroFilter = props.hero.filter((element) => {
  //         return element.primary_attr == "str";
  //       });
  //       console.log(heroFilter);
  //       heroList = heroFilter.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     } else if (chooseAgi) {
  //       heroFilter = props.hero.filter((element) => {
  //         return element.primary_attr == "agi";
  //       });
  //       console.log(heroFilter);
  //       heroList = heroFilter.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     } else if (chooseInt) {
  //       heroFilter = props.hero.filter((element) => {
  //         return element.primary_attr == "int";
  //       });
  //       console.log(heroFilter);
  //       heroList = heroFilter.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     } else if (chooseMelee) {
  //       heroFilter = props.hero.filter((element) => {
  //         return element.attack_type == "Melee";
  //       });
  //       console.log(heroFilter);
  //       heroList = heroFilter.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     } else if (chooseRange) {
  //       heroFilter = props.hero.filter((element) => {
  //         return element.attack_type == "Ranged";
  //       });
  //       console.log(heroFilter);
  //       heroList = heroFilter.map((element, index) => {
  //         return (
  //           <Link to={`/hero/${element.localized_name}`}>
  //             <div className="eachhero" key={index}>
  //               <h2>{element.localized_name}</h2>
  //               <img src={`https://api.opendota.com${element.img}`} alt="" />
  //             </div>
  //           </Link>
  //         );
  //       });
  //     }
  //   }

  //   const checkedAll = function (event) {
  //     console.log("ALL Heroes Selected!");
  //     setChooseStr(false);
  //     setChooseAgi(false);
  //     setChooseInt(false);
  //     setChooseMelee(false);
  //     setChooseRange(false);
  //     setChooseAll(event.target.checked);
  //   };

  //   const checkedStr = function (event) {
  //     setChooseAll(false);
  //     setChooseState({ ...chooseState, str: 1 });
  //     setChooseStr(event.target.checked);
  //   };
  //   const checkedAgi = function (event) {
  //     setChooseAll(false);
  //     setChooseState({ ...chooseState, agi: 1 });
  //     setChooseAgi(event.target.checked);
  //   };
  //   const checkedInt = function (event) {
  //     console.log("ALL Heroes Selected!");
  //     setChooseAll(false);
  //     setChooseInt(event.target.checked);
  //   };
  //   const checkedMelee = function (event) {
  //     console.log("ALL Heroes Selected!");
  //     setChooseAll(false);
  //     setChooseMelee(event.target.checked);
  //   };
  //   const checkedRange = function (event) {
  //     console.log("ALL Heroes Selected!");
  //     setChooseAll(false);
  //     setChooseRange(event.target.checked);
  //   };

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
        <Button
          variant="Select Categories!"
          onClick={() => {
            console.log("What are you pressing man?");
          }}
        >
          Select Categories!
        </Button>
      </FormGroup>
      <h1>{chooseState.str}</h1>
      <h1>{chooseState.agi}</h1>
      <div className="overallhero">{heroList}</div>
    </div>
  );
}

export default HeroTest;

// return (
//   <div className="herohead">
//     <h2 className="herobody">Heroes</h2>
//     <FormGroup sx={{ display: "inline" }}>
//       <FormControlLabel control={<Checkbox color="primary" />} label="All" />
//       <FormControlLabel
//         control={<Checkbox color="error" />}
//         label="Strength"
//       />
//       <FormControlLabel
//         control={<Checkbox color="success" />}
//         label="Agility"
//       />
//       <FormControlLabel
//         control={<Checkbox color="secondary" />}
//         label="Intelligence"
//       />
//       <FormControlLabel
//         control={<Checkbox color="warning" />}
//         label="Melee"
//       />
//       <FormControlLabel
//         control={<Checkbox color="warning" />}
//         label="Ranged"
//       />
//     </FormGroup>
//     <div className="overallhero">{props.heroList}</div>
//   </div>
// );
// }
