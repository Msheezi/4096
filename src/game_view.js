
export default class GameView{
    constructor(ctx, board){
        this.ctx = ctx;
        // this.game = game;
        this.board = board
        

    }

    // gameLoop(timestamp) {
        
    // }

    start(){
        this.lastTime = 0
        
        requestAnimationFrame(this.animate.bind(this))
    }

    animate(time){
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.board.boardWipe();
        this.board.draw()
        requestAnimationFrame(this.animate.bind(this))
    }
}

