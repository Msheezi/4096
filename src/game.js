
import Board from './board'
import { CANVAS_WIDTH } from './constants';

class Game {
    constructor(){
        this.board = new Board(ctx, CANVAS_WIDTH)
        
    }
}