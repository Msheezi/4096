export default class InputHandler {
  constructor(board) {
    this.board = board;

    document.addEventListener("keydown", event => {
      //   alert(event.keyCode)
      switch (event.keyCode) {
        case 38:
          this.board.moveUp(); //move up
          break;
        case 40:
          this.board.moveDown(); //move down
          break;
        case 37:

          this.board.moveLeft();
          break;
        case 39:

          this.board.moveRight();
          break;
      }
    }, false);
  }
}
