import Board from "./board";
import { CANVAS_WIDTH } from "./constants";
import GameView from "./game_view";
import InputHandler from "./input";

export default class Game {
  constructor(ctx) {
    this.board = new Board(ctx, CANVAS_WIDTH);
    this.gameView = new GameView(ctx, this.board);
    this.inputHandler = new InputHandler(this.board);
  }

  init() {
    this.board.setup();
    this.gameView.start();
  }

  restart() {
    this.gameView.newGame();
    this.board = this.gameView.board;
    this.inputHandler.board = this.board;
  }
}
