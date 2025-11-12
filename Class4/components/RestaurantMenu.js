// import React from 'react'

import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//     console.log("menu");
//   return (
//     <div>
//         <h1> Restaurant Name</h1>
//         <p>Cost For Two: </p>
//     </div>
//   )
// }

// export default RestaurantMenu;

// import React from 'react'

const RestaurantMenu = () => {
const reqId= useParams;
  const [menuInfo, setMenuInfo] = useState(null);
useEffect(()=>{fetchMenu()}, []
);

  const fetchMenu = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=" + {reqId});
    const json = await data.json();
    setMenuInfo(json);
    console.log(json);
  }
//  const {name, cuisines, costForTwo} = 
  const {itemsCard} = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

//   const fetchMenu = async () => {
//   try {
//     const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER");

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const text = await response.text();
//     const json = text ? JSON.parse(text) : null;

//     setMenuInfo(json);
//     console.log(json);
//   } catch (error) {
//     console.error("Failed to fetch menu:", error);
//   }
// };


  // if(menuInfo ===null) return<Shimmer/>
  console.log("menu");
  return (
    <div>
      <h1>Restaurant Name</h1> 
      <p>Cost For Two:</p>
      <ul>{
        itemsCard.map((item) => 
          <li>{item?.card?.name}</li>
        )
        }
        <li></li>
        <li>veg biryani or</li>
        <li>aloo</li>
        <li>ki</li>
        <li>sabji</li>
        <li>khalo</li>
        <li>guys</li>
        <li>🤣</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;