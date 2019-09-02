import board from './board'

export default class InputHandler {
    constructor(board) {
        this.board = board
        
        document.addEventListener('keydown', (event)=>{
        //   alert(event.keyCode)  
          switch (event.keyCode){
              case 38: board.moveUp()//move up
              break;
              case 40: board.moveDown() //move down
                  break;
              case 37: //move left
                  break;
              case 39: //move right
                  break;

          }
        })
        
        


    }
}