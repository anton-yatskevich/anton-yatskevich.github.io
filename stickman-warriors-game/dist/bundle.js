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

/***/ "./src/js/Character/Character.js":
/*!***************************************!*\
  !*** ./src/js/Character/Character.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthBar */ "./src/js/Character/HealthBar.js");


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
        let figure = document.createElement('div');
        this.head = document.createElement('div');
        this.face = document.createElement('div');
        this.hair = document.createElement('div');
        this.body = document.createElement('div');
        this.head.classList.add('head');
        this.face.classList.add('face', `face-${this.faceId}`);
        this.hair.classList.add('hairstyle', `hairstyle-${this.styleId}`);
        this.body.classList.add('body-with-gun', `body-${this.gunId}`);
        this.head.appendChild(this.face);
        this.head.appendChild(this.hair);
        figure.appendChild(this.head);
        figure.appendChild(this.body);
        return figure;
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
            this.body.className = 'body-shooter';
            this.head.className = 'head';
            this.body.classList.add(`body-${this.gunId}`);
            setTimeout(() => {
                this.gunShotSound.play();
                this.body.classList.add('body-attack-shot-anim');
                this.head.classList.add('head-attack-shot-anim');
            }, 3000)
        } else if (attackType === 'throw') {
            this.body.className = 'body-free-hands';
            this.head.className = 'head';
            this.ball.className = 'throwableObj';
            setTimeout(() => {
                this.throwSound.play();
                this.body.classList.add('body-attack-throw-anim');
                this.head.classList.add('head-attack-throw-anim');
                this.ball.classList.add('potato-correct-throw-anim');
            }, 3000)
        }
    }

    takeAttack(attackType) {
        this.health = this.health - 25;
        if (attackType === 'shot') {
            this.body.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.body.classList.add('body-opponent-shot-anim');
                    this.head.classList.add('head-opponent-shot-anim');
                } else {
                    this.body.classList.add('body-opponent-final-shot');
                    this.head.classList.add('head-opponent-final-shot');
                }
            }, 3000);
        } else if (attackType === 'throw') {
            this.body.className = 'body-free-hands';
            this.head.className = 'head';
            setTimeout(() => {
                if (this.health) {
                    this.body.classList.add('body-opponent-throw-anim');
                    this.head.classList.add('head-opponent-throw-anim');
                } else {
                    this.body.classList.add('body-opponent-final-throw');
                    this.head.classList.add('head-opponent-final-throw');
                }
            }, 3000);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/js/Character/Enemy.js":
/*!***********************************!*\
  !*** ./src/js/Character/Enemy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/js/Character/Character.js");


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

/***/ "./src/js/Character/HealthBar.js":
/*!***************************************!*\
  !*** ./src/js/Character/HealthBar.js ***!
  \***************************************/
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
        word: 'money',
        translation: ['деньги', 'денежные суммы', 'богатство', 'монетные валюты']
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
        word: 'paper',
        translation: ['бумага', 'документ', 'обои']
    },
    {
        word: 'table',
        translation: ['стол', 'таблица', 'расписание', 'доска', 'трапеза', 'плита']
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
        word: 'window',
        translation: ['окно', 'окошко', 'витрина']
    }
]

/***/ }),

/***/ "./src/js/Constants/animals.js":
/*!*************************************!*\
  !*** ./src/js/Constants/animals.js ***!
  \*************************************/
/*! exports provided: ANIMALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS", function() { return ANIMALS; });
const ANIMALS = [
    {
        className: 'malamute',
        name: [
            'dog', 'malamute', 'собака'
        ],
        topSpeed: 50
    },
    {
        className: 'bear',
        name: [
            'bear', 'медведь'
        ],
        topSpeed: 56
    },
    {
        className: 'tiger',
        name: [
            'tiger', 'тигр'
        ],
        topSpeed: 96
    },
    {
        className: 'camel',
        name: [
            'camel', 'верблюд'
        ],
        topSpeed: 64
    },
    {
        className: 'fox',
        name: [
            'fox', 'лиса'
        ],
        topSpeed: 48
    },
    {
        className: 'horse',
        name: [
            'horse', 'лошадь'
        ],
        topSpeed: 66
    },
    {
        className: 'lion',
        name: [
            'lion', 'лев'
        ],
        topSpeed: 58
    },
    {
        className: 'chicken',
        name: [
            'chicken', 'цыпленок', 'цыплята', 'курица'
        ],
        topSpeed: 5
    },
    {
        className: 'corgi',
        name: [
            'dog', 'corgi', 'собака'
        ],
        topSpeed: 8
    },
    {
        className: 'cow',
        name: [
            'cow', 'корова'
        ],
        topSpeed: 40
    },
    {
        className: 'crab',
        name: [
            'crab', 'краб'
        ],
        topSpeed: 18
    },
    {
        className: 'pig',
        name: [
            'pig', 'minipig', 'поросенок', 'свинья'
        ],
        topSpeed: 17
    },
    {
        className: 'york',
        name: [
            'dog', 'york', 'собака'
        ],
        topSpeed: 9
    },
]

/***/ }),

/***/ "./src/js/Constants/carsLogoClassNames.js":
/*!************************************************!*\
  !*** ./src/js/Constants/carsLogoClassNames.js ***!
  \************************************************/
/*! exports provided: CLASS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() { return CLASS_NAMES; });
const CLASS_NAMES = [
    'audi', 'bentley', 'honda', 'hyundai', 'jaguar', 'lexus', 'mercedes', 'suzuki', 'tesla', 'toyota', 'volkswagen'
]

/***/ }),

/***/ "./src/js/Constants/characterClassList.js":
/*!************************************************!*\
  !*** ./src/js/Constants/characterClassList.js ***!
  \************************************************/
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

/***/ "./src/js/Constants/countries.js":
/*!***************************************!*\
  !*** ./src/js/Constants/countries.js ***!
  \***************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
const COUNTRIES = [
    {
        country: ['belarus', 'беларусь'],
        capital: ['minsk', 'минск'],
        className: 'belarus-flag'
    },
    {
        country: ['russia', 'россия'],
        capital: ['Moscow', 'москва'],
        className: 'russia-flag'
    },
    {
        country: ['usa', 'сша', 'united states'],
        capital: ['washington', 'вашингтон'],
        className: 'usa-flag'
    },
    {
        country: ['finland', 'финляндия'],
        capital: ['helsinki', 'хельсинки'],
        className: 'finland-flag'
    },
    {
        country: ['italy', 'италия'],
        capital: ['rome', 'рим'],
        className: 'italy-flag'
    },
    {
        country: ['norway', 'норвегия'],
        capital: ['oslo', 'осло'],
        className: 'norway-flag'
    },
    {
        country: ['france', 'франция'],
        capital: ['paris', 'париж'],
        className: 'france-flag'
    },
    {
        country: ['ukraine', 'украина'],
        capital: ['kiev', 'киев'],
        className: 'ukraine-flag'
    },
    {
        country: ['poland', 'польша'],
        capital: ['warsaw', 'варшава'],
        className: 'poland-flag'
    },
    {
        country: ['germany', 'германия'],
        capital: ['berlin', 'берлин'],
        className: 'germany-flag'
    },
    {
        country: ['sweden', 'швеция'],
        capital: ['stockholm', 'стокгольм'],
        className: 'sweden-flag'
    },
    {
        country: ['japan', 'япония'],
        capital: ['tokio', 'токио'],
        className: 'japan-flag'
    }
]



/***/ }),

/***/ "./src/js/Constants/excessTaskClasses.js":
/*!***********************************************!*\
  !*** ./src/js/Constants/excessTaskClasses.js ***!
  \***********************************************/
/*! exports provided: CLASS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() { return CLASS_NAMES; });
const CLASS_NAMES = [
    [
        'apple', 'apricot', 'banana', 'kiwi', 'lemon', 'orange', 'peach', 'pear'
    ],
    [
        'tomato', 'cabbage', 'corn', 'cucumber', 'eggplant', 'onion', 'pepper', 'pumpkin'
    ]
]




/***/ }),

/***/ "./src/js/Constants/namesCollection.js":
/*!*********************************************!*\
  !*** ./src/js/Constants/namesCollection.js ***!
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

/***/ "./src/js/Constants/sentencesTask.js":
/*!*******************************************!*\
  !*** ./src/js/Constants/sentencesTask.js ***!
  \*******************************************/
/*! exports provided: SENTENCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENTENCES", function() { return SENTENCES; });
const SENTENCES = [
    'I brush my teeth every day',
    'I always close the window at night',
    'The sun rises in the east',
    'I went to Belarus two years ago',
    'Will you be my friend?',
    'I will tell you the whole story',
    'They are moving to the other city',
    'My mother was cooking at the morning',
    'We have known each other since school years',
    'By the end of the year she had learned to cook',
    'I will have translated the article by noon',
    'We have lived here since 1975',
    'He often came here',
    'I was cooking when the phone rang'
]

/***/ }),

/***/ "./src/js/Controllers/BattleFieldController.js":
/*!*****************************************************!*\
  !*** ./src/js/Controllers/BattleFieldController.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BattleFieldController {
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
        if (this.opponentFigure) {
            this.battlePage.removeChild(this.playerFigure);
            this.battlePage.removeChild(this.opponentFigure);
        };
        this.createPlayer(player);
        this.createEnemy(opponent);
    }

    createPlayer(player) {
        this.player = player;
        this.playerFigure = this.player.createFigure();
        this.playerFigure.classList.add('player-container');
        this.player.ball = document.createElement('div');
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

/* harmony default export */ __webpack_exports__["default"] = (BattleFieldController);

/***/ }),

/***/ "./src/js/Controllers/GameConfig.js":
/*!******************************************!*\
  !*** ./src/js/Controllers/GameConfig.js ***!
  \******************************************/
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
        this.nameInput = document.getElementById('player-name-input');
        document.addEventListener('click', (e) => this.changeConfig(e));
    }

    init() {
        this.createPlayerConfigPage();
    }

    selectLocation(e) {
        this.locationId = e.target.id;
        this.showPlayerConfigPage();
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
        } else if (e.target.classList.contains('location-item')) {
            this.selectLocation(e);
        }
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
        if (this.nameInput.value) {
            this.player.name = this.nameInput.value;
            this.playerConfigPage.classList.add('hidden');            
            this.GameController.init(this.player, this.locationId);
            this.GameController.initGame();
            this.nameInput.value = "";
        } else {
            this.nameInput.classList.add('empty-input')
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameConfig); 

/***/ }),

/***/ "./src/js/Controllers/GameController.js":
/*!**********************************************!*\
  !*** ./src/js/Controllers/GameController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameController {
    constructor(battleField, enemy, tasks) {
        this.battlefield = battleField;
        this.opponent = enemy;
        this.tasksList = tasks;
        this.task = null;
        this.activeAttack = false;
        this.startPage = document.getElementById('start-page');
        this.attackConfigPage = document.getElementById('attack-config-page');
        this.attackTypeWindow = document.getElementById('attack-type');
        this.taskTypeWindow = document.getElementById('task-type');
        this.attackButton = document.getElementById('attack-button');
        this.taskSection = document.getElementById('task-field');
        document.addEventListener('click', (e) => this.handleEvents(e));
        document.addEventListener('keydown', (e) => this.keyboardControl(e));
        
    }

    init(player, location) {
        this.level = 1;
        this.solvedTasks = 0;
        this.player = player;
        this.gameStatus = null;
        this.player.createHealthBar('player-health-bar');
        this.opponent.createHealthBar('opponent-health-bar');
        this.battlefield.init(location);
    }

    initGame() {
        this.createOpponent();
        this.battlefield.render(this.player, this.opponent);
    }

    handleEvents(e) {
        if (e.target.id === 'attack-button' && !this.activeAttack) {
            this.startAttack(e);
        } else if (e.target.id === 'next-game-button') {
            this.startNextRound();
        } else if (e.target.classList.contains('exit-button')) {
            this.exitToMenu(e);
        } else if (e.target.classList.contains('attack-type-item')) {
            this.selectAttackType(e)
        } else if (e.target.classList.contains('task-type-item')) {
            this.selectTaskType(e)
        } else if (e.target.id === 'check-result') {
            this.checkAnswer();
        }
    }

    keyboardControl(e) {
        if (e.keyCode === 13 && !this.taskSection.classList.contains('hidden')) {
            this.checkAnswer();
        }
    }

    startAttack (e) {
        this.attackConfigPage.classList.remove('hidden');
        e.target.classList.contains('attack-button-animation') ? e.target.classList.remove('attack-button-animation') : null;
    }

    startNextRound () {
        this.level++;
        this.initGame();
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield.winGameWindow.classList.add('hidden');
    }

    exitToMenu (e) {
        let resultWindow = `${this.gameStatus}GameWindow`;
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield[resultWindow].classList.add('hidden');
        this.battlefield.battlePage.classList.add('hidden');
        this.startPage.classList.remove('hidden');
        this.player.health = 100;
    }

    createOpponent() {
        this.opponent.level = this.level;
        this.opponent.generateName();
        this.opponent.generateLook();
    }

    selectAttackType(e) {
        this.attackType = e.target.id;
        this.attackTypeWindow.classList.add('hidden');
        this.taskTypeWindow.classList.remove('hidden');
    }

    selectTaskType(e) {
        this.attackConfigPage.classList.add('hidden');
        this.attackTypeWindow.classList.remove('hidden');
        this.taskTypeWindow.classList.add('hidden');
        this.task = this.tasksList[e.target.id];
        this.tasksList[e.target.id].init();
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
            }, 400);
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
            }, 400);
            setTimeout(() => {
                this.player.healthBar.render(this.player.health);
                this.activeAttack = false;
                this.checkLosing();
            }, 6000);
        }
    }

    checkVictory() {
        if (!this.opponent.health) {
            this.gameStatus = 'win';
            this.battlefield.showFinalWindow(this.gameStatus);
        }
    }

    checkLosing() {
        if (!this.player.health) {
            this.gameStatus = 'lose';
            this.battlefield.showFinalWindow(this.gameStatus, this.level, this.solvedTasks);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameController);

/***/ }),

/***/ "./src/js/Scenes/Score.js":
/*!********************************!*\
  !*** ./src/js/Scenes/Score.js ***!
  \********************************/
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
        if (!localStorage['stickman-wars']) {
            wrapper.textContent = "Score list is empty..."
        } else {
            const scoreList = document.createElement('ol');
            const topScore = JSON.parse(localStorage['stickman-wars']);
            topScore.forEach(item => this.createScoreItem (item, scoreList));
            wrapper.appendChild(scoreList);
        }
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

/***/ "./src/js/Scenes/StartPage.js":
/*!************************************!*\
  !*** ./src/js/Scenes/StartPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class StartPage {
    constructor() {
        this.startPage = document.getElementById('start-page');
        this.menu = document.getElementById('main-menu');
        this.scoreSection = document.getElementById('main-score-section');
        this.scoreContainer = document.getElementById('main-score-container');
        this.aboutSection = document.getElementById('main-about-section');
        this.startPage.addEventListener('click', (e) => this.handleEvents(e));
    }

    init(score) {
        this.score = score;
    }

    handleEvents(e) {
        let id = e.target.id;
        switch (id) {
            case 'new-game':  
                this.startGame();
                break;
            case 'about': 
                this.showGameDescription();
                break;
            case 'score': 
                this.demonstrateScore();
                break;
        }

        if (e.target.classList.contains('close-button')) {
            this.menu.classList.remove('hidden');
            e.target.parentNode.classList.add('hidden');
        }
    }

    startGame() {
        this.selectLocationPage = document.getElementById('location-select');
        this.selectLocationPage.classList.remove('hidden');
        this.startPage.classList.add('hidden');
    }

    showGameDescription() {
        this.aboutSection.classList.remove('hidden');
        this.menu.classList.add('hidden');
    }

    demonstrateScore() {
        this.score.showScore(this.scoreContainer);
        this.scoreSection.classList.remove('hidden');
        this.menu.classList.add('hidden');
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new StartPage());

/***/ }),

/***/ "./src/js/Tasks/AnimalsNamesTask.js":
/*!******************************************!*\
  !*** ./src/js/Tasks/AnimalsNamesTask.js ***!
  \******************************************/
/*! exports provided: AnimalsNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsNames", function() { return AnimalsNames; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/animals */ "./src/js/Constants/animals.js");



class AnimalsNamesTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.animalsArray = _Constants_animals__WEBPACK_IMPORTED_MODULE_1__["ANIMALS"];
        this.taskWrapper = document.getElementById('animals-task-field');
        this.animalImageWrapper = document.getElementById('animal-image-wrapper');
        this.answerInput = document.getElementById('animal-name-answer');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.animalImageWrapper.innerHTML = '';
        this.shuffleArray(this.animalsArray);
        let index = Math.floor(Math.random() * this.animalsArray.length);
        this.animal = this.animalsArray[index];
        this.showAnimalImage();
    }

    showAnimalImage() {
        let image = document.createElement('div');
        image.classList.add('animal-image', this.animal.className);
        this.animalImageWrapper.appendChild(image);
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.animal.name.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

const AnimalsNames = new AnimalsNamesTask();

/***/ }),

/***/ "./src/js/Tasks/CapitalsTask.js":
/*!**************************************!*\
  !*** ./src/js/Tasks/CapitalsTask.js ***!
  \**************************************/
/*! exports provided: Capitals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capitals", function() { return Capitals; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/countries */ "./src/js/Constants/countries.js");



class CapitalsTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.countriesList = _Constants_countries__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"];
        this.taskWrapper = document.getElementById('capitals-task-field');
        this.countrySpan = document.getElementById('country-for-capital-task');
        this.answerInput = document.getElementById('capitals-answer');
    }

    init() {
        super.init();
        this.countrySpan.textContent = '';
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.countriesList.length);
        this.country = this.countriesList[index];
        this.countrySpan.textContent = this.country.country[0].toUpperCase();
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.country.capital.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

const Capitals = new CapitalsTask();

/***/ }),

/***/ "./src/js/Tasks/CarsLogoTask.js":
/*!**************************************!*\
  !*** ./src/js/Tasks/CarsLogoTask.js ***!
  \**************************************/
/*! exports provided: CarsLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsLogo", function() { return CarsLogo; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_carsLogoClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/carsLogoClassNames */ "./src/js/Constants/carsLogoClassNames.js");



class CarsLogoTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.classNamesArray = _Constants_carsLogoClassNames__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"];
        this.taskWrapper = document.getElementById('carsLogo-task-field');
        this.itemsWrapper = document.getElementById('cars-logo-wrapper');
        this.carNameSpan = document.getElementById('car-logo-name');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.classNamesArray);
        this.car = this.classNamesArray[0];
        this.carNameSpan.textContent = this.classNamesArray[0].toUpperCase();
        this.otherLogos = this.classNamesArray.slice(1, 3);
        this.allItems = this.otherLogos.concat(this.car);
        this.shuffleArray(this.allItems);
        this.createField();
    }

    createField() {
        this.allItems.forEach((item) => {
            let image = document.createElement('div');
            image.classList.add(item);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-car-logo');
            this.selectedItem ? this.selectedItem.classList.remove('selected-car-logo') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        if (this.selectedItem && this.selectedItem.classList.contains(this.car)) {
            return true;
        } else return false;
    }
}

const CarsLogo = new CarsLogoTask();

/***/ }),

/***/ "./src/js/Tasks/ComparisionAnimalsTask.js":
/*!************************************************!*\
  !*** ./src/js/Tasks/ComparisionAnimalsTask.js ***!
  \************************************************/
/*! exports provided: FasterAnimals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FasterAnimals", function() { return FasterAnimals; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/animals */ "./src/js/Constants/animals.js");



class ComparisionAnimalsTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.animalsArray = _Constants_animals__WEBPACK_IMPORTED_MODULE_1__["ANIMALS"];
        this.taskWrapper = document.getElementById('faster-animal-task-field');
        this.itemsWrapper = document.getElementById('faster-animals-task-wrapper');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.animalsArray);
        this.animals = this.animalsArray.slice(0, 2);
        this.createField();
    }

    createField() {
        this.animals.forEach(item => {
            let image = document.createElement('div');
            image.classList.add(item.className);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-animal');
            this.selectedItem ? this.selectedItem.classList.remove('selected-animal') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        this.animals.sort((a,b) => b.topSpeed - a.topSpeed);
        if (this.selectedItem && this.selectedItem.classList.contains(this.animals[0].className)) {
            return true;
        } else return false;
    }
}

const FasterAnimals = new ComparisionAnimalsTask();

/***/ }),

/***/ "./src/js/Tasks/ComparisionMathTask.js":
/*!*********************************************!*\
  !*** ./src/js/Tasks/ComparisionMathTask.js ***!
  \*********************************************/
/*! exports provided: ComparisionNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisionNumbers", function() { return ComparisionNumbers; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class ComparisionMathTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('comparision-task-field');
        this.firstElement = document.getElementById('first-comparision-number');
        this.answer = document.getElementById('comparision-operator');
        this.secondElement = document.getElementById('second-comparision-number');
    }

    init() {
        super.init();
        this.answer.value = '';
        this.generateNumbers();
    }

    generateNumbers() {
        this.firstNumber = Math.floor(Math.random() * 100);
        this.secondNumber = Math.floor(Math.random() * 100);
        this.firstElement.textContent = this.firstNumber;
        this.secondElement.textContent = this.secondNumber;
    }

    checkResult() {
        let operator = this.answer.value;
        switch (operator) {
            case '>': return (this.firstNumber > this.secondNumber);
            case '<': return (this.firstNumber < this.secondNumber);
            case '=': return (this.firstNumber === this.secondNumber);
        };
        return false;
    }
}

const ComparisionNumbers = new ComparisionMathTask();



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
        this.startParts.innerHTML = '';
        this.endParts.innerHTML = '';
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
}

const CompoundWords = new CompoundWordsTask();

/***/ }),

/***/ "./src/js/Tasks/CountriesTask.js":
/*!***************************************!*\
  !*** ./src/js/Tasks/CountriesTask.js ***!
  \***************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/countries */ "./src/js/Constants/countries.js");



class CountriesTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.countriesList = _Constants_countries__WEBPACK_IMPORTED_MODULE_1__["COUNTRIES"];
        this.taskWrapper = document.getElementById('countries-task-field');
        this.flagWrapper = document.getElementById('flag-wrapper');
        this.answerInput = document.getElementById('country-answer');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.flagWrapper.innerHTML = '';
        let index = Math.floor(Math.random() * this.countriesList.length);
        this.country = this.countriesList[index];
        this.showFlag();
    }

    showFlag() {
        let flag = document.createElement('div');
        flag.classList.add('flag', this.country.className);
        this.flagWrapper.appendChild(flag)
    }

    checkResult() {
        let answer = this.answerInput.value.toLowerCase();
        if (this.country.country.indexOf(answer) !== -1) {
            return true;
        } else return false;
    }
}

const Countries = new CountriesTask();

/***/ }),

/***/ "./src/js/Tasks/ExcessItemTask.js":
/*!****************************************!*\
  !*** ./src/js/Tasks/ExcessItemTask.js ***!
  \****************************************/
/*! exports provided: ExcessItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcessItem", function() { return ExcessItem; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_excessTaskClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/excessTaskClasses */ "./src/js/Constants/excessTaskClasses.js");



class ExcessItemTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.classNamesArray = _Constants_excessTaskClasses__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"];
        this.taskWrapper = document.getElementById('excessItem-task-field');
        this.itemsWrapper = document.getElementById('excessItem-wrapper');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.classNamesArray);
        this.shuffleArray(this.classNamesArray[0]);
        this.shuffleArray(this.classNamesArray[1]);
        this.excessItemClassName = this.classNamesArray[0][0];
        this.similarItemsClassNames = this.classNamesArray[1].slice(0, 3);
        this.allItems = this.similarItemsClassNames.concat(this.excessItemClassName);
        this.shuffleArray(this.allItems);
        this.createField();
    }

    createField() {
        this.allItems.forEach((item) => {
            let image = document.createElement('div');
            image.classList.add(item);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-excess-item');
            this.selectedItem ? this.selectedItem.classList.remove('selected-excess-item') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        if (this.selectedItem && this.selectedItem.classList.contains(this.excessItemClassName)) {
            return true;
        } else return false;
    }
}

const ExcessItem = new ExcessItemTask();

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


class ListeningTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.synth = window.speechSynthesis;
        this.taskWrapper = document.getElementById('listenning-task-field');
        this.playButton = document.getElementById('listen-button');
        this.answerInput = document.getElementById('listenning-answer');
        this.playButton.addEventListener('click', () => this.speakWord());
    }

    init() {
        super.init();
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
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
        this.firstElement = document.getElementById('first-number');
        this.operator = document.getElementById('operation');
        this.secondElement = document.getElementById('second-number');
    }

    init() {
        super.init();
        this.result.value = '';
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
}

const MathTask = new MathExerciseTask();



/***/ }),

/***/ "./src/js/Tasks/SentencesGrammarTask.js":
/*!**********************************************!*\
  !*** ./src/js/Tasks/SentencesGrammarTask.js ***!
  \**********************************************/
/*! exports provided: GrammarTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrammarTask", function() { return GrammarTask; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_sentencesTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/sentencesTask */ "./src/js/Constants/sentencesTask.js");



class SentencesGrammarTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.sentensesArray = _Constants_sentencesTask__WEBPACK_IMPORTED_MODULE_1__["SENTENCES"];
        this.taskWrapper = document.getElementById('grammar-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.shuffleArray(this.sentensesArray);
        this.sentence = this.sentensesArray[0].split(' ');
        this.arrayOfCells = [];
        this.dragElement = null;
        this.shuffleArray(this.sentence);
        this.createField();
    }

    createField() {
        this.wordsContainer = document.createElement('div');
        this.wordsContainer.classList.add('cells-container');
        this.sentence.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.wordsContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.wordsContainer);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        this.dragElement = e.target;
    }

    drop(e) {
        e.preventDefault();
        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {
            let word = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = word;
        }
    }

    checkResult() {
        let playerAnswer = '';
        this.arrayOfCells.forEach(item => playerAnswer += `${item.textContent} `);
        let correctAnswer = this.sentensesArray[0];
        if (playerAnswer.trim() === correctAnswer) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.wordsContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.wordsContainer.innerHTML = '';
    }
}

const GrammarTask = new SentencesGrammarTask();

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


class SortableLettersTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('reorder-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfCells = [];
        this.dragElement = null;
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.createField();
    }

    createField() {
        this.wordContainer = document.createElement('div');
        this.wordContainer.classList.add('cells-container');
        let arrayOfLetters = this.word.split('');
        this.shuffleArray(arrayOfLetters);
        arrayOfLetters.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
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
        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {
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

/***/ "./src/js/Tasks/SortableNumbersTask.js":
/*!*********************************************!*\
  !*** ./src/js/Tasks/SortableNumbersTask.js ***!
  \*********************************************/
/*! exports provided: ReorderNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderNumbers", function() { return ReorderNumbers; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class ReorderNumbersTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('sort-numbers-task-field');
        this.taskWrapper.addEventListener('dragstart', (e) => this.dragStart(e));
        this.taskWrapper.addEventListener('drop', (e) => this.drop(e));
        this.taskWrapper.addEventListener('dragover', (e) => this.allowDrop(e));
    }

    init() {
        super.init();
        this.arrayOfNumbers = [];
        this.arrayOfCells = [];
        this.dragElement = null;
        this.fillArrayOfNumbers();
        this.createField();
    }

    fillArrayOfNumbers() {
        let i = 0;
        for (i; i < 5; i++) {
            let number = Math.floor(Math.random() * 100);
            this.arrayOfNumbers.push(number);
        }
    }

    createField() {
        this.numbersContainer = document.createElement('div');
        this.numbersContainer.classList.add('cells-container');
        this.arrayOfNumbers.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.numbersContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.taskWrapper.appendChild(this.numbersContainer);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        this.dragElement = e.target;
    }

    drop(e) {
        e.preventDefault();
        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {
            let number = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = number;
        }
    }

    checkResult() {
        let userAnswer = '';
        let correctAnswer = '';
        this.arrayOfCells.forEach(item => userAnswer += item.textContent);
        this.arrayOfNumbers.sort((a,b) => a-b);
        this.arrayOfNumbers.forEach(item => correctAnswer += item);
        if (userAnswer === correctAnswer) {
            return true;
        } else return false;
    }

    correctAnswer() {
        super.correctAnswer();
        this.numbersContainer.innerHTML = '';
    }

    wrongAnswer() {
        super.wrongAnswer();
        this.numbersContainer.innerHTML = '';
    }
}

const ReorderNumbers = new ReorderNumbersTask();

/***/ }),

/***/ "./src/js/Tasks/SquareTask.js":
/*!************************************!*\
  !*** ./src/js/Tasks/SquareTask.js ***!
  \************************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class SquareTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('squareFigure-task-field');
        this.figureWrapper = document.getElementById('figure-wrapper');
        this.answerInput = document.getElementById('square-answer');
        this.figuresList = ['rectangle-triangle', 'rectangle', 'isosceles-triangle', 'trapezium'];
    }

    init() {
        super.init();
        this.answerInput.value = '';
        this.figureWrapper.innerHTML = '';
        this.shuffleArray(this.figuresList);
        let index = Math.floor(Math.random() * this.figuresList.length);
        this.figure = this.figuresList[index];
        this.generateSize();
        this.createDescription()
        this.showFigure();
    }

    generateSize() {
        this.height = Math.floor(Math.random() * 6) + 5;
        this.width = Math.floor(Math.random() * 10) + 5;
        this.delta = Math.floor(Math.random() * 6) + 5;
        while ((this.height % 2) || (this.width % 2) || (this.delta % 2)) {
            this.delta = Math.floor(Math.random() * 5) + 5;
            this.height = Math.floor(Math.random() * 5) + 5;
            this.width = Math.floor(Math.random() * 5) + 10;
        }
        this.bottom = this.width + this.delta; 
    }

    createDescription() {
        this.description = document.createElement('p');
        switch (this.figure) {
            case 'rectangle': 
                this.description.textContent = `AB = ${this.height}, BC = ${this.width}`;
                this.square = this.height * this.width;
                break;
            case 'rectangle-triangle': 
                this.description.textContent = `BC = ${this.height}, AC = ${this.width}`;
                this.square = this.height * this.width / 2;
                break;
            case 'isosceles-triangle': 
                this.description.textContent = `AC = ${this.width}, BM = ${this.height}`;
                this.square = this.height * this.width / 2;
                break;   
            case 'trapezium': 
                this.description.textContent = `AB = ${this.bottom}, DC = ${this.width}, DF = ${this.height}`;
                this.square = this.height * (this.bottom + this.width) / 2;
                break;   
        }
    }

    showFigure() {
        this.image = document.createElement('div');
        this.image.classList.add('figure', this.figure);
        this.figureWrapper.appendChild(this.image);
        this.figureWrapper.appendChild(this.description);
    }

    checkResult() {
        if (this.square === +this.answerInput.value) {
            return true;
        } else return false;
    }
}

const Square = new SquareTask();

/***/ }),

/***/ "./src/js/Tasks/Task.js":
/*!******************************!*\
  !*** ./src/js/Tasks/Task.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/Vocabulary */ "./src/js/Constants/Vocabulary.js");


class Task {
    constructor() {
        this.vocabulary = _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_0__["VOCABULARY"];
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


class TranslationTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('translation-task-field');
        this.wordContainer = document.getElementById('word-for-translation');
        this.answerInput = document.getElementById('translation-input');
    }

    init() {
        super.init();
        this.answerInput.value = '';
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
}

const Translation = new TranslationTask()

/***/ }),

/***/ "./src/js/Tasks/bundleTasks.js":
/*!*************************************!*\
  !*** ./src/js/Tasks/bundleTasks.js ***!
  \*************************************/
/*! exports provided: Listening, CompoundWords, MathTask, SortableLetters, Translation, Countries, Square, Capitals, ComparisionNumbers, ExcessItem, CarsLogo, ReorderNumbers, GrammarTask, FasterAnimals, AnimalsNames */
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

/* harmony import */ var _CountriesTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountriesTask */ "./src/js/Tasks/CountriesTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return _CountriesTask__WEBPACK_IMPORTED_MODULE_5__["Countries"]; });

/* harmony import */ var _SquareTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SquareTask */ "./src/js/Tasks/SquareTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return _SquareTask__WEBPACK_IMPORTED_MODULE_6__["Square"]; });

/* harmony import */ var _CapitalsTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CapitalsTask */ "./src/js/Tasks/CapitalsTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capitals", function() { return _CapitalsTask__WEBPACK_IMPORTED_MODULE_7__["Capitals"]; });

/* harmony import */ var _ComparisionMathTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComparisionMathTask */ "./src/js/Tasks/ComparisionMathTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparisionNumbers", function() { return _ComparisionMathTask__WEBPACK_IMPORTED_MODULE_8__["ComparisionNumbers"]; });

/* harmony import */ var _ExcessItemTask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExcessItemTask */ "./src/js/Tasks/ExcessItemTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExcessItem", function() { return _ExcessItemTask__WEBPACK_IMPORTED_MODULE_9__["ExcessItem"]; });

/* harmony import */ var _CarsLogoTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CarsLogoTask */ "./src/js/Tasks/CarsLogoTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarsLogo", function() { return _CarsLogoTask__WEBPACK_IMPORTED_MODULE_10__["CarsLogo"]; });

/* harmony import */ var _SortableNumbersTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SortableNumbersTask */ "./src/js/Tasks/SortableNumbersTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReorderNumbers", function() { return _SortableNumbersTask__WEBPACK_IMPORTED_MODULE_11__["ReorderNumbers"]; });

/* harmony import */ var _SentencesGrammarTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SentencesGrammarTask */ "./src/js/Tasks/SentencesGrammarTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GrammarTask", function() { return _SentencesGrammarTask__WEBPACK_IMPORTED_MODULE_12__["GrammarTask"]; });

/* harmony import */ var _ComparisionAnimalsTask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ComparisionAnimalsTask */ "./src/js/Tasks/ComparisionAnimalsTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FasterAnimals", function() { return _ComparisionAnimalsTask__WEBPACK_IMPORTED_MODULE_13__["FasterAnimals"]; });

/* harmony import */ var _AnimalsNamesTask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnimalsNamesTask */ "./src/js/Tasks/AnimalsNamesTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimalsNames", function() { return _AnimalsNamesTask__WEBPACK_IMPORTED_MODULE_14__["AnimalsNames"]; });

















/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scenes_StartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scenes/StartPage */ "./src/js/Scenes/StartPage.js");
/* harmony import */ var _Controllers_GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/GameConfig */ "./src/js/Controllers/GameConfig.js");
/* harmony import */ var _Character_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character/Character */ "./src/js/Character/Character.js");
/* harmony import */ var _Character_Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Character/Enemy */ "./src/js/Character/Enemy.js");
/* harmony import */ var _Controllers_BattleFieldController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controllers/BattleFieldController */ "./src/js/Controllers/BattleFieldController.js");
/* harmony import */ var _Controllers_GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controllers/GameController */ "./src/js/Controllers/GameController.js");
/* harmony import */ var _Constants_characterClassList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants/characterClassList */ "./src/js/Constants/characterClassList.js");
/* harmony import */ var _Constants_namesCollection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Constants/namesCollection */ "./src/js/Constants/namesCollection.js");
/* harmony import */ var _Scenes_Score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Scenes/Score */ "./src/js/Scenes/Score.js");
/* harmony import */ var _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tasks/bundleTasks */ "./src/js/Tasks/bundleTasks.js");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/bundle.css */ "./src/style/bundle.css");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_bundle_css__WEBPACK_IMPORTED_MODULE_10__);













const score = new _Scenes_Score__WEBPACK_IMPORTED_MODULE_8__["default"]();
const player = new _Character_Character__WEBPACK_IMPORTED_MODULE_2__["default"]();
const opponent = new _Character_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"](_Constants_namesCollection__WEBPACK_IMPORTED_MODULE_7__["default"]);
const battleField = new _Controllers_BattleFieldController__WEBPACK_IMPORTED_MODULE_4__["default"](score);
const gameController = new _Controllers_GameController__WEBPACK_IMPORTED_MODULE_5__["default"](battleField, opponent, _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_9__);
const gameConfig = new _Controllers_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"](player, _Constants_characterClassList__WEBPACK_IMPORTED_MODULE_6__["CLASS_LIST"], gameController);

gameConfig.init();

const initApp = function () {
    _Scenes_StartPage__WEBPACK_IMPORTED_MODULE_0__["default"].init(score);
}

document.addEventListener("DOMContentLoaded", initApp());

/***/ }),

/***/ "./src/style/bundle.css":
/*!******************************!*\
  !*** ./src/style/bundle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map