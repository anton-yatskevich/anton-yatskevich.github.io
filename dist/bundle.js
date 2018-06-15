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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/background/0.jpg":
/*!****************************************!*\
  !*** ./assets/images/background/0.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/background/0.jpg";

/***/ }),

/***/ "./assets/images/background/2.jpg":
/*!****************************************!*\
  !*** ./assets/images/background/2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/background/2.jpg";

/***/ }),

/***/ "./assets/images/player/body/0.png":
/*!*****************************************!*\
  !*** ./assets/images/player/body/0.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/body/0.png";

/***/ }),

/***/ "./assets/images/player/body/1.png":
/*!*****************************************!*\
  !*** ./assets/images/player/body/1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/body/1.png";

/***/ }),

/***/ "./assets/images/player/body/2.png":
/*!*****************************************!*\
  !*** ./assets/images/player/body/2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/body/2.png";

/***/ }),

/***/ "./assets/images/player/body/3.png":
/*!*****************************************!*\
  !*** ./assets/images/player/body/3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/body/3.png";

/***/ }),

/***/ "./assets/images/player/body/4.png":
/*!*****************************************!*\
  !*** ./assets/images/player/body/4.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/body/4.png";

/***/ }),

/***/ "./assets/images/player/face/0.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/0.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/0.png";

/***/ }),

/***/ "./assets/images/player/face/1.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/1.png";

/***/ }),

/***/ "./assets/images/player/face/2.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/2.png";

/***/ }),

/***/ "./assets/images/player/face/3.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/3.png";

/***/ }),

/***/ "./assets/images/player/face/4.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/4.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/4.png";

/***/ }),

/***/ "./assets/images/player/face/5.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/5.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/5.png";

/***/ }),

/***/ "./assets/images/player/face/6.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/6.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/6.png";

/***/ }),

/***/ "./assets/images/player/face/7.png":
/*!*****************************************!*\
  !*** ./assets/images/player/face/7.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/face/7.png";

/***/ }),

/***/ "./assets/images/player/gun/0.png":
/*!****************************************!*\
  !*** ./assets/images/player/gun/0.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/gun/0.png";

/***/ }),

/***/ "./assets/images/player/gun/1.png":
/*!****************************************!*\
  !*** ./assets/images/player/gun/1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/gun/1.png";

/***/ }),

/***/ "./assets/images/player/gun/2.png":
/*!****************************************!*\
  !*** ./assets/images/player/gun/2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/gun/2.png";

/***/ }),

/***/ "./assets/images/player/gun/3.png":
/*!****************************************!*\
  !*** ./assets/images/player/gun/3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/gun/3.png";

/***/ }),

/***/ "./assets/images/player/gun/5.png":
/*!****************************************!*\
  !*** ./assets/images/player/gun/5.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/gun/5.png";

/***/ }),

/***/ "./assets/images/player/hair/0.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/0.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/0.png";

/***/ }),

/***/ "./assets/images/player/hair/1.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/1.png";

/***/ }),

/***/ "./assets/images/player/hair/2.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/2.png";

/***/ }),

/***/ "./assets/images/player/hair/3.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/3.png";

/***/ }),

/***/ "./assets/images/player/hair/4.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/4.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/4.png";

/***/ }),

/***/ "./assets/images/player/hair/5.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/5.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/5.png";

/***/ }),

/***/ "./assets/images/player/hair/6.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/6.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/6.png";

/***/ }),

/***/ "./assets/images/player/hair/7.png":
/*!*****************************************!*\
  !*** ./assets/images/player/hair/7.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/player/hair/7.png";

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/BattleField.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/BattleField.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".battle-field { \r\n    position: relative;\r\n    background-color: white;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-position: bottom center;\r\n    background-size: 100% 100%; \r\n    overflow: hidden;\r\n}\r\n\r\n.battle-field-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20px 40px;\r\n    text-transform: uppercase;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n}\r\n\r\n.player-name {\r\n    width: 40%;\r\n}\r\n\r\n.opponent-name {\r\n    width: 40%;\r\n    text-align: right;\r\n}\r\n\r\n.player-container {\r\n    position: absolute;\r\n    bottom: 100px;\r\n    left: 100px;\r\n    width: 600px;\r\n    height: 350px;\r\n}\r\n\r\n.opponent-container {\r\n    position: absolute;\r\n    bottom: 100px;\r\n    right: 100px;\r\n    width: 600px;\r\n    height: 350px;\r\n    transform: scale(-1, 1)\r\n}\r\n\r\n\r\n.health-bar {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 0 40px;\r\n}\r\n\r\n.bar {\r\n    height: 30px;\r\n    width: 500px;\r\n    border: 2px solid grey;\r\n}\r\n\r\n.player-health-bar {\r\n    \r\n}\r\n\r\n.opponent-health-bar {\r\n    transform: scale(-1, 1);\r\n}\r\n\r\n.throwableObj {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: -100px;\r\n    left: calc(100vw + 100vh);\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/5.png */ "./assets/images/player/gun/5.png")) + ");\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n    z-index: 100;\r\n}\r\n\r\n.attack-button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 10px auto;\r\n    height: 130px;\r\n    width: 130px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n    font-weight: bold;\r\n    background-image: radial-gradient(circle at center, #fff, lightgrey 100%);\r\n    transition: 0.5s;\r\n}\r\n\r\n.attack-button:hover {\r\n    background-image: radial-gradient(circle at center, #fff, rgb(220, 220, 220) 100%);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.buttons-block button {\r\n    margin: 0 30px;\r\n}\r\n\r\n\r\n.score-container {\r\n    width: 40%;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.score-container ol li {\r\n    padding: 10px;\r\n    border-bottom: 1px solid #000000;\r\n}\r\n\r\n.score-container ol li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.score-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n/* .attack-button:active {\r\n    border:\r\n} */", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/bundle.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/bundle.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./normalize.css */ "./node_modules/css-loader/index.js!./src/style/normalize.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./configPage.css */ "./node_modules/css-loader/index.js!./src/style/configPage.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./character.css */ "./node_modules/css-loader/index.js!./src/style/character.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./BattleField.css */ "./node_modules/css-loader/index.js!./src/style/BattleField.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./mathTask.css */ "./node_modules/css-loader/index.js!./src/style/mathTask.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./translationTask.css */ "./node_modules/css-loader/index.js!./src/style/translationTask.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./compaundWordTask.css */ "./node_modules/css-loader/index.js!./src/style/compaundWordTask.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./reorderTask.css */ "./node_modules/css-loader/index.js!./src/style/reorderTask.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./main.css */ "./node_modules/css-loader/index.js!./src/style/main.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./startPage.css */ "./node_modules/css-loader/index.js!./src/style/startPage.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./characterAnimations.css */ "./node_modules/css-loader/index.js!./src/style/characterAnimations.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./modalWindow.css */ "./node_modules/css-loader/index.js!./src/style/modalWindow.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader!./task.css */ "./node_modules/css-loader/index.js!./src/style/task.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/character.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/character.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-with-gun {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-position: -1500px -200px;\r\n    bottom: 0;\r\n    left: -50px;\r\n    width: 500px;\r\n    height: 300px;\r\n}\r\n\r\n.body-free-hands {\r\n    position: absolute;\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/body/4.png */ "./assets/images/player/body/4.png")) + ");\r\n    background-repeat: no-repeat;\r\n    background-position: -3000px 100px;\r\n    bottom: -207px;\r\n    left: -50px;\r\n    width: 500px;\r\n    height: 600px;\r\n    z-index: 1;\r\n}\r\n\r\n.body-shooter {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/0.png */ "./assets/images/player/gun/0.png")) + ");\r\n    background-position: -5500px 100px;\r\n    bottom: 0;\r\n    left: -50px;\r\n    width: 500px;\r\n    height: 600px;\r\n    z-index: 100;\r\n}\r\n\r\n\r\n.body-0 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/body/0.png */ "./assets/images/player/body/0.png")) + ");\r\n}\r\n\r\n.body-1 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/body/1.png */ "./assets/images/player/body/1.png")) + ");\r\n}\r\n\r\n.body-2 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/body/2.png */ "./assets/images/player/body/2.png")) + ");\r\n}\r\n\r\n.body-3 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/body/3.png */ "./assets/images/player/body/3.png")) + ");\r\n}\r\n\r\n.gun-0 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/0.png */ "./assets/images/player/gun/0.png")) + ");\r\n}\r\n\r\n.gun-1 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/1.png */ "./assets/images/player/gun/1.png")) + ");\r\n}\r\n\r\n.gun-2 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/2.png */ "./assets/images/player/gun/2.png")) + ");\r\n}\r\n\r\n.gun-3 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/gun/3.png */ "./assets/images/player/gun/3.png")) + ");\r\n}\r\n\r\n.head {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: relative;\r\n    left: 190px;\r\n    top: 24px;\r\n    z-index: 2;\r\n}\r\n\r\n.face {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.face-0 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/0.png */ "./assets/images/player/face/0.png")) + ");\r\n}\r\n\r\n.face-1 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/1.png */ "./assets/images/player/face/1.png")) + ");\r\n}\r\n\r\n.face-2 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/2.png */ "./assets/images/player/face/2.png")) + ");\r\n}\r\n\r\n.face-3 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/3.png */ "./assets/images/player/face/3.png")) + ");\r\n}\r\n\r\n.face-4 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/4.png */ "./assets/images/player/face/4.png")) + ");\r\n}\r\n\r\n.face-5 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/5.png */ "./assets/images/player/face/5.png")) + ");\r\n}\r\n\r\n.face-6 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/6.png */ "./assets/images/player/face/6.png")) + ");\r\n}\r\n\r\n.face-7 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/face/7.png */ "./assets/images/player/face/7.png")) + ");\r\n}\r\n\r\n.hairstyle {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    left: -20px;\r\n    top: -26px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.hairstyle-0 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/0.png */ "./assets/images/player/hair/0.png")) + ");\r\n    left: -22px;\r\n    top: -24px\r\n}\r\n\r\n.hairstyle-1 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/1.png */ "./assets/images/player/hair/1.png")) + ");\r\n    left: -5px;\r\n    top: -15px;\r\n}\r\n\r\n.hairstyle-2 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/2.png */ "./assets/images/player/hair/2.png")) + ");\r\n    left: -20px;\r\n    top: -5px;\r\n}\r\n\r\n.hairstyle-3 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/3.png */ "./assets/images/player/hair/3.png")) + ");\r\n    left: -5px;\r\n    top: -10px;\r\n}\r\n\r\n.hairstyle-4 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/4.png */ "./assets/images/player/hair/4.png")) + ");\r\n    left: -5px;\r\n    top: -10px;\r\n}\r\n\r\n.hairstyle-5 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/5.png */ "./assets/images/player/hair/5.png")) + ");\r\n    left: -28px;\r\n    top: -40px;\r\n}\r\n\r\n.hairstyle-6 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/6.png */ "./assets/images/player/hair/6.png")) + ");\r\n}\r\n\r\n.hairstyle-7 {\r\n    background-image: url(" + escape(__webpack_require__(/*! ../../assets/images/player/hair/7.png */ "./assets/images/player/hair/7.png")) + ");\r\n    left: 4px;\r\n    top: 0px;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/characterAnimations.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/characterAnimations.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes body-attack-shot {\r\n    0%\r\n    {\r\n        background-position: 0px 100px;    \r\n    }\r\n    3%\r\n    {\r\n        background-position: -500px 100px;\r\n    }\r\n    6%\r\n    {\r\n        background-position: -1000px 100px;\r\n    }\r\n    9%\r\n    {\r\n        background-position: -1500px 100px;\r\n    }\r\n    40%\r\n    {\r\n        background-position: -2000px 100px;\r\n    }\r\n    50%\r\n    {\r\n        background-position: -2500px 100px;\r\n    }\r\n    60%\r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    70%\r\n    {\r\n        background-position: -3500px 100px;\r\n    }\r\n    80%\r\n    {\r\n        background-position: -4000px 100px;\r\n    }\r\n    90%\r\n    {\r\n        background-position: -4500px 100px;\r\n    }\r\n    95%\r\n    {\r\n        background-position: -5000px 100px;\r\n    }\r\n    100%\r\n    {\r\n        background-position: -5500px 100px;\r\n    }\r\n}\r\n\r\n@keyframes body-opponent-last-shot {\r\n    0%\r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    45%\r\n    {\r\n        background-position: -3500px 100px;\r\n    }\r\n    50%\r\n    {\r\n        background-position: -4000px 100px;\r\n    }\r\n    60%\r\n    {\r\n        background-position: -4500px 100px;\r\n    }\r\n    70%\r\n    {\r\n        background-position: -6500px 100px;\r\n    }\r\n    75%\r\n    {\r\n        background-position: -7000px 100px;\r\n    }\r\n    80%\r\n    {\r\n        background-position: -7500px 100px;\r\n    }\r\n    85%\r\n    {\r\n        background-position: -8000px 100px;\r\n    }\r\n    90%\r\n    {\r\n        background-position: -8500px 100px;\r\n    }\r\n    100%\r\n    {\r\n        background-position: -8500px 100px;\r\n    }\r\n}\r\n\r\n@keyframes body-opponent-shot {\r\n    0%\r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    45%\r\n    {\r\n        background-position: -3500px 100px;\r\n    }\r\n    50%\r\n    {\r\n        background-position: -4000px 100px;\r\n    }\r\n    60%\r\n    {\r\n        background-position: -4500px 100px;\r\n    }\r\n    70%\r\n    {\r\n        background-position: -5500px 100px;\r\n    }\r\n    75%\r\n    {\r\n        background-position: -6000px 100px;\r\n    }\r\n    80%\r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    100%\r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n}\r\n\r\n@keyframes head-opponent-shot {\r\n    45%\r\n    {\r\n        top: 33px;\r\n        transform: rotateZ(12deg);\r\n    }\r\n    50%\r\n    {\r\n        left: 114px;\r\n        top: 45px;\r\n        transform: rotateZ(15deg);\r\n    }\r\n    60%\r\n    {\r\n        left: 77px;\r\n        top: 26px;\r\n        transform: rotateZ(-36deg);\r\n    }\r\n    70%\r\n    {\r\n        left: 126px;\r\n        top: 14px;\r\n        transform: rotateZ(-23deg);\r\n    }\r\n    75%\r\n    {\r\n        left: 186px;\r\n        top: 18px;\r\n        transform: rotateZ(-7deg);\r\n    }\r\n    80%\r\n    {\r\n        left: 190px;\r\n        top: 24px;\r\n        transform: rotateZ(0deg);\r\n    }\r\n}\r\n\r\n@keyframes head-opponent-last-shot {\r\n    45%\r\n    {\r\n        top: 33px;\r\n        transform: rotateZ(12deg);\r\n    }\r\n    50%\r\n    {\r\n        left: 114px;\r\n        top: 45px;\r\n        transform: rotateZ(15deg);\r\n    }\r\n    60%\r\n    {\r\n        left: 77px;\r\n        top: 26px;\r\n        transform: rotateZ(-36deg);\r\n    }\r\n    70%\r\n    {\r\n        left: 53px;\r\n        top: 48px;\r\n        transform: rotateZ(-43deg);\r\n    }\r\n    75%\r\n    {\r\n        left: 40px;\r\n        top: 71px;\r\n        transform: rotateZ(-42deg);\r\n    }\r\n    80%\r\n    {\r\n        left: -5px;\r\n        top: 137px;\r\n        transform: rotateZ(-42deg);\r\n    }\r\n    85%\r\n    {\r\n        left: -11px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n    90%\r\n    {\r\n        left: -32px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n    100%\r\n    {\r\n        left: -32px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n}\r\n\r\n\r\n@keyframes head-attack-shot {\r\n    0%\r\n    {\r\n        \r\n        transform: rotateZ(0deg);\r\n    }\r\n    25%\r\n    {\r\n        left: 180px;\r\n        top: 45px;\r\n        transform: rotateZ(27deg)\r\n    }\r\n    30%\r\n    {\r\n        left: 190px;\r\n        top: 24px;\r\n        transform: rotateZ(0deg);\r\n    }\r\n    50%\r\n    {\r\n        left: 184px;\r\n        top: 17px;\r\n        transform: rotateZ(-7deg);\r\n    }\r\n    60%\r\n    {\r\n        left: 170px;\r\n        top: 10px;\r\n        transform: rotateZ(-15deg);\r\n    }\r\n    70%\r\n    {\r\n        left: 184px;\r\n        top: 17px;\r\n        transform: rotateZ(-7deg);\r\n    }\r\n    80%\r\n    {\r\n        left: 190px;\r\n        top: 24px;\r\n        transform: rotateZ(0deg);\r\n    }\r\n}\r\n\r\n\r\n@keyframes body-attack-throw {\r\n    0%\r\n    {\r\n        background-position: 0px 100px;    \r\n    }\r\n    20%\r\n    {\r\n        background-position: -500px 100px;    \r\n    }\r\n    25%\r\n    {\r\n        background-position: -1000px 100px;    \r\n    }\r\n    30%\r\n    {\r\n        background-position: -1500px 100px;    \r\n    }\r\n    35%\r\n    {\r\n        background-position: -2000px 100px;    \r\n    }\r\n    40%\r\n    {\r\n        background-position: -2500px 100px;    \r\n    }\r\n    45%\r\n    {\r\n        background-position: -3000px 100px;    \r\n    }\r\n}\r\n\r\n@keyframes head-attack-throw {\r\n    0%\r\n    {\r\n        left: 175px;\r\n        top: 33px;\r\n        transform: rotateZ(10deg);\r\n    }\r\n   \r\n    20%\r\n    {\r\n        left: 160px;\r\n        top: 23px;\r\n        transform: rotateZ(-10deg);\r\n    }\r\n    25%\r\n    {\r\n        left: 172px;\r\n        top: 37px;\r\n        transform: rotateZ(10deg); \r\n    }\r\n    30%\r\n    {\r\n        left: 220px;\r\n        top: 55px;\r\n        transform: rotateZ(23deg);\r\n        z-index: 0;\r\n    }\r\n    35%\r\n    {\r\n        left: 200px;\r\n        top: 52px;\r\n        transform: rotateZ(30deg);\r\n    }\r\n    40%\r\n    {\r\n        left: 195px;\r\n        top: 32px;\r\n        transform: rotateZ(10deg);\r\n    }\r\n    45%\r\n    {\r\n        left: 190px;\r\n        top: 24px;\r\n        transform: rotateZ(0deg);\r\n    }  \r\n}\r\n\r\n@keyframes body-opponent-throw {\r\n    50% \r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    55% \r\n    {\r\n        background-position: -5500px 100px;\r\n    }\r\n    60% \r\n    {\r\n        background-position: -5000px 100px;\r\n    }\r\n    65% \r\n    {\r\n        background-position: -5500px 100px;\r\n    }\r\n    70% {\r\n        background-position: -3000px 100px;\r\n    }\r\n}\r\n\r\n@keyframes body-opponent-last-throw {\r\n    50% \r\n    {\r\n        background-position: -3000px 100px;\r\n    }\r\n    55% \r\n    {\r\n        background-position: -5500px 100px;\r\n    }\r\n    60% \r\n    {\r\n        background-position: -5000px 100px;\r\n    }\r\n    65% \r\n    {\r\n        background-position: -6500px 100px;\r\n    }\r\n    70% {\r\n        background-position: -7000px 100px;\r\n    }\r\n    75% {\r\n        background-position: -7500px 100px;\r\n    }\r\n    80% {\r\n        background-position: -8000px 100px;\r\n    }\r\n    85% {\r\n        background-position: -8500px 100px;\r\n    }\r\n    100% {\r\n        background-position: -8500px 100px;\r\n    }\r\n}\r\n\r\n@keyframes head-opponent-throw {\r\n    50% \r\n    {\r\n        left: 176px;\r\n        top: 11px;\r\n        transform: rotateZ(-15deg);\r\n    }\r\n    55% \r\n    {\r\n        left: 126px;\r\n        top: 10px;\r\n        transform: rotateZ(-30deg);\r\n    }\r\n    60% \r\n    {\r\n        left: 79px;\r\n        top: 18px;\r\n        transform: rotateZ(-44deg);\r\n    }\r\n    65% \r\n    {\r\n        left: 126px;\r\n        top: 10px;\r\n        transform: rotateZ(-30deg);\r\n    }\r\n    70% {\r\n        left: 190px;\r\n        top: 24px;\r\n        transform: rotateZ(0deg);\r\n    }\r\n}\r\n\r\n@keyframes head-opponent-last-throw {\r\n    50% \r\n    {\r\n        left: 176px;\r\n        top: 11px;\r\n        transform: rotateZ(-15deg);\r\n    }\r\n    55% \r\n    {\r\n        left: 126px;\r\n        top: 10px;\r\n        transform: rotateZ(-30deg);\r\n    }\r\n    60% \r\n    {\r\n        left: 79px;\r\n        top: 18px;\r\n        transform: rotateZ(-44deg);\r\n    }\r\n    65%\r\n    {\r\n        left: 53px;\r\n        top: 48px;\r\n        transform: rotateZ(-43deg);\r\n    }\r\n    70%\r\n    {\r\n        left: 40px;\r\n        top: 71px;\r\n        transform: rotateZ(-42deg);\r\n    }\r\n    75%\r\n    {\r\n        left: -5px;\r\n        top: 137px;\r\n        transform: rotateZ(-42deg);\r\n    }\r\n    80%\r\n    {\r\n        left: -11px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n    85%\r\n    {\r\n        left: -32px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n    100%\r\n    {\r\n        left: -32px;\r\n        top: 186px;\r\n        transform: rotateZ(-50deg);\r\n    }\r\n}\r\n\r\n\r\n@keyframes potato-correct-throw {\r\n    0%\r\n    {\r\n        top: 195px;\r\n        left: 125px;\r\n    }\r\n    19.9% \r\n    {\r\n        top: 195px;\r\n        left: 125px;\r\n    }\r\n    20%\r\n    {\r\n        top: 135px;\r\n        left: 115px;\r\n    }\r\n    24.9% \r\n    {\r\n        top: 135px;\r\n        left: 115px;\r\n    }\r\n    25%\r\n    {\r\n        top: 50px;\r\n        left: 135px;\r\n        transform: rotateZ(30deg);\r\n    }\r\n    29.9% \r\n    {\r\n        top: 50px;\r\n        left: 135px;\r\n        transform: rotateZ(30deg);\r\n    }\r\n    30%\r\n    {\r\n        top: 50px;\r\n        left: 340px;\r\n        transform: rotateZ(90deg);\r\n    }\r\n    50%\r\n    {\r\n        top: 20px;\r\n        left: calc(100vw - 350px - 150px);\r\n        transform: rotateZ(1080deg);\r\n    }\r\n    70%\r\n    {\r\n        top: -200px;\r\n        left: calc(100vw);\r\n    }\r\n}\r\n\r\n.body-attack-shot-anim {\r\n    animation: body-attack-shot  3s steps(1);\r\n}\r\n\r\n.body-opponent-shot-anim {\r\n    animation: body-opponent-shot  3s steps(1);\r\n}\r\n\r\n.body-opponent-final-shot {\r\n    animation: body-opponent-last-shot 3s forwards steps(1);\r\n}\r\n\r\n.head-opponent-final-shot {\r\n    animation: head-opponent-last-shot 3s forwards steps(1);\r\n}\r\n\r\n.head-attack-shot-anim {\r\n    animation: head-attack-shot 3s steps(1);\r\n}\r\n\r\n.head-opponent-shot-anim {\r\n    animation: head-opponent-shot 3s steps(1);\r\n}\r\n\r\n.body-attack-throw-anim {\r\n    animation: body-attack-throw 3s steps(1);\r\n}\r\n\r\n.head-attack-throw-anim {\r\n    animation: head-attack-throw 3s steps(1);\r\n}\r\n\r\n.body-opponent-throw-anim {\r\n    animation: body-opponent-throw 3s steps(1);\r\n}\r\n\r\n.head-opponent-throw-anim {\r\n    animation: head-opponent-throw 3s steps(1);\r\n}\r\n\r\n.body-opponent-final-throw {\r\n    animation: body-opponent-last-throw 3s forwards steps(1);\r\n}\r\n\r\n.head-opponent-final-throw {\r\n    animation: head-opponent-last-throw 3s forwards steps(1);\r\n}\r\n\r\n.potato-correct-throw-anim {\r\n    animation: potato-correct-throw 3s linear;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/compaundWordTask.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/compaundWordTask.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".word-wrapper{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 20px;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.first-part {\r\n    border: 1px solid black;\r\n    padding: 20px;\r\n    padding-right: 60px;\r\n    min-width: 250px;\r\n    margin: 20px;\r\n}\r\n \r\n.second-part {\r\n    margin: 20px;\r\n    padding: 20px;\r\n}\r\n\r\n.correctDrop {\r\n    background-color: rgb(112, 255, 107);\r\n    padding: 20px;\r\n}\r\n\r\n.wrongDrop {\r\n    background-color: rgb(255, 107, 107);\r\n    padding: 20px;\r\n}\r\n\r\n.invisible {\r\n    visibility: hidden;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/configPage.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/configPage.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".location-select-page {\r\n    \r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 32px;\r\n    text-transform: uppercase;\r\n    margin: 50px;\r\n}\r\n\r\n.locations-container {\r\n    margin: 150px auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 800px;\r\n}\r\n\r\n.location {\r\n    width: 200px;\r\n    height: 150px;\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n    background-size: 100% 100%; \r\n}\r\n\r\n.classic-location {\r\n    background-color: #fff;\r\n    position: relative;\r\n}\r\n\r\n.mini-classic-location {\r\n    background-color: #fff;\r\n    position: relative;\r\n}\r\n\r\n.mini-classic-location:after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 3px;\r\n    width: 100%;\r\n    bottom: 45px;\r\n    background-color: black;\r\n}\r\n \r\n.classic-location:after {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    width: 100%;\r\n    bottom: 95px;\r\n    background-color: black;\r\n}\r\n\r\n.building-location {\r\n    background: url(" + escape(__webpack_require__(/*! ../../assets/images/background/0.jpg */ "./assets/images/background/0.jpg")) + ") no-repeat;\r\n    background-size: 100% 100%; \r\n}\r\n\r\n.nature-location {\r\n    background: url(" + escape(__webpack_require__(/*! ../../assets/images/background/2.jpg */ "./assets/images/background/2.jpg")) + ") no-repeat;\r\n    background-size: 100% 100%; \r\n}\r\n\r\n.location:hover {\r\n    transition: 0.5s;\r\n    transform: translate(-10px, -10px);\r\n    box-shadow: 10px 10px 5px #d3d3d3;\r\n}\r\n\r\n\r\n\r\n\r\n.player-config-page {\r\n    \r\n}\r\n\r\n\r\n.demonstration {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.player-config-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.player-name-input {\r\n    margin-bottom: 20px;\r\n    max-width: 400px;\r\n    width: 340px;\r\n    padding: 10px;\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.empty-input {\r\n    background-color: rgb(255, 145, 145);\r\n}\r\n\r\n.empty-input:valid {\r\n    background-color: white;\r\n}\r\n\r\n.player-figure-container {\r\n    position: relative;\r\n    width: 350px;\r\n    height: 350px;\r\n    margin: 20px auto;\r\n    top: 30px;\r\n    left: 60px;\r\n}\r\n\r\n.player-figure-demo {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: -115px;\r\n    width: 300px;\r\n    height: 100%;\r\n}\r\n\r\n.button {\r\n    padding: 10px 20px;\r\n    letter-spacing: 0.2rem;\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 5px;\r\n    background-color:  #ffffff ;\r\n    box-shadow: 0 3px 5px #d3d3d3;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    user-select: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #e7e7e7;\r\n    border: 1px solid #b9b9b9;\r\n}\r\n.submit-button {\r\n    margin: 10px auto;\r\n}\r\n\r\n.config-item-image {\r\n    width: 60px;\r\n    height: 60px;\r\n    /* display: flex; */\r\n    margin: 10px;\r\n    background-size: 80% auto; \r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n.config-item-image:hover {\r\n    transition: 0.3s;\r\n    transform: translate(-5px, -5px);\r\n    box-shadow: 5px 5px 5px #d3d3d3;\r\n}\r\n\r\n.options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.config-section {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    width: 340px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/main.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/style/main.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.game-wrapper {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    /* background-color: rgb(231, 231, 231); */\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    font-family: 'Orbitron', sans-serif;\r\n    letter-spacing: 0.2rem;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/mathTask.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/mathTask.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".expression {\r\n    margin: 20px auto;\r\n}\r\n\r\n.expression span {\r\n    border: 1px solid grey;\r\n    padding: 5px;\r\n}\r\n\r\n.expression input {\r\n    border: 1px solid grey;\r\n    width: 100px;\r\n    padding: 5px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/modalWindow.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/modalWindow.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-wrapper {\r\n    position: absolute;\r\n    background-color: rgba(110, 110, 110, 0.9);\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal-window h2 {\r\n    margin: 0;\r\n}\r\n\r\n.modal-window {\r\n    padding: 50px;\r\n    background-color: #ffffff;\r\n    opacity: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal-window p {\r\n    margin: 30px auto;\r\n}\r\n\r\n.attack-type-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    min-width: 600px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.attack-config-item {\r\n    border: 1px solid grey;\r\n    width: 150px;\r\n    height: 150px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-type-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    width: 600px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.task-type-item {\r\n    width: auto;\r\n    height: 80px;\r\n    cursor: pointer;\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/normalize.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/normalize.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/reorderTask.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/reorderTask.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reorder-task-wrapper {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.letters-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.letter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid grey;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/startPage.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader!./src/style/startPage.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".start-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center\r\n}\r\n\r\nh1 {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding-top: 80px;\r\n    font-size: 50px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\n.menu-container {\r\n    margin-top: 100px;\r\n}\r\n\r\n.menu-item {\r\n    padding: 20px;\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-item:hover {\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/task.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/style/task.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-page {\r\n    position: absolute;\r\n    background-color: #fff;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 24px;\r\n    z-index: 1000;\r\n}\r\n\r\n.correct-answer {\r\n    position: absolute;\r\n    top: 0;\r\n    background-color: rgba(0, 255, 0, 0.322);\r\n    font-size: 40px;\r\n    color: #fff;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index: 2000;\r\n}\r\n\r\n.wrong-answer {\r\n    position: absolute;\r\n    top: 0;\r\n    background-color: rgba(255, 0, 0, 0.322);\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 40px;\r\n    color: #fff;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 2000;\r\n}\r\n\r\n.check-result-button {\r\n    margin-top: 30px;\r\n    font-size: 20px;\r\n}\r\n\r\n.task-page input {\r\n    border: 1px solid grey;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.task-page p {\r\n    margin: 20px auto;\r\n}\r\n\r\n.task-wrapper {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.play-button img {\r\n    height: 100px;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.play-button img:hover {\r\n    transform: scale(1.1)\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style/translationTask.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader!./src/style/translationTask.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".word-for-translation {\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/BattleField.js":
/*!*******************************!*\
  !*** ./src/js/BattleField.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BattleField {
    constructor(score) {
        this.score = score;
        this.battlePage = document.getElementById('battle-field');
        this.playerNameField = document.getElementById('player-name');
        this.opponentNameField = document.getElementById('opponent-name');
        this.levelField = document.getElementById('game-level');
        this.gameResultPage = document.getElementById('game-result-page'); 
        this.winGameWindow = document.getElementById('win-game-window');
        this.loseGameWindow = document.getElementById('lose-game-window');
        this.scoreContainer = document.getElementById('score-container');
        this.solvedTasksElement = document.getElementById('final-score-task');
        this.amountOfVictories = document.getElementById('number-of-victories');
    }

    init(locationId) {
        this.battlePage.className = 'battle-field';
        this.battlePage.classList.add(`${locationId}-location`);
    }

    render(player, opponent) {
        if (this.playerFigure) {
            this.battlePage.removeChild(this.playerFigure);
            this.battlePage.removeChild(this.opponentFigure);
        };
        this.createPlayer(player);
        this.createEnemy(opponent);
    }

    createPlayer(player) {
        this.player = player;
        this.player.health = 100;
        this.playerFigure = this.player.createFigure();
        this.playerFigure.classList.add('player-container');
        this.player.ball = document.createElement('div');
        // this.player.ball.src = './../../assets/images/player/gun/5.png';
        this.player.ball.classList.add('throwableObj');
        this.playerNameField.textContent = this.player.name;
        this.playerFigure.appendChild(this.player.ball);
        this.battlePage.appendChild(this.playerFigure);
        this.player.renderHealthBar();
    }

    createEnemy(opponent) {
        this.opponent = opponent;
        this.opponent.health = 100;
        this.opponentFigure = this.opponent.createFigure();
        this.opponentFigure.classList.add('opponent-container');
        this.opponent.ball = document.createElement('div');
        // this.opponent.ball.src = './../../assets/images/player/gun/5.png';
        this.opponent.ball.classList.add('throwableObj');
        this.opponentNameField.textContent = this.opponent.name;
        this.levelField.textContent = this.opponent.level;
        this.opponentFigure.appendChild(this.opponent.ball);
        this.battlePage.appendChild(this.opponentFigure);
        this.opponent.renderHealthBar();
    }

    showScoreWindow(level, solvedTasks) {
        this.solvedTasksElement.textContent = solvedTasks;
        this.amountOfVictories.textContent = level - 1;
        this.score.refreshScore({name: this.player.name, result: solvedTasks});
        this.score.showScore(this.scoreContainer);
    }

    showFinalWindow(result, level, solvedTasks) {
        setTimeout(() => {
            if (level) {
                this.showScoreWindow(level, solvedTasks);
            };
            this.gameResultPage.classList.remove('hidden');
            this[`${result}GameWindow`].classList.remove('hidden');
        }, 1000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (BattleField);

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthBar */ "./src/js/HealthBar.js");


class Character {
    constructor() {
        this.faceId = 0;
        this.styleId = 0;
        this.gunId = 0;
        this.health = 100;
        this.gunShotSound = document.getElementById('gun-shot-sound');
        this.throwSound = document.getElementById('throw-sound');
    }

    createFigure () {
        this.body = document.createElement('div');
        this.head = document.createElement('div');
        this.face = document.createElement('div');
        this.hair = document.createElement('div');
        this.gun = document.createElement('div');

        this.head.classList.add('head');
        this.face.classList.add('face', `face-${this.faceId}`);
        this.hair.classList.add('hairstyle', `hairstyle-${this.styleId}`);
        this.gun.classList.add('body-with-gun', `body-${this.gunId}`);

        this.head.appendChild(this.face);
        this.head.appendChild(this.hair);
        this.body.appendChild(this.head);
        this.body.appendChild(this.gun);
        
        return this.body;
    }

    createHealthBar(className) {
        if (!this.healthBar) {
            this.healthBar = new _HealthBar__WEBPACK_IMPORTED_MODULE_0__["default"](className);
        } else {
            this.renderHealthBar();
        }
    }

    renderHealthBar() {
        this.healthBar.render(this.health);
    }

    attack(attackType) {
        if (attackType === 'shot') {
            this.gun.className = 'body-shooter';
            this.head.className = 'head';
            this.gun.classList.add(`body-${this.gunId}`);
            setTimeout(() => {
                this.gunShotSound.play();
                this.gun.classList.add('body-attack-shot-anim');
                this.head.classList.add('head-attack-shot-anim');
            }, 3000)
        } else if (attackType === 'throw') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            this.ball.className = 'throwableObj';
            setTimeout(() => {
                this.throwSound.play();
                this.gun.classList.add('body-attack-throw-anim');
                this.head.classList.add('head-attack-throw-anim');
                this.ball.classList.add('potato-correct-throw-anim');
            }, 3000)
        }
    }

    takeAttack(attackType) {
        this.health = this.health - 25;
        if (attackType === 'shot') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.gun.classList.add('body-opponent-shot-anim');
                    this.head.classList.add('head-opponent-shot-anim');
                } else {
                    this.gun.classList.add('body-opponent-final-shot');
                    this.head.classList.add('head-opponent-final-shot');
                }
            }, 3000);
        } else if (attackType === 'throw') {
            this.gun.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.gun.classList.add('body-opponent-throw-anim');
                    this.head.classList.add('head-opponent-throw-anim');
                } else {
                    this.gun.classList.add('body-opponent-final-throw');
                    this.head.classList.add('head-opponent-final-throw');
                }
            }, 3000);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/js/Constants/ClassList.js":
/*!***************************************!*\
  !*** ./src/js/Constants/ClassList.js ***!
  \***************************************/
/*! exports provided: CLASS_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_LIST", function() { return CLASS_LIST; });
const CLASS_LIST = {
    faces: [
        'face-0', 'face-1', 'face-2', 'face-3', 
        'face-4', 'face-5', 'face-6', 'face-7'
    ],
    hairstyles: [
        'hairstyle-0', 'hairstyle-1', 'hairstyle-2', 'hairstyle-3', 
        'hairstyle-4', 'hairstyle-5', 'hairstyle-6', 'hairstyle-7'
    ],
    guns: [
        'gun-0', 'gun-1', 'gun-2', 'gun-3'
    ]
}

/***/ }),

