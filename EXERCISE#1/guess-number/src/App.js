// import React, { useState, useEffect } from "react";
// import JSConfetti from "js-confetti";
// function App() {
//   const [inputValue, setInputValue] = useState(0);
//   const [guessedNumber, setGuessedNumber] = useState("?");
//   const [pageLoaded, setPageLoaded] = useState(false);
//   const [paragraphValue, setParagraphValue] = useState("Start guessing...");
//   const [bgColor, setBgColor] = useState("bgColor");

//   const [score, setScore] = useState(20);
//   const [highscore, setHighscore] = useState(0);

//   const handleAgain = () => {
//     setBgColor("bgColor"); // Reset color
//     setGuessedNumber(generateRandomNumber());
//     setInputValue(0);
//     setPageLoaded(false);
//     setParagraphValue("Start guessing...");
//     setScore(20);
//   };

//   const onClickCheckButton = () => {
//     if (parseInt(inputValue, 10) === guessedNumber) {
//       setPageLoaded(true);
//       setParagraphValue("🎉 Correct number!");
//       setBgColor("setBgColor");
//       launchConfetti();
//       setHighscore(score);
//       if (score > highscore) {
//         setHighscore(score);
//       }
//     }
//     if (parseInt(inputValue, 10) > guessedNumber) {
//       setScore(score - 1);
//       setParagraphValue("📈 Too High!");
//     }
//     if (parseInt(inputValue, 10) < guessedNumber) {
//       setParagraphValue("📉 Too low!");
//       setScore(score - 1);
//     }
//     if (score === 1) {
//       setParagraphValue("💥 you lost the game");
//     }
//   };

//   const generateRandomNumber = () => {
//     return Math.trunc(Math.random() * 20) + 1;
//   };

//   useEffect(() => {
//     setGuessedNumber(generateRandomNumber());
//   }, []);
//   // *****************************************
//   // congratulations part
//   const launchConfetti = () => {
//     const jsConfetti = new JSConfetti();
//     jsConfetti.addConfetti();
//   };
//   // ********************************************

//   return (
//     <div className={bgColor}>
//       <header>
//         <h1>Guess My Number!</h1>
//         <p className="between">(Between 1 and 20)</p>
//         <button className="btn again" onClick={handleAgain}>
//           Again!
//         </button>
//         <div className="number" value={guessedNumber}>
//           {pageLoaded ? guessedNumber : "?"}
//         </div>
//       </header>
//       <main>
//         <section className="left">
//           <input
//             type="number"
//             className="guess"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button className="btn check" onClick={onClickCheckButton}>
//             Check!
//           </button>
//         </section>
//         <section className="right">
//           <p className="message" onClick={onClickCheckButton}>
//             {paragraphValue}
//           </p>
//           <p className="label-score">
//             💯 Score: <span className="score">{score}</span>
//           </p>
//           <p className="label-highscore">
//             🥇 Highscore: <span className="highscore">{highscore}</span>
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

//By using reducer
import React, { useEffect, useReducer } from "react";
import JSConfetti from "js-confetti";

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        guessedNumber: generateRandomNumber(),
        inputValue: 0,
        pageLoaded: false,
        paragraphValue: "Start guessing...",
        bgColor: "bgColor",
        score: 20,
      };
    case "check":
      if (parseInt(state.inputValue, 10) === state.guessedNumber) {
        return {
          ...state,
          pageLoaded: true,
          paragraphValue: "🎉 Correct number!",
          bgColor: "setBgColor",
          highscore:
            state.score > state.highscore ? state.score : state.highscore,
        };
      } else if (parseInt(state.inputValue, 10) > state.guessedNumber) {
        return {
          ...state,
          score: state.score - 1,
          paragraphValue: "📈 Too High!",
        };
      } else {
        return {
          ...state,
          paragraphValue: "📉 Too low!",
          score: state.score - 1,
        };
      }
    case "input":
      return {
        ...state,
        inputValue: action.value,
      };
    default:
      return state;
  }
};

const initialState = {
  guessedNumber: 0,
  inputValue: 0,
  pageLoaded: false,
  paragraphValue: "Start guessing...",
  bgColor: "bgColor",
  score: 20,
  highscore: 0,
};

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const handleAgain = () => {
    dispatch({ type: "reset" });
  };

  const onClickCheckButton = () => {
    dispatch({ type: "check" });
    if (state.score === 1) {
      dispatch({ type: "reset" });
      dispatch({ type: "check" }); // Trigger loss message
    }
  };

  useEffect(() => {
    dispatch({ type: "reset" });
  }, []);

  useEffect(() => {
    if (state.pageLoaded) {
      launchConfetti();
    }
  }, [state.pageLoaded]);

  const launchConfetti = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  };

  return (
    <div className={state.bgColor}>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
        <div className="number" value={state.guessedNumber}>
          {state.pageLoaded ? state.guessedNumber : "?"}
        </div>
      </header>
      <main>
        <section className="left">
          <input
            type="number"
            className="guess"
            value={state.inputValue}
            onChange={(e) =>
              dispatch({ type: "input", value: Number(e.target.value) })
            }
          />
          <button className="btn check" onClick={onClickCheckButton}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message" onClick={onClickCheckButton}>
            {state.paragraphValue}
          </p>
          <p className="label-score">
            💯 Score: <span className="score">{state.score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{state.highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
