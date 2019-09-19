 export default class Board{
    constructor(ctx, width) {
        this.ctx = ctx
        this.width = width 
        // this.w = 130
        this.setup = this.setup.bind(this)
        this.draw = this.draw.bind(this)
        this.addTile = this.addTile.bind(this)
        this.drawGrid = this.drawGrid.bind(this)
        this.boardWipe = this.boardWipe.bind(this)
        
        this.moveUp = this.moveUp.bind(this)
        // this.moveUpHelper = this.moveUpHelper.bind(this)
        
        this.grid = [
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0],
             [0, 0, 0, 0]
         ];
        
    }

   

    addTile() {
        let options = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (this.grid[i][j] === 0) {
                    options.push({
                        x: i ,
                        y: j 
                    })
                }
            }
        }
        if (options.length > 0){
            let spot = options[Math.floor(Math.random() * options.length)];
            let r = Math.random(1);
            this.grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;

        } else {
            alert("game over")
        }
    }
    
    setup() {
        this.addTile();
        this.addTile();
        }

     draw() {
         this.drawGrid()
     }

     drawGrid() {
         let w = 130
         for (let i = 0; i < 4; i++) {
             for (let j = 0; j < 4; j++) {
                 this.ctx.strokeStyle = 'black'
                 
                 this.ctx.strokeRect(j * w + (16 * j) +16, i * w + (16 * i)+16, w, w)
                 let val = this.grid[i][j]
                 if (this.grid[i][j] !== 0) {
                     this.ctx.fillStyle = 'blue'
                     this.ctx.font = '40pt arial'
                     this.ctx.textAlign = 'center center'
                     this.ctx.fillText(val, (j * w + (16 * j) + 66), (i * w + (16 * i) + 101))
                 } else {
                     this.ctx.fillStyle = 'white'
                     this.ctx.strokeRect(j * w + (16 * j) + 16, i * w + (16 * i) + 16, w, w)

                 }
             }
         }
     }   

 


    //  moveUp() {
         
    //      for (let i = 0; i < 4; i++) {
    //         let row = this.grid[i] 
    //         let arr = row.filter(val => val)
    //          let missing = 4 - arr.length;
    //          let zeros = Array(missing).fill(0)
    //          arr = arr.concat(zeros)
                
    //          this.grid[i]=arr
    //          console.log("move registered")
    //         //at any point if the values are the same, combine the values as.  helper function called as a part of the move 
    //         // has to take an argument of a tile 
    //      }

    //      this.addTile()
    //     //  return this.grid
         

    //  }
     
    //  moveDown() {
    //      // if (key === ' '){
    //      for (let i = 0; i < 4; i++) {
    //          let row = this.grid[i]
    //          let arr = row.filter(val => val)
    //          let missing = 4 - arr.length;
    //          let zeros = Array(missing).fill(0)
    //          arr = zeros.concat(arr)

    //          this.grid[i] = arr
    //          console.log("move registered")
    //          // }
    //      }
    //      this.addTile()
    //      //  return this.grid


    //  }

     boardWipe() {
       this.ctx.clearRect(0,0,600,600)
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
                     this.grid[i][j] = 0}
                 }}
        console.log("test")
     }
   
     moveRight() {

         for (let i = 0; i < 4; i++) {
             let row = this.grid[i]
             let arr = row.filter(val => val)
             let missing = 4 - arr.length;
             let zeros = Array(missing).fill(0)
             arr = zeros.concat(arr)
             for(let j=3;j>-1;j--){
                 if(arr[j]===arr[j-1]){
                     arr[j] = arr[j] * 2
                     arr[j-1]= 0
                 } else if (arr[j]===0){
                     arr[j] = arr[j-1] || 0
                     arr[j - 1] = 0
                 }
             }

             this.grid[i] = arr
             console.log("move registered")
             //at any point if the values are the same, combine the values as.  helper function called as a part of the move 
             // has to take an argument of a tile 
         }

         this.addTile()
         //  return this.grid


     }


     moveLeft() {

         for (let i = 0; i < 4; i++) {
             let row = this.grid[i]
             let arr = row.filter(val => val)
             let missing = 4 - arr.length;
             let zeros = Array(missing).fill(0)
             arr = arr.concat(zeros)
             for (let j = 0; j < 4; j++) {
                 if (arr[j] === arr[j + 1]) {
                     arr[j] = arr[j] * 2
                     arr[j + 1] = 0
                 } else if (arr[j] === 0) {
                     arr[j] = arr[j + 1] || 0
                     arr[j + 1] = 0
                 }
             }

             this.grid[i] = arr
             console.log("move registered")
             //at any point if the values are the same, combine the values as.  helper function called as a part of the move 
             // has to take an argument of a tile 
         }

         this.addTile()
         //  return this.grid


     }



     moveUp(){
        //  debugger
         for(let j=0;j<4;j++){
            let layer = []
            for(let i=0;i<=3 ;i++){
                layer.push(this.grid[i][j])
             }
                let arr = layer.filter(val => val)
                let missing = 4 - arr.length
                let zeros = Array(missing).fill(0)
                arr = arr.concat(zeros)
                for (let k = 0; k < 4; k++) {
                    if (arr[k] === arr[k + 1]) {
                        arr[k] = arr[k] * 2
                        arr[k + 1] = 0
                    } else if (arr[k] === 0) {
                        arr[k] = arr[k + 1] || 0
                        // arr[k + 1] = 0
                    }
                }
                // debugger
             for(let g = 0;g<4;g++){
                 this.grid[g][j] = arr[g]
             }
             arr = []
             zeros = []
         }
         this.addTile()
     }

     moveDown() {
         //  debugger
         for (let j = 4; j > -1; j--) {
             let layer = []
             for (let i = 3; i > -1; i--) {
                 layer.push(this.grid[i][j])
             }
             let arr = layer.filter(val => val)
             let missing = 4 - arr.length
             let zeros = Array(missing).fill(0)
             arr = arr.concat(zeros)
             for (let k = 0; k < 4; k++) {
                 if (arr[k] === arr[k + 1]) {
                     arr[k] = arr[k] * 2
                     arr[k + 1] = 0
                 } else if (arr[k] === 0) {
                     arr[k] = arr[k + 1] || 0
                    //  arr[k + 1] = 0
                 }
             }
             // debugger
             for (let g = 0; g < 4; g++) {
                 this.grid[g][j] = arr.pop()
             }
             arr = []
             zeros = []
         }
         this.addTile()
     }
         
         
     

}


 // moveRight(){

