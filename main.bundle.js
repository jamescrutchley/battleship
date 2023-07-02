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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    box-sizing: border-box;\r\n    background-color: rgb(238, 238, 238);\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n\r\n}\r\n\r\n@keyframes shake {\r\n    0% { transform: translateX(0); }\r\n    10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }\r\n    20%, 40%, 60%, 80% { transform: translateX(1px); }\r\n    100% { transform: translateX(0); }\r\n  }\r\n\r\n  .shake {\r\n    animation: shake 0.1s infinite;\r\n  }\r\n\r\n.app {\r\n    --dynamic-width: calc(100vw / 10);\r\n\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    justify-self: flex-end;\r\n}\r\n\r\n.labelContainer {\r\n    height: 15vh;\r\n    padding: 0;\r\n    display: flex;\r\n    width: calc(68vw + 110px + var(--dynamic-width));    \r\n    justify-content: space-between;\r\n}\r\n\r\n.labelContainer p {\r\n    padding: 0; \r\n}\r\n\r\n.label {\r\n    margin: 0;\r\n    padding: 0;\r\n    align-self: flex-end;\r\n    position: relative;\r\n    font-weight: bold;\r\n\r\n    font-size: calc(1vw + 10px)\r\n}\r\n\r\n.botLabel::after {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↘';\r\n    top: 3vh;\r\n    right: -2vw;\r\n}\r\n\r\n.playerLabel::before {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↙';\r\n    top: 3vh;\r\n    left: -2vw;\r\n}\r\n\r\n.gridContainer {\r\n    height: fit-content;\r\n    width: fit-content;\r\n\r\n    margin-top: 3vh;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: calc(var(--dynamic-width) + 10px);\r\n}\r\n\r\n.grid {\r\n\r\n    width: fit-content;\r\n    height: fit-content;\r\n\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10,1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n\r\n}\r\n\r\n.cell {\r\n    width: calc(1.8vw + 10px);\r\n    height: calc(1.8vw + 10px);\r\n\r\n    background-color: rgb(226, 252, 255);\r\n    border: 1px black solid;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.cell p {\r\n    font-size: 0.5rem;\r\n    font-weight: bold;\r\n    background: none;  \r\n}\r\n\r\n.hovered {\r\n    background-color: lightgrey !important;\r\n    size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n\r\n#playerGrid .occupied {\r\n    background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n    background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n    cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: red;\r\n}\r\n\r\n#playAgain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n    display: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.restart {\r\n    cursor: pointer;\r\n    display: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#info {\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n\r\n    display: flex;\r\n    align-items: flex-start;\r\n    max-height: 15vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.latestaction {\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: break-spaces;\r\n    text-align: center;\r\n\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\nbody {\r\n    margin: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n    .app {\r\n        --dynamic-width: calc(100vw / 20);\r\n    }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    #info {\r\n        max-height: 15vh;\r\n    }\r\n    .cell {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .grid {\r\n        height: 30vh;\r\n        width: 30vh;\r\n    }\r\n    .gridContainer {\r\n        flex-direction: column;\r\n    }\r\n    .labelContainer {\r\n        height: 10vh;\r\n        justify-content: center;\r\n    }\r\n    .playerLabel {\r\n        position: absolute;\r\n        bottom: 40vh;\r\n        right: 10px;\r\n    }\r\n    .botLabel {\r\n        position: absolute;\r\n        top: 10vh;\r\n        left: 15px;\r\n\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,oCAAoC;IACpC;;AAEJ;;AAEA;IACI,KAAK,wBAAwB,EAAE;IAC/B,0BAA0B,2BAA2B,EAAE;IACvD,qBAAqB,0BAA0B,EAAE;IACjD,OAAO,wBAAwB,EAAE;EACnC;;EAEA;IACE,8BAA8B;EAChC;;AAEF;IACI,iCAAiC;;IAEjC,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,gDAAgD;IAChD,8BAA8B;AAClC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;;IAEjB;AACJ;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;;IAElB,eAAe;;IAEf,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;;IAEvB,sCAAsC;AAC1C;;AAEA;;IAEI,kBAAkB;IAClB,mBAAmB;;IAEnB,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,mCAAmC;;AAEvC;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;;IAE1B,oCAAoC;IACpC,uBAAuB;IACvB,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;;AAGA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;IACtC,UAAU;AACd;;AAEA;;GAEG;;;AAGH;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;;IAEV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;;IAEV,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,cAAc;;IAEd,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yBAAyB;IACzB,kBAAkB;;IAElB,gEAAgE;AACpE;;AAEA;IACI,WAAW;AACf;;;;;;;AAOA;IACI;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,gBAAgB;IACpB;IACA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,YAAY;QACZ,uBAAuB;IAC3B;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,SAAS;QACT,UAAU;;IAEd;;AAEJ","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    background-color: rgb(238, 238, 238);\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n\r\n}\r\n\r\n@keyframes shake {\r\n    0% { transform: translateX(0); }\r\n    10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }\r\n    20%, 40%, 60%, 80% { transform: translateX(1px); }\r\n    100% { transform: translateX(0); }\r\n  }\r\n\r\n  .shake {\r\n    animation: shake 0.1s infinite;\r\n  }\r\n\r\n.app {\r\n    --dynamic-width: calc(100vw / 10);\r\n\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh1 {\r\n    margin-top: 10px;\r\n    padding: 0;\r\n    justify-self: flex-end;\r\n}\r\n\r\n.labelContainer {\r\n    height: 15vh;\r\n    padding: 0;\r\n    display: flex;\r\n    width: calc(68vw + 110px + var(--dynamic-width));    \r\n    justify-content: space-between;\r\n}\r\n\r\n.labelContainer p {\r\n    padding: 0; \r\n}\r\n\r\n.label {\r\n    margin: 0;\r\n    padding: 0;\r\n    align-self: flex-end;\r\n    position: relative;\r\n    font-weight: bold;\r\n\r\n    font-size: calc(1vw + 10px)\r\n}\r\n\r\n.botLabel::after {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↘';\r\n    top: 3vh;\r\n    right: -2vw;\r\n}\r\n\r\n.playerLabel::before {\r\n    font-size: calc(2vw + 10px);\r\n    position: absolute;\r\n    content: '↙';\r\n    top: 3vh;\r\n    left: -2vw;\r\n}\r\n\r\n.gridContainer {\r\n    height: fit-content;\r\n    width: fit-content;\r\n\r\n    margin-top: 3vh;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: calc(var(--dynamic-width) + 10px);\r\n}\r\n\r\n.grid {\r\n\r\n    width: fit-content;\r\n    height: fit-content;\r\n\r\n    border: 1px black solid;\r\n    display: grid;\r\n    grid-template-columns: repeat(10,1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n\r\n}\r\n\r\n.cell {\r\n    width: calc(1.8vw + 10px);\r\n    height: calc(1.8vw + 10px);\r\n\r\n    background-color: rgb(226, 252, 255);\r\n    border: 1px black solid;\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n\r\n.cell p {\r\n    font-size: 0.5rem;\r\n    font-weight: bold;\r\n    background: none;  \r\n}\r\n\r\n.hovered {\r\n    background-color: lightgrey !important;\r\n    size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n\r\n#playerGrid .occupied {\r\n    background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n    background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n    cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n    content: '◍';\r\n    position: absolute;\r\n    scale: 1.5;\r\n\r\n    color: red;\r\n}\r\n\r\n#playAgain {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n    display: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.restart {\r\n    cursor: pointer;\r\n    display: none;\r\n    border: none;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#info {\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n\r\n    display: flex;\r\n    align-items: flex-start;\r\n    max-height: 15vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.latestaction {\r\n    margin: 0;\r\n    padding: 0;\r\n    white-space: break-spaces;\r\n    text-align: center;\r\n\r\n    background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\nbody {\r\n    margin: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 600px) {\r\n    .app {\r\n        --dynamic-width: calc(100vw / 20);\r\n    }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    #info {\r\n        max-height: 15vh;\r\n    }\r\n    .cell {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n\r\n    .grid {\r\n        height: 30vh;\r\n        width: 30vh;\r\n    }\r\n    .gridContainer {\r\n        flex-direction: column;\r\n    }\r\n    .labelContainer {\r\n        height: 10vh;\r\n        justify-content: center;\r\n    }\r\n    .playerLabel {\r\n        position: absolute;\r\n        bottom: 40vh;\r\n        right: 10px;\r\n    }\r\n    .botLabel {\r\n        position: absolute;\r\n        top: 10vh;\r\n        left: 15px;\r\n\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
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
                    //render hook...
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

    bot = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
    you = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();

    let [recon, cruiser, destroyer, tanker] = [
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(2),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(3),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(4),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(5)
      ];
    
      let [recon2, cruiser2, destroyer2, tanker2] = [
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(2),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(3),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(4),
        (0,_Ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(5)
      ];
      
    botFleet = [recon, cruiser, destroyer, tanker]
    playerFleet = [recon2, cruiser2, destroyer2, tanker2]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0UsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVCxvQkFBb0IsS0FBSyxFQUFFLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxyXFxuICAgIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpOyB9XFxyXFxuICAgIDIwJSwgNDAlLCA2MCUsIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XFxyXFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaGFrZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMTApO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoNjh2dyArIDExMHB4ICsgdmFyKC0tZHluYW1pYy13aWR0aCkpOyAgICBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxDb250YWluZXIgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7IFxcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMTBweClcXHJcXG59XFxyXFxuXFxyXFxuLmJvdExhYmVsOjphZnRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygydncgKyAxMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAn4oaYJztcXHJcXG4gICAgdG9wOiAzdmg7XFxyXFxuICAgIHJpZ2h0OiAtMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyTGFiZWw6OmJlZm9yZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygydncgKyAxMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAn4oaZJztcXHJcXG4gICAgdG9wOiAzdmg7XFxyXFxuICAgIGxlZnQ6IC0ydnc7XFxyXFxufVxcclxcblxcclxcbi5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBnYXA6IGNhbGModmFyKC0tZHluYW1pYy13aWR0aCkgKyAxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcblxcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICB3aWR0aDogY2FsYygxLjh2dyArIDEwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMS44dncgKyAxMHB4KTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjUyLCAyNTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNlbGwgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xcclxcbiAgICBzaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbDpub3QoLm9jY3VwaWVkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuXFxyXFxuI3BsYXllckdyaWQgLm9jY3VwaWVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtb2NjdXBpZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTpub3QoLnRlbXAtb2NjdXBpZWQpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4peNJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkLmFscmVhZHlIaXQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KXjSc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgc2NhbGU6IDEuNTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXlBZ2FpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lb3Zlck1zZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGFydCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNpbmZvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0YWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5hcHAge1xcclxcbiAgICAgICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMjApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xcclxcbiAgICAjaW5mbyB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5jZWxsIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ncmlkIHtcXHJcXG4gICAgICAgIGhlaWdodDogMzB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5wbGF5ZXJMYWJlbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDQwdmg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYm90TGFiZWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxMHZoO1xcclxcbiAgICAgICAgbGVmdDogMTVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQzs7QUFFSjs7QUFFQTtJQUNJLEtBQUssd0JBQXdCLEVBQUU7SUFDL0IsMEJBQTBCLDJCQUEyQixFQUFFO0lBQ3ZELHFCQUFxQiwwQkFBMEIsRUFBRTtJQUNqRCxPQUFPLHdCQUF3QixFQUFFO0VBQ25DOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztBQUVGO0lBQ0ksaUNBQWlDOztJQUVqQyxZQUFZOztJQUVaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7O0lBRWpCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixzQ0FBc0M7QUFDMUM7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUNBQW1DOztBQUV2Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7O0lBRTFCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsVUFBVTtBQUNkOztBQUVBOztHQUVHOzs7QUFHSDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7O0lBRVYsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVOztJQUVWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7O0lBRWQsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCOztJQUVsQixnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7Ozs7Ozs7QUFPQTtJQUNJO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFlBQVk7UUFDWix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULFVBQVU7O0lBRWQ7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxyXFxuICAgIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpOyB9XFxyXFxuICAgIDIwJSwgNDAlLCA2MCUsIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XFxyXFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaGFrZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMTApO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoNjh2dyArIDExMHB4ICsgdmFyKC0tZHluYW1pYy13aWR0aCkpOyAgICBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxDb250YWluZXIgcCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7IFxcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMTBweClcXHJcXG59XFxyXFxuXFxyXFxuLmJvdExhYmVsOjphZnRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygydncgKyAxMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAn4oaYJztcXHJcXG4gICAgdG9wOiAzdmg7XFxyXFxuICAgIHJpZ2h0OiAtMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyTGFiZWw6OmJlZm9yZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYygydncgKyAxMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiAn4oaZJztcXHJcXG4gICAgdG9wOiAzdmg7XFxyXFxuICAgIGxlZnQ6IC0ydnc7XFxyXFxufVxcclxcblxcclxcbi5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBnYXA6IGNhbGModmFyKC0tZHluYW1pYy13aWR0aCkgKyAxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcblxcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICB3aWR0aDogY2FsYygxLjh2dyArIDEwcHgpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMS44dncgKyAxMHB4KTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjUyLCAyNTUpO1xcclxcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNlbGwgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTsgIFxcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xcclxcbiAgICBzaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbDpub3QoLm9jY3VwaWVkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuXFxyXFxuI3BsYXllckdyaWQgLm9jY3VwaWVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXAtb2NjdXBpZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTpub3QoLnRlbXAtb2NjdXBpZWQpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAn4peNJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgICBjb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm9jY3VwaWVkLmFscmVhZHlIaXQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KXjSc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgc2NhbGU6IDEuNTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXlBZ2FpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lb3Zlck1zZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGFydCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNpbmZvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0YWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5hcHAge1xcclxcbiAgICAgICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMjApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xcclxcbiAgICAjaW5mbyB7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5jZWxsIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ncmlkIHtcXHJcXG4gICAgICAgIGhlaWdodDogMzB2aDtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHZoO1xcclxcbiAgICB9XFxyXFxuICAgIC5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTB2aDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5wbGF5ZXJMYWJlbCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDQwdmg7XFxyXFxuICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYm90TGFiZWwge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAxMHZoO1xcclxcbiAgICAgICAgbGVmdDogMTVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR3JpZCgpIHtcclxuICAgIGNvbnN0IHNxdWFyZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlID0ge1xyXG4gICAgICAgICAgICBhbHJlYWR5SGl0OiBmYWxzZSxcclxuICAgICAgICAgICAgb2NjdXBpZWQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3F1YXJlcy5wdXNoKHNxdWFyZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzcXVhcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdyaWQ6IGdlbmVyYXRlR3JpZCgpLFxyXG5cclxuICAgICAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcclxuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZFtjb29yZGluYXRlXTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGFscmVhZHlIaXQsIHJldHVybjpcclxuICAgICAgICAgICAgaWYgKHNxdWFyZS5hbHJlYWR5SGl0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc3F1YXJlLmFscmVhZHlIaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gJ29jY3VwaWVkJyByZWZlcnMgdG8gYSBzaGlwLlxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLm9jY3VwaWVkLnNoaXBIaXQoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllZC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVuZGVyIGhvb2suLi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSBzaGlwIGhhcyBiZWVuIHN1bmshJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGxhY2VTaGlwKHNoaXAsIC4uLmNvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmQgPT4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbY29vcmRdLm9jY3VwaWVkID0gc2hpcClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaGVja0FsbFN1bmsoKSB7XHJcbiAgICAgICAgICAgIC8vZGVmYXVsdCB0byBnYW1lb3ZlciAtIGNoZWNrIGlmIG9uZ29pbmcuXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdyaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWxyZWFkeUhpdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hpcChzaXplKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgaGl0czogMCxcclxuICAgICAgICBzdW5rOiBmYWxzZSxcclxuXHJcbiAgICAgICAgc2hpcEhpdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRzKytcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpemUgPT0gdGhpcy5oaXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bms7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcclxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxhY2VTaGlwcywgcmVuZGVyR2FtZSwgcGxhY2VBdHRhY2ssIHJlbmRlckdhbWVPdmVyLCByZW5kZXJTdGF0dXMsIGRpc2FibGVQbGF5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5cclxuXHJcbmxldCByZWNvbiwgcmVjb24yLCBib3RGbGVldCwgcGxheWVyRmxlZXQsIGJvdCwgeW91O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lKCkge1xyXG4gICAgbGV0IGdhbWVvdmVyRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgIGluc3RhbnRpYXRlT2JqZWN0cygpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsKCkge1xyXG5cclxuICAgIGJvdC5hdXRvUGxhY2UoLi4uYm90RmxlZXQpXHJcblxyXG4gICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcblxyXG4gICAgcmVuZGVyU3RhdHVzKCdQbGF5ZXIsJywgJ3BsYWNlIHlvdXIgYmF0dGxlc2hpcHMnKVxyXG5cclxuICAgIHBsYWNlU2hpcHMocGxheWVyRmxlZXQsIHlvdS5vd25Cb2FyZCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICAgICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcbiAgICAgICAgcmVuZGVyU3RhdHVzKCdZb3UnLCAncGxhY2VkIHlvdXIgc2hpcHMnKVxyXG4gICAgICAgIGlmIChnYW1lTG9vcCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmxldCB0dXJuID0gJ2InXHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICB3aGlsZSAoIWdhbWVvdmVyRmxhZykge1xyXG4gICAgICAgIGlmICh0dXJuID09ICdwJykge1xyXG4gICAgICAgICAgICBhd2FpdCBwbGF5ZXJNb3ZlKCk7XHJcbiAgICAgICAgICAgIHR1cm4gPSAnYidcclxuICAgICAgICB9IGVsc2UgaWYgKHR1cm4gPT0gJ2InKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJvdE1vdmUoKTtcclxuICAgICAgICAgICAgdHVybiA9ICdwJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lb3ZlcicpXHJcbiAgICAgICAgICAgIGdhbWVvdmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllck1vdmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGxheWVyIGF0dGFjaycpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBwbGFjZUF0dGFjayhib3QsICgpID0+IHtcclxuICAgICAgICByZW5kZXJHYW1lKGJvdCwgeW91KTtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICBnYW1lb3ZlckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgZ2FtZU92ZXIoJ3lvdScpO1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbmRlclN0YXR1cygnWW91JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9cclxuZnVuY3Rpb24gYm90TW92ZSgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJvdC5hdXRvTW92ZSh5b3Uub3duQm9hcmQpO1xyXG4gICAgICAgIHJlbmRlckdhbWUoYm90LCB5b3UpO1xyXG4gICAgICAgIGlmICh5b3Uub3duQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgZ2FtZW92ZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FtZU92ZXIoJ2JvdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYm90bW92ZSByZXNvbHZlZCBmYWxzZScpXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbmRlclN0YXR1cygnQm90JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3Rtb3ZlIHJlc29sdmVkIHRydWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG5cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlcihkaXNwbGF5KSB7XHJcbiAgICByZW5kZXJHYW1lT3ZlcihkaXNwbGF5KTtcclxufVxyXG5cclxuXHJcbmluaXRpYWwoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZU9iamVjdHMoKSB7XHJcblxyXG4gICAgYm90ID0gcGxheWVyKCk7XHJcbiAgICB5b3UgPSBwbGF5ZXIoKTtcclxuXHJcbiAgICBsZXQgW3JlY29uLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHRhbmtlcl0gPSBbXHJcbiAgICAgICAgY3JlYXRlU2hpcCgyKSxcclxuICAgICAgICBjcmVhdGVTaGlwKDMpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoNCksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg1KVxyXG4gICAgICBdO1xyXG4gICAgXHJcbiAgICAgIGxldCBbcmVjb24yLCBjcnVpc2VyMiwgZGVzdHJveWVyMiwgdGFua2VyMl0gPSBbXHJcbiAgICAgICAgY3JlYXRlU2hpcCgyKSxcclxuICAgICAgICBjcmVhdGVTaGlwKDMpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoNCksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg1KVxyXG4gICAgICBdO1xyXG4gICAgICBcclxuICAgIGJvdEZsZWV0ID0gW3JlY29uLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHRhbmtlcl1cclxuICAgIHBsYXllckZsZWV0ID0gW3JlY29uMiwgY3J1aXNlcjIsIGRlc3Ryb3llcjIsIHRhbmtlcjJdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVPYmplY3RzKCkge1xyXG4gICAgcmVjb24gPSBudWxsXHJcbiAgICByZWNvbjIgPSBudWxsXHJcbiAgICBib3RGbGVldCA9IG51bGxcclxuICAgIHBsYXllckZsZWV0ID0gbnVsbFxyXG4gICAgYm90ID0gbnVsbFxyXG4gICAgeW91ID0gbnVsbFxyXG59XHJcbiIsIlxyXG5cclxuLy8gdGFrZXMgaW4gYW4gaW50ZWdlciBuXHJcbi8vIGdlbmVyYXRlcyBuICdhZGpvaW5pbmcnIHNwYWNlc1xyXG4vLyBlZy4gMiwgMywgNCAoaG9yaXpvbnRhbCkgfHwgMywgMTMsIDIzICh2ZXJ0aWNhbClcclxuXHJcbmZ1bmN0aW9uIGdldEhvcml6b250YWwoc2hpcFNpemUpIHtcclxuICAgIGxldCBmaXJzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgbGV0IHNlY29uZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMC1zaGlwU2l6ZSkpXHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihmaXJzdC50b1N0cmluZygpICsgc2Vjb25kLnRvU3RyaW5nKCkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMZWdhbFBsYWNlKHNoaXBTaXplKSB7XHJcbiAgICBsZXQgaG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XHJcblxyXG4gICAgbGV0IHJhbmdlID0gKDk5LXNoaXBTaXplKjEwKSAtIDAgKyAxXHJcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpXHJcbiAgICBsZXQgYm9hdFN0YXJ0ID0gaG9yaXpvbnRhbCA/IGdldEhvcml6b250YWwoc2hpcFNpemUpIDpcclxuICAgICAgICAwICsgcmFuZG9tO1xyXG4gICAgbGV0IHJlc3VsdCA9IFtib2F0U3RhcnRdXHJcblxyXG4gICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCsrYm9hdFN0YXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZSAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChib2F0U3RhcnQrPTEwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuLy8gdHdvIHJhbmRvbSBudW1iZXJzIC0gMSBiZXR3ZWVuIDAtOSwgMSBiZXR3ZWVuIDAtOS1zaGlwc2l6ZVxyXG4vLyBjb21iaW5lIHN0cmluZy5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xlZ2FsUGxhY2VtZW50KGdyaWQsIGNvb3Jkcykge1xyXG5cclxuICAgIGxldCBzdGF0dXMgPSBjaGVja0xhc3REaWdpdChjb29yZHMpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmdyaWRbY29vcmRdLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhhdCBzcGFjZSBpcyBvY2N1cGllZCcpXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0xhc3REaWdpdChhcnJheSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXJyYXlbaV07XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXJyYXlbaSAtIDFdO1xyXG4gICAgICBcclxuICAgICAgaWYgKGdldExhc3REaWdpdChjdXJyZW50KSA8PSBnZXRMYXN0RGlnaXQocHJldmlvdXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBnZXRMYXN0RGlnaXQobnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyICUgMTA7XHJcbiAgfVxyXG4gICIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG5cclxuZ2FtZSgpOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IGdldExlZ2FsUGxhY2UgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXIob3duQm9hcmQgPSBnYW1lYm9hcmQoKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvd25Cb2FyZCxcclxuICAgIFxyXG4gICAgICAgIGF1dG9Nb3ZlKGJvYXJkKSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBhdHRlbXB0ZWRNb3ZlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTW92ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZE1vdmVzLnB1c2gocmFuZG9tTW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJldHVybmluZyByYW5kb21Nb3ZlIGNvdWxkIGJlIHVzZWZ1bCBmb3IgZG9tXHJcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tTW92ZSwgYXR0ZW1wdGVkTW92ZXNdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vZm9yIGJvdHMgb25seS4uLlxyXG4gICAgICAgIC8vcGxheWVycyB3aWxsIHVzZSBnYW1lYm9hcmQgb2JqZWN0J3MgJ3BsYWNlU2hpcCBtZXRob2QnXHJcbiAgICAgICAgYXV0b1BsYWNlKC4uLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjb29yZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBnZXRMZWdhbFBsYWNlKHNoaXAuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTsgLy8gRmxhZyB0byB0cmFjayBpZiBzcGFjZSBvY2N1cGllZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm93bkJvYXJkLmdyaWRbY29vcmRdLm9jY3VwaWVkKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlOyAvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSBpZiBjb25kaXRpb24gaXMgc2F0aXNmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBlYXJseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgLi4uY29vcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCB7IGlzTGVnYWxQbGFjZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHJlc3RhcnQgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5cclxubGV0IERPTUJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90R3JpZCcpO1xyXG5sZXQgRE9NUGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJHcmlkJyk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWUoYm90LCBwbGF5ZXIpIHtcclxuXHJcbiAgICAvL2RlbGV0ZSBhbGwgZXhpc3RpbmcgY2VsbHM6XHJcblxyXG5cclxuICAgIC8vcmVuZGVyICdoaXRzJyBvbiBib3RoIGJvYXJkc1xyXG4gICAgLy9yZW5kZXIgcGxheWVyIG9jY3VwaWVkIHBvc2l0aW9uc1xyXG4gICAgLy9yZW5kZXIgZW5lbXkgc2hpcHMgb25jZSBzdW5rXHJcblxyXG5cclxuICAgIGxldCBET01Cb3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdEdyaWQnKTtcclxuICAgIGxldCBET01QbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWQnKTtcclxuXHJcbiAgICBzaGFrZShET01QbGF5ZXJHcmlkLCBET01Cb3RHcmlkKTtcclxuXHJcbiAgICBjb25zdCBhbGxDaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbiAgICBhbGxDaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgbGV0IGJvdENvdW50ID0gMDtcclxuICAgIGxldCBwbGF5ZXJDb3VudCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY2VsbCBvZiBib3Qub3duQm9hcmQuZ3JpZCkge1xyXG4gICAgICAgIGxldCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJywgYm90Q291bnQpXHJcbiAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBib3RDb3VudCArIDEwMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGJvdENvdW50KytcclxuXHJcbiAgICAgICAgaWYgKGNlbGwub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmFscmVhZHlIaXQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5SGl0JylcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBET01Cb3RHcmlkLmFwcGVuZChjZWxsRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBjZWxsIG9mIHBsYXllci5vd25Cb2FyZC5ncmlkKSB7XHJcbiAgICAgICAgbGV0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCBwbGF5ZXJDb3VudClcclxuICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHBsYXllckNvdW50KVxyXG5cclxuICAgICAgICBwbGF5ZXJDb3VudCsrXHJcblxyXG4gICAgICAgIGlmIChjZWxsLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5hbHJlYWR5SGl0KSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgRE9NUGxheWVyR3JpZC5hcHBlbmQoY2VsbERpdik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBzaGlwIHBsYWNlbWVudCAtIHVzZXIuXHJcbi8vIHVzZXJzIGNhbiBob3ZlciB3aXRoIG1vdXNlIG92ZXIgYm9hcmQgYW5kIGNsaWNrIHRvIHBsYWNlIHNoaXBcclxuLy8gKCBtb2JpbGUgdXNlcnMgPylcclxuLy8gaWYgYSB2YWxpZCBwb3NpdGlvbiBpcyBzZWxlY3RlZCB0aGUgc2hpcCB3aWxsIHNuYXAgaW50byBwbGFjZVxyXG4vLyBvbmNlIHRoZSBmbGVldCBpcyBwbGFjZWQsIHBsYWNlbWVudCBmdW5jdGlvbmFsaXR5IGlzIGRpc2FibGVkIGFuZFxyXG4gICAgLy8gdGhlIGJvYXJkIHdpbGwgcmUtcmVuZGVyIHZpYSB0aGUgY2FsbGJhY2suIFxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyhmbGVldCwgZ3JpZCwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmbGVldFJlbWFpbmluZyA9IGZsZWV0O1xyXG4gICAgbGV0IERPTVBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZCcpO1xyXG4gIFxyXG4gICAgbGV0IGN1cnJlbnRTaGlwID0gZmxlZXRSZW1haW5pbmdbMF07XHJcbiAgICBsZXQgc2VsZWN0ZWRTcGFjZXMgPSBbXTtcclxuICAgIGxldCBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gRE9NUGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuXHJcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJykpXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soZXZlbnQpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkU3BhY2VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGlzTGVnYWxQbGFjZW1lbnQoZ3JpZCwgc2VsZWN0ZWRTcGFjZXMpKSB7XHJcbiAgICAgICAgZ3JpZC5wbGFjZVNoaXAoZmxlZXRSZW1haW5pbmcuc2hpZnQoKSwgLi4uc2VsZWN0ZWRTcGFjZXMpO1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9jY3VwaWVkJykpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChmbGVldFJlbWFpbmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBmbGVldFJlbWFpbmluZ1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGbGVldCBwbGFjZW1lbnQgaXMgY29tcGxldGUsIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGludm9rZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsTW91c2VPdmVyKGV2ZW50KSB7XHJcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJykpO1xyXG4gIFxyXG4gICAgICBzZWxlY3RlZFNwYWNlcyA9IFtdO1xyXG4gICAgICBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgXHJcbiAgICAgIHNlbGVjdGVkU3BhY2VzLnB1c2goc2VsZWN0ZWQpO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwLnNpemUgLSAxOyBqKyspIHtcclxuICAgICAgICBzZWxlY3RlZFNwYWNlcy5wdXNoKHNlbGVjdGVkU3BhY2VzW2pdICsgMSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZm9yIChsZXQgaSBvZiBzZWxlY3RlZFNwYWNlcykge1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpfSddYCkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29mZiBncmlkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpO1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgIH1cclxuICBcclxuICAgIERPTVBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ2VsbE1vdXNlT3Zlcik7XHJcbiAgICBET01QbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICB9XHJcbiAgXHJcbiAgLy9wcm92aWRlcyB2aXN1YWwgY3VlcyBmb3IgcGxheWVyIGF0dGFja3NcclxuICBleHBvcnQgZnVuY3Rpb24gcGxhY2VBdHRhY2soYm90LCBjYWxsYmFjaykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwbGFjZSBhdHRhY2sgZnVuY3Rpb24gY2FsbGVkJylcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICBsZXQgRE9NQm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkJyk7XHJcbiAgICBsZXQgYm90Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm90R3JpZCAuY2VsbCcpO1xyXG5cclxuICAgIGJvdENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHJlYWR5SGl0JykpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVjZWl2ZUF0dGFjaygpIHtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLnJlY2VpdmVBdHRhY2soc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbE1vdXNlT3ZlcihldmVudCkge1xyXG4gICAgICAgIGJvdENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpKTtcclxuICAgIFxyXG4gICAgICAgIHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSAtIDEwMClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGRldGFjaCcpXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGF0dGFjaExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0YWNoTGlzdGVuZXJzOiBkZXRhY2hMaXN0ZW5lcnNcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc3RhcnQoKSB7XHJcbiAgICBsZXQgc3RhdHVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4gICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW4nKTtcclxuICAgIHBsYXlBZ2Fpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgd2hpbGUgKHN0YXR1c0JveC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgc3RhdHVzQm94LnJlbW92ZUNoaWxkKHN0YXR1c0JveC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vcmVzdGFydCgpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGNhbGwgcmVzdGFydCBmcm9tIGdhbWUuIFRoaXMgbW9kdWxlIHNob3VsZCBzaW1wbHkgcmV0dXJuIHRydWUgd2hlbiBldmVudCBpcyB0cmlnZ2VyZWQuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgIGxldCBzdGF0dXNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXJNc2cnKTtcclxuICAgIGxldCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbiBidXR0b24nKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXlBZ2FpbkNsaWNrKCkge1xyXG4gICAgICAgIHRyaWdnZXJSZXN0YXJ0KClcclxuICAgIH07XHJcbiAgICByZXN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluQ2xpY2spO1xyXG5cclxuICAgIFxyXG4gICAgc3RhdHVzTXNnLnRleHRDb250ZW50ID0gYEdhbWUgT3Zlci5cXG4gJHt3aW5uZXJ9IHdvbi5gLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICByZXN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc3RhdHVzTXNnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW5DbGljaylcclxuICB9XHJcblxyXG5cclxuICAvL3RvIGluZGljYXRlIHdoYXQncyBoYXBwZW5pbmcgaW4gZ2FtZS5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RhdHVzKHdobywgd2hhdCl7XHJcbiAgICBsZXQgbXNnID0gYFxcbiAke3dob30gJHt3aGF0fS5gXHJcbiAgICBsZXQgbGF0ZXN0QWN0aW9uTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdGVzdEFjdGlvbicpO1xyXG4gICAgbGF0ZXN0QWN0aW9uTXNnLnRleHRDb250ZW50ID0gbXNnICsgbGF0ZXN0QWN0aW9uTXNnLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL0ZvciBmdW4uXHJcbiAgZnVuY3Rpb24gc2hha2UoLi4uZWxlbWVudHMpIHtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJykpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICAvL2JhbmRhaWQgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVQbGF5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc2FibGUgcGxheScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBET01Cb3RHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpXHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlY2VpdmVBdHRhY2spXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=