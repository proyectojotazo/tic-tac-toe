import { Game } from "./classes/game.js";

const btnReset = document.getElementsByClassName("btn-reset")[0];

const myGame = new Game();

myGame.play();

btnReset.addEventListener("click", () => {
  myGame.resetGame();
});