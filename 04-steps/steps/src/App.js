import { Children, useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) {
      // it can't updated state twice
      // setStep(step + 1);
      // setStep(step + 1);

      // it can updated state twice
      // setStep((s) => s + 1);
      // setStep((s) => s + 1);

      setStep((s) => s + 1);
    }
  };
  const handlePreviouse = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };
  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div class="steps">
          <div class="numbers">
            <div class={step === 1 ? "active" : ""}>1</div>
            <div class={step === 2 ? "active" : ""}>2</div>
            <div class={step === 3 ? "active" : ""}>3</div>
          </div>
          {/* <p class="message">
            <h3>Step {step}</h3>
            {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div class="buttons">
            {/* <button
              class="previous"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePreviouse}
              emoji="👈"
            >
              Previous
            </button>
            <button
              class="next"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              emoji="👉"
            >
              Next
            </button> */}
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handlePreviouse}
            >
              👈Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next👉
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
function StepMessage({step,children}){
      return (
        <p class="message">
          <h1>STEP {step}</h1>
          {children}
        </p>
      );
}
function Button({textColor,bgColor,onClick,children}){
  return (
    <button
      class="previous"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );

}