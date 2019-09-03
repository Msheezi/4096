
import Board from './board'
import { CANVAS_WIDTH } from './constants';
import GameView from './game_view'

class Game {
    constructor(ctx){
        this.board = new Board(ctx, CANVAS_WIDTH)
        this.gameview = new GameView(ctx, board).start();
        this.input = new InputHandler(board);

        this.board.setup()
        this.board.draw()
    }

    // newGame(){
    //     board.setup()
    //     board.draw()
    // }
    
}

export default Game