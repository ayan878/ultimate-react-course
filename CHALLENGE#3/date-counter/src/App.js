debugger;
export default function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

const DateCounter = () => {
  let step=1
  return (
    <div>
      <div>
        <button onClick={step}>-</button>
        <span>Step:1</span>
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        <span>Count:1</span>
        <button>+</button>
      </div>
    </div>
  );
};
const step = () => {};