/***/ "./src/js/Constants/CompoundWordList.js":
/*!**********************************************!*\
  !*** ./src/js/Constants/CompoundWordList.js ***!
  \**********************************************/
/*! exports provided: WORD_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORD_LIST", function() { return WORD_LIST; });
const WORD_LIST = [
    {
        start: 'foot',
        end: 'ball',
        full: 'football'
    },
    {
        start: 'sea',
        end: 'shell',
        full: 'seashell'
    },
    {
        start: 'wood',
        end: 'pecker',
        full: 'woodpecker'
    },
    {
        start: 'butter',
        end: 'fly',
        full: 'butterfly'
    },
    {
        start: 'table',
        end: 'ware',
        full: 'tableware'
    },
    {
        start: 'fire',
        end: 'works',
        full: 'fireworks'
    },
    {
        start: 'sub',
        end: 'way',
        full: 'subway'
    },
    {
        start: 'back',
        end: 'bone',
        full: 'backbone'
    },
    {
        start: 'jack',
        end: 'pot',
        full: 'jackpot'
    },
    {
        start: 'pass',
        end: 'port',
        full: 'passport'
    },
    {
        start: 'for',
        end: 'get',
        full: 'forget'
    },
    {
        start: 'key',
        end: 'board',
        full: 'keyboard'
    },
    {
        start: 'touch',
        end: 'down',
        full: 'touchdown'
    },
    {
        start: 'pick',
        end: 'up',
        full: 'pickup'
    },
    {
        start: 'book',
        end: 'case',
        full: 'bookcase'
    },
    {
        start: 'week',
        end: 'end',
        full: 'weekend'
    },
    {
        start: 'fore',
        end: 'hand',
        full: 'forehand'
    },
    {
        start: 'under',
        end: 'dog',
        full: 'underdog'
    },
    {
        start: 'air',
        end: 'field',
        full: 'airfield'
    },
    {
        start: 'brain',
        end: 'child',
        full: 'brainchild'
    },
    {
        start: 'rain',
        end: 'bow',
        full: 'rainbow'
    },
    {
        start: 'car',
        end: 'go',
        full: 'cargo'
    },
    {
        start: 'bed',
        end: 'rock',
        full: 'bedrock'
    },
    {
        start: 'sand',
        end: 'lot',
        full: 'sandlot'
    }
] 

/***/ }),

/***/ "./src/js/Constants/NamesCollection.js":
/*!*********************************************!*\
  !*** ./src/js/Constants/NamesCollection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NAMES_COLLECTION = {
    adjective: [
        'Misty', 'Royal', 'Brave', 'Fast', 'Vengeful', 'Spitfire', 'Nuclear', 'Crazy', 'Nuts', 'Screwy'
    ],
    noun: [
        'Doctor', 'Clown', 'Peasant', 'Griffin', 'Ghost', 'Maniac', 'Killer', 'Gangster', 'Hooligan', 'Vandal'
    ],
    name: [
        'Johnny', 'David', 'Carlos', 'Pedro', 'Eddie', 'Billy', 'Henry', 'Alexis', 'Isaac', 'Bruce'
    ]
};

/* harmony default export */ __webpack_exports__["default"] = (NAMES_COLLECTION);



/***/ }),

/***/ "./src/js/Constants/Vocabulary.js":
/*!****************************************!*\
  !*** ./src/js/Constants/Vocabulary.js ***!
  \****************************************/
/*! exports provided: VOCABULARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCABULARY", function() { return VOCABULARY; });
const VOCABULARY = [
    {
        word: 'street',
        translation: ['улица', 'деловой', 'улочка']
    },
    {
        word: 'company',
        translation: ['компания', 'фирма', 'общество', 'товарищество']
    },
    {
        word: 'number',
        translation: ['номер', 'количество', 'число', 'цифра', 'сумма']
    },
    {
        word: 'world',
        translation: ['мир', 'свет', 'вселенная', 'общество', 'царство', 'кругозор']
    },
    {
        word: 'house',
        translation: ['дом', 'жилище', 'театр', 'здание', 'палата', 'гостиница']
    },
    {
        word: 'woman',
        translation: ['женщина', 'баба', 'служанка', 'любовница', 'уборщица']
    },
    {
        word: 'people',
        translation: ['люди', 'народ', 'жители', 'население', 'нация', 'служащие']
    },
    {
        word: 'place',
        translation: ['место', 'местечко', 'город', 'положение', 'площадь', 'жилище']
    },
    {
        word: 'school',
        translation: ['школа', 'обучение', 'направление', 'занятия в школе', 'класс']
    },
    {
        word: 'country',
        translation: ['страна', 'местность', 'родина', 'деревня', 'отечество', 'территория']
    },
    {
        word: 'point',
        translation: ['точка', 'балл', 'пункт', 'момент', 'очко', 'дело']
    },
    {
        word: 'family',
        translation: ['семья', 'семейство', 'род', 'содружество']
    },
    {
        word: 'power',
        translation: ['власть', 'мощность', 'сила', 'мощь', 'энергия', 'способность']
    },
    {
        word: 'question',
        translation: ['вопрос', 'сомнение', 'проблема', 'дело', 'обсуждаемый вопрос', 'пытка']
    },
    {
        word: 'money',
        translation: ['деньги', 'денежные суммы', 'богатство', 'монетные валюты']
    },
    {
        word: 'teacher',
        translation: ['учитель', 'преподаватель']
    },
    {
        word: 'market',
        translation: ['рынок', 'базар', 'торговля', 'спрос', 'сбыт', 'магазин']
    },
    {
        word: 'report',
        translation: ['доклад', 'отчет', 'сообщение', 'рапорт', 'репортаж', 'донесение']
    },
    {
        word: 'friend',
        translation: ['друг', 'подруга', 'приятель', 'знакомый', 'товарищ', 'приятельница']
    },
    {
        word: 'parent',
        translation: ['родитель', 'предок', 'родительница', 'причина', 'праотец', 'приемный отец']
    },
    {
        word: 'person',
        translation: ['человек', 'лицо', 'личность', 'особа', 'персонаж', 'субъект']
    },
    {
        word: 'reason',
        translation: ['причина', 'повод', 'основание', 'разум', 'рассудок', 'довод']
    },
    {
        word: 'morning',
        translation: ['утро', 'утренняя заря', 'начало', 'ранний период']
    },
    {
        word: 'figure',
        translation: ['рисунок', 'цифра', 'фигура', 'диаграмма', 'образ', 'личность']
    },
    {
        word: 'society',
        translation: ['общество', 'общественность', 'свет', 'организация', 'объединение']
    },
    {
        word: 'community',
        translation: ['сообщество', 'община', 'общество', 'общность', 'объединение']
    },
    {
        word: 'price',
        translation: ['цена', 'расценка', 'ценность', 'жертва']
    },
    {
        word: 'support',
        translation: ['поддержка', 'помощь', 'опора', 'подставка', 'суппорт', 'кронштейн']
    },
    {
        word: 'health',
        translation: ['здоровье', 'самочувствие', 'здравие', 'жизнеспособность', 'благосостояние']
    },
    {
        word: 'field',
        translation: ['поле', 'область', 'месторождение', 'пространство', 'поприще']
    },
    {
        word: 'example',
        translation: ['пример', 'образец', 'экземпляр', 'урок']
    },
    {
        word: 'action',
        translation: ['действие', 'акция', 'деятельность', 'воздействие', 'поступок', 'результат', 'эффект', 'поведение', 'влияние']
    },
    {
        word: 'position',
        translation: ['положение', 'позиция', 'должность', 'место', 'расположение', 'местоположение']
    },
    {
        word: 'decision',
        translation: ['решение', 'определение', 'решимость', 'решительность']
    },
    {
        word: 'paper',
        translation: ['бумага', 'документ', 'обои']
    },
    {
        word: 'table',
        translation: ['стол', 'таблица', 'расписание', 'доска', 'трапеза', 'плита']
    },
    {
        word: 'language',
        translation: ['язык', 'речь', 'стиль', 'брань']
    },
    {
        word: 'animal',
        translation: ['животное', 'зверь', 'скотина']
    },
    {
        word: 'picture',
        translation: ['рисунок', 'картина', 'изображение', 'картинка', 'представление', 'образ']
    },
    {
        word: 'child',
        translation: ['ребенок', 'дитя', 'сын', 'малыш', 'младенец', 'потомок']
    },
    {
        word: 'horse',
        translation: ['лошадь', 'конь', 'конница', 'кавалерия', 'козлы', 'рама', 'лошадка']
    },
    {
        word: 'color',
        translation: ['цвет', 'краска', 'колорит', 'оттенок', 'свет', 'тон']
    },
    {
        word: 'summer',
        translation: ['лето', 'год', 'балка']
    },
    {
        word: 'letter',
        translation: ['письмо', 'буква', 'символ', 'послание', 'литера', 'шрифт']
    },
    {
        word: 'river',
        translation: ['река', 'поток', 'речка']
    },
    {
        word: 'potato',
        translation: ['картофель', 'картошка', 'картофелина', 'дырка']
    },
    {
        word: 'mouse',
        translation: ['мышь', 'мышка', 'мышонок']
    },
    {
        word: 'sugar',
        translation: ['сахар', 'сахарок']
    },
    {
        word: 'chicken',
        translation: ['курица', 'цыпленок', 'курятина', 'трус', 'петух', 'юнец']
    },
    {
        word: 'window',
        translation: ['окно', 'окошко', 'витрина']
    }
]

/***/ }),

