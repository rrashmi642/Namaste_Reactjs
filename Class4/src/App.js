import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";
// import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
const AppLayout = () => { return <div>
    { /* 1. Header
     --logo
     --navbar
    */  }
<Header/>
<Outlet/>
{/* <Body/> */}
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

// const appRouter = createBrowserRouter([
//   {path: "/",
//     element: <AppLayout/>,
//   errorElement: <Error/>
// },
//   {
//     path: "/about",
//     element: <About/>
//   },
//   {
//     path: "/contact",
//     element: <Contact/>
//   }
// ]);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   
    children: [
      {
        path: "", // This is the index route ("/")
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/menu/:reqid",
        element: <RestaurantMenu />
      }
    ],
     errorElement: <Error />,
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

