/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\nclass Board {\n  constructor(ctx, width) {\n    this.ctx = ctx;\n    this.width = width;\n    // this.w = 130\n    this.setup = this.setup.bind(this);\n    this.draw = this.draw.bind(this);\n    this.addTile = this.addTile.bind(this);\n    this.drawGrid = this.drawGrid.bind(this);\n    this.boardWipe = this.boardWipe.bind(this);\n    this.moveUp = this.moveUp.bind(this);\n    this.textAligner = this.textAligner.bind(this);\n\n    this.grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];\n    this.color = {\n      2: \"#4DF52F\",\n      4: \"#27CD45\",\n      8: \"#23A23A\",\n      16: \"#44B0CD\",\n      32: \"#3BD5DF\",\n      64: \"#23F2F5\",\n      128: \"#FCAB09\",\n      256: \"#F3BD20\",\n      512: \"#FBE066\",\n      1024: \"F59C44\",\n      2048: \"#F27D31\",\n      4096: \"#EB260B\"\n    };\n  }\n\n  addTile() {\n    let options = [];\n    for (let i = 0; i < 4; i++) {\n      for (let j = 0; j < 4; j++) {\n        if (this.grid[i][j] === 0) {\n          options.push({\n            x: i,\n            y: j\n          });\n        }\n      }\n    }\n    if (options.length > 0) {\n      let spot = options[Math.floor(Math.random() * options.length)];\n      let r = Math.random(1);\n      this.grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;\n    } else {\n      alert(\"game over\");\n    }\n  }\n\n  setup() {\n    this.addTile();\n    this.addTile();\n  }\n\n  draw() {\n    this.drawGrid();\n  }\n\n  drawGrid() {\n    let w = 130;\n    for (let i = 0; i < 4; i++) {\n      for (let j = 0; j < 4; j++) {\n        this.ctx.strokeStyle = \"white\";\n\n        this.ctx.strokeRect(j * w + 16 * j + 16, i * w + 16 * i + 16, w, w);\n        let val = this.grid[i][j];\n\n        if (this.grid[i][j] !== 0) {\n          this.ctx.fillStyle = \"#CDC1B4\";\n          this.ctx.fillRect(j * w + j * 16 + 20, i * w + i * 16 + 20, 122, 122); // ctx.drawImage if you have an image\n          this.ctx.fillStyle = this.color[val];\n          this.ctx.font = \"40pt arial\";\n          this.ctx.textAlign = \"center center\";\n\n          this.ctx.fillText(\n            val,\n            j * w + 16 * j + this.textAligner(val),\n            i * w + 16 * i + 101\n          );\n        } else {\n          this.ctx.fillStyle = \"white\";\n          this.ctx.strokeRect(j * w + 16 * j + 16, i * w + 16 * i + 16, w, w);\n        }\n      }\n    }\n  }\n\n  textAligner(val) {\n    if (val < 10) {\n      return 66;\n    } else if (val >= 10 && val < 100) {\n      return 56;\n    } else if (val > 100 && val < 1000) {\n      return 40;\n    } else if (val >= 1000) {\n      return 20;\n    }\n  }\n\n  boardWipe() {\n    this.ctx.clearRect(0, 0, 600, 600);\n  }\n\n  restart() {\n    for (let i = 0; i < 4; i++) {\n      for (let j = 0; j < 4; j++) {\n        if (this.grid[i][j] !== 0) {\n          this.grid[i][j] = 0;\n        }\n      }\n    }\n  }\n\n  moveRight() {\n    for (let i = 0; i < 4; i++) {\n      let row = this.grid[i];\n      let arr = row.filter(val => val);\n      let missing = 4 - arr.length;\n      let zeros = Array(missing).fill(0);\n      arr = zeros.concat(arr);\n      for (let j = 3; j > -1; j--) {\n        if (arr[j] === arr[j - 1]) {\n          arr[j] = arr[j] * 2;\n          arr[j - 1] = 0;\n        } else if (arr[j] === 0) {\n          arr[j] = arr[j - 1] || 0;\n          arr[j - 1] = 0;\n        }\n      }\n\n      this.grid[i] = arr;\n    }\n\n    this.addTile();\n  }\n\n  moveLeft() {\n    for (let i = 0; i < 4; i++) {\n      let row = this.grid[i];\n      let arr = row.filter(val => val);\n      let missing = 4 - arr.length;\n      let zeros = Array(missing).fill(0);\n      arr = arr.concat(zeros);\n      for (let j = 0; j < 4; j++) {\n        if (arr[j] === arr[j + 1]) {\n          arr[j] = arr[j] * 2;\n          arr[j + 1] = 0;\n        } else if (arr[j] === 0) {\n          arr[j] = arr[j + 1] || 0;\n          arr[j + 1] = 0;\n        }\n      }\n\n      this.grid[i] = arr;\n    }\n\n    this.addTile();\n  }\n\n  moveUp() {\n    for (let j = 0; j <= 3; j++) {\n      let layer = [];\n      for (let i = 0; i <= 3; i++) {\n        layer.push(this.grid[i][j]);\n      }\n      let arr = layer.filter(val => val);\n      let missing = 4 - arr.length;\n      let zeros = Array(missing).fill(0);\n      arr = arr.concat(zeros);\n      for (let k = 0; k < 4; k++) {\n        if (arr[k] === arr[k + 1]) {\n          arr[k] = arr[k] * 2;\n          arr[k + 1] = 0;\n        } else if (arr[k] === 0) {\n          if (arr[k + 1] === undefined) {\n            arr[k] = 0;\n          } else {\n            arr[k] = arr[k + 1];\n            arr[k + 1] = 0;\n          }\n        }\n      }\n      for (let g = 0; g <= 3; g++) {\n        this.grid[g][j] = arr[g];\n      }\n      arr = [];\n      zeros = [];\n    }\n    this.addTile();\n  }\n\n  moveDown() {\n    for (let j = 3; j >= 0; j--) {\n      let layer = [];\n      for (let i = 3; i > -1; i--) {\n        layer.push(this.grid[i][j]);\n      }\n      let arr = layer.filter(val => val);\n      let missing = 4 - arr.length;\n      let zeros = Array(missing).fill(0);\n      arr = arr.concat(zeros);\n      for (let k = 0; k < 4; k++) {\n        if (arr[k] === arr[k + 1]) {\n          arr[k] = arr[k] * 2;\n          arr[k + 1] = 0;\n        } else if (arr[k] === 0) {\n          if (arr[k + 1] === undefined) {\n            arr[k] = 0;\n          } else {\n            arr[k] = arr[k + 1];\n            arr[k + 1] = 0;\n          }\n        }\n      }\n      // debugger\n      for (let g = 0; g < 4; g++) {\n        this.grid[g][j] = arr.pop();\n      }\n      arr = [];\n      zeros = [];\n    }\n    this.addTile();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: CANVAS_WIDTH, CANVAS_HEIGHT, TILE_HEIGHT, TILE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_WIDTH\", function() { return CANVAS_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_HEIGHT\", function() { return CANVAS_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_HEIGHT\", function() { return TILE_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TILE_WIDTH\", function() { return TILE_WIDTH; });\n\nconst CANVAS_WIDTH = 600\nconst CANVAS_HEIGHT = 600\nconst TILE_HEIGHT = 130\nconst TILE_WIDTH = 130\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n\n\nclass Game {\n  constructor(ctx) {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_WIDTH\"]);\n    this.gameView = new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, this.board);\n    this.inputHandler = new _input__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.board);\n  }\n\n  init() {\n    this.board.setup();\n    this.gameView.start();\n  }\n\n  restart() {\n    this.gameView.newGame();\n    this.board = this.gameView.board;\n    this.inputHandler.board = this.board;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass GameView {\n  constructor(ctx, board) {\n    this.ctx = ctx;\n    this.board = board;\n\n    window.newGame = this.newGame.bind(this);\n    window.stopLoop = this.cancelAnimation.bind(this);\n  }\n\n  start() {\n    this.lastTime = 0;\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  newGame() {\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, _constants__WEBPACK_IMPORTED_MODULE_1__[\"CANVAS_WIDTH\"]);\n    this.board.setup();\n  }\n\n  cancelAnimation() {\n    cancelAnimationFrame(this.frame);\n  }\n\n  animate(time) {\n    this.frame = requestAnimationFrame(this.animate.bind(this));\n    const deltaTime = time - this.lastTime;\n    this.lastTime = time;\n    this.board.boardWipe();\n    this.board.draw();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"];\n  canvas.height = _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_HEIGHT\"];\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, _constants__WEBPACK_IMPORTED_MODULE_0__[\"CANVAS_WIDTH\"]);\n  game.init();\n  document\n    .getElementById(\"newgame\")\n    .addEventListener(\"click\", game.restart.bind(game));\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\nclass InputHandler {\n  constructor(board) {\n    this.board = board;\n\n    document.addEventListener(\"keydown\", event => {\n      //   alert(event.keyCode)\n      switch (event.keyCode) {\n        case 38:\n          this.board.moveUp(); //move up\n          break;\n        case 40:\n          this.board.moveDown(); //move down\n          break;\n        case 37:\n          this.board.moveLeft();\n          break;\n        case 39:\n          this.board.moveRight();\n          break;\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ })

/******/ });