import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom/client";


const Header = () => {
    return(
    <div id="header-con">
        <img id="logo" alt="logo" src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"/>

        <ul id="navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us📞</li>
            <li>Cart🛒</li>
        </ul>

    </div>
    )
}

const ResCard = (props) =>{
    const {resName, resRating, costForTwo} = props;
    // {title, avgRating, costForTwo, cuisines, deliveryTime  = cards};
    return(
         <div className="card">
            <img alt="res" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/1c3eb36c-0620-466f-be6f-c95ae65a74e1_288388.JPG" style={{ height: '200px', width: '150px'}}></img>
            <h3>{resName}</h3>
            <h4>{resRating}</h4>
            <h4>{costForTwo + "Rs."}</h4>
            {/* <h4></h4> */}
        </div>
    )
}
 
const BodyComp = () => {
    return(
    <div id="body">
        <div id="search"> Search</div>
        <div id="res-container">
         <ResCard resName = "Burgers" resRating = "4 stars" costForTwo = {1000} Delivery Time = "30 mins"/>
         <ResCard resName = "Burgers 1" resRating = "5 stars" costForTwo = {2000} Delivery Time = "30 mins"/>
         <ResCard resName = "Burgers" resRating = "4 stars" costForTwo = {500} Delivery Time = "30 mins"/>
         <ResCard resName = "New Burgers" resRating = "4 stars" costForTwo = {1000} Delivery Time = "30 mins"/>
         <ResCard resName = "Burgers" resRating = "4 stars" costForTwo = {1000} Delivery Time = "30 mins"/>
         <ResCard resName = "Burgers" resRating = "4 stars" costForTwo = {1000} Delivery Time = "30 mins"/>
         <ResCard resName = "Burgers" resRating = "4 stars" costForTwo = {1000} Delivery Time = "30 mins"/>
         
        </div>
    </div>
)}
const AppLayout = () => { return <div>
    {/* /* 1. Header
     --logo
     --navbar
    */  }
<Header/>
<BodyComp/>
     {/* 
            2. Body
          -- search bar
          -- res-container
            -- res-card
              --img, Resaurant Name, ETA, ratings, location

       3. Footer 
          -- copyright
          -- links
          -- address */ }
</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

