import React from "react";

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src="./images/logo.svg" alt="logo" className="logo" />
        <div className="score">
          <div className="score__title">score</div>
          <div className="score__number">0</div>
        </div>
      </header>
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

      <button className="rules-btn" tabindex="1">
        rules
      </button>
      <div className="modal">
        <div className="modal__container">
          <header className="modal__header">
            <h2 className="modal__heading">rules</h2>
            <button className="close-btn">
              <img src="./images/icon-close.svg" alt="Close Button" />
            </button>
          </header>
          <img
            src="./images/image-rules.svg"
            alt="RulesImage" className="rules-img"
          />
        </div>
      </div>

      <footer className="footer">
        <div className="attribution"></div>
      </footer>
    </div>
  );
}

export default App;
