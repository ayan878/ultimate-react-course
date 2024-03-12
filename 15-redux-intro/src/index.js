import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import store from "./store";
import App from "./App";

store.dispatch({ type: "account/deposite" });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
