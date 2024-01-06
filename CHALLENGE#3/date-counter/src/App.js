import React, { useState } from "react";

export default function App() {
  // const [step, setStep] = useState(1);

  return (
    <div className="App">
      {/* <StepCounter
        step={step}
        onStepIncrement={handleStepIncrement}
        onStepDecrement={handleStepDecrement}
      /> */}
      <StepCounter />
      <CountCounter />
    </div>
  );
}

// const StepCounter = ({ step, onStepIncrement, onStepDecrement }) => {
const StepCounter = () => {
  const [step, setStep] = useState(1);

  const onStepIncrement = () => {
    setStep((forwardStep) => forwardStep + step);
    console.log("clicked");
  };

  const onStepDecrement = () => {
    setStep((prevStep) => prevStep - step);
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

const CountCounter = () => {
  const [count, setCount] = useState(0);
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
    </div>
  );
};
