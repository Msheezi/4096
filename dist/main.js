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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\nclass Board{\n    constructor() {\n        this.board = Board.makeGrid()\n\n    }\n\n    makeGrid() {\n       const grid = [];\n\n       for (let i = 0; i < 4; i++) {\n           grid.push([]);\n           for (let j = 0; j < 4; j++) {\n               grid[i].push(null);\n           }\n       }\n\n       return grid;\n   }\n}\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\n\n\n\nconsole.log(\"webpacking beetches\")\n\nconst canvas = document.getElementById('game-canvas')\n  \nconst ctx = canvas.getContext('2d')\n\n\n\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.ctx = ctx;\nwindow.boxes = [\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [16, 16], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [162, 16], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [308, 16], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [454, 16], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [16, 162], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [162, 162], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [308, 162], vel: 146, size: 130, value: 4, color: \"#F5E6E8\"}),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [454, 162], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [16, 308], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [162, 308], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [308, 308], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [454, 308], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [16, 454], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [162, 454], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [308, 454], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" }),\n    new _moving_object_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ pos: [454, 454], vel: 146, size: 130, value: 4, color: \"#F5E6E8\" })\n]\n\nwindow.createBoxes = (boxes) => {\n    for(let i=0;i<boxes.length; i++){\n        boxes[i].drawRect(ctx)\n    }\n    \n\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\n\nclass MovingObject{\n    constructor(options) {\n\n        this.pos = options.pos,\n        this.vel = options.vel,\n        this.width = options.size, //width and size needed for movements\n        this.height = options.size, // height needed for movements and drawing and clearing\n        this.value = options.value, // point value that will increase in collisions\n        this.color = options.color, // update the color of the object based on its current value?\n         // this is updated during the collision \n\n        this.drawRect = this.drawRect.bind(this)\n    }\n    \n\n    drawRect(ctx){\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.pos[0], this.pos[1],this.width,this.height);\n        ctx.fillStyle = '#292F36';\n        ctx.font = \"40pt arial\";\n        ctx.fillText(`${this.value}`, this.pos[0] + 50 , this.pos[1] + 85 );\n    }\n\n    move(ctx) {\n        ctx.clearRect(this.pos[0], this.pos[1], this.width, this.height);\n        this.pos[0] += this.vel\n        this.pos[1] += this.vel ///need to update the movement logic based on the keyboard input value\n        this.drawRect(ctx)\n    }\n\n    placeRandomTile(ctx) {\n        // run check for empty space\n        // if spot is empty, draw tile by getting placing tile coordinates in into object\n        // \n    }\n\n    isSpotEmpty() {\n        // iterate through grid spaces or select random location and return a boolean if empty.  if no empties found, end game\n        // \n    }\n\n    gameOver() {\n        //if no empty spaces game ends in loss\n        // if value of tiles equals 4096 game ends in win\n    }\n\n    // createBoxes(ctx) {\n        \n        \n    // }\n\n}\n\n\n// const mo = new MovingObject(\n//     {pos: [30,30], vel: [10,10], radius: 5, color: \"#00FF00\"}\n// )\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ });