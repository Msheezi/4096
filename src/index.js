import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";
import Game from "./game";




document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  

  const game = new Game(ctx, CANVAS_WIDTH);
  game.init();
  document
    .getElementById("newgame")
    .addEventListener("click", game.restart.bind(game));
});
