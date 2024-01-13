import React, { useState, useEffect } from "react";
import JSConfetti from "js-confetti";
function App() {
  const [inputValue, setInputValue] = useState(0);
  const [guessedNumber, setGuessedNumber] = useState("?");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [paragraphValue, setParagraphValue] = useState("Start guessing...");
  const [bgColor, setBgColor] = useState("bgColor");

  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);

  const handleAgain = () => {
    setBgColor("bgColor"); // Reset color
    setGuessedNumber(generateRandomNumber());
    setInputValue(0);
    setPageLoaded(false);
    setParagraphValue("Start guessing...");
    setScore(20);
  };

  const onClickCheckButton = () => {
    if (parseInt(inputValue, 10) === guessedNumber) {
      setPageLoaded(true);
      setParagraphValue("🎉 Correct number!");
      setBgColor("setBgColor");
      launchConfetti();
      setHighscore(score);
      if (score > highscore) {
        setHighscore(score);
      }
    }
    if (parseInt(inputValue, 10) > guessedNumber) {
      setScore(score - 1);
      setParagraphValue("📈 Too High!");
    }
    if (parseInt(inputValue, 10) < guessedNumber) {
      setParagraphValue("📉 Too low!");
      setScore(score - 1);
    }
    if (score === 1) {
      setParagraphValue("💥 you lost the game");
    }
  };

  const generateRandomNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  useEffect(() => {
    setGuessedNumber(generateRandomNumber());
  }, []);
  // *****************************************
  // congratulations part
  const launchConfetti = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  };
  // ********************************************

  return (
    <div className={bgColor}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
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
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
