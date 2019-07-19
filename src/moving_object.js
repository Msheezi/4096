
export default class MovingObject{
    constructor(options) {

        this.pos = options.pos,
        this.vel = options.vel,
        this.width = options.size, //width and size needed for movements
        this.height = options.size, // height needed for movements and drawing and clearing
        this.value = options.value, // point value that will increase in collisions
        this.color = options.color
        this.draw = this.draw.bind(this)
    }
    
   


    drawRect(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1],this.width,this.height)
    }

    move(ctx) {
        ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height);
        this.pos[0] += this.vel
        this.pos[1] += this.vel ///need to update the movement logic based on the keyboard input value
        this.drawRect(ctx)
    }

    // createBoxes(ctx) {
        
        
    // }

}


// const mo = new MovingObject(
//     {pos: [30,30], vel: [10,10], radius: 5, color: "#00FF00"}
// )

