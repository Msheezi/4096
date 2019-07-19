
import Board from './board.js'
import MovingObject from './moving_object.js'


console.log("webpacking beetches")

const canvas = document.getElementById('game-canvas')
  
const ctx = canvas.getContext('2d')



window.MovingObject = MovingObject;
window.ctx = ctx;
window.boxes = [
    new MovingObject({ pos: [16, 16], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [162, 16], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [308, 16], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [454, 16], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [16, 162], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [162, 162], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [308, 162], vel: 146, size: 130, value: 4, color: "#F5E6E8"}),
    new MovingObject({ pos: [454, 162], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [16, 308], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [162, 308], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [308, 308], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [454, 308], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [16, 454], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [162, 454], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [308, 454], vel: 146, size: 130, value: 4, color: "#F5E6E8" }),
    new MovingObject({ pos: [454, 454], vel: 146, size: 130, value: 4, color: "#F5E6E8" })
]

window.createBoxes = (boxes) => {
    for(let i=0;i<boxes.length; i++){
        boxes[i].drawRect(ctx)
    }
    


}





