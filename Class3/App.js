import React from "react";
import ReactDOM from "react-dom/client";

//React Syntax
const heading = React.createElement("h1", 
    {id: "heading"},
    "Namaste from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX is not part of React, it makes syntax easy. Babel transpiles the 
// jsx => React.createElement => JSObject => HTML
const jsxHeading = <h1 id="jsxHeading" tabIndex= "2"> JSX Heading🤖</h1>

//Functional Components are nothing but javascript functions which returns some jsx
const HeadingComponent = ()=> (<>
  {jsxHeading}
    <h1 className="heading"  tabIndex= "1">Hello from functional Component </h1>
    </>
)

root.render(<HeadingComponent/>);

