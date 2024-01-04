import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

 const messages = [
   "Learn React ⚛️",
   "Apply for jobs 💼",
   "Invest your new income 🤑",
 ];

const App = () => (<div>
  {/* <Header/> */}
<Container/></div>);


// const Header = () => <h1>hello World</h1>;
const Container = () =>
 { return(
    <div class="steps">
      <div class="numbers">
        <div class="step-1">1</div>
        <div class="step-2">2</div>
        <div class="step-3">3</div>
      </div>

      <p class="message"></p>

      <div class="buttons">
        <button class="previous">Previous</button>
        <button class="next">Next</button>
      </div>
    </div>
  );
 };

 const message=(props)=>{


 };



