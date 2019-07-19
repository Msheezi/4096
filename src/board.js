export default class Board{
    constructor() {
        this.board = Board.makeGrid()

    }

    makeGrid() {
       const grid = [];

       for (let i = 0; i < 4; i++) {
           grid.push([]);
           for (let j = 0; j < 4; j++) {
               grid[i].push(null);
           }
       }

       return grid;
   }
}
