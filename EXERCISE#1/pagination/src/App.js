import { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
function App() {
  return (
    <div className="container">
      <button className="previous-btn">
        <FaLessThan />
      </button>
      <a href="#" className="page-link">
        1
      </a>
      <a href="#" className="page-link">
        2
      </a>
      <a href="#" className="page-link">
        3{" "}
      </a>
      <a href="#" className="page-link">
        4
      </a>
      <a href="#" className="page-link">
        5
      </a>
      <a href="#" className="page-link">
        6
      </a>
      <a href="#" className="page-link">
        7
      </a>
      <a href="#" className="page-link">
        .
      </a>
      <a href="#" className="page-link">
        .
      </a>
      <a href="#" className="page-link">
        .
      </a>
      <a href="#" className="page-link">
        .
      </a>
      <a href="#" className="page-link">
        23
      </a>
      <button className="next-btn">
        <FaGreaterThan />
      </button>
    </div>
  );
}

export default App;
