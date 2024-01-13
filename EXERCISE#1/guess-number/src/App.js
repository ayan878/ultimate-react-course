import { useState, useEffect } from "react";
// import "/.index.css";
function App() {
  const [inputValue, setInputValue] = useState(0);
  const [guessedNumber, setGuessedNumber] = useState("?");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [paragraphValue, setParagraphValue] = useState("Start guessing...");
  const [bgColor, setBgColor] = useState("bgColor");

  const [score, setScore] = useState(20);

  const onClickCheckButton = () => {
    if (parseInt(inputValue, 10) === guessedNumber) {
      setPageLoaded(true);
      setParagraphValue("🎉 Correct number!");
      setBgColor("setBgColor");
    }
    if (parseInt(inputValue, 10) > guessedNumber) {
      setScore(score - 1);
      setParagraphValue("📈 Too High!");
    }
    if (parseInt(inputValue, 10) < guessedNumber) {
      setParagraphValue("📉 Too low!");
      setScore(score - 1);
    }
  };

  const generateRandomNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  useEffect(() => {
    setGuessedNumber(generateRandomNumber());
  }, []);

  return (
    <div className={bgColor}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number" value={guessedNumber}>
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
          <p className="message" onClick={onClickCheckButton}>
            {paragraphValue}
          </p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
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
