import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";
// import Game from './game'
import GameView from "./game_view";
import Board from "./board";
import InputHandler from "./input";
import Game from './game'

console.log("WebPackIsWorking");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  // const game = new Game();
  // const board = new Board(ctx, CANVAS_WIDTH);
  // const restart = () => board.restart
  const newGame = (ctx, CANVAS_WIDTH) => {
    // const board = new Board(ctx, CANVAS_WIDTH)
    
    
  }
  // board.setup();
  // board.draw();
  // document.getElementById("newgame").addEventListener("click", GameView.boardWipe)
  new Game (ctx)
  
});
