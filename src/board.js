export default class Board {
  constructor(ctx, width) {
    this.ctx = ctx;
    this.width = width;
    // this.w = 130
    this.setup = this.setup.bind(this);
    this.draw = this.draw.bind(this);
    this.addTile = this.addTile.bind(this);
    this.drawGrid = this.drawGrid.bind(this);
    this.boardWipe = this.boardWipe.bind(this);

    this.moveUp = this.moveUp.bind(this);

    this.grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  }

  addTile() {
    let options = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.grid[i][j] === 0) {
          options.push({
            x: i,
            y: j
          });
        }
      }
    }
    if (options.length > 0) {
      let spot = options[Math.floor(Math.random() * options.length)];
      let r = Math.random(1);
      this.grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
    } else {
      alert("game over");
    }
  }

  setup() {
    this.addTile();
    this.addTile();
  }

  draw() {
    this.drawGrid();
  }

  drawGrid() {
    let w = 130;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.ctx.strokeStyle = "black";

        this.ctx.strokeRect(i * w + 16 * i + 16, j * w + 16 * j + 16, w, w);
        let val = this.grid[i][j];
        if (this.grid[i][j] !== 0) {
          this.ctx.fillStyle = "blue";
          this.ctx.font = "40pt arial";
          this.ctx.textAlign = "center center";
          this.ctx.fillText(val, i * w + 16 * i + 66, j * w + 16 * j + 101);
        } else {
          this.ctx.fillStyle = "white";
          this.ctx.strokeRect(i * w + 16 * i + 16, j * w + 16 * j + 16, w, w);
        }
      }
    }
  }

  moveUp() {
    for (let i = 0; i < 4; i++) {
      let row = this.grid[i];
      let arr = row.filter(val => val);
      let missing = 4 - arr.length;
      let zeros = Array(missing).fill(0);
      arr = arr.concat(zeros);

      this.grid[i] = arr;
      console.log("move registerd");
      //at any point if the values are the same, combine the values as.  helper function called as a part of the move
      // has to take an argument of a tile
    }

    this.addTile();
    //  return this.grid
  }
  // moveUp() {
  //     for (let i = 0; i< 4; i++){
  //         let row = this.grid[i]
  //         for (j=0;j<4;j++){
  //             if (row[j]=== 0){

  //             }
  //         }
  //     }
  // }

  moveDown() {
    // if (key === ' '){
    for (let i = 0; i < 4; i++) {
      let row = this.grid[i];
      let arr = row.filter(val => val);
      let missing = 4 - arr.length;
      let zeros = Array(missing).fill(0);
      arr = zeros.concat(arr);

      this.grid[i] = arr;
      console.log("move registerd");
      // }
    }
    this.addTile();
    //  return this.grid
  }

  boardWipe() {
    this.ctx.clearRect(0, 0, 600, 600);
  }
}
