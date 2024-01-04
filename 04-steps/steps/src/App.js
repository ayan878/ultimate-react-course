import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let step=1;
  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  };
  const handlePreviouse = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      // setStep((s) => s + 1);
    }
  };
  return (
    <div class="steps">
      <div class="numbers">
        <div class={`${step === 1 ? "active" : ""}`}>1</div>
        <div class={`${step === 2 ? "active" : ""}`}>2</div>
        <div class={`${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <p class="message">
        Step {step}:{messages[step - 1]}
      </p>
      <div class="buttons">
        <button
          class="previous"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePreviouse}
        >
          Previous
        </button>
        <button
          class="next"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
