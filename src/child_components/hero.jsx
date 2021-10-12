import React from "react";
import "../App.css";

function Hero(props) {
  return (
    <div className="herohead">
      <h2 className="herobody">Heroes</h2>
      <div className="overallhero">{props.heroList}</div>
    </div>
  );
}

export default Hero;

// const [status, setStatus] = useState("idle");
//   const api = `https://api.opendota.com/api/heroStats`;

//   useEffect(() => {
//     const listHero = async () => {
//       setStatus("pending");
//       try {
//         const response = await fetch(api);
//         const resdata = await response.json();
//         setStatus("resolved");
//         console.log("Current Stats: ", status);
//         setHero(resdata);
//       } catch (error) {
//         setStatus("Error");
//         console.log("No Data Fetched!");
//       }
//     };
//     listHero();
//   }, []);
//   let heroList;

//   if (status === "resolved") {
//     heroList = hero.map((element, index) => {
//       return (
//         <Link to={`/hero/${element.localized_name}`}>
//           <div key={index}>
//             <h2>{element.localized_name}</h2>
//             <img src={`https://api.opendota.com${element.img}`} alt="" />
//           </div>
//         </Link>
//       );
//     });
//     props.setCurrentHero(hero);
//   } else {
//     console.log("Can't Map!");
//   }
