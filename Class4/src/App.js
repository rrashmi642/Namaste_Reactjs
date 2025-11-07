import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";
const AppLayout = () => { return <div>
    {/* /* 1. Header
     --logo
     --navbar
    */  }
<Header/>
<Body/>
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

