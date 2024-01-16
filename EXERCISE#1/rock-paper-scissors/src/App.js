import React from "react";

function App() {
  return (
    <div>
      <div class="container">
        <header class="header">
          <img src="./images/logo.svg" alt="logo" class="logo" />
          <div class="score">
            <div class="score__title">score</div>
            <div class="score__number">0</div>
          </div>
        </header>
        <section class="game">
          <button class="choice-btn" data-choice="paper">
            <div class="choice paper">
              <img src="./images/icon-paper.svg" alt="Paper" />
            </div>
          </button>
          <button class="choice-btn" data-choice="scissors">
            <div class="choice scissors">
              <img src="./images/icon-scissors.svg" alt="Scissors" />
            </div>
          </button>
          <button class="choice-btn" data-choice="rock">
            <div class="choice rock">
              <img src="./images/icon-rock.svg" alt="Rock" />
            </div>
          </button>
        </section>
      </div>

      <section class="results hidden">
        <h2 class="results__heading">you picked</h2>
        <h2 class="results__heading">the house picked</h2>
        <div class="results__result"></div>
        <div class="results__winner hidden">
          <h3 class="results__text">{}</h3>
          <button class="play-again">play again</button>
        </div>
        <div class="results__result"></div>
      </section>

      <button class="rules-btn" tabindex="1">
        rules
      </button>
      <div class="modal">
        <div class="modal__container">
          <header class="modal__header">
            <h2 class="modal__heading">rules</h2>
            <button class="close-btn">
              <img src="./images/icon-close.svg" alt="Close Button" />
            </button>
          </header>
          <img
            src="./images/image-rules.svg"
            alt="RulesImage"
            class="rules-img"
          />
        </div>
      </div>

      <footer class="footer">
        <div class="attribution"></div>
      </footer>
    </div>
  );
}

export default App;
