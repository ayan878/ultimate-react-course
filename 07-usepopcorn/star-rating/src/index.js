import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating  maxRating={5} message={["Terrible","Bad","Okay","Good","Amazing"]}/>
    <StarRating  maxRating={10} size={24} color="black" className="text"/>
  </React.StrictMode>
);
