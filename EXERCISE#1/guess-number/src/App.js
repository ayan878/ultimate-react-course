import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [guessedNumber, setGuessedNumber] = useState("?");
  const [pageLoaded, setPageLoaded] = useState(false);

  const onClickCheckButton = () => {
    if (parseInt(inputValue, 10) === guessedNumber) {
      setPageLoaded(true);
    }
  };

  const generateRandomNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  useEffect(() => {
    setGuessedNumber(generateRandomNumber());
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div
          className="number"
          value={guessedNumber}
        >
          {pageLoaded ? guessedNumber : "?"}
        </div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn check" onClick={onClickCheckButton}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            💯 Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