/***/ "./src/js/Enemy.js":
/*!*************************!*\
  !*** ./src/js/Enemy.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/js/Character.js");
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HealthBar */ "./src/js/HealthBar.js");



class Enemy extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(names) {
        super();
        this.namesList = names;
    }

    generateName() {
        let adjectiveIndex = Math.floor(Math.random() * this.namesList.adjective.length);
        let nounIndex = Math.floor(Math.random() * this.namesList.noun.length);
        let nameIndex = Math.floor(Math.random() * this.namesList.name.length);
        this.name = `${this.namesList.adjective[adjectiveIndex]} ${this.namesList.noun[nounIndex]} ${this.namesList.name[nameIndex]}`;
    }

    generateLook() {
        this.faceId = Math.floor(Math.random() * 8);
        this.styleId = Math.floor(Math.random() * 8);
        this.gunId = Math.floor(Math.random() * 4);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/js/GameConfig.js":
/*!******************************!*\
  !*** ./src/js/GameConfig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameConfig {
    constructor(player, classes, gameController) {
        this.player = player;
        this.classList = classes;
        this.GameController = gameController;
        this.selectLocationPage = document.getElementById('location-select');
        this.playerConfigPage = document.getElementById('config-page');
        this.faceContainer = document.getElementById('face-container');
        this.styleContainer = document.getElementById('style-container');
        this.gunContainer = document.getElementById('gun-container');
        this.playerFigure = document.getElementById('player-figure');
        
        this.selectLocationPage.addEventListener('click', (e) => this.selectLocation(e));
        this.playerConfigPage.addEventListener('click', (e) => this.changeConfig(e));
    }

    init() {
        this.createPlayerConfigPage();
    }

    selectLocation(e) {
        if (e.target.classList.contains('location')) {
            this.locationId = e.target.id;
            this.showPlayerConfigPage();
        }
    }

    showPlayerConfigPage() {
        this.playerConfigPage.classList.remove('hidden');
        this.selectLocationPage.classList.add('hidden');    
    }

    createPlayerConfigPage() {
        this.createFaceItems();
        this.createStyleItems();
        this.createGunItems();    
        this.renderPlayerFigure();
    }

    createFaceItems() {
        const faceList = document.createElement('div');
        faceList.classList.add('config-section');
        this.classList.faces.forEach((item, index) => {
            let face = document.createElement('div');
            face.classList.add('config-item-image', item);
            face.dataset.itemId = index;
            face.dataset.itemType = 'face';
            faceList.appendChild(face);
        });
        this.faceContainer.appendChild(faceList);
    }

    createStyleItems() {
        const styleList = document.createElement('div');
        styleList.classList.add('config-section');
        this.classList.hairstyles.forEach((item, index) => {
            let style = document.createElement('div');
            style.classList.add('config-item-image', item);
            style.dataset.itemId = index;
            style.dataset.itemType = 'style';
            styleList.appendChild(style);
        });
        this.styleContainer.appendChild(styleList);
    }

    createGunItems() {
        const gunList = document.createElement('div');
        gunList.classList.add('config-section');
        this.classList.guns.forEach((item, index) => {
            let gun = document.createElement('div');
            gun.classList.add('config-item-image', item);
            gun.dataset.itemId = index;
            gun.dataset.itemType = 'gun';
            gunList.appendChild(gun);
        });
        this.gunContainer.appendChild(gunList);
    }

    renderPlayerFigure() {
        this.playerFigure.innerHTML = '';
        let figure = this.player.createFigure();
        figure.classList.add('player-figure-demo');
        this.playerFigure.appendChild(figure);
    }

    changeConfig(e) {
        let configType = e.target.dataset.itemType;
        if (e.target.id === 'submit-button') {
            this.compileConfig();
        };
        switch (configType) {
            case 'face':  
                this.player.faceId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
            case 'style': 
                this.player.styleId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
            case 'gun': 
                this.player.gunId = e.target.dataset.itemId;
                this.renderPlayerFigure()
                break;
        }
    }

    compileConfig() {
        const nameInput = document.getElementById('player-name-input');
        if (nameInput.value) {
            this.player.name = nameInput.value;
            this.playerConfigPage.classList.add('hidden');            
            this.GameController.init(this.player, this.locationId);
            this.GameController.initGame();
        } else {
            nameInput.classList.add('empty-input')
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameConfig); 

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks/bundleTasks */ "./src/js/Tasks/bundleTasks.js");


class GameController {
    constructor(battleField, enemy) {
        this.battlefield = battleField;
        this.opponent = enemy;
        this.task = null;
        this.activeAttack = false;
        this.startPage = document.getElementById('start-page');
        this.attackConfigPage = document.getElementById('attack-config-page');
        this.attackTypeWindow = document.getElementById('attack-type');
        this.taskTypeWindow = document.getElementById('task-type');
        this.checkTaskSolutionBatton = document.getElementById('check-result');
        this.attackButton = document.getElementById('attack-button');
        

        this.battlefield.battlePage.addEventListener('click', (e) => this.addEventHandlers(e));
        this.attackTypeWindow.addEventListener('click', (e) => this.selectAttackType(e)); 
        this.taskTypeWindow.addEventListener('click', (e) => this.selectTaskType(e)); 
        this.checkTaskSolutionBatton.addEventListener('click', () => this.checkAnswer());
    }

    init(player, location) {
        this.level = 1;
        this.solvedTasks = 0;
        this.player = player;
        this.player.createHealthBar('player-health-bar');
        this.opponent.createHealthBar('opponent-health-bar');
        this.battlefield.init(location);
    }

    initGame() {
        this.createOpponent();
        this.battlefield.render(this.player, this.opponent);
    }

    addEventHandlers(e) {
        if (e.target.id === 'attack-button' && !this.activeAttack) {
            this.attackConfigPage.classList.remove('hidden');
        } else if (e.target.id === 'next-game-button') {
            this.level++;
            this.initGame();
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.winGameWindow.classList.add('hidden');
        } else if (e.target.id === 'exit-to-menu-button') {
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.winGameWindow.classList.add('hidden');
            this.battlefield.battlePage.classList.add('hidden');
            this.startPage.classList.remove('hidden');
        } else if (e.target.id === 'exit-to-menu') {
            this.battlefield.gameResultPage.classList.add('hidden');
            this.battlefield.loseGameWindow.classList.add('hidden');
            this.battlefield.battlePage.classList.add('hidden');
            this.startPage.classList.remove('hidden');
        }
    }

    createOpponent() {
        this.opponent.level = this.level;
        this.opponent.generateName();
        this.opponent.generateLook();
    }

    selectAttackType(e) {
        if (e.target.classList.contains('attack-type-item')) {
            this.attackType = e.target.id;
            this.attackTypeWindow.classList.add('hidden');
            this.taskTypeWindow.classList.remove('hidden');
        }
    }

    selectTaskType(e) {
        if(e.target.classList.contains('task-type-item')) {
            this.attackConfigPage.classList.add('hidden');
            this.attackTypeWindow.classList.remove('hidden');
            this.taskTypeWindow.classList.add('hidden');
            this.task = _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_0__[e.target.id];
            _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_0__[e.target.id].init();
        }
    }

    checkAnswer() {
        let result = this.task.checkResult();
        this.activeAttack = true;
        if (result) {
            this.solvedTasks++;
            this.player.attack(this.attackType);
            this.opponent.takeAttack(this.attackType);
            setTimeout(() => {
                this.task.correctAnswer();
            }, 200);
            setTimeout(() => {
                this.opponent.healthBar.render(this.opponent.health);
                this.activeAttack = false;
                this.checkVictory();
            }, 6000);
        } else {
            this.opponent.attack(this.attackType);
            this.player.takeAttack(this.attackType);
            setTimeout(() => {
                this.task.wrongAnswer();
            }, 200);
            setTimeout(() => {
                this.player.healthBar.render(this.player.health);
                this.activeAttack = false;
                this.checkLosing();
            }, 6000);
        }
    }

    checkVictory() {
        if (!this.opponent.health) {
            this.battlefield.showFinalWindow('win');
        }
    }

    checkLosing() {
        if (!this.player.health) {
            this.battlefield.showFinalWindow('lose', this.level, this.solvedTasks);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameController);

/***/ }),

/***/ "./src/js/HealthBar.js":
/*!*****************************!*\
  !*** ./src/js/HealthBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HealthBar {
    constructor(className) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('bar', className);
        this.container = document.getElementById('health-bar');
        this.container.appendChild(this.canvas);
    }

    render(health = 100) {
        this.canvas.width = this.canvas.width
        this.ctx.fillStyle = "lightgrey";
        this.ctx.fillRect(0, 0, this.canvas.width * health / 100, this.canvas.height);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (HealthBar); 

/***/ }),

/***/ "./src/js/Score.js":
/*!*************************!*\
  !*** ./src/js/Score.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Score {
    constructor() {
    }

    refreshScore(player) {
        if (!localStorage['stickman-wars']) {
            localStorage['stickman-wars'] = JSON.stringify([player]);
        } else {
            let score = JSON.parse(localStorage['stickman-wars']);
            score.push(player);
            score.sort((a,b) => b.result - a.result);
            score.length > 10 ? score.pop() : score;
            localStorage['stickman-wars'] = JSON.stringify(score);
        }
    }

    showScore(wrapper) {
        wrapper.innerHTML = '';
        const scoreList = document.createElement('ol');
        const topScore = JSON.parse(localStorage['stickman-wars']);
        topScore.forEach(item => this.createScoreItem (item, scoreList));
        wrapper.appendChild(scoreList);
    }

    createScoreItem(item, list) {
        const scoreItem = document.createElement('li');
        const itemWrapper = document.createElement('div');
        const name = document.createElement('div');
        const score = document.createElement('div');
        itemWrapper.classList.add('score-item');
        name.textContent = item.name;
        score.textContent = item.result;
        itemWrapper.appendChild(name);
        itemWrapper.appendChild(score);
        scoreItem.appendChild(itemWrapper);
        list.appendChild(scoreItem);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./src/js/StartPage.js":
/*!*****************************!*\
  !*** ./src/js/StartPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import GameConfig from "./GameConfig"

class StartPage {
    constructor() {
        this.startPage = document.getElementById('start-page');
        this.menu = document.getElementById('main-menu');
        this.menu.addEventListener('click', (e) => this.addEventHandler(e));
    }

    init() {
        this.startPage.classList.remove('hidden');
    }

    addEventHandler(e) {
        let id = e.target.id;
        switch (id) {
            case 'new-game':  
                this.startGame();
                break;
            case 'how-to-play': 
                this.showGameDescription();
                break;
            case 'score': 
                this.showScore();
                break;
            case 'sound': 
                this.switchSound(e.target);
                break;
        }

    }

    startGame() {
        this.selectLocationPage = document.getElementById('location-select');
        this.selectLocationPage.classList.remove('hidden');
        this.startPage.classList.add('hidden');
    }

    showGameDescription() {
        console.log('showD')
    }

    showScore() {
        console.log('showScore')
    }

    switchSound(target) {
        if (target.classList.contains('sound-on')) {
            target.classList.remove('sound-on');
            target.textContent = 'sound: off';
        } else {
            target.textContent = 'sound: on';
            target.classList.add('sound-on');
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new StartPage());

/***/ }),

/***/ "./src/js/Tasks/CompoundWordsTask.js":
/*!*******************************************!*\
  !*** ./src/js/Tasks/CompoundWordsTask.js ***!
  \*******************************************/
/*! exports provided: CompoundWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoundWords", function() { return CompoundWords; });
/* harmony import */ var _Constants_CompoundWordList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/CompoundWordList */ "./src/js/Constants/CompoundWordList.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");



class CompoundWordsTask extends _Task__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super();
        this.list = _Constants_CompoundWordList__WEBPACK_IMPORTED_MODULE_0__["WORD_LIST"];
        this.taskWrapper = document.getElementById('compound-word-task-field');
        this.startParts = document.getElementById('start-parts');
        this.endParts = document.getElementById('end-parts');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
        this.startParts.addEventListener('drop', (e) => this.drop(e));
        this.pairs = 4;
    }

    init() {
        super.init();
        this.compoundWords = 0;
        this.shuffleArray(this.list);
        this.createField();
    }

    createField() {
        let words = this.list.slice(0, this.pairs);
        let arrayOfEndParts = [];
        words.forEach(item => {
            let firstPart = document.createElement('div');
            firstPart.classList.add('first-part');
            firstPart.textContent = item.start;
            firstPart.dataset.fullword = item.full;
            this.startParts.appendChild(firstPart);
            let secondPart = document.createElement('div');
            secondPart.setAttribute('draggable', true);
            secondPart.textContent = item.end;
            secondPart.dataset.fullword = item.full;
            secondPart.classList.add('second-part');
            arrayOfEndParts.push(secondPart);
        });
        this.shuffleArray(arrayOfEndParts);
        arrayOfEndParts.forEach(item => {
            this.endParts.appendChild(item);
        });
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        e.dataTransfer.setData("word", e.target.dataset.fullword);
        e.dataTransfer.setData("part", e.target.textContent);
        this.dragElement = e.target;
    }

    drop(e) {
        if (e.target.classList.contains('first-part') && !e.target.classList.contains('wrongDrop') && !e.target.classList.contains('correctDrop')) {
            e.target.textContent += e.dataTransfer.getData("part");
            this.dragElement.classList.add('invisible');
            if (e.target.dataset.fullword === e.dataTransfer.getData("word")) {
                e.target.classList.add('correctDrop');
                this.compoundWords++;
            } else {
                e.target.classList.add('wrongDrop');
            }
        }
    }

    checkResult() {
        if (this.compoundWords === this.pairs) {
           return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.startParts.innerHTML = '';
        this.endParts.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.startParts.innerHTML = '';
        this.endParts.innerHTML = '';
    }


}

const CompoundWords = new CompoundWordsTask();

/***/ }),

/***/ "./src/js/Tasks/ListeningTask.js":
/*!***************************************!*\
  !*** ./src/js/Tasks/ListeningTask.js ***!
  \***************************************/
/*! exports provided: Listening */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listening", function() { return Listening; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/Vocabulary */ "./src/js/Constants/Vocabulary.js");



class ListeningTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.wordList = _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__["VOCABULARY"];
        this.synth = window.speechSynthesis;
        this.taskWrapper = document.getElementById('listenning-task-field');
        this.playButton = document.getElementById('listen-button');
        this.answerInput = document.getElementById('listenning-answer');
        this.playButton.addEventListener('click', () => this.speakWord());
    }

    init() {
        super.init();
        let index = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[index].word;
    }

    speakWord() {
        this.speech = new SpeechSynthesisUtterance(this.word);
        this.voices = this.synth.getVoices();
        this.speech.voice = this.voices[4];
        this.synth.speak(this.speech);
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (answer === this.word) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.answerInput.value = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.answerInput.value = '';
    }
}

const Listening = new ListeningTask();

/***/ }),

/***/ "./src/js/Tasks/MathTask.js":
/*!**********************************!*\
  !*** ./src/js/Tasks/MathTask.js ***!
  \**********************************/
/*! exports provided: MathTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathTask", function() { return MathTask; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class MathExerciseTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.result = document.getElementById('result');
        this.operations = ['+', '-', '*', '/'];
        this.taskWrapper = document.getElementById("math-task-field");
        this.battleField = document.getElementById("battle-field");
        this.firstElement = document.getElementById('first-number');
        this.operator = document.getElementById('operation');
        this.secondElement = document.getElementById('second-number');
    }

    init() {
        super.init();
        this.generateOperation();
    }

    generateOperation() {
        let index = Math.floor(Math.random() * this.operations.length);
        this.generateNumbers(this.operations[index]);
    }

    generateNumbers(operation) {
        switch (operation) {
            case '+':  
                this.firstNumber = Math.floor(Math.random() * 100);
                this.secondNumber = Math.floor(Math.random() * 100);
                this.answer = this.firstNumber + this.secondNumber;
                break;
            case '-': 
                this.secondNumber = Math.floor(Math.random() * 100);
                this.firstNumber = Math.floor(Math.random() * 100) + this.secondNumber;
                this.answer = this.firstNumber - this.secondNumber;
                break;
            case '/': 
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.firstNumber = this.secondNumber * (Math.floor(Math.random() * 10) + 1);
                this.answer = this.firstNumber / this.secondNumber;
                break;
            case '*': 
                this.firstNumber = Math.floor(Math.random() * 100) + 1;
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.answer = this.firstNumber * this.secondNumber;
                break;
        }
        this.firstElement.textContent = this.firstNumber;
        this.operator.textContent = operation;
        this.secondElement.textContent = this.secondNumber;
    }

    checkResult() {
        if (+this.result.value === this.answer) {
            return true;
        } else return false
    }

    correctAnswer() {
        super.correctAnswer();
        this.result.value = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.result.value = '';
    }

}

const MathTask = new MathExerciseTask();



/***/ }),

/***/ "./src/js/Tasks/SortableLettersTask.js":
/*!*********************************************!*\
  !*** ./src/js/Tasks/SortableLettersTask.js ***!
  \*********************************************/
/*! exports provided: SortableLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableLetters", function() { return SortableLetters; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/Vocabulary */ "./src/js/Constants/Vocabulary.js");



class SortableLettersTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.wordList = _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__["VOCABULARY"];
        this.taskWrapper = document.getElementById('reorder-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfCells = [];
        this.dragElement = null;
        let index = Math.floor(Math.random() * this.wordList.length);
        this.word = this.wordList[index].word;
        this.createField();
    }

    createField() {
        this.wordContainer = document.createElement('div');
        this.wordContainer.classList.add('letters-container');
        let arrayOfLetters = this.word.split('');
        this.shuffleArray(arrayOfLetters);
        arrayOfLetters.forEach((item, index) => {
            let cell = document.createElement('div');
            cell.classList.add('letter');
            cell.textContent = item;
            this.wordContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.wordContainer);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        this.dragElement = e.target;
    }

    drop(e) {
        e.preventDefault();
        if (e.target.classList.contains('letter') && this.dragElement.classList.contains('letter')) {
            let letter = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = letter;
        }
    }

    checkResult() {
        let answer = '';
        this.arrayOfCells.forEach(item => answer += item.textContent);
        if (answer === this.word) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.wordContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.wordContainer.innerHTML = '';
    }
}

const SortableLetters = new SortableLettersTask();

/***/ }),

/***/ "./src/js/Tasks/Task.js":
/*!******************************!*\
  !*** ./src/js/Tasks/Task.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Task {
    constructor() {
        this.taskSection = document.getElementById('task-field');
        this.correctAnswerField = document.getElementById('correct-answer');
        this.wrongAnswerField = document.getElementById('wrong-answer');
        this.correctAnswerSound = document.getElementById('correct-answer-sound');
        this.wrongAnswerSound = document.getElementById('wrong-answer-sound');
    }

    init() {
        this.taskSection.classList.remove('hidden');
        this.taskWrapper.classList.remove('hidden');
    }
    
    shuffleArray(array) {
        let i = array.length - 1
        for (i; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    correctAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.correctAnswerField.classList.remove('hidden');
        this.correctAnswerSound.play();
        setTimeout(() => {
            this.correctAnswerField.classList.add('hidden');
        }, 1000);
    }

    wrongAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.wrongAnswerField.classList.remove('hidden');
        this.wrongAnswerSound.play();
        setTimeout(() => {
            this.wrongAnswerField.classList.add('hidden');
        }, 1000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./src/js/Tasks/TranslationTask.js":
/*!*****************************************!*\
  !*** ./src/js/Tasks/TranslationTask.js ***!
  \*****************************************/
/*! exports provided: Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/Vocabulary */ "./src/js/Constants/Vocabulary.js");



class TranslationTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('translation-task-field');
        this.vocabulary = _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_1__["VOCABULARY"];
        this.wordContainer = document.getElementById('word-for-translation');
        this.answerInput = document.getElementById('translation-input');
    }

    init() {
        super.init();
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.translations = this.vocabulary[index].translation;
        this.wordContainer.textContent =  this.word.toUpperCase();
    }

    checkResult() {
        this.answer = this.answerInput.value.toLowerCase();
        if (this.translations.indexOf(this.answer) !== -1) {
           return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.answerInput.value = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.answerInput.value = '';
    }
}

const Translation = new TranslationTask()

/***/ }),

/***/ "./src/js/Tasks/bundleTasks.js":
/*!*************************************!*\
  !*** ./src/js/Tasks/bundleTasks.js ***!
  \*************************************/
/*! exports provided: Listening, CompoundWords, MathTask, SortableLetters, Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListeningTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListeningTask */ "./src/js/Tasks/ListeningTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Listening", function() { return _ListeningTask__WEBPACK_IMPORTED_MODULE_0__["Listening"]; });

/* harmony import */ var _CompoundWordsTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompoundWordsTask */ "./src/js/Tasks/CompoundWordsTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundWords", function() { return _CompoundWordsTask__WEBPACK_IMPORTED_MODULE_1__["CompoundWords"]; });

/* harmony import */ var _MathTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathTask */ "./src/js/Tasks/MathTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathTask", function() { return _MathTask__WEBPACK_IMPORTED_MODULE_2__["MathTask"]; });

/* harmony import */ var _SortableLettersTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortableLettersTask */ "./src/js/Tasks/SortableLettersTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableLetters", function() { return _SortableLettersTask__WEBPACK_IMPORTED_MODULE_3__["SortableLetters"]; });

/* harmony import */ var _TranslationTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TranslationTask */ "./src/js/Tasks/TranslationTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return _TranslationTask__WEBPACK_IMPORTED_MODULE_4__["Translation"]; });







/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartPage */ "./src/js/StartPage.js");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameConfig */ "./src/js/GameConfig.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character */ "./src/js/Character.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Enemy */ "./src/js/Enemy.js");
/* harmony import */ var _BattleField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BattleField */ "./src/js/BattleField.js");
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameController */ "./src/js/GameController.js");
/* harmony import */ var _Constants_ClassList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants/ClassList */ "./src/js/Constants/ClassList.js");
/* harmony import */ var _Constants_NamesCollection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants/NamesCollection */ "./src/js/Constants/NamesCollection.js");
/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Score */ "./src/js/Score.js");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/bundle.css */ "./src/style/bundle.css");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_bundle_css__WEBPACK_IMPORTED_MODULE_9__);











const initApp = function () {
    _StartPage__WEBPACK_IMPORTED_MODULE_0__["default"].init();
}

const score = new _Score__WEBPACK_IMPORTED_MODULE_8__["default"]();
const player = new _Character__WEBPACK_IMPORTED_MODULE_2__["default"]();
const opponent = new _Enemy__WEBPACK_IMPORTED_MODULE_3__["default"](_Constants_NamesCollection__WEBPACK_IMPORTED_MODULE_7__["default"]);
const battleField = new _BattleField__WEBPACK_IMPORTED_MODULE_4__["default"](score);
const gameController = new _GameController__WEBPACK_IMPORTED_MODULE_5__["default"](battleField, opponent);
const gameConfig = new _GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"](player, _Constants_ClassList__WEBPACK_IMPORTED_MODULE_6__["CLASS_LIST"], gameController);

gameConfig.init();

document.addEventListener("DOMContentLoaded", initApp());

/***/ }),

/***/ "./src/style/bundle.css":
/*!******************************!*\
  !*** ./src/style/bundle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./bundle.css */ "./node_modules/css-loader/index.js!./src/style/bundle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map