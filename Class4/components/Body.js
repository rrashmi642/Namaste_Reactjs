import ResCard from "./ResCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  //     let resList = [{
  //     "info": {
  //       "id": "42581",
  //       "name": "Burger King 1",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
  //       "locality": "The Pavillion Mall",
  //       "areaName": "Shivajinagar",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American"
  //       ],
  //       "avgRating": 4.1,
  //       "parentId": "166",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "14K+",
  //       "sla": {
  //         "deliveryTime": 31,
  //         "lastMileTravel": 3,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "3.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-11-06 02:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Burger.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Burger.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {},
  //           "textExtendedBadges": {}
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹55"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "lottie": {},
  //           "video": {}
  //         }
  //       },
  //       "reviewsSummary": {},
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {},
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-23e6c04e-256d-4693-a4fb-1b2ded1ee12a"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
  //       "type": "WEBLINK"
  //     }
  //   },{
  //     "info": {
  //       "id": "42582",
  //       "name": "Burger King 2",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
  //       "locality": "The Pavillion Mall",
  //       "areaName": "Shivajinagar",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American"
  //       ],
  //       "avgRating": 3.8,
  //       "parentId": "166",
  //       "avgRatingString": "4.1",
  //       "totalRatingsString": "14K+",
  //       "sla": {
  //         "deliveryTime": 31,
  //         "lastMileTravel": 3,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "3.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-11-06 02:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Burger.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Burger.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {},
  //           "textExtendedBadges": {}
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹55"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "lottie": {},
  //           "video": {}
  //         }
  //       },
  //       "reviewsSummary": {},
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {},
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-23e6c04e-256d-4693-a4fb-1b2ded1ee12a"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
  //       "type": "WEBLINK"
  //     }
  //   }, {
  //     "info": {
  //       "id": "42583",
  //       "name": "Burger King 3",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
  //       "locality": "The Pavillion Mall",
  //       "areaName": "Shivajinagar",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American"
  //       ],
  //       "avgRating": 4.3,
  //       "parentId": "166",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "14K+",
  //       "sla": {
  //         "deliveryTime": 31,
  //         "lastMileTravel": 3,
  //         "serviceability": "SERVICEABLE",
  //         "slaString": "30-35 mins",
  //         "lastMileTravelString": "3.0 km",
  //         "iconType": "ICON_TYPE_EMPTY"
  //       },
  //       "availability": {
  //         "nextCloseTime": "2025-11-06 02:00:00",
  //         "opened": true
  //       },
  //       "badges": {
  //         "imageBadges": [
  //           {
  //             "imageId": "Rxawards/_CATEGORY-Burger.png",
  //             "description": "Delivery!"
  //           }
  //         ]
  //       },
  //       "isOpen": true,
  //       "type": "F",
  //       "badgesV2": {
  //         "entityBadges": {
  //           "imageBased": {
  //             "badgeObject": [
  //               {
  //                 "attributes": {
  //                   "description": "Delivery!",
  //                   "imageId": "Rxawards/_CATEGORY-Burger.png"
  //                 }
  //               }
  //             ]
  //           },
  //           "textBased": {},
  //           "textExtendedBadges": {}
  //         }
  //       },
  //       "aggregatedDiscountInfoV3": {
  //         "header": "ITEMS",
  //         "subHeader": "AT ₹55"
  //       },
  //       "differentiatedUi": {
  //         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         "differentiatedUiMediaDetails": {
  //           "lottie": {},
  //           "video": {}
  //         }
  //       },
  //       "reviewsSummary": {},
  //       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       "restaurantOfferPresentationInfo": {},
  //       "externalRatings": {
  //         "aggregatedRating": {
  //           "rating": "--"
  //         }
  //       },
  //       "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  //     },
  //     "analytics": {
  //       "context": "seo-data-23e6c04e-256d-4693-a4fb-1b2ded1ee12a"
  //     },
  //     "cta": {
  //       "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
  //       "type": "WEBLINK"
  //     }
  //   }]
  const [newResList, setNewResList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log("will print");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    if (data){
      setNewResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants);
     
      }
    else {
      console.log("resList not found");
    }
  };
  //   setNewResList(resList);

  if (newResList.length === 0) {
    return (
      <div>
        {" "}
        <Shimmer />{" "}
      </div>
    );
  }
  return (
    <div id="body">
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setsearchText(e.target.value);
            console.log(searchText);
          }}
        ></input>
        <button onClick={()=> {
            const filtered = newResList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredList(filtered);
            console.log("fil"+filtered);
            
        }}>Search</button>
        <button
          id="filter"
          onClick={() => {
            console.log("button clicked");
            const filterData = newResList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setNewResList(filterData);
            console.log(newResList);
          }}
        > Filter High Rated Restaurants
        </button>
      </div>

      <div id="res-container">
        {/* <h1>Loading....</h1> */}
        {filteredList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
