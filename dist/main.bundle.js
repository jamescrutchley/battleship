"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    background-color: rgb(238, 238, 238);\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n\r\n}\r\n\r\n@keyframes shake {\r\n    0% { transform: translateX(0); }\r\n    10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }\r\n    20%, 40%, 60%, 80% { transform: translateX(1px); }\r\n    100% { transform: translateX(0); }\r\n  }\r\n\r\n  .shake {\r\n    animation: shake 0.1s infinite;\r\n  }\r\n\r\n.app {\r\n    --dynamic-width: calc(100vw / 10);\r\n\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    justify-self: flex-end;\r\n}\r\n\r\n.labelContainer {\r\n    height: 15vh;\r\n    padding: 0;\r\n    display: flex;\r\n    width: calc(68vw + 110px + var(--dynamic-width));    \r\n    justify-content: space-between;\r\n}\r\n\r\n.labelContainer p {\r\n    padding: 0; \r\n}\r\n\r\n.label {\r\n    margin: 0;\r\n    padding: 0;\r\n    align-self: flex-end;\r\n    position: relative;\r\n    font-weight: bold;\r\n\r\n    font-size: calc(1vw + 10px)\r\n}\r\n\r\n.botLabel::after {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↘';\r\n    top: 3vh;\r\n    right: -2vw;\r\n}\r\n\r\n.playerLabel::before {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↙';\r\n    top: 3vh;\r\n    left: -2vw;\r\n}\r\n\r\n.gridContainer {\r\n    height: fit-content;\r\n    width: fit-content;\r\n\r\n    margin-top: 3vh;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: calc(var(--dynamic-width) + 10px);\r\n}\r\n\r\n.grid {\r\n\r\n    width: fit-content;\r\n    height: fit-content;\r\n\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10,1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n\r\n}\r\n\r\n.cell {\r\n    width: calc(1.8vw + 10px);\r\n    height: calc(1.8vw + 10px);\r\n\r\n    background-color: rgb(226, 252, 255);\r\n    border: 1px black solid;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.cell p {\r\n    font-size: 0.5rem;\r\n    font-weight: bold;\r\n    background: none;  \r\n}\r\n\r\n.hovered {\r\n    background-color: lightgrey !important;\r\n    size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n/* #playerGrid  */\r\n.occupied {\r\n    background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n    background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n    cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: red;\r\n}\r\n\r\n#playAgain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n    display: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.restart {\r\n    cursor: pointer;\r\n    display: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#info {\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n\r\n    display: flex;\r\n    align-items: flex-start;\r\n    max-height: 15vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.latestaction {\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: break-spaces;\r\n    text-align: center;\r\n\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\nbody {\r\n    margin: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n    .app {\r\n        --dynamic-width: calc(100vw / 20);\r\n    }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    #info {\r\n        max-height: 15vh;\r\n    }\r\n    .cell {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .grid {\r\n        height: 30vh;\r\n        width: 30vh;\r\n    }\r\n    .gridContainer {\r\n        flex-direction: column;\r\n    }\r\n    .labelContainer {\r\n        height: 10vh;\r\n        justify-content: center;\r\n    }\r\n    .playerLabel {\r\n        position: absolute;\r\n        bottom: 40vh;\r\n        right: 10px;\r\n    }\r\n    .botLabel {\r\n        position: absolute;\r\n        top: 10vh;\r\n        left: 15px;\r\n\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oCAAoC;IACpC;;AAEJ;;AAEA;IACI,KAAK,wBAAwB,EAAE;IAC/B,0BAA0B,2BAA2B,EAAE;IACvD,qBAAqB,0BAA0B,EAAE;IACjD,OAAO,wBAAwB,EAAE;EACnC;;EAEA;IACE,8BAA8B;EAChC;;AAEF;IACI,iCAAiC;;IAEjC,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,gDAAgD;IAChD,8BAA8B;AAClC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;;IAEjB;AACJ;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;;IAElB,eAAe;;IAEf,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;;IAEvB,sCAAsC;AAC1C;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;;IAEnB,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,mCAAmC;;AAEvC;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;;IAE1B,oCAAoC;IACpC,uBAAuB;IACvB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;;AAGA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;IACtC,UAAU;AACd;;AAEA;;GAEG;;AAEH,iBAAiB;AACjB;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;;IAEV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;;IAEV,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,cAAc;;IAEd,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,kBAAkB;;IAElB,gEAAgE;AACpE;;AAEA;IACI,WAAW;AACf;;;;;;;AAOA;IACI;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,YAAY;QACZ,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,SAAS;QACT,UAAU;;IAEd;;AAEJ","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    background-color: rgb(238, 238, 238);\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n\r\n}\r\n\r\n@keyframes shake {\r\n    0% { transform: translateX(0); }\r\n    10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }\r\n    20%, 40%, 60%, 80% { transform: translateX(1px); }\r\n    100% { transform: translateX(0); }\r\n  }\r\n\r\n  .shake {\r\n    animation: shake 0.1s infinite;\r\n  }\r\n\r\n.app {\r\n    --dynamic-width: calc(100vw / 10);\r\n\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    justify-self: flex-end;\r\n}\r\n\r\n.labelContainer {\r\n    height: 15vh;\r\n    padding: 0;\r\n    display: flex;\r\n    width: calc(68vw + 110px + var(--dynamic-width));    \r\n    justify-content: space-between;\r\n}\r\n\r\n.labelContainer p {\r\n    padding: 0; \r\n}\r\n\r\n.label {\r\n    margin: 0;\r\n    padding: 0;\r\n    align-self: flex-end;\r\n    position: relative;\r\n    font-weight: bold;\r\n\r\n    font-size: calc(1vw + 10px)\r\n}\r\n\r\n.botLabel::after {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↘';\r\n    top: 3vh;\r\n    right: -2vw;\r\n}\r\n\r\n.playerLabel::before {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↙';\r\n    top: 3vh;\r\n    left: -2vw;\r\n}\r\n\r\n.gridContainer {\r\n    height: fit-content;\r\n    width: fit-content;\r\n\r\n    margin-top: 3vh;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: calc(var(--dynamic-width) + 10px);\r\n}\r\n\r\n.grid {\r\n\r\n    width: fit-content;\r\n    height: fit-content;\r\n\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10,1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n\r\n}\r\n\r\n.cell {\r\n    width: calc(1.8vw + 10px);\r\n    height: calc(1.8vw + 10px);\r\n\r\n    background-color: rgb(226, 252, 255);\r\n    border: 1px black solid;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.cell p {\r\n    font-size: 0.5rem;\r\n    font-weight: bold;\r\n    background: none;  \r\n}\r\n\r\n.hovered {\r\n    background-color: lightgrey !important;\r\n    size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n/* #playerGrid  */\r\n.occupied {\r\n    background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n    background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n    cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: red;\r\n}\r\n\r\n#playAgain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n    display: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.restart {\r\n    cursor: pointer;\r\n    display: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#info {\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n\r\n    display: flex;\r\n    align-items: flex-start;\r\n    max-height: 15vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.latestaction {\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: break-spaces;\r\n    text-align: center;\r\n\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\nbody {\r\n    margin: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n    .app {\r\n        --dynamic-width: calc(100vw / 20);\r\n    }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    #info {\r\n        max-height: 15vh;\r\n    }\r\n    .cell {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .grid {\r\n        height: 30vh;\r\n        width: 30vh;\r\n    }\r\n    .gridContainer {\r\n        flex-direction: column;\r\n    }\r\n    .labelContainer {\r\n        height: 10vh;\r\n        justify-content: center;\r\n    }\r\n    .playerLabel {\r\n        position: absolute;\r\n        bottom: 40vh;\r\n        right: 10px;\r\n    }\r\n    .botLabel {\r\n        position: absolute;\r\n        top: 10vh;\r\n        left: 15px;\r\n\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");


function generateGrid() {
    const squares = [];

    for (let i = 0; i < 100; i++) {
        const square = {
            alreadyHit: false,
            occupied: false,
        };
        squares.push(square);
    };

    return squares;
}

function gameboard() {
    return {
        grid: generateGrid(),

        receiveAttack(coordinate) {
            let square = this.grid[coordinate];
            let status = false;

            // if the square has already been alreadyHit, return:
            if (square.alreadyHit) {
                return status;
            };

            square.alreadyHit = true;

            if (square.occupied) {
                // 'occupied' refers to a ship.
                square.occupied.shipHit()
                if (square.occupied.isSunk()) {
                    console.log('a ship has been sunk!')
                }
            }

            status = true;
            return status;

        },

        placeShip(ship, ...coordinates) {
            coordinates.forEach(coord => 
                this.grid[coord].occupied = ship)
        },

        checkAllSunk() {
            //default to gameover - check if ongoing.
            let status = true;
            // 
            for (let item of this.grid) {
                if (item.occupied) {
                    if (item.alreadyHit == false) {
                        status = false;
                    }
                }
            }
            return status;
        }

    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });

function createShip(size) {
    return {
        size,
        hits: 0,
        sunk: false,

        shipHit() {
            this.hits++
        },

        isSunk() {
            if (this.size == this.hits) {
                this.sunk = true;
            }
            return this.sunk;
        }
    };
}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "instantiateObjects": () => (/* binding */ instantiateObjects),
/* harmony export */   "removeObjects": () => (/* binding */ removeObjects)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");






let recon, recon2, botFleet, playerFleet, bot, you;


function game() {
    let gameoverFlag = false;

    instantiateObjects();

// let [recon, cruiser, destroyer, tanker] = [
//     createShip(2),
//     createShip(3),
//     createShip(4),
//     createShip(5)
//   ];
  
//   let botFleet = [recon, cruiser, destroyer, tanker];

//   let [recon2, cruiser2, destroyer2, tanker2] = [
//     createShip(2),
//     createShip(3),
//     createShip(4),
//     createShip(5)
//   ];
  
//   let playerFleet = [recon2, cruiser2, destroyer2, tanker2]

function initial() {

    bot.autoPlace(...botFleet)

    ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderGame)(bot, you);

    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStatus)('Player,', 'place your battleships')

    ;(0,_render__WEBPACK_IMPORTED_MODULE_2__.placeShips)(playerFleet, you.ownBoard, () => {
        console.log('done');
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderGame)(bot, you);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStatus)('You', 'placed your ships')
        if (gameLoop()) {
            return;
        }
    })

}


let turn = 'b'

 async function gameLoop() {
    while (!gameoverFlag) {
        if (turn == 'p') {
            await playerMove();
            turn = 'b'
        } else if (turn == 'b') {
            await botMove();
            turn = 'p'
        } else {
            console.log('gameover')
            gameoverFlag = true;
            break;
        }
    }

}

function playerMove() {
    console.log('player attack');

    return new Promise((resolve) => {
      (0,_render__WEBPACK_IMPORTED_MODULE_2__.placeAttack)(bot, () => {
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderGame)(bot, you);
        if (bot.ownBoard.checkAllSunk()) {
          gameoverFlag = true;
          gameOver('you');
          resolve(false);
        } else {
          (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStatus)('You', 'attacked');
        }
        resolve(true);
      });
    });
}



//
function botMove() {


    return new Promise((resolve) => {

        setTimeout(() => {
        bot.autoMove(you.ownBoard);
        (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderGame)(bot, you);
        if (you.ownBoard.checkAllSunk()) {
            gameoverFlag = true;
            gameOver('bot');
            console.log('botmove resolved false')
            resolve(false);
        } else {
            (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderStatus)('Bot', 'attacked');
            console.log('botmove resolved true')
        }
        resolve(true);

        }, 200);
    });
}


function gameOver(display) {
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderGameOver)(display);
}


initial();
}








function instantiateObjects() {
    recon = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(2);
    recon2 = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(2);
    botFleet = [recon]
    playerFleet = [recon2]
    bot = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    you = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

function removeObjects() {
    recon = null
    recon2 = null
    botFleet = null
    playerFleet = null
    bot = null
    you = null
}


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLegalPlace": () => (/* binding */ getLegalPlace),
/* harmony export */   "isLegalPlacement": () => (/* binding */ isLegalPlacement)
/* harmony export */ });


// takes in an integer n
// generates n 'adjoining' spaces
// eg. 2, 3, 4 (horizontal) || 3, 13, 23 (vertical)

function getHorizontal(shipSize) {
    let first = Math.floor(Math.random() * 10)
    let second = Math.floor(Math.random() * (10-shipSize))

    return Number(first.toString() + second.toString())
}

function getLegalPlace(shipSize) {
    let horizontal = Math.random() > 0.5;

    let range = (99-shipSize*10) - 0 + 1
    let random = Math.floor(Math.random() * range)
    let boatStart = horizontal ? getHorizontal(shipSize) :
        0 + random;
    let result = [boatStart]

    if (horizontal) {
        for (let i = 0; i < shipSize - 1; i++) {
            result.push(++boatStart)
        }
    } else {
        for (let i = 0; i < shipSize - 1; i++) {
            result.push(boatStart+=10)
        }
    }

    return result;
}


// two random numbers - 1 between 0-9, 1 between 0-9-shipsize
// combine string.

function isLegalPlacement(grid, coords) {

    let status = checkLastDigit(coords);

    try {
        for (let coord of coords) {
            if (grid.grid[coord].occupied) {
                console.log('that space is occupied')
                status = false
            }
        }
    } catch {
        status = false;
    }


    return status;
}


function checkLastDigit(array) {
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      const previous = array[i - 1];
      
      if (getLastDigit(current) <= getLastDigit(previous)) {
        return false;
      }
    }
    
    return true;
  }
  
  function getLastDigit(number) {
    return number % 10;
  }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");





(0,_game__WEBPACK_IMPORTED_MODULE_1__.game)();

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");



function player(ownBoard = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return {
        ownBoard,
    
        autoMove(board) {
            let moved = false;
            let randomMove = Math.floor(Math.random() * 100);
            let attemptedMoves = [];

            while (!moved) {
                if (board.receiveAttack(randomMove)) {
                    moved = true;
                } else {
                    attemptedMoves.push(randomMove);
                    randomMove = Math.floor(Math.random() * 100);
                }
            }
            
            // returning randomMove could be useful for dom
            return [randomMove, attemptedMoves];
            
        },
        //for bots only...
        //players will use gameboard object's 'placeShip method'
        autoPlace(...ships) {
            for (let ship of ships) {
                let pending = true;
                let coords;

                while (pending) {
                    coords = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getLegalPlace)(ship.size);
                    let flag = false; // Flag to track if space occupied
                
                    for (let coord of coords) {
                        if (this.ownBoard.grid[coord].occupied) {  
                            flag = true; // Set the flag to true if condition is satisfied
                            break; // Exit the loop early
                        }
                    }
                
                    if (flag) {
                        continue; 
                    } else {
                        pending = false;
                    }
            }
            this.ownBoard.placeShip(ship, ...coords);
        }
    }
}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disablePlay": () => (/* binding */ disablePlay),
/* harmony export */   "placeAttack": () => (/* binding */ placeAttack),
/* harmony export */   "placeShips": () => (/* binding */ placeShips),
/* harmony export */   "renderGame": () => (/* binding */ renderGame),
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver),
/* harmony export */   "renderStatus": () => (/* binding */ renderStatus),
/* harmony export */   "triggerRestart": () => (/* binding */ triggerRestart)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");





let DOMBotGrid = document.querySelector('#botGrid');
let DOMPlayerGrid = document.querySelector('#playerGrid');


function renderGame(bot, player) {

    //delete all existing cells:


    //render 'hits' on both boards
    //render player occupied positions
    //render enemy ships once sunk


    let DOMBotGrid = document.querySelector('#botGrid');
    let DOMPlayerGrid = document.querySelector('#playerGrid');

    shake(DOMPlayerGrid, DOMBotGrid);

    const allChildElements = document.querySelectorAll('.cell');

    allChildElements.forEach((element) => {
        element.remove();
      });


    let botCount = 0;
    let playerCount = 0;

    for (let cell of bot.ownBoard.grid) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell', botCount)
        cellDiv.setAttribute('data-id', botCount + 100);
        

        botCount++

        if (cell.occupied) {
            cellDiv.classList.add('occupied');
        };

        if (cell.alreadyHit) {
            cellDiv.classList.add('alreadyHit')
        };

        DOMBotGrid.append(cellDiv);
    }

    for (let cell of player.ownBoard.grid) {
        let cellDiv = document.createElement('div');
        cellDiv.classList.add('cell', playerCount)
        cellDiv.setAttribute('data-id', playerCount)

        playerCount++

        if (cell.occupied) {
            cellDiv.classList.add('occupied');
        };

        if (cell.alreadyHit) {
            cellDiv.classList.add('alreadyHit')
        };

        DOMPlayerGrid.append(cellDiv);
    }
}

// function for ship placement - user.
// users can hover with mouse over board and click to place ship
// ( mobile users ?)
// if a valid position is selected the ship will snap into place
// once the fleet is placed, placement functionality is disabled and
    // the board will re-render via the callback. 
function placeShips(fleet, grid, callback) {
    let fleetRemaining = fleet;
    let DOMPlayerGrid = document.querySelector('#playerGrid');
  
    let currentShip = fleetRemaining[0];
    let selectedSpaces = [];
    let selectedElements = [];
    const childElements = DOMPlayerGrid.querySelectorAll('div');

    childElements.forEach((element) => element.classList.add('clickable'))
  
    function handleCellClick(event) {
      if (selectedSpaces.length < 1) {
        return;
      }
  
      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isLegalPlacement)(grid, selectedSpaces)) {
        grid.placeShip(fleetRemaining.shift(), ...selectedSpaces);
        selectedElements.forEach((element) => element.classList.add('temp-occupied'));
      }
  
      if (fleetRemaining.length > 0) {
        currentShip = fleetRemaining[0];
      } else {
        // Fleet placement is complete, remove event listeners and invoke the callback function
        removeEventListeners();
        callback(true);
      }
    }
  
    function handleCellMouseOver(event) {
      childElements.forEach((element) => element.classList.remove('hovered'));
  
      selectedSpaces = [];
      selectedElements = [];
      const selected = Number(event.target.getAttribute('data-id'));
  
      selectedSpaces.push(selected);
  
      for (let j = 0; j < currentShip.size - 1; j++) {
        selectedSpaces.push(selectedSpaces[j] + 1);
      }
  
      for (let i of selectedSpaces) {
        selectedElements.push(document.querySelector(`[data-id='${i}']`));
      }
  
      try {
        selectedElements.forEach((element) => {
          element.classList.add('hovered');
        });
      } catch {
        console.log('off grid');
      }
    }
  
    function removeEventListeners() {
      DOMPlayerGrid.removeEventListener('mouseover', handleCellMouseOver);
      DOMPlayerGrid.removeEventListener('click', handleCellClick);
    }
  
    DOMPlayerGrid.addEventListener('mouseover', handleCellMouseOver);
    DOMPlayerGrid.addEventListener('click', handleCellClick);
  }
  
  //provides visual cues for player attacks
  function placeAttack(bot, callback) {

    console.log('place attack function called')

    let selected;
    let DOMBotGrid = document.querySelector('#botGrid');
    let botCells = document.querySelectorAll('#botGrid .cell');

    botCells.forEach((cell) => {
        if (!cell.classList.contains('alreadyHit')) {
          cell.classList.add('clickable');
        }
      });
      
      
    function handleReceiveAttack() {
        if (bot.ownBoard.receiveAttack(selected)) {
            detachListeners();
            callback()
        } else {
            //
        }
    }

    function handleCellMouseOver(event) {
        botCells.forEach((element) => element.classList.remove('hovered'));
    
        selected = Number(event.target.getAttribute('data-id') - 100)
    }

    function attachListeners() {
        DOMBotGrid.addEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.addEventListener('click', handleReceiveAttack)    
    }

    function detachListeners() {
        DOMBotGrid.removeEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.removeEventListener('click', handleReceiveAttack)    
    }

    try {
        detachListeners();
    } catch {
        console.log('catch detach')
        //
    }
    attachListeners();

    return {
        detachListeners: detachListeners
    }
    
  }



  
  function triggerRestart() {
    let statusBox = document.querySelector('.status');
    let playAgain = document.querySelector('#playAgain');
    playAgain.style.display = 'none';
    while (statusBox.firstChild) {
        statusBox.removeChild(statusBox.firstChild);
      }

    //restart();
      location.reload()
  }

  // should call restart from game. This module should simply return true when event is triggered.

  function renderGameOver(winner) {
    let statusMsg = document.querySelector('.gameoverMsg');
    let restart = document.querySelector('#playAgain button');
    function handlePlayAgainClick() {
        triggerRestart()
    };
    restart.removeEventListener('click', handlePlayAgainClick);

    
    statusMsg.textContent = `Game Over.\n ${winner} won.`.toUpperCase()

    restart.style.display = 'block';
    statusMsg.style.display = 'block';

    restart.addEventListener('click', handlePlayAgainClick)
  }


  //to indicate what's happening in game.
  function renderStatus(who, what){
    let msg = `\n ${who} ${what}.`
    let latestActionMsg = document.querySelector('.latestAction');
    latestActionMsg.textContent = msg + latestActionMsg.textContent;
  }



  //For fun.
  function shake(...elements) {
    elements.forEach((element) => element.classList.remove('shake'));
    elements.forEach((element) => element.classList.add('shake'));

    setTimeout(() => {
        elements.forEach((element) => element.classList.remove('shake'));
      }, 200);
  };



  //bandaid 
  function disablePlay() {
    console.log('disable play');
    try {
        DOMBotGrid.removeEventListener('mouseover', handleCellMouseOver)
        DOMBotGrid.removeEventListener('click', handleReceiveAttack)
    } catch {
        //
    }
  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNULG9CQUFvQixLQUFLLEVBQUUsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9yZW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXHJcXG4gICAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCk7IH1cXHJcXG4gICAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnNoYWtlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjFzIGluZmluaXRlO1xcclxcbiAgfVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogY2FsYyg2OHZ3ICsgMTEwcHggKyB2YXIoLS1keW5hbWljLXdpZHRoKSk7ICAgIFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciBwIHtcXHJcXG4gICAgcGFkZGluZzogMDsgXFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KVxcclxcbn1cXHJcXG5cXHJcXG4uYm90TGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJ2dyArIDEwcHgpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICfihpgnO1xcclxcbiAgICB0b3A6IDN2aDtcXHJcXG4gICAgcmlnaHQ6IC0ydnc7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJMYWJlbDo6YmVmb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJ2dyArIDEwcHgpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICfihpknO1xcclxcbiAgICB0b3A6IDN2aDtcXHJcXG4gICAgbGVmdDogLTJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGdhcDogY2FsYyh2YXIoLS1keW5hbWljLXdpZHRoKSArIDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEuOHZ3ICsgMTBweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxLjh2dyArIDEwcHgpO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyNTIsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2VsbCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lOyAgXFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC5jZWxsOm5vdCgub2NjdXBpZWQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAjcGxheWVyR3JpZCAgKi9cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1vY2N1cGllZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOm5vdCgudGVtcC1vY2N1cGllZCkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbHJlYWR5SGl0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICfil40nO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHNjYWxlOiAxLjU7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4peNJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheUFnYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyTXNnIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2luZm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE1dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sYXRlc3RhY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmFwcCB7XFxyXFxuICAgICAgICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAyMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxyXFxuICAgICNpbmZvIHtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNlbGwge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDMwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRDb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAubGFiZWxDb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBsYXllckxhYmVsIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogNDB2aDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5ib3RMYWJlbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDEwdmg7XFxyXFxuICAgICAgICBsZWZ0OiAxNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDOztBQUVKOztBQUVBO0lBQ0ksS0FBSyx3QkFBd0IsRUFBRTtJQUMvQiwwQkFBMEIsMkJBQTJCLEVBQUU7SUFDdkQscUJBQXFCLDBCQUEwQixFQUFFO0lBQ2pELE9BQU8sd0JBQXdCLEVBQUU7RUFDbkM7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0FBRUY7SUFDSSxpQ0FBaUM7O0lBRWpDLFlBQVk7O0lBRVosYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7SUFFakI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLHNDQUFzQztBQUMxQzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjs7SUFFMUIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxVQUFVO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUgsaUJBQWlCO0FBQ2pCO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYzs7SUFFZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7O0lBRWxCLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7Ozs7OztBQU9BO0lBQ0k7UUFDSSxpQ0FBaUM7SUFDckM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsVUFBVTs7SUFFZDs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXHJcXG4gICAgMTAlLCAzMCUsIDUwJSwgNzAlLCA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweCk7IH1cXHJcXG4gICAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCk7IH1cXHJcXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLnNoYWtlIHtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjFzIGluZmluaXRlO1xcclxcbiAgfVxcclxcblxcclxcbi5hcHAge1xcclxcbiAgICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogY2FsYyg2OHZ3ICsgMTEwcHggKyB2YXIoLS1keW5hbWljLXdpZHRoKSk7ICAgIFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciBwIHtcXHJcXG4gICAgcGFkZGluZzogMDsgXFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KVxcclxcbn1cXHJcXG5cXHJcXG4uYm90TGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJ2dyArIDEwcHgpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICfihpgnO1xcclxcbiAgICB0b3A6IDN2aDtcXHJcXG4gICAgcmlnaHQ6IC0ydnc7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJMYWJlbDo6YmVmb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDJ2dyArIDEwcHgpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICfihpknO1xcclxcbiAgICB0b3A6IDN2aDtcXHJcXG4gICAgbGVmdDogLTJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDN2aDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGdhcDogY2FsYyh2YXIoLS1keW5hbWljLXdpZHRoKSArIDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEuOHZ3ICsgMTBweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxLjh2dyArIDEwcHgpO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyNTIsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2VsbCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lOyAgXFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC5jZWxsOm5vdCgub2NjdXBpZWQpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiAjcGxheWVyR3JpZCAgKi9cXHJcXG4ub2NjdXBpZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1vY2N1cGllZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOm5vdCgudGVtcC1vY2N1cGllZCkge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbHJlYWR5SGl0OjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICfil40nO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHNjYWxlOiAxLjU7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4peNJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheUFnYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyTXNnIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2luZm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDE1dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5sYXRlc3RhY3Rpb24ge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmFwcCB7XFxyXFxuICAgICAgICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAyMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxyXFxuICAgICNpbmZvIHtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNlbGwge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdyaWQge1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcclxcbiAgICAgICAgd2lkdGg6IDMwdmg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdyaWRDb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAubGFiZWxDb250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnBsYXllckxhYmVsIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogNDB2aDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5ib3RMYWJlbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDEwdmg7XFxyXFxuICAgICAgICBsZWZ0OiAxNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKCkge1xyXG4gICAgY29uc3Qgc3F1YXJlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzcXVhcmUgPSB7XHJcbiAgICAgICAgICAgIGFscmVhZHlIaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBvY2N1cGllZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzcXVhcmVzLnB1c2goc3F1YXJlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNxdWFyZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ3JpZDogZ2VuZXJhdGVHcmlkKCksXHJcblxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW2Nvb3JkaW5hdGVdO1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYWxyZWFkeUhpdCwgcmV0dXJuOlxyXG4gICAgICAgICAgICBpZiAoc3F1YXJlLmFscmVhZHlIaXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzcXVhcmUuYWxyZWFkeUhpdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3F1YXJlLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAnb2NjdXBpZWQnIHJlZmVycyB0byBhIHNoaXAuXHJcbiAgICAgICAgICAgICAgICBzcXVhcmUub2NjdXBpZWQuc2hpcEhpdCgpXHJcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlLm9jY3VwaWVkLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Egc2hpcCBoYXMgYmVlbiBzdW5rIScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCAuLi5jb29yZGluYXRlcykge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW2Nvb3JkXS5vY2N1cGllZCA9IHNoaXApXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hlY2tBbGxTdW5rKCkge1xyXG4gICAgICAgICAgICAvL2RlZmF1bHQgdG8gZ2FtZW92ZXIgLSBjaGVjayBpZiBvbmdvaW5nLlxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5ncmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFscmVhZHlIaXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkO1xyXG4iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAoc2l6ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGhpdHM6IDAsXHJcbiAgICAgICAgc3VuazogZmFsc2UsXHJcblxyXG4gICAgICAgIHNoaXBIaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0cysrXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNTdW5rKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaXplID09IHRoaXMuaGl0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHBsYWNlU2hpcHMsIHJlbmRlckdhbWUsIHBsYWNlQXR0YWNrLCByZW5kZXJHYW1lT3ZlciwgcmVuZGVyU3RhdHVzLCBkaXNhYmxlUGxheSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxuXHJcblxyXG5sZXQgcmVjb24sIHJlY29uMiwgYm90RmxlZXQsIHBsYXllckZsZWV0LCBib3QsIHlvdTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2FtZSgpIHtcclxuICAgIGxldCBnYW1lb3ZlckZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICBpbnN0YW50aWF0ZU9iamVjdHMoKTtcclxuXHJcbi8vIGxldCBbcmVjb24sIGNydWlzZXIsIGRlc3Ryb3llciwgdGFua2VyXSA9IFtcclxuLy8gICAgIGNyZWF0ZVNoaXAoMiksXHJcbi8vICAgICBjcmVhdGVTaGlwKDMpLFxyXG4vLyAgICAgY3JlYXRlU2hpcCg0KSxcclxuLy8gICAgIGNyZWF0ZVNoaXAoNSlcclxuLy8gICBdO1xyXG4gIFxyXG4vLyAgIGxldCBib3RGbGVldCA9IFtyZWNvbiwgY3J1aXNlciwgZGVzdHJveWVyLCB0YW5rZXJdO1xyXG5cclxuLy8gICBsZXQgW3JlY29uMiwgY3J1aXNlcjIsIGRlc3Ryb3llcjIsIHRhbmtlcjJdID0gW1xyXG4vLyAgICAgY3JlYXRlU2hpcCgyKSxcclxuLy8gICAgIGNyZWF0ZVNoaXAoMyksXHJcbi8vICAgICBjcmVhdGVTaGlwKDQpLFxyXG4vLyAgICAgY3JlYXRlU2hpcCg1KVxyXG4vLyAgIF07XHJcbiAgXHJcbi8vICAgbGV0IHBsYXllckZsZWV0ID0gW3JlY29uMiwgY3J1aXNlcjIsIGRlc3Ryb3llcjIsIHRhbmtlcjJdXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsKCkge1xyXG5cclxuICAgIGJvdC5hdXRvUGxhY2UoLi4uYm90RmxlZXQpXHJcblxyXG4gICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcblxyXG4gICAgcmVuZGVyU3RhdHVzKCdQbGF5ZXIsJywgJ3BsYWNlIHlvdXIgYmF0dGxlc2hpcHMnKVxyXG5cclxuICAgIHBsYWNlU2hpcHMocGxheWVyRmxlZXQsIHlvdS5vd25Cb2FyZCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICAgICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcbiAgICAgICAgcmVuZGVyU3RhdHVzKCdZb3UnLCAncGxhY2VkIHlvdXIgc2hpcHMnKVxyXG4gICAgICAgIGlmIChnYW1lTG9vcCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmxldCB0dXJuID0gJ2InXHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICB3aGlsZSAoIWdhbWVvdmVyRmxhZykge1xyXG4gICAgICAgIGlmICh0dXJuID09ICdwJykge1xyXG4gICAgICAgICAgICBhd2FpdCBwbGF5ZXJNb3ZlKCk7XHJcbiAgICAgICAgICAgIHR1cm4gPSAnYidcclxuICAgICAgICB9IGVsc2UgaWYgKHR1cm4gPT0gJ2InKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJvdE1vdmUoKTtcclxuICAgICAgICAgICAgdHVybiA9ICdwJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lb3ZlcicpXHJcbiAgICAgICAgICAgIGdhbWVvdmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllck1vdmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGxheWVyIGF0dGFjaycpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBwbGFjZUF0dGFjayhib3QsICgpID0+IHtcclxuICAgICAgICByZW5kZXJHYW1lKGJvdCwgeW91KTtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICBnYW1lb3ZlckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgZ2FtZU92ZXIoJ3lvdScpO1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbmRlclN0YXR1cygnWW91JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9cclxuZnVuY3Rpb24gYm90TW92ZSgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJvdC5hdXRvTW92ZSh5b3Uub3duQm9hcmQpO1xyXG4gICAgICAgIHJlbmRlckdhbWUoYm90LCB5b3UpO1xyXG4gICAgICAgIGlmICh5b3Uub3duQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgZ2FtZW92ZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FtZU92ZXIoJ2JvdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYm90bW92ZSByZXNvbHZlZCBmYWxzZScpXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbmRlclN0YXR1cygnQm90JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3Rtb3ZlIHJlc29sdmVkIHRydWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG5cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlcihkaXNwbGF5KSB7XHJcbiAgICByZW5kZXJHYW1lT3ZlcihkaXNwbGF5KTtcclxufVxyXG5cclxuXHJcbmluaXRpYWwoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZU9iamVjdHMoKSB7XHJcbiAgICByZWNvbiA9IGNyZWF0ZVNoaXAoMik7XHJcbiAgICByZWNvbjIgPSBjcmVhdGVTaGlwKDIpO1xyXG4gICAgYm90RmxlZXQgPSBbcmVjb25dXHJcbiAgICBwbGF5ZXJGbGVldCA9IFtyZWNvbjJdXHJcbiAgICBib3QgPSBwbGF5ZXIoKTtcclxuICAgIHlvdSA9IHBsYXllcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlT2JqZWN0cygpIHtcclxuICAgIHJlY29uID0gbnVsbFxyXG4gICAgcmVjb24yID0gbnVsbFxyXG4gICAgYm90RmxlZXQgPSBudWxsXHJcbiAgICBwbGF5ZXJGbGVldCA9IG51bGxcclxuICAgIGJvdCA9IG51bGxcclxuICAgIHlvdSA9IG51bGxcclxufVxyXG4iLCJcclxuXHJcbi8vIHRha2VzIGluIGFuIGludGVnZXIgblxyXG4vLyBnZW5lcmF0ZXMgbiAnYWRqb2luaW5nJyBzcGFjZXNcclxuLy8gZWcuIDIsIDMsIDQgKGhvcml6b250YWwpIHx8IDMsIDEzLCAyMyAodmVydGljYWwpXHJcblxyXG5mdW5jdGlvbiBnZXRIb3Jpem9udGFsKHNoaXBTaXplKSB7XHJcbiAgICBsZXQgZmlyc3QgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgIGxldCBzZWNvbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAtc2hpcFNpemUpKVxyXG5cclxuICAgIHJldHVybiBOdW1iZXIoZmlyc3QudG9TdHJpbmcoKSArIHNlY29uZC50b1N0cmluZygpKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGVnYWxQbGFjZShzaGlwU2l6ZSkge1xyXG4gICAgbGV0IGhvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xyXG5cclxuICAgIGxldCByYW5nZSA9ICg5OS1zaGlwU2l6ZSoxMCkgLSAwICsgMVxyXG4gICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKVxyXG4gICAgbGV0IGJvYXRTdGFydCA9IGhvcml6b250YWwgPyBnZXRIb3Jpem9udGFsKHNoaXBTaXplKSA6XHJcbiAgICAgICAgMCArIHJhbmRvbTtcclxuICAgIGxldCByZXN1bHQgPSBbYm9hdFN0YXJ0XVxyXG5cclxuICAgIGlmIChob3Jpem9udGFsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZSAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCgrK2JvYXRTdGFydClcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemUgLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goYm9hdFN0YXJ0Kz0xMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbi8vIHR3byByYW5kb20gbnVtYmVycyAtIDEgYmV0d2VlbiAwLTksIDEgYmV0d2VlbiAwLTktc2hpcHNpemVcclxuLy8gY29tYmluZSBzdHJpbmcuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMZWdhbFBsYWNlbWVudChncmlkLCBjb29yZHMpIHtcclxuXHJcbiAgICBsZXQgc3RhdHVzID0gY2hlY2tMYXN0RGlnaXQoY29vcmRzKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZvciAobGV0IGNvb3JkIG9mIGNvb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZC5ncmlkW2Nvb3JkXS5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoYXQgc3BhY2UgaXMgb2NjdXBpZWQnKVxyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2tMYXN0RGlnaXQoYXJyYXkpIHtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgY3VycmVudCA9IGFycmF5W2ldO1xyXG4gICAgICBjb25zdCBwcmV2aW91cyA9IGFycmF5W2kgLSAxXTtcclxuICAgICAgXHJcbiAgICAgIGlmIChnZXRMYXN0RGlnaXQoY3VycmVudCkgPD0gZ2V0TGFzdERpZ2l0KHByZXZpb3VzKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG51bWJlcikge1xyXG4gICAgcmV0dXJuIG51bWJlciAlIDEwO1xyXG4gIH1cclxuICAiLCJcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGdhbWUsIHJlbW92ZU9iamVjdHMsIGluc3RhbnRpYXRlT2JqZWN0cyB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG5cclxuZ2FtZSgpOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IGdldExlZ2FsUGxhY2UgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXIob3duQm9hcmQgPSBnYW1lYm9hcmQoKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvd25Cb2FyZCxcclxuICAgIFxyXG4gICAgICAgIGF1dG9Nb3ZlKGJvYXJkKSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBhdHRlbXB0ZWRNb3ZlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTW92ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZE1vdmVzLnB1c2gocmFuZG9tTW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJldHVybmluZyByYW5kb21Nb3ZlIGNvdWxkIGJlIHVzZWZ1bCBmb3IgZG9tXHJcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tTW92ZSwgYXR0ZW1wdGVkTW92ZXNdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vZm9yIGJvdHMgb25seS4uLlxyXG4gICAgICAgIC8vcGxheWVycyB3aWxsIHVzZSBnYW1lYm9hcmQgb2JqZWN0J3MgJ3BsYWNlU2hpcCBtZXRob2QnXHJcbiAgICAgICAgYXV0b1BsYWNlKC4uLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjb29yZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBnZXRMZWdhbFBsYWNlKHNoaXAuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTsgLy8gRmxhZyB0byB0cmFjayBpZiBzcGFjZSBvY2N1cGllZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm93bkJvYXJkLmdyaWRbY29vcmRdLm9jY3VwaWVkKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlOyAvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSBpZiBjb25kaXRpb24gaXMgc2F0aXNmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBlYXJseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgLi4uY29vcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCB7IGlzTGVnYWxQbGFjZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHJlc3RhcnQgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5cclxubGV0IERPTUJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90R3JpZCcpO1xyXG5sZXQgRE9NUGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJHcmlkJyk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWUoYm90LCBwbGF5ZXIpIHtcclxuXHJcbiAgICAvL2RlbGV0ZSBhbGwgZXhpc3RpbmcgY2VsbHM6XHJcblxyXG5cclxuICAgIC8vcmVuZGVyICdoaXRzJyBvbiBib3RoIGJvYXJkc1xyXG4gICAgLy9yZW5kZXIgcGxheWVyIG9jY3VwaWVkIHBvc2l0aW9uc1xyXG4gICAgLy9yZW5kZXIgZW5lbXkgc2hpcHMgb25jZSBzdW5rXHJcblxyXG5cclxuICAgIGxldCBET01Cb3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdEdyaWQnKTtcclxuICAgIGxldCBET01QbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWQnKTtcclxuXHJcbiAgICBzaGFrZShET01QbGF5ZXJHcmlkLCBET01Cb3RHcmlkKTtcclxuXHJcbiAgICBjb25zdCBhbGxDaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbiAgICBhbGxDaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgbGV0IGJvdENvdW50ID0gMDtcclxuICAgIGxldCBwbGF5ZXJDb3VudCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY2VsbCBvZiBib3Qub3duQm9hcmQuZ3JpZCkge1xyXG4gICAgICAgIGxldCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJywgYm90Q291bnQpXHJcbiAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBib3RDb3VudCArIDEwMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGJvdENvdW50KytcclxuXHJcbiAgICAgICAgaWYgKGNlbGwub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmFscmVhZHlIaXQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5SGl0JylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBET01Cb3RHcmlkLmFwcGVuZChjZWxsRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjZWxsIG9mIHBsYXllci5vd25Cb2FyZC5ncmlkKSB7XHJcbiAgICAgICAgbGV0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBwbGF5ZXJDb3VudClcclxuICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHBsYXllckNvdW50KVxyXG5cclxuICAgICAgICBwbGF5ZXJDb3VudCsrXHJcblxyXG4gICAgICAgIGlmIChjZWxsLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5hbHJlYWR5SGl0KSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgRE9NUGxheWVyR3JpZC5hcHBlbmQoY2VsbERpdik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBzaGlwIHBsYWNlbWVudCAtIHVzZXIuXHJcbi8vIHVzZXJzIGNhbiBob3ZlciB3aXRoIG1vdXNlIG92ZXIgYm9hcmQgYW5kIGNsaWNrIHRvIHBsYWNlIHNoaXBcclxuLy8gKCBtb2JpbGUgdXNlcnMgPylcclxuLy8gaWYgYSB2YWxpZCBwb3NpdGlvbiBpcyBzZWxlY3RlZCB0aGUgc2hpcCB3aWxsIHNuYXAgaW50byBwbGFjZVxyXG4vLyBvbmNlIHRoZSBmbGVldCBpcyBwbGFjZWQsIHBsYWNlbWVudCBmdW5jdGlvbmFsaXR5IGlzIGRpc2FibGVkIGFuZFxyXG4gICAgLy8gdGhlIGJvYXJkIHdpbGwgcmUtcmVuZGVyIHZpYSB0aGUgY2FsbGJhY2suIFxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyhmbGVldCwgZ3JpZCwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmbGVldFJlbWFpbmluZyA9IGZsZWV0O1xyXG4gICAgbGV0IERPTVBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZCcpO1xyXG4gIFxyXG4gICAgbGV0IGN1cnJlbnRTaGlwID0gZmxlZXRSZW1haW5pbmdbMF07XHJcbiAgICBsZXQgc2VsZWN0ZWRTcGFjZXMgPSBbXTtcclxuICAgIGxldCBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gRE9NUGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuXHJcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJykpXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soZXZlbnQpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkU3BhY2VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGlzTGVnYWxQbGFjZW1lbnQoZ3JpZCwgc2VsZWN0ZWRTcGFjZXMpKSB7XHJcbiAgICAgICAgZ3JpZC5wbGFjZVNoaXAoZmxlZXRSZW1haW5pbmcuc2hpZnQoKSwgLi4uc2VsZWN0ZWRTcGFjZXMpO1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9jY3VwaWVkJykpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChmbGVldFJlbWFpbmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBmbGVldFJlbWFpbmluZ1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGbGVldCBwbGFjZW1lbnQgaXMgY29tcGxldGUsIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGludm9rZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsTW91c2VPdmVyKGV2ZW50KSB7XHJcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJykpO1xyXG4gIFxyXG4gICAgICBzZWxlY3RlZFNwYWNlcyA9IFtdO1xyXG4gICAgICBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgXHJcbiAgICAgIHNlbGVjdGVkU3BhY2VzLnB1c2goc2VsZWN0ZWQpO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwLnNpemUgLSAxOyBqKyspIHtcclxuICAgICAgICBzZWxlY3RlZFNwYWNlcy5wdXNoKHNlbGVjdGVkU3BhY2VzW2pdICsgMSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZm9yIChsZXQgaSBvZiBzZWxlY3RlZFNwYWNlcykge1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpfSddYCkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29mZiBncmlkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpO1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgIH1cclxuICBcclxuICAgIERPTVBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ2VsbE1vdXNlT3Zlcik7XHJcbiAgICBET01QbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICB9XHJcbiAgXHJcbiAgLy9wcm92aWRlcyB2aXN1YWwgY3VlcyBmb3IgcGxheWVyIGF0dGFja3NcclxuICBleHBvcnQgZnVuY3Rpb24gcGxhY2VBdHRhY2soYm90LCBjYWxsYmFjaykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwbGFjZSBhdHRhY2sgZnVuY3Rpb24gY2FsbGVkJylcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICBsZXQgRE9NQm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkJyk7XHJcbiAgICBsZXQgYm90Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm90R3JpZCAuY2VsbCcpO1xyXG5cclxuICAgIGJvdENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHJlYWR5SGl0JykpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVjZWl2ZUF0dGFjaygpIHtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLnJlY2VpdmVBdHRhY2soc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbE1vdXNlT3ZlcihldmVudCkge1xyXG4gICAgICAgIGJvdENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpKTtcclxuICAgIFxyXG4gICAgICAgIHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSAtIDEwMClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGRldGFjaCcpXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGF0dGFjaExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0YWNoTGlzdGVuZXJzOiBkZXRhY2hMaXN0ZW5lcnNcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc3RhcnQoKSB7XHJcbiAgICBsZXQgc3RhdHVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4gICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW4nKTtcclxuICAgIHBsYXlBZ2Fpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgd2hpbGUgKHN0YXR1c0JveC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgc3RhdHVzQm94LnJlbW92ZUNoaWxkKHN0YXR1c0JveC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vcmVzdGFydCgpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGNhbGwgcmVzdGFydCBmcm9tIGdhbWUuIFRoaXMgbW9kdWxlIHNob3VsZCBzaW1wbHkgcmV0dXJuIHRydWUgd2hlbiBldmVudCBpcyB0cmlnZ2VyZWQuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgIGxldCBzdGF0dXNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXJNc2cnKTtcclxuICAgIGxldCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbiBidXR0b24nKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXlBZ2FpbkNsaWNrKCkge1xyXG4gICAgICAgIHRyaWdnZXJSZXN0YXJ0KClcclxuICAgIH07XHJcbiAgICByZXN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluQ2xpY2spO1xyXG5cclxuICAgIFxyXG4gICAgc3RhdHVzTXNnLnRleHRDb250ZW50ID0gYEdhbWUgT3Zlci5cXG4gJHt3aW5uZXJ9IHdvbi5gLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICByZXN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc3RhdHVzTXNnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW5DbGljaylcclxuICB9XHJcblxyXG5cclxuICAvL3RvIGluZGljYXRlIHdoYXQncyBoYXBwZW5pbmcgaW4gZ2FtZS5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RhdHVzKHdobywgd2hhdCl7XHJcbiAgICBsZXQgbXNnID0gYFxcbiAke3dob30gJHt3aGF0fS5gXHJcbiAgICBsZXQgbGF0ZXN0QWN0aW9uTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdGVzdEFjdGlvbicpO1xyXG4gICAgbGF0ZXN0QWN0aW9uTXNnLnRleHRDb250ZW50ID0gbXNnICsgbGF0ZXN0QWN0aW9uTXNnLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL0ZvciBmdW4uXHJcbiAgZnVuY3Rpb24gc2hha2UoLi4uZWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJykpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAvL2JhbmRhaWQgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVQbGF5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc2FibGUgcGxheScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBET01Cb3RHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpXHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlY2VpdmVBdHRhY2spXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=