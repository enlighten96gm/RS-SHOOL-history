/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Match-ts/./src/style/index.scss?");

/***/ }),

/***/ "./src/add-iamge.ts":
/*!**************************!*\
  !*** ./src/add-iamge.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/state */ \"./src/types/state.ts\");\n\nvar AddImage = function () {\n    var addImageButton = document.querySelector('.save__picture');\n    var imageWindow = document.querySelector('.save__picture_img');\n    var addImageHeandler = function () {\n        var file = addImageButton.files[0];\n        var reader = new FileReader();\n        reader.onload = function () {\n            var newSrc = reader.result;\n            imageWindow.innerHTML = '';\n            imageWindow.src = \"\" + newSrc;\n            var base64 = btoa(\"\" + newSrc);\n            _types_state__WEBPACK_IMPORTED_MODULE_0__.default.data64 = base64;\n        };\n        reader.readAsDataURL(file);\n        imageWindow.style.display = 'block';\n    };\n    addImageButton.addEventListener('change', addImageHeandler);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddImage);\n\n\n//# sourceURL=webpack://Match-ts/./src/add-iamge.ts?");

/***/ }),

/***/ "./src/add-user.ts":
/*!*************************!*\
  !*** ./src/add-user.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _get_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data */ \"./src/get-data.ts\");\n/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/state */ \"./src/types/state.ts\");\n/* harmony import */ var _rebuild_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rebuild-images */ \"./src/rebuild-images.ts\");\n\n\n\n\nvar AddUser = function () {\n    var addButton = document.querySelector('.login__submit_label');\n    var inactiveButton = document.querySelector('.login__submit_label');\n    var loginInputs = Array.from(document.querySelectorAll('input'));\n    var everyDot = Array.from(document.querySelectorAll('.every__dot'));\n    var nameInput = document.querySelector('.first__segment_login__name_2');\n    var emailInput = document.querySelector('.first__segment_login__email_2');\n    var surnameInput = document.querySelector('.first__segment_login__password_2');\n    // window.indexedDB.deleteDatabase('enlighten-96-gm');\n    var regex1 = /^[a-zA-Zа-яА-я]+$/;\n    var regex2 = /^(([^<>()\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    var nameFlag = _types_state__WEBPACK_IMPORTED_MODULE_2__.default.nameFlag, surnameFlag = _types_state__WEBPACK_IMPORTED_MODULE_2__.default.surnameFlag, emailFlag = _types_state__WEBPACK_IMPORTED_MODULE_2__.default.emailFlag;\n    var loginUser = function (e) {\n        if (nameFlag && surnameFlag && emailFlag) {\n            e.preventDefault();\n            _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.openDb();\n            _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getLength().then(function (value) {\n                _types_state__WEBPACK_IMPORTED_MODULE_2__.default.ssn = \"\" + (value + 1);\n                _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.putObj(_types_state__WEBPACK_IMPORTED_MODULE_2__.default);\n            });\n            setTimeout(function () { (0,_get_data__WEBPACK_IMPORTED_MODULE_1__.default)(_types_state__WEBPACK_IMPORTED_MODULE_2__.default.ssn); }, 100);\n            setTimeout(function () { (0,_rebuild_images__WEBPACK_IMPORTED_MODULE_3__.default)(_types_state__WEBPACK_IMPORTED_MODULE_2__.default.ssn); }, 100);\n            // state.ssn = `${state.ssn}1`;\n            nameInput.value = '';\n            surnameInput.value = '';\n            emailInput.value = '';\n            everyDot.forEach(function (item) {\n                item.classList.remove('if__dot_active');\n            });\n        }\n    };\n    var fillState = function (e) {\n        var element = e.target;\n        switch (element) {\n            case nameInput:\n                nameFlag = false;\n                everyDot[0].classList.remove('if__dot_active');\n                if (element.value.match(regex1) !== null) {\n                    _types_state__WEBPACK_IMPORTED_MODULE_2__.default.name = element.value;\n                    everyDot[0].classList.add('if__dot_active');\n                    nameFlag = true;\n                }\n                break;\n            case surnameInput:\n                surnameFlag = false;\n                everyDot[1].classList.remove('if__dot_active');\n                if (element.value.match(regex1) !== null) {\n                    _types_state__WEBPACK_IMPORTED_MODULE_2__.default.surname = element.value;\n                    everyDot[1].classList.add('if__dot_active');\n                    surnameFlag = true;\n                }\n                break;\n            case emailInput:\n                emailFlag = false;\n                everyDot[2].classList.remove('if__dot_active');\n                if (element.value.match(regex2) !== null) {\n                    _types_state__WEBPACK_IMPORTED_MODULE_2__.default.email = element.value;\n                    everyDot[2].classList.add('if__dot_active');\n                    emailFlag = true;\n                }\n                break;\n            default:\n                break;\n        }\n        inactiveButton.classList.remove('if__dot_active');\n        if (nameFlag && surnameFlag && emailFlag) {\n            inactiveButton.classList.add('if__dot_active');\n        }\n    };\n    loginInputs.forEach(function (input) {\n        input.addEventListener('keyup', fillState);\n    });\n    addButton.addEventListener('click', loginUser);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUser);\n\n\n//# sourceURL=webpack://Match-ts/./src/add-user.ts?");

/***/ }),

/***/ "./src/crash-game.ts":
/*!***************************!*\
  !*** ./src/crash-game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar GameCrash = function () {\n    var deleteElement = document.querySelector('.game__board_cards');\n    var timerTIme = document.querySelector('.game__board_timer');\n    deleteElement.innerHTML = '';\n    timerTIme.innerHTML = '';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameCrash);\n\n\n//# sourceURL=webpack://Match-ts/./src/crash-game.ts?");

/***/ }),

/***/ "./src/difficulty/difficultyHandler.ts":
/*!*********************************************!*\
  !*** ./src/difficulty/difficultyHandler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _easy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easy */ \"./src/difficulty/easy.ts\");\n\n\nvar DifficultyToggler = function (ssn) {\n    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getObj(ssn).then(function (res) {\n        (0,_easy__WEBPACK_IMPORTED_MODULE_1__.default)(res);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DifficultyToggler);\n\n\n//# sourceURL=webpack://Match-ts/./src/difficulty/difficultyHandler.ts?");

/***/ }),

/***/ "./src/difficulty/easy.ts":
/*!********************************!*\
  !*** ./src/difficulty/easy.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/game-page */ \"./src/pages/game-page.ts\");\n\nvar CreateEasy = function (state) {\n    var repetitions = 0;\n    var cardType = '';\n    if (state.difculty === 'easy') {\n        repetitions = 6;\n    }\n    else if (state.difculty === 'medium') {\n        repetitions = 16;\n    }\n    else if (state.difculty === 'hard') {\n        repetitions = 32;\n    }\n    if (state.cards === 'animals') {\n        cardType = 'img';\n    }\n    else if (state.cards === '?') {\n        cardType = 'quesyion';\n    }\n    else if (state.cards === 'people') {\n        cardType = 'people';\n    }\n    var deleteElement = document.querySelector('.something__game');\n    if (repetitions === 6) {\n        deleteElement.classList.remove('game__board_cards-medium');\n        deleteElement.classList.remove('game__board_cards-hard');\n        deleteElement.classList.add('game__board_cards');\n    }\n    if (repetitions === 16) {\n        deleteElement.classList.remove('game__board_cards');\n        deleteElement.classList.remove('game__board_cards-hard');\n        deleteElement.classList.add('game__board_cards-medium');\n    }\n    if (repetitions === 32) {\n        deleteElement.classList.remove('game__board_cards');\n        deleteElement.classList.add('game__board_cards-hard');\n        deleteElement.classList.remove('game__board_cards-medium');\n    }\n    deleteElement.innerHTML = '';\n    for (var i = 1; i <= repetitions; i += 1) {\n        deleteElement.innerHTML += \"\\n        <div id=\\\"\" + i + \"\\\" class=\\\"game__card\\\">\\n            <div class=\\\"game__card_back game__card_face\\\"></div>\\n            <div class=\\\"game__card_front game__card_face \" + cardType + i + \" card__value\\\"></div>\\n        </div>\\n        <div id=\\\"\" + i + \"\\\" class=\\\"game__card\\\">\\n            <div class=\\\"game__card_back game__card_face\\\"></div>\\n            <div class=\\\"game__card_front game__card_face \" + cardType + i + \" card__value\\\"></div>\\n        </div>\\n        \";\n    }\n    (0,_pages_game_page__WEBPACK_IMPORTED_MODULE_0__.default)(state);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateEasy);\n\n\n//# sourceURL=webpack://Match-ts/./src/difficulty/easy.ts?");

/***/ }),

/***/ "./src/get-data.ts":
/*!*************************!*\
  !*** ./src/get-data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _param_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./param-component */ \"./src/param-component.ts\");\n\n\nvar GetData = function (ssn) {\n    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getObj(ssn).then(function (res) { return (0,_param_component__WEBPACK_IMPORTED_MODULE_1__.default)(res); });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetData);\n\n\n//# sourceURL=webpack://Match-ts/./src/get-data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ \"./src/login.ts\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _add_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user */ \"./src/add-user.ts\");\n/* harmony import */ var _add_iamge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-iamge */ \"./src/add-iamge.ts\");\n\n\n\n\n// import CreateScoreFunc from './score/final-score-create';\n(0,_login__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_add_user__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_add_iamge__WEBPACK_IMPORTED_MODULE_3__.default)();\n// CreateScoreFunc()\n\n\n//# sourceURL=webpack://Match-ts/./src/index.ts?");

/***/ }),

/***/ "./src/indexed-DB.ts":
/*!***************************!*\
  !*** ./src/indexed-DB.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Idb = {\n    DB_NAME: 'enlighten-96-gm',\n    DB_VERSION: 1,\n    DB_STORE_NAME: 'users',\n    db: null,\n    openDb: function () {\n        var _this = this;\n        return new Promise(function (res, rej) {\n            var request = indexedDB.open(Idb.DB_NAME, Idb.DB_VERSION);\n            request.onsuccess = function () {\n                Idb.db = request.result;\n                res(Idb.db);\n            };\n            request.onerror = function () {\n                rej(_this.error);\n            };\n            request.onupgradeneeded = function (event) {\n                var myDB = event.target.result;\n                if (!myDB.objectStoreNames.contains(Idb.DB_STORE_NAME)) {\n                    myDB.createObjectStore(Idb.DB_STORE_NAME, { keyPath: 'ssn' });\n                }\n                res(Idb.db);\n            };\n        });\n    },\n    clearObjectStore: function () {\n        var _this = this;\n        Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.clear();\n            request.onsuccess = function () {\n                res(objectStore);\n            };\n            request.onerror = function () {\n                rej(_this.error);\n            };\n        }); });\n    },\n    getObj: function (ssn) {\n        return Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readonly');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.get(ssn);\n            request.onsuccess = function () { return res(request.result); };\n            request.onerror = function (event) {\n                rej(event);\n            };\n        }); });\n    },\n    getLength: function () {\n        return Idb.openDb().then(function (db) { return new Promise(function (res) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var count = objectStore.count();\n            count.onsuccess = function () {\n                res(count.result);\n            };\n        }); });\n    },\n    putObj: function (newUser) {\n        Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.put(newUser);\n            request.onsuccess = function (event) {\n                res(event.target.result);\n            };\n            request.onerror = function (event) {\n                rej(event.error);\n            };\n        }); });\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Idb);\n\n\n//# sourceURL=webpack://Match-ts/./src/indexed-DB.ts?");

/***/ }),

/***/ "./src/login.ts":
/*!**********************!*\
  !*** ./src/login.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Login = function () {\n    var loginForm = document.querySelector('.login');\n    var navButtons = Array.from(document.querySelectorAll('.nav__button'));\n    var loginInputs = Array.from(document.querySelectorAll('input'));\n    var everyDot = Array.from(document.querySelectorAll('.every__dot'));\n    var toggleLoginWindow = function (e) {\n        var element = e.target;\n        if (element.className === 'third__block-header_text') {\n            loginForm.classList.add('login__active_vision');\n        }\n        if (element.className === 'login login__active_vision') {\n            loginForm.classList.remove('login__active_vision');\n            loginInputs.forEach(function (input) {\n                var newInp = input;\n                newInp.value = '';\n            });\n            everyDot.forEach(function (dot) { return dot.classList.remove('if__dot_active'); });\n        }\n        if (element.className === 'login__submit_cancel') {\n            loginForm.classList.remove('login__active_vision');\n            loginInputs.forEach(function (input) {\n                var newInp = input;\n                newInp.value = '';\n            });\n            everyDot.forEach(function (dot) { return dot.classList.remove('if__dot_active'); });\n        }\n    };\n    var buttonsHeandler = function (e) {\n        var element = e.target;\n        navButtons.forEach(function (button) {\n            var newButton = button;\n            newButton.style.color = '#ff00a0';\n        });\n        element.style.color = '#7a04eb';\n    };\n    navButtons.forEach(function (button) { button.addEventListener('click', buttonsHeandler); });\n    document.addEventListener('click', toggleLoginWindow);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n\n//# sourceURL=webpack://Match-ts/./src/login.ts?");

/***/ }),

/***/ "./src/pages/best-score.ts":
/*!*********************************!*\
  !*** ./src/pages/best-score.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crash_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crash-game */ \"./src/crash-game.ts\");\n/* harmony import */ var _score_score_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/score-change */ \"./src/score/score-change.ts\");\n\n\nvar BestScore = function (state, gameState) {\n    var startButton = document.querySelector('.fourth__block-header');\n    var stopGameBtn = document.querySelector('.fifth__block-header');\n    var gameWindow = document.querySelector('.game');\n    startButton.classList.remove('inactive__header');\n    stopGameBtn.classList.add('inactive__header');\n    gameWindow.classList.remove('if__game_active');\n    (0,_score_score_change__WEBPACK_IMPORTED_MODULE_1__.default)(state, gameState);\n    (0,_crash_game__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestScore);\n\n\n//# sourceURL=webpack://Match-ts/./src/pages/best-score.ts?");

/***/ }),

/***/ "./src/pages/game-page.ts":
/*!********************************!*\
  !*** ./src/pages/game-page.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _best_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./best-score */ \"./src/pages/best-score.ts\");\n\n\nvar ActiveGame = function (state) {\n    var card = Array.from(document.querySelectorAll('.game__card'));\n    var stopGame = document.querySelector('.fifth__block-header');\n    var settingsWindow = document.querySelector('.settings');\n    var score = document.querySelector('.score');\n    var gameState = {\n        time: -10,\n        done: false,\n        clicks: 0,\n        cardArray: card,\n        matchedCards: [],\n        checkCard: null,\n        goAhead: true,\n    };\n    var StartGame = function (timerId) {\n        // ===/////////////\n        var cardMatch = function (card1, card2) {\n            gameState.matchedCards.push(card1);\n            gameState.matchedCards.push(card2);\n            card1.classList.add('matched');\n            card2.classList.add('matched');\n            if (gameState.matchedCards.length === gameState.cardArray.length) {\n                var alertButton_1 = document.querySelector('.congrats__button_inside-button');\n                var alertWindow_1 = document.querySelector('.congrats__button');\n                alertWindow_1.style.display = 'flex';\n                clearInterval(timerId);\n                gameState.done = true;\n                var alertButtonHeandler_1 = function () {\n                    alertWindow_1.style.display = 'none';\n                    score.classList.add('if__score_active');\n                    settingsWindow.classList.remove('if__settings_active');\n                    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getObj(state.ssn).then(function (res) { return (0,_best_score__WEBPACK_IMPORTED_MODULE_1__.default)(res, gameState); });\n                    alertButton_1.removeEventListener('click', alertButtonHeandler_1);\n                };\n                alertButton_1.addEventListener('click', alertButtonHeandler_1);\n            }\n        };\n        var noCardMatch = function (card1, card2) {\n            setTimeout(function () {\n                card1.classList.remove('visible');\n                card2.classList.remove('visible');\n            }, 1000);\n        };\n        var getCard = function (cartochka1) { return cartochka1.id; };\n        var checkIfMatched = function (cartochka) {\n            if (getCard(cartochka) === getCard(gameState.checkCard)) {\n                cardMatch(cartochka, gameState.checkCard);\n            }\n            else {\n                gameState.clicks -= 2;\n                noCardMatch(cartochka, gameState.checkCard);\n            }\n            gameState.checkCard = null;\n        };\n        var cardHeandler = function (e) {\n            var element = e.target;\n            gameState.clicks += 1;\n            element.parentElement.classList.add('visible');\n            if (gameState.checkCard) {\n                checkIfMatched(element.parentElement);\n            }\n            else {\n                gameState.checkCard = element.parentElement;\n            }\n        };\n        card.forEach(function (cartochka2) { return cartochka2.addEventListener('click', cardHeandler); });\n    };\n    var randomOrder = function () {\n        for (var i = gameState.cardArray.length - 1; i > 0; i -= 1) {\n            var random = Math.floor(Math.random() * (i + 1));\n            gameState.cardArray[random].style.order = \"\" + i;\n            gameState.cardArray[i].style.order = \"\" + random;\n        }\n    };\n    randomOrder();\n    card.forEach(function (cartochka3) { return cartochka3.classList.add('visible'); });\n    setTimeout(function () {\n        card.forEach(function (cartochka4) { return cartochka4.classList.remove('visible'); });\n    }, 10000);\n    var timerTIme = document.querySelector('.game__board_timer');\n    var timerIncrease = function () {\n        var timerId = setInterval(function () {\n            if (gameState.time === 0) {\n                StartGame(timerId);\n            }\n            if (!gameState.done) {\n                gameState.time += 1;\n                timerTIme.innerHTML = \"\" + gameState.time;\n            }\n            else {\n                timerTIme.innerHTML = \"\" + gameState.time;\n            }\n        }, 1000);\n        stopGame.addEventListener('click', function () {\n            clearInterval(timerId);\n        });\n    };\n    timerIncrease();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveGame);\n\n\n//# sourceURL=webpack://Match-ts/./src/pages/game-page.ts?");

/***/ }),

/***/ "./src/pages/settings-page.ts":
/*!************************************!*\
  !*** ./src/pages/settings-page.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _types_settings_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/settings-state */ \"./src/types/settings-state.ts\");\n\n\nvar Settings = function (state) {\n    var copyState = state;\n    var cardDifficultyBtn = document.querySelector('.cards__difficulty_third');\n    var cardTypeBtn = document.querySelector('.cards__type_third');\n    var toggleSettings = function (e) {\n        var element = e.target;\n        if (element.className === 'cards__type_second') {\n            cardTypeBtn.classList.add('if__btn_active');\n        }\n        if (element.className === 'cards__difficulty_second') {\n            cardDifficultyBtn.classList.add('if__btn_active');\n        }\n    };\n    var switchTypeCard = function (e) {\n        var element = e.target;\n        if (element.id === '1') {\n            copyState.cards = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.animals;\n            cardTypeBtn.classList.remove('if__btn_active');\n        }\n        if (element.id === '2') {\n            copyState.cards = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.people;\n            cardTypeBtn.classList.remove('if__btn_active');\n        }\n        if (element.id === '3') {\n            copyState.cards = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.question;\n            cardTypeBtn.classList.remove('if__btn_active');\n        }\n        _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.putObj(copyState);\n    };\n    var switchDifficulty = function (e) {\n        var element = e.target;\n        if (element.id === '1') {\n            copyState.difculty = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.easy;\n            cardDifficultyBtn.classList.remove('if__btn_active');\n        }\n        if (element.id === '2') {\n            copyState.difculty = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.medium;\n            cardDifficultyBtn.classList.remove('if__btn_active');\n        }\n        if (element.id === '3') {\n            copyState.difculty = _types_settings_state__WEBPACK_IMPORTED_MODULE_1__.default.hard;\n            cardDifficultyBtn.classList.remove('if__btn_active');\n        }\n        _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.putObj(copyState);\n    };\n    cardDifficultyBtn.addEventListener('click', switchDifficulty);\n    cardTypeBtn.addEventListener('click', switchTypeCard);\n    document.addEventListener('click', toggleSettings);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\n\n\n//# sourceURL=webpack://Match-ts/./src/pages/settings-page.ts?");

/***/ }),

