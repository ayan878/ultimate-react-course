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
  const [Percentage1, SetPercentage1] = useState(0); // Use 0 as the initial value
  const [Percentage2, setPercentage2] = useState(0); // Use 0 as the initial value
  const tip = bill * ((Percentage1 + Percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    SetPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage Percentage={Percentage1} onSelect={SetPercentage1}>
        How did you like the services?
      </SelectPercentage>
      <SelectPercentage Percentage={Percentage2} onSelect={setPercentage2}>
        How did your friend like service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset handleReset={handleReset} />
        </>
      )}
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

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
