import Board from "./board";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

export default class GameView {
  constructor(ctx, board) {
    this.ctx = ctx;
    this.board = board;

    window.newGame = this.newGame.bind(this);
    window.stopLoop = this.cancelAnimation.bind(this);
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  newGame() {
    this.board = new Board(this.ctx, CANVAS_WIDTH);
    this.board.setup();
  }

  cancelAnimation() {
    cancelAnimationFrame(this.frame);
  }

  animate(time) {
    this.frame = requestAnimationFrame(this.animate.bind(this));
    const deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.board.boardWipe();
    this.board.draw();
  }
}
