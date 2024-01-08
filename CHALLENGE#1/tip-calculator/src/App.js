import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [Percentage1, SetPercentage1] = useState("");
  const [Percentage2, setPercentage2] = useState("");
  const tip = bill * ((Percentage1 + Percentage2) / 2 / 100);
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage Percentage={Percentage1} onSelect={SetPercentage1}>
        How did you like the services?
      </SelectPercentage>
      <SelectPercentage Percentage={Percentage2} onSelect={setPercentage2}>
        How did your friend like service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <Reset setBill={setBill} />
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, Percentage, onSelect }) {
  return (
    <div>
      <div>
        <label>{children}</label>
        <select
          value={Percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely Amazing (20%)</option>
        </select>
      </div>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ setBill }) {
  return <button onClick={() => setBill("")}>Reset</button>;
}
