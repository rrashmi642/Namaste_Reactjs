# Namaste_Reactjs
const resList =[
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "83637",
        "title": "Burger",
        "description": "Satisfy your cravings with these fresh and flavoursome burgers.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/2/6f256b56-e319-488b-8003-9ccca21d4f14_pic",
        "aspectRatio": "3.44",
        "cta": {
          "link": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
          "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "101 restaurants",
        "navBarConfig": {}
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
          {
            "key": "relevance",
            "title": "Relevance (Default)",
            "selected": true,
            "defaultSelection": true
          },
          {
            "key": "deliveryTimeAsc",
            "title": "Delivery Time"
          },
          {
            "key": "modelBasedRatingDesc",
            "title": "Rating"
          },
          {
            "key": "costForTwoAsc",
            "title": "Cost: Low to High"
          },
          {
            "key": "costForTwoDesc",
            "title": "Cost: High to Low"
          }
        ],
        "restaurantCount": 101,
        "facetList": [
          {
            "label": "Veg/Non-Veg",
            "id": "isVeg",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Non Veg",
                "id": "isVegfacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Pure Veg",
                "id": "isVegfacetquery1",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Ratings",
            "id": "rating",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Ratings",
                "id": "ratingfacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Ratings 4.0+",
                "id": "ratingfacetquery1",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Ratings 4.5+",
                "id": "ratingfacetquery2",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Delivery Time",
            "id": "deliveryTime",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Less than 30 mins",
                "id": "deliveryTimefacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Less than 45 mins",
                "id": "deliveryTimefacetquery1",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          },
          {
            "label": "Cost For Two",
            "id": "costForTwo",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Less than Rs. 300",
                "id": "costForTwofacetquery0",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Rs.300 - Rs.600",
                "id": "costForTwofacetquery1",
                "analytics": {},
                "openFilter": true
              },
              {
                "label": "Greater than Rs. 600",
                "id": "costForTwofacetquery2",
                "analytics": {},
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filterby",
            "openFilter": true
          }
        ],
        "widgetId": "inlineFacetFilter"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
          "rows": 1,
          "widgetPadding": {
            "left": 16,
            "right": 16
          },
          "widgetTheme": {
            "defaultMode": {
              "backgroundColour": "#FFFFFF",
              "theme": "THEME_TYPE_LIGHT"
            },
            "darkMode": {
              "backgroundColour": "#1B3028",
              "theme": "THEME_TYPE_DARK"
            }
          }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "101 Restaurants to explore",
            "headerStyling": {
              "textSize": 15,
              "textColor": "text_color_highest_emphasis",
              "textFontName": "FONT_NAME_HEADER_H5",
              "maxLines": 1
            }
          }
        }
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "797029",
          "name": "Haldiram's Restaurant",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/ab5022fa-6e08-4403-b581-da3238143cfd_797029.JPG",
          "locality": "Dhole Patil Road",
          "areaName": "Kalyani Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "North Indian",
            "Chaat",
            "Chinese",
            "South Indian",
            "Fast Food",
            "Snacks",
            "sandwich",
            "Burger",
            "pizza",
            "Pasta"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "351771",
          "avgRatingString": "4.4",
          "totalRatingsString": "1.8K+",
          "promoted": true,
          "adTrackingId": "cid=34557489~p=0~adgrpid=34557489#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=797029~plpr=COLLECTION~eid=d1dc8b80-7f83-47da-a6d3-4096b2c4ae06~srvts=1762347062745~collid=83637",
          "sla": {
            "deliveryTime": 57,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "55-65 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-06 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Snacks.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Snacks.png",
                      "description": "Delivery!"
                    }
                  },
                  {
                    "attributes": {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34557489"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=797029&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "42581",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
          "locality": "The Pavillion Mall",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.1,
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "14K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-06 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹55",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=42581&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "934639",
          "name": "B Burger - Bigger Burger",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/30/f8761cbd-bf2c-4a66-ae8c-555ea41aea73_691b1885-e101-4d25-86e6-240cd7ee0d4f.png",
          "locality": "Kothrud",
          "areaName": "Kothrud",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "American",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "454391",
          "avgRatingString": "4.3",
          "totalRatingsString": "559",
          "promoted": true,
          "adTrackingId": "cid=34537795~p=1~adgrpid=34537795#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=934639~plpr=COLLECTION~eid=ceb66195-45b3-494f-a405-0fef0b0f5a3d~srvts=1762347062745~collid=83637",
          "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "6.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-05 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34537795"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=934639&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "506982",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/4a820e22-604b-4c18-a8fe-aa08a389e229_506982.JPG",
          "locality": "Narayan Peth",
          "areaName": "Shaniwar Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "630",
          "avgRatingString": "4.6",
          "totalRatingsString": "2.8K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-06 00:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹119",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=506982&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "1204642",
          "name": "Wow! China",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/22/a28928c3-ea1f-4566-a7d6-a5b7e2aef273_1204642.JPG",
          "locality": "Shivajinagar",
          "areaName": "FC Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Chinese",
            "Asian",
            "fastfood",
            "Beverages",
            "Snacks"
          ],
          "avgRating": 4.5,
          "parentId": "226836",
          "avgRatingString": "4.5",
          "totalRatingsString": "26",
          "promoted": true,
          "adTrackingId": "cid=34487468~p=4~adgrpid=34487468#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1204642~plpr=COLLECTION~eid=faa9fa7d-9931-432e-a7b6-c35efef60f18~srvts=1762347062745~collid=83637",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-06 03:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34487468"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=1204642&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "243625",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0be4f55a-55f4-432f-9e76-eea1132525c6_243625.JPG",
          "locality": "Deccan Gymkhana",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Rolls & Wraps",
            "Fast Food"
          ],
          "avgRating": 4.3,
          "parentId": "547",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.9K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-05 23:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹415",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.0",
              "ratingCount": "4.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=243625&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "21545",
          "name": "The Sassy Spoon",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/7/ce643959-024b-4821-98ae-660811834b73_21545 (1).jpg",
          "locality": "Koregaon Park",
          "areaName": "Koregaon Park",
          "costForTwo": "₹1200 for two",
          "cuisines": [
            "European"
          ],
          "avgRating": 4.6,
          "parentId": "2539",
          "avgRatingString": "4.6",
          "totalRatingsString": "2.1K+",
          "promoted": true,
          "adTrackingId": "cid=34656462~p=16~adgrpid=34656462#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=21545~plpr=COLLECTION~eid=8811fd11-f188-4994-b010-28d4b644a1a0~srvts=1762347062745~collid=83637",
          "sla": {
            "deliveryTime": 72,
            "lastMileTravel": 6.8,
            "serviceability": "SERVICEABLE",
            "slaString": "70-80 mins",
            "lastMileTravelString": "6.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-11-05 23:25:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹1200",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.4",
              "ratingCount": "7.8K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "34656462"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=21545&source=collection&query=Burger",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]