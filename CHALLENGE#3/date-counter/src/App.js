import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <StepCounter step={step} setStep={setStep} />
      <Counter step={step} />
    </div>
  );
}

const StepCounter = ({ step, setStep }) => {
  const onStepIncrement = () => {
    setStep(() => step + 1);
    console.log("clicked");
  };

  const onStepDecrement = () => {
    setStep(() => step - 1);
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

const Counter = ({ step }) => {
  const [count, setCount] = useState(0);

  const date = new Date("june 31 2027");
  date.setDate(date.getDate() + count);

  const handleCountDecrement = () => {
    setCount((c) => c - step);
    console.log("clicked");
  };
  const handleCountIncrement = () => {
    setCount((c) => c + step);
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
