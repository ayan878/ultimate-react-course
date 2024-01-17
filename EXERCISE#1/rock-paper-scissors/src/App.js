import React, { useState } from "react";

export default function App() {
  const choices = ["rock", "paper", "scissors"];
  const [showResult, setShowResult] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  const handleChoiceSelection = (userChoice) => {
    console.log(`You selected: ${userChoice}`);
    console.log(`Computer selected: ${computerSelection}`);
    // playRound(computerSelection, userChoice);
    setShowResult(true);
  };
  return (
    <div className="preload">
      <Header />
      <Game
        setShowResult={setShowResult}
        showResult={showResult}
        onHandleChoice={handleChoiceSelection}
      />
      <Result showResult={showResult} setShowResult={setShowResult} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="container">
        <header className="header">
          <img src="./images/logo.svg" alt="logo" className="logo" />
          <div className="score">
            <div className="score__title">score</div>
            <div className="score__number">0</div>
          </div>
        </header>
      </div>
    </>
  );
}
function Game({ onHandleChoice, showResult }) {
  return (
    <>
      <Result />
      {!showResult && (
        <section className="game">
          {/* <button className="choice-btn" data-choice="paper">
          <div className="choice paper">
            <img src="./images/icon-paper.svg" alt="Paper" />
          </div>
        </button>
        <button className="choice-btn" data-choice="scissors">
          <div className="choice scissors">
            <img src="./images/icon-scissors.svg" alt="Scissors" />
          </div>
        </button>
        <button className="choice-btn" data-choice="rock">
          <div className="choice rock">
            <img src="./images/icon-rock.svg" alt="Rock" />
          </div>
        </button> */}
          <ChoiceButton choice="paper" onClick={() => onHandleChoice("paper")}>
            <img src="./images/icon-paper.svg" alt="Paper" />
          </ChoiceButton>

          <ChoiceButton
            choice="scissors"
            onClick={() => onHandleChoice("scissors")}
          >
            <img src="./images/icon-scissors.svg" alt="Scissors" />
          </ChoiceButton>

          <ChoiceButton choice="rock" onClick={() => onHandleChoice("rock")}>
            <img src="./images/icon-rock.svg" alt="Rock" />
          </ChoiceButton>
        </section>
      )}
    </>
  );
}

function Modal({ showModal, setShowModal }) {
  const handleOpenRulesModal = () => {
    setShowModal(true);
  };

  const handleCloseRulesModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="rules-btn" tabIndex="1" onClick={handleOpenRulesModal}>
        rules
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal__container">
            <header className="modal__header">
              <h2 className="modal__heading">rules</h2>
              <button className="close-btn" onClick={handleCloseRulesModal}>
                <img src="./images/icon-close.svg" alt="Close Button" />
              </button>
            </header>
            <img
              src="./images/image-rules.svg"
              alt="RulesImage"
              className="rules-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
function Result({ showResult, setShowResult }) {
  function playRound(userSelection, computerSelection) {
    if (userSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors.";
    } else if (userSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock.";
    } else if (userSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper.";
    } else if (computerSelection === userSelection) {
      return "It's a tie! You both chose rock.";
    } else {
      return "You lose! Computer wins.";
    }
  }
  const handlePlayAgain = () => {
    setShowResult(false);
  };
  return (
    <>
      {showResult && (
        <section className="results">
          <h2 className="results__heading">you picked</h2>
          <h2 className="results__heading">the house picked</h2>
          <div className="results__result">
            {playRound}
          </div>
          <div className="results__winner">
            <h3 className="results__text">{}</h3>
            <button className="play-again" onClick={handlePlayAgain}>
              play again
            </button>
          </div>
          <div className="results__result"></div>
        </section>
      )}
    </>
  );
}
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="attribution"></div>
      </footer>
    </div>
  );
}
const ChoiceButton = ({ choice, children, onClick }) => (
  <button className={`choice-btn`} data-choice={choice} onClick={onClick}>
    <div className={`choice ${choice}`}>{children}</div>
  </button>
);