/***/ "./src/param-component.ts":
/*!********************************!*\
  !*** ./src/param-component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _crash_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crash-game */ \"./src/crash-game.ts\");\n/* harmony import */ var _difficulty_difficultyHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./difficulty/difficultyHandler */ \"./src/difficulty/difficultyHandler.ts\");\n/* harmony import */ var _pages_settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/settings-page */ \"./src/pages/settings-page.ts\");\n\n\n\nvar Param = function (state) {\n    var registerButton = document.querySelector('.third__block-header_text');\n    var headerImageSmall = document.querySelector('.header__upload_img');\n    var settings = document.querySelector('.second__block-header_settings');\n    var aboutGame = document.querySelector('.second__block-header_about');\n    var startButton = document.querySelector('.fourth__block-header');\n    var scoreBtn = document.querySelector('.second__block-header_best');\n    var imageWindow = document.querySelector('.save__picture_img');\n    var stopGameBtn = document.querySelector('.fifth__block-header');\n    var startGameBtn = document.querySelector('.start__game');\n    var settingsWindow = document.querySelector('.settings');\n    var logOutBtn = document.querySelector('.log__out');\n    var gameWindow = document.querySelector('.game');\n    var loginForm = document.querySelector('.login');\n    var score = document.querySelector('.score');\n    if (state) {\n        loginForm.classList.remove('login__active_vision');\n        registerButton.style.display = 'none';\n        startButton.classList.remove('inactive__header');\n    }\n    var logOutHeandler = function () {\n        imageWindow.style.display = 'none';\n        headerImageSmall.classList.remove('header__upload_img-visible');\n        headerImageSmall.src = '';\n        registerButton.style.display = 'flex';\n        settingsWindow.classList.remove('if__settings_active');\n        score.classList.remove('if__score_active');\n        startButton.classList.add('inactive__header');\n        settingsWindow.classList.remove('if__settings_active');\n    };\n    var startGameHeandler = function () {\n        startButton.classList.add('inactive__header');\n        stopGameBtn.classList.remove('inactive__header');\n        gameWindow.classList.add('if__game_active');\n        settingsWindow.classList.remove('if__settings_active');\n        (0,_difficulty_difficultyHandler__WEBPACK_IMPORTED_MODULE_1__.default)(state.ssn);\n    };\n    var stopGameHeandler = function () {\n        startButton.classList.remove('inactive__header');\n        stopGameBtn.classList.add('inactive__header');\n        gameWindow.classList.remove('if__game_active');\n        (0,_crash_game__WEBPACK_IMPORTED_MODULE_0__.default)();\n    };\n    var settingsHeandler = function () {\n        settingsWindow.classList.add('if__settings_active');\n        score.classList.remove('if__score_active');\n        (0,_pages_settings_page__WEBPACK_IMPORTED_MODULE_2__.default)(state);\n    };\n    var scoreHeandler = function () {\n        score.classList.add('if__score_active');\n        settingsWindow.classList.remove('if__settings_active');\n    };\n    var aboutGameHeandler = function () {\n        settingsWindow.classList.remove('if__settings_active');\n        score.classList.remove('if__score_active');\n    };\n    scoreBtn.addEventListener('click', scoreHeandler);\n    logOutBtn.addEventListener('click', logOutHeandler);\n    settings.addEventListener('click', settingsHeandler);\n    aboutGame.addEventListener('click', aboutGameHeandler);\n    stopGameBtn.addEventListener('click', stopGameHeandler);\n    startGameBtn.addEventListener('click', startGameHeandler);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Param);\n\n\n//# sourceURL=webpack://Match-ts/./src/param-component.ts?");

/***/ }),

/***/ "./src/rebuild-images.ts":
/*!*******************************!*\
  !*** ./src/rebuild-images.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed-DB */ \"./src/indexed-DB.ts\");\n\nvar RebuildImages = function (ssn) {\n    var headerImageSmall = document.querySelector('.header__upload_img');\n    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getObj(ssn).then(function (res) {\n        var decoded = atob(res.data64);\n        headerImageSmall.src = decoded;\n        if (res.data64.length > 10) {\n            headerImageSmall.classList.add('header__upload_img-visible');\n        }\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RebuildImages);\n\n\n//# sourceURL=webpack://Match-ts/./src/rebuild-images.ts?");

/***/ }),

/***/ "./src/score/final-score-create.ts":
/*!*****************************************!*\
  !*** ./src/score/final-score-create.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _score_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./score-array */ \"./src/score/score-array.ts\");\n\n\nvar CreateScoreFunc = function () {\n    var scoreContainder = document.querySelector('.score__container_block');\n    var userArray = [];\n    scoreContainder.innerHTML = '';\n    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getLength().then(function (res) {\n        for (var i = res; i > res - 10; i -= 1) {\n            if (i <= 0) {\n                return;\n            }\n            _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.getObj(\"\" + i).then(function (user) {\n                userArray.push(user);\n                userArray.sort(function (a, b) {\n                    if (a.score > b.score) {\n                        return -1;\n                    }\n                    if (a.score < b.score) {\n                        return 1;\n                    }\n                    return 0;\n                });\n                if (userArray.length === res || userArray.length === 10) {\n                    for (var j = 0; j < userArray.length; j += 1) {\n                        var decoded = atob(userArray[j].data64);\n                        _score_array__WEBPACK_IMPORTED_MODULE_1__.default.push(decoded);\n                        scoreContainder.innerHTML += \"\\n                <div class=\\\"player__container\\\">\\n                    <div class=\\\"player__container_img\\\">\\n                        <img class=\\\"score__upload_img\\\" src=\\\"\" + _score_array__WEBPACK_IMPORTED_MODULE_1__.default[j] + \"\\\" alt=\\\"\\\">\\n                    </div>\\n                    <div class=\\\"player__container_info\\\">\\n                        <div class=\\\"player__container_info-name\\\">\" + userArray[j].name + \"</div>\\n                        <div class=\\\"player__container_info-surname\\\">\" + userArray[j].surname + \"</div>\\n                    </div>\\n                    <div class=\\\"player__container_info-email\\\">\" + userArray[j].email + \"</div>\\n                    <div class=\\\"player__container_score\\\">\\n                        <div class=\\\"player__container_score-up\\\">SCORE</div>\\n                        <div class=\\\"player__container_score-down\\\">\" + userArray[j].score + \"</div>\\n                    </div>\\n                </div>\\n                \";\n                    }\n                }\n            });\n        }\n    });\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateScoreFunc);\n\n\n//# sourceURL=webpack://Match-ts/./src/score/final-score-create.ts?");

/***/ }),

/***/ "./src/score/score-array.ts":
/*!**********************************!*\
  !*** ./src/score/score-array.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar data64Arr = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data64Arr);\n\n\n//# sourceURL=webpack://Match-ts/./src/score/score-array.ts?");

/***/ }),

/***/ "./src/score/score-change.ts":
/*!***********************************!*\
  !*** ./src/score/score-change.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _indexed_DB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexed-DB */ \"./src/indexed-DB.ts\");\n/* harmony import */ var _final_score_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-score-create */ \"./src/score/final-score-create.ts\");\n\n\nvar ChangeScore = function (state, gameState) {\n    var formula = (gameState.clicks * 100 - (gameState.time) * 10);\n    var store = state;\n    store.score = formula;\n    _indexed_DB__WEBPACK_IMPORTED_MODULE_0__.default.putObj(store);\n    (0,_final_score_create__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeScore);\n\n\n//# sourceURL=webpack://Match-ts/./src/score/score-change.ts?");

/***/ }),

/***/ "./src/types/settings-state.ts":
/*!*************************************!*\
  !*** ./src/types/settings-state.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar settingsState = {\n    animals: 'animals',\n    people: 'people',\n    question: '?',\n    easy: 'easy',\n    medium: 'medium',\n    hard: 'hard',\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsState);\n\n\n//# sourceURL=webpack://Match-ts/./src/types/settings-state.ts?");

/***/ }),

/***/ "./src/types/state.ts":
/*!****************************!*\
  !*** ./src/types/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar state = {\n    name: '',\n    surname: '',\n    email: '',\n    difculty: 'easy',\n    cards: 'animals',\n    nameFlag: false,\n    surnameFlag: false,\n    emailFlag: false,\n    ssn: '1',\n    data64: '',\n    score: 0,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n\n//# sourceURL=webpack://Match-ts/./src/types/state.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;