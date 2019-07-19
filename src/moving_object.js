
export default class MovingObject{
    constructor(options) {

        this.pos = options.pos,
        this.vel = options.vel,
        this.width = options.size, //width and size needed for movements
        this.height = options.size, // height needed for movements and drawing and clearing
        this.value = options.value, // point value that will increase in collisions
        this.color = options.color, // update the color of the object based on its current value?
         // this is updated during the collision 

        this.drawRect = this.drawRect.bind(this)
        this.move = this.move.bind(this)
        this.validMove = this.validMove.bind(this)
    }
    

    drawRect(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1],this.width,this.height);
        ctx.fillStyle = '#292F36';
        ctx.font = "40pt arial";
        ctx.fillText(`${this.value}`, this.pos[0] + 50 , this.pos[1] + 85 );
    }

    move(ctx) {
        ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height);
        this.pos[0] += this.vel;
        // this.pos[1] += this.vel ///need to update the movement logic based on the keyboard input value
        this.drawRect(ctx)
    }

    validMove(){
        // let x = this.pos[0]
        // let y = this.pos[1]
            (this.pos[0] + this.vel <= 454) ? this.move(ctx) : console.log("Invalid Move")

        }
    }
    
    // placeRandomTile(ctx) {
    //     // run check for empty space
    //     // if spot is empty, draw tile by getting placing tile coordinates in into object
    //     // 
    // }

    // isSpotEmpty() {
    //     // iterate through grid spaces or select random location and return a boolean if empty.  if no empties found, end game
    //     // 
    // }

    // gameOver() {
    //     //if no empty spaces game ends in loss
    //     // if value of tiles equals 4096 game ends in win
    // }

    // // createBoxes(ctx) {
        
        
    // // }

// }


// const mo = new MovingObject(
//     {pos: [30,30], vel: [10,10], radius: 5, color: "#00FF00"}
// )

