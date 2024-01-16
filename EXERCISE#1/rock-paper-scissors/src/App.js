import React, { useState } from "react";

function App() {
  return (
    <div className="preload">
      <div className="container">
        <header className="header">
          <img src="./images/logo.svg" alt="logo" className="logo" />
          <div className="score">
            <div className="score__title">score</div>
            <div className="score__number">0</div>
          </div>
        </header>
        <section className="game">
          <button className="choice-btn" data-choice="paper">
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
          </button>
        </section>
      </div>

      <section className="results hidden">
        <h2 className="results__heading">you picked</h2>
        <h2 className="results__heading">the house picked</h2>
        <div className="results__result"></div>
        <div className="results__winner hidden">
          <h3 className="results__text">{}</h3>
          <button className="play-again">play again</button>
        </div>
        <div className="results__result"></div>
      </section>
      <Modal/>
      <footer className="footer">
        <div className="attribution"></div>
      </footer>
    </div>
  );
}

export default App;

function Modal() {
  const [showModal, setShowModal] = useState(false);

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
