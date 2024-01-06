import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <StepCounter/>
      <Counter />
    </div>
  );
}

const StepCounter = () => {
  const [step, setStep] = useState(1);

  const onStepIncrement = () => {
    setStep((forwardStep) => step + 1);
    console.log("clicked");
  };

  const onStepDecrement = () => {
    setStep((prevStep) => step - 1);
    console.log("clicked");
  };

  return (
    <div>
      <div>
        <button onClick={onStepDecrement}>-</button>
        <span>Step: {step}</span>
        <button onClick={onStepIncrement}>+</button>
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const date = new Date("june 31 2027");
  date.setDate(date.getDate() + count);

  const handleCountDecrement = () => {
    setCount((c) => c - 1);
    console.log("clicked");
  };
  const handleCountIncrement = () => {
    setCount((c) => c + 1);
    console.log("clicked");
  };
  return (
    <div>
      <div>
        <button onClick={handleCountDecrement}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrement}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count}  days  from today is `
          : `${count} days to was`}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
};
