import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";

//---------------------------- Display ALL items in Items page ----------------------------------------

function DisplayItems(props) {
  // obtain items, map all items out for display.
  let allItems = props.currentItem.map((element, index) => {
    return (
      <Tooltip
        title={`${element.localized_name} - ${element.cost}`}
        followCursor="true"
      >
        <Link to={`/items/${element.localized_name}`}>
          <li
            style={{
              backgroundImage: `url(${element.url_image})`,
              backgroundSize: "cover",
              width: 100,
              height: 80,
              borderRadius: 5,
              margin: 10,
            }}
            className="ind-item"
            key={index}
          ></li>
        </Link>
      </Tooltip>
    );
  });

  return (
    <div className="itemlist">
      <div className="itemhead">Items List</div>
      <ul className="ind-list">{allItems}</ul>
    </div>
  );
}

export default DisplayItems;

// function DisplayItems(props) {
//   // obtain items, map all items out for display.
//   let allItems = props.currentItem.map((element, index) => {
//     return (
//       <Link to={`/items/${element.localized_name}`}>
//         <li className="ind-item" key={index}>
//           {element.localized_name} - {element.cost}
//           <img src={element.url_image} alt={element.id} />"
//         </li>
//       </Link>
//     );
//   });

//   return (
//     <div className="itemlist">
//       <div className="itemhead">Items List</div>
//       <ul className="ind-list">{allItems}</ul>
//     </div>
//   );
// }

// export default DisplayItems;
