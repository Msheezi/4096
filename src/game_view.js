
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


    restart() {
        //  debugger
        //  this.grid = [
        //      [0, 0, 0, 0],
        //      [0, 0, 0, 0],
        //      [0, 0, 0, 0],
        //      [0, 0, 0, 0]
        //  ];

        //  this.setup()
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.grid[i][j] !== 0) {
                    this.grid[i][j] = 0
                }
            }
        }
        console.log("test")
    }
}