//     for(let r=0;r<4;r++){
//         let row = this.grid[r]
//         for (let i = 3; i > -1; i--) {
//         let start = row[i]

//         if (row[i] === 0) {
//             for (let k = i - 1; k > -1; k--) {
//                 if (row[k] !== 0) {
//                     row[i] = row[k]
//                     row[k] = 0}
//                 }

//                 } else if (row[i] !== 0) {
//                     // if (row[i]=== row[i - 1]){
//                     //     row[i] = row[i] * 2
//                     //     row[i -1] = 0
//                     // }
//                     for (let k = i - 1; k > -1; k--) {
//                         if ((row[i] === row[k])&& (i-1) === k) {
//                             row[i] = start * 2
//                             row[k] = 0

//                         } 
//                     }
//                 }
//             }
//             this.grid[r] = row
//         }
//         this.addTile()
//         console.log(this.grid)
//         console.log("right")

//     }

    //  moveLeft() {

    //      for (let r = 0; r < 4; r++) {
    //          let row = this.grid[r]
    //          for (let i = 0; i< 4; i++) {
    //              let start = row[i]

    //              if (row[i] === 0) {
    //                  for (let k = i + 1; k< 4; k++) {
    //                      if (row[k] !== 0) {
    //                          row[i] = row[k]
    //                          row[k] = 0
    //                      }
    //                  }

    //              } else if (row[i] !== 0) {
    //                  // if (row[i]=== row[i - 1]){
    //                  //     row[i] = row[i] * 2
    //                  //     row[i -1] = 0
    //                  // }
    //                  for (let k = i + 1; k < 4; k++) {
    //                      if ((row[i] === row[k]) && (i + 1) === k) {
    //                          row[i] = start * 2
    //                          row[k] = 0

    //                      }
    //                  }
    //              }
    //          }
    //          this.grid[r] = row
    //      }
    //      this.addTile()
    //      console.log(this.grid)
    //      console.log("left")
    //  }