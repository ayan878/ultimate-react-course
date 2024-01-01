import React from 'react';
import ReactDOM  from 'react-dom/client';

const App = () => (
  <div>
    <h1>Hello React!</h1>
    <Pizza />
  </div>
);
const Pizza=()=><h2>Pizza</h2>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>);