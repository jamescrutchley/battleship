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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./battleship.svg */ "./src/battleship.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  background-color: rgb(238, 238, 238);\r\n  font-family: sans-serif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-1px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(1px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation: shake 0.1s infinite;\r\n}\r\n\r\n.app {\r\n  --dynamic-width: calc(100vw / 10);\r\n\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: fit-content;\r\n  padding-top: 10px;\r\n  padding: 0;\r\n  justify-self: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: lightblue;\r\n}\r\n\r\nh1::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  transform: scale(0.12);\r\n  width: 0px;\r\n  padding: 5px;\r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n  margin: 0px 5px 5px 5px;\r\n  padding: 0;\r\n}\r\n\r\n.labelContainer {\r\n  color: black;\r\n  background-color: lightblue;\r\n  height: 15vh;\r\n  padding: 0;\r\n  display: flex;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  margin-bottom: 1.5vw;\r\n  border-bottom: 2px solid;\r\n}\r\n\r\n.labelContainer p {\r\n  padding: 0;\r\n}\r\n\r\n.label {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-end;\r\n  position: relative;\r\n  font-weight: bold;\r\n\r\n  font-size: calc(1vw + 10px);\r\n}\r\n\r\n.gridContainer {\r\n  height: fit-content;\r\n  width: fit-content;\r\n\r\n  margin-top: 1vh;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: calc(var(--dynamic-width));\r\n}\r\n\r\n.grid {\r\n  width: fit-content;\r\n  height: fit-content;\r\n\r\n  border: 2px black solid;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: calc(1.7vw + 15px);\r\n  height: calc(1.6vw + 10px);\r\n\r\n  background-color: rgb(226, 252, 255);\r\n  border: 1px rgb(48, 48, 48) solid;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 10vh;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  opacity: 1;\r\n}\r\n\r\n.player::after, .bot::after {\r\n    transform: scale(2);\r\n}\r\n\r\n.sunkShip {\r\n    opacity: 0.5;\r\n}\r\n\r\n.playerFleet,\r\n.botFleet {\r\n  max-height: 10vh;\r\n  max-width: 30vw;\r\n}\r\n\r\n.ship::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  transform: scale(0.2);\r\n  position: relative;\r\n}\r\n.cell p {\r\n  font-size: 0.5rem;\r\n  font-weight: bold;\r\n  background: none;\r\n}\r\n\r\n.hovered {\r\n  background-color: lightgrey !important;\r\n  size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n#playerGrid .occupied {\r\n  background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n  background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n  cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: red;\r\n}\r\n\r\n#playAgain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n  display: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.restart {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#info {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  margin-bottom: 10vh;\r\n\r\n  display: flex;\r\n  align-items: flex-start;\r\n  max-height: 40vh;\r\n  overflow: hidden;\r\n  animation: fadein 1s ease;\r\n}\r\n\r\n.latestaction {\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: break-spaces;\r\n  text-align: center;\r\n  transition: fadein 0.3s ease;\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playerContainer,\r\n.botContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .app {\r\n    --dynamic-width: calc(100vw / 20);\r\n  }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    .ship::after {\r\n        transform: scale(0.8);\r\n    }\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 8vh;\r\n}\r\n  .playerContainer,\r\n  .botContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n  }\r\n  h2 {\r\n    font-size: 16px;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    max-width: 10vw;\r\n    margin-right: 5vw;\r\n  }\r\n  #info {\r\n    max-height: 8vh;\r\n  }\r\n  .cell {\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .grid {\r\n    height: 35vh;\r\n    width: 70vw;\r\n  }\r\n  .gridContainer {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n  }\r\n  .labelContainer {\r\n    height: 10vh;\r\n    justify-content: center;\r\n  }\r\n  .playerLabel {\r\n    position: absolute;\r\n    bottom: 40vh;\r\n    right: 10px;\r\n  }\r\n  .botLabel {\r\n    position: absolute;\r\n    top: 10vh;\r\n    left: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  background-color: rgb(238, 238, 238);\r\n  font-family: sans-serif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-1px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(1px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation: shake 0.1s infinite;\r\n}\r\n\r\n.app {\r\n  --dynamic-width: calc(100vw / 10);\r\n\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: fit-content;\r\n  padding-top: 10px;\r\n  padding: 0;\r\n  justify-self: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: lightblue;\r\n}\r\n\r\nh1::after {\r\n  content: url(./battleship.svg);\r\n  transform: scale(0.12);\r\n  width: 0px;\r\n  padding: 5px;\r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n  margin: 0px 5px 5px 5px;\r\n  padding: 0;\r\n}\r\n\r\n.labelContainer {\r\n  color: black;\r\n  background-color: lightblue;\r\n  height: 15vh;\r\n  padding: 0;\r\n  display: flex;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  margin-bottom: 1.5vw;\r\n  border-bottom: 2px solid;\r\n}\r\n\r\n.labelContainer p {\r\n  padding: 0;\r\n}\r\n\r\n.label {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-end;\r\n  position: relative;\r\n  font-weight: bold;\r\n\r\n  font-size: calc(1vw + 10px);\r\n}\r\n\r\n.gridContainer {\r\n  height: fit-content;\r\n  width: fit-content;\r\n\r\n  margin-top: 1vh;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: calc(var(--dynamic-width));\r\n}\r\n\r\n.grid {\r\n  width: fit-content;\r\n  height: fit-content;\r\n\r\n  border: 2px black solid;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: calc(1.7vw + 15px);\r\n  height: calc(1.6vw + 10px);\r\n\r\n  background-color: rgb(226, 252, 255);\r\n  border: 1px rgb(48, 48, 48) solid;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 10vh;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  opacity: 1;\r\n}\r\n\r\n.player::after, .bot::after {\r\n    transform: scale(2);\r\n}\r\n\r\n.sunkShip {\r\n    opacity: 0.5;\r\n}\r\n\r\n.playerFleet,\r\n.botFleet {\r\n  max-height: 10vh;\r\n  max-width: 30vw;\r\n}\r\n\r\n.ship::after {\r\n  content: url(\"./battleship.svg\");\r\n  transform: scale(0.2);\r\n  position: relative;\r\n}\r\n.cell p {\r\n  font-size: 0.5rem;\r\n  font-weight: bold;\r\n  background: none;\r\n}\r\n\r\n.hovered {\r\n  background-color: lightgrey !important;\r\n  size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n#playerGrid .occupied {\r\n  background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n  background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n  cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: red;\r\n}\r\n\r\n#playAgain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n  display: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.restart {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#info {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  margin-bottom: 10vh;\r\n\r\n  display: flex;\r\n  align-items: flex-start;\r\n  max-height: 40vh;\r\n  overflow: hidden;\r\n  animation: fadein 1s ease;\r\n}\r\n\r\n.latestaction {\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: break-spaces;\r\n  text-align: center;\r\n  transition: fadein 0.3s ease;\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playerContainer,\r\n.botContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .app {\r\n    --dynamic-width: calc(100vw / 20);\r\n  }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    .ship::after {\r\n        transform: scale(0.8);\r\n    }\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 8vh;\r\n}\r\n  .playerContainer,\r\n  .botContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n  }\r\n  h2 {\r\n    font-size: 16px;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    max-width: 10vw;\r\n    margin-right: 5vw;\r\n  }\r\n  #info {\r\n    max-height: 8vh;\r\n  }\r\n  .cell {\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .grid {\r\n    height: 35vh;\r\n    width: 70vw;\r\n  }\r\n  .gridContainer {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n  }\r\n  .labelContainer {\r\n    height: 10vh;\r\n    justify-content: center;\r\n  }\r\n  .playerLabel {\r\n    position: absolute;\r\n    bottom: 40vh;\r\n    right: 10px;\r\n  }\r\n  .botLabel {\r\n    position: absolute;\r\n    top: 10vh;\r\n    left: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

        // checkShipSunk(fleet) {
        //     console.log('checking')
        //     fleet.forEach(ship => {
        //         console.log(ship)
        //         let thisShip = ship;
        //         const sunk = this.grid.filter(square => square.alreadyHit && square.ship === thisShip)
        //         console.log(sunk);
        //     });
        // }
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
/* harmony export */   "renderFleet": () => (/* binding */ renderFleet),
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
        if (cell.occupied.sunk) {
            console.log(cell);
            cellDiv.classList.add('sunk');
        }

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

    renderFleet(bot.ownBoard.grid, '.bot');
    renderFleet(player.ownBoard.grid, '.player');

    // let sunkShips = bot.ownBoard.grid.filter((square => square.occupied.sunk === true))
    // console.log(sunkShips);

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
    latestActionMsg.textContent = msg;
  }



  //For fun.
//   function shake(...elements) {
//     elements.forEach((element) => element.classList.remove('shake'));
//     elements.forEach((element) => element.classList.add('shake'));

//     setTimeout(() => {
//         elements.forEach((element) => element.classList.remove('shake'));
//       }, 200);
//   };

const renderFleet = (fleet, who) => {
    const container = document.querySelectorAll(who);
    let occupiedCells = fleet.filter(cell => cell.occupied);
    const uniqueSizesSet = new Set();
    occupiedCells.filter(cell => {
        const size = cell.occupied.size;
        if (!uniqueSizesSet.has(size)) {
            uniqueSizesSet.add(cell.occupied);
            return true;
        }
        return false;
    });
    console.log(uniqueSizesSet)
    uniqueSizesSet.forEach((ship => {
        if (ship.sunk === true) {
            container[ship.size - 2].classList.add('sunkShip');
        }
    }))
}


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

/***/ }),

/***/ "./src/battleship.svg":
/*!****************************!*\
  !*** ./src/battleship.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2742b9a4da890cb6898.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNULG9CQUFvQixLQUFLLEVBQUUsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYXR0bGVzaGlwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSxcXHJcXG4gIDcwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDIwJSxcXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSxcXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEyKTtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggNXB4IDVweCA1cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxDb250YWluZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNXZ3O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxDb250YWluZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIGdhcDogY2FsYyh2YXIoLS1keW5hbWljLXdpZHRoKSk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICB3aWR0aDogY2FsYygxLjd2dyArIDE1cHgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEuNnZ3ICsgMTBweCk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyNTIsIDI1NSk7XFxyXFxuICBib3JkZXI6IDFweCByZ2IoNDgsIDQ4LCA0OCkgc29saWQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckZsZWV0IHVsLFxcclxcbi5ib3RGbGVldCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyOjphZnRlciwgLmJvdDo6YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Vua1NoaXAge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJGbGVldCxcXHJcXG4uYm90RmxlZXQge1xcclxcbiAgbWF4LWhlaWdodDogMTB2aDtcXHJcXG4gIG1heC13aWR0aDogMzB2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXA6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jZWxsIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xcclxcbiAgc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNlbGw6bm90KC5vY2N1cGllZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufSAqL1xcclxcblxcclxcbiNwbGF5ZXJHcmlkIC5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTpub3QoLnRlbXAtb2NjdXBpZWQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFscmVhZHlIaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLil41cXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgc2NhbGU6IDEuNTtcXHJcXG5cXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXjVxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXlBZ2FpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lb3Zlck1zZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2luZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdGVzdGFjdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGZhZGVpbiAwLjNzIGVhc2U7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJDb250YWluZXIsXFxyXFxuLmJvdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmFwcCB7XFxyXFxuICAgIC0tZHluYW1pYy13aWR0aDogY2FsYygxMDB2dyAvIDIwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxyXFxuICAgIC5zaGlwOjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAgIH1cXHJcXG4ucGxheWVyRmxlZXQgdWwsXFxyXFxuLmJvdEZsZWV0IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiA4dmg7XFxyXFxufVxcclxcbiAgLnBsYXllckNvbnRhaW5lcixcXHJcXG4gIC5ib3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1heC13aWR0aDogMTB2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxyXFxuICB9XFxyXFxuICAjaW5mbyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDh2aDtcXHJcXG4gIH1cXHJcXG4gIC5jZWxsIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncmlkIHtcXHJcXG4gICAgaGVpZ2h0OiAzNXZoO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gIH1cXHJcXG4gIC5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcbiAgLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5wbGF5ZXJMYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA0MHZoO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5ib3RMYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHZoO1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyx3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBOzs7OztJQUtFLDJCQUEyQjtFQUM3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QkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGdFQUFnRTtBQUNsRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtFQUNFOztJQUVFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSxcXHJcXG4gIDcwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDIwJSxcXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSxcXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoLi9iYXR0bGVzaGlwLnN2Zyk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMTIpO1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41dnc7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciBwIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDF2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgZ2FwOiBjYWxjKHZhcigtLWR5bmFtaWMtd2lkdGgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDEuN3Z3ICsgMTVweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMS42dncgKyAxMHB4KTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDI1MiwgMjU1KTtcXHJcXG4gIGJvcmRlcjogMXB4IHJnYig0OCwgNDgsIDQ4KSBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyRmxlZXQgdWwsXFxyXFxuLmJvdEZsZWV0IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXI6OmFmdGVyLCAuYm90OjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxufVxcclxcblxcclxcbi5zdW5rU2hpcCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckZsZWV0LFxcclxcbi5ib3RGbGVldCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogdXJsKFxcXCIuL2JhdHRsZXNoaXAuc3ZnXFxcIik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jZWxsIHAge1xcclxcbiAgZm9udC1zaXplOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlcmVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xcclxcbiAgc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNlbGw6bm90KC5vY2N1cGllZCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufSAqL1xcclxcblxcclxcbiNwbGF5ZXJHcmlkIC5vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcC1vY2N1cGllZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZTpub3QoLnRlbXAtb2NjdXBpZWQpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFscmVhZHlIaXQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCLil41cXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgc2NhbGU6IDEuNTtcXHJcXG5cXHJcXG4gIGNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub2NjdXBpZWQuYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXjVxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXlBZ2FpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lb3Zlck1zZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2luZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG1heC1oZWlnaHQ6IDQwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdGVzdGFjdGlvbiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGZhZGVpbiAwLjNzIGVhc2U7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJDb250YWluZXIsXFxyXFxuLmJvdENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmFwcCB7XFxyXFxuICAgIC0tZHluYW1pYy13aWR0aDogY2FsYygxMDB2dyAvIDIwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XFxyXFxuICAgIC5zaGlwOjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICAgIH1cXHJcXG4ucGxheWVyRmxlZXQgdWwsXFxyXFxuLmJvdEZsZWV0IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiA4dmg7XFxyXFxufVxcclxcbiAgLnBsYXllckNvbnRhaW5lcixcXHJcXG4gIC5ib3RDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1heC13aWR0aDogMTB2dztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1dnc7XFxyXFxuICB9XFxyXFxuICAjaW5mbyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDh2aDtcXHJcXG4gIH1cXHJcXG4gIC5jZWxsIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncmlkIHtcXHJcXG4gICAgaGVpZ2h0OiAzNXZoO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gIH1cXHJcXG4gIC5ncmlkQ29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcbiAgLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5wbGF5ZXJMYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA0MHZoO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC5ib3RMYWJlbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMHZoO1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdyaWQoKSB7XHJcbiAgICBjb25zdCBzcXVhcmVzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHtcclxuICAgICAgICAgICAgYWxyZWFkeUhpdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9jY3VwaWVkOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNxdWFyZXMucHVzaChzcXVhcmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc3F1YXJlcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZWJvYXJkKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBncmlkOiBnZW5lcmF0ZUdyaWQoKSxcclxuXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbY29vcmRpbmF0ZV07XHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhbHJlYWR5SGl0LCByZXR1cm46XHJcbiAgICAgICAgICAgIGlmIChzcXVhcmUuYWxyZWFkeUhpdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNxdWFyZS5hbHJlYWR5SGl0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzcXVhcmUub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICdvY2N1cGllZCcgcmVmZXJzIHRvIGEgc2hpcC5cclxuICAgICAgICAgICAgICAgIHNxdWFyZS5vY2N1cGllZC5zaGlwSGl0KClcclxuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUub2NjdXBpZWQuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3JlbmRlciBob29rLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Egc2hpcCBoYXMgYmVlbiBzdW5rIScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYWNlU2hpcChzaGlwLCAuLi5jb29yZGluYXRlcykge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkID0+IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW2Nvb3JkXS5vY2N1cGllZCA9IHNoaXApXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2hlY2tBbGxTdW5rKCkge1xyXG4gICAgICAgICAgICAvL2RlZmF1bHQgdG8gZ2FtZW92ZXIgLSBjaGVjayBpZiBvbmdvaW5nLlxyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5ncmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmFscmVhZHlIaXQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVja1NoaXBTdW5rKGZsZWV0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjaGVja2luZycpXHJcbiAgICAgICAgLy8gICAgIGZsZWV0LmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzaGlwKVxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHRoaXNTaGlwID0gc2hpcDtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHN1bmsgPSB0aGlzLmdyaWQuZmlsdGVyKHNxdWFyZSA9PiBzcXVhcmUuYWxyZWFkeUhpdCAmJiBzcXVhcmUuc2hpcCA9PT0gdGhpc1NoaXApXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzdW5rKTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQ7XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hpcChzaXplKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgaGl0czogMCxcclxuICAgICAgICBzdW5rOiBmYWxzZSxcclxuXHJcbiAgICAgICAgc2hpcEhpdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5oaXRzKytcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc1N1bmsoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpemUgPT0gdGhpcy5oaXRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1bms7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcclxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcGxhY2VTaGlwcywgcmVuZGVyR2FtZSwgcGxhY2VBdHRhY2ssIHJlbmRlckdhbWVPdmVyLCByZW5kZXJTdGF0dXMsIGRpc2FibGVQbGF5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcblxyXG5cclxuXHJcbmxldCByZWNvbiwgcmVjb24yLCBib3RGbGVldCwgcGxheWVyRmxlZXQsIGJvdCwgeW91O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYW1lKCkge1xyXG4gICAgbGV0IGdhbWVvdmVyRmxhZyA9IGZhbHNlO1xyXG5cclxuICAgIGluc3RhbnRpYXRlT2JqZWN0cygpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0aWFsKCkge1xyXG5cclxuICAgIGJvdC5hdXRvUGxhY2UoLi4uYm90RmxlZXQpXHJcblxyXG4gICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcblxyXG4gICAgcmVuZGVyU3RhdHVzKCdQbGF5ZXIsJywgJ3BsYWNlIHlvdXIgYmF0dGxlc2hpcHMnKVxyXG5cclxuICAgIHBsYWNlU2hpcHMocGxheWVyRmxlZXQsIHlvdS5vd25Cb2FyZCwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XHJcbiAgICAgICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcbiAgICAgICAgcmVuZGVyU3RhdHVzKCdZb3UnLCAncGxhY2VkIHlvdXIgc2hpcHMnKVxyXG4gICAgICAgIGlmIChnYW1lTG9vcCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmxldCB0dXJuID0gJ2InXHJcblxyXG4gYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XHJcbiAgICB3aGlsZSAoIWdhbWVvdmVyRmxhZykge1xyXG4gICAgICAgIGlmICh0dXJuID09ICdwJykge1xyXG4gICAgICAgICAgICBhd2FpdCBwbGF5ZXJNb3ZlKCk7XHJcbiAgICAgICAgICAgIHR1cm4gPSAnYidcclxuICAgICAgICB9IGVsc2UgaWYgKHR1cm4gPT0gJ2InKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGJvdE1vdmUoKTtcclxuICAgICAgICAgICAgdHVybiA9ICdwJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnYW1lb3ZlcicpXHJcbiAgICAgICAgICAgIGdhbWVvdmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllck1vdmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGxheWVyIGF0dGFjaycpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBwbGFjZUF0dGFjayhib3QsICgpID0+IHtcclxuICAgICAgICByZW5kZXJHYW1lKGJvdCwgeW91KTtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLmNoZWNrQWxsU3VuaygpKSB7XHJcbiAgICAgICAgICBnYW1lb3ZlckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgZ2FtZU92ZXIoJ3lvdScpO1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbmRlclN0YXR1cygnWW91JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9cclxuZnVuY3Rpb24gYm90TW92ZSgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJvdC5hdXRvTW92ZSh5b3Uub3duQm9hcmQpO1xyXG4gICAgICAgIHJlbmRlckdhbWUoYm90LCB5b3UpO1xyXG4gICAgICAgIGlmICh5b3Uub3duQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcclxuICAgICAgICAgICAgZ2FtZW92ZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgZ2FtZU92ZXIoJ2JvdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYm90bW92ZSByZXNvbHZlZCBmYWxzZScpXHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbmRlclN0YXR1cygnQm90JywgJ2F0dGFja2VkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3Rtb3ZlIHJlc29sdmVkIHRydWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG5cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlcihkaXNwbGF5KSB7XHJcbiAgICByZW5kZXJHYW1lT3ZlcihkaXNwbGF5KTtcclxufVxyXG5cclxuXHJcbmluaXRpYWwoKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZU9iamVjdHMoKSB7XHJcblxyXG4gICAgYm90ID0gcGxheWVyKCk7XHJcbiAgICB5b3UgPSBwbGF5ZXIoKTtcclxuXHJcbiAgICBsZXQgW3JlY29uLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHRhbmtlcl0gPSBbXHJcbiAgICAgICAgY3JlYXRlU2hpcCgyKSxcclxuICAgICAgICBjcmVhdGVTaGlwKDMpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoNCksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg1KVxyXG4gICAgICBdO1xyXG4gICAgXHJcbiAgICAgIGxldCBbcmVjb24yLCBjcnVpc2VyMiwgZGVzdHJveWVyMiwgdGFua2VyMl0gPSBbXHJcbiAgICAgICAgY3JlYXRlU2hpcCgyKSxcclxuICAgICAgICBjcmVhdGVTaGlwKDMpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoNCksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg1KVxyXG4gICAgICBdO1xyXG4gICAgICBcclxuICAgIGJvdEZsZWV0ID0gW3JlY29uLCBjcnVpc2VyLCBkZXN0cm95ZXIsIHRhbmtlcl1cclxuICAgIHBsYXllckZsZWV0ID0gW3JlY29uMiwgY3J1aXNlcjIsIGRlc3Ryb3llcjIsIHRhbmtlcjJdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVPYmplY3RzKCkge1xyXG4gICAgcmVjb24gPSBudWxsXHJcbiAgICByZWNvbjIgPSBudWxsXHJcbiAgICBib3RGbGVldCA9IG51bGxcclxuICAgIHBsYXllckZsZWV0ID0gbnVsbFxyXG4gICAgYm90ID0gbnVsbFxyXG4gICAgeW91ID0gbnVsbFxyXG59XHJcbiIsIlxyXG5cclxuLy8gdGFrZXMgaW4gYW4gaW50ZWdlciBuXHJcbi8vIGdlbmVyYXRlcyBuICdhZGpvaW5pbmcnIHNwYWNlc1xyXG4vLyBlZy4gMiwgMywgNCAoaG9yaXpvbnRhbCkgfHwgMywgMTMsIDIzICh2ZXJ0aWNhbClcclxuXHJcbmZ1bmN0aW9uIGdldEhvcml6b250YWwoc2hpcFNpemUpIHtcclxuICAgIGxldCBmaXJzdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgbGV0IHNlY29uZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMC1zaGlwU2l6ZSkpXHJcblxyXG4gICAgcmV0dXJuIE51bWJlcihmaXJzdC50b1N0cmluZygpICsgc2Vjb25kLnRvU3RyaW5nKCkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMZWdhbFBsYWNlKHNoaXBTaXplKSB7XHJcbiAgICBsZXQgaG9yaXpvbnRhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XHJcblxyXG4gICAgbGV0IHJhbmdlID0gKDk5LXNoaXBTaXplKjEwKSAtIDAgKyAxXHJcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpXHJcbiAgICBsZXQgYm9hdFN0YXJ0ID0gaG9yaXpvbnRhbCA/IGdldEhvcml6b250YWwoc2hpcFNpemUpIDpcclxuICAgICAgICAwICsgcmFuZG9tO1xyXG4gICAgbGV0IHJlc3VsdCA9IFtib2F0U3RhcnRdXHJcblxyXG4gICAgaWYgKGhvcml6b250YWwpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCsrYm9hdFN0YXJ0KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZSAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChib2F0U3RhcnQrPTEwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuLy8gdHdvIHJhbmRvbSBudW1iZXJzIC0gMSBiZXR3ZWVuIDAtOSwgMSBiZXR3ZWVuIDAtOS1zaGlwc2l6ZVxyXG4vLyBjb21iaW5lIHN0cmluZy5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xlZ2FsUGxhY2VtZW50KGdyaWQsIGNvb3Jkcykge1xyXG5cclxuICAgIGxldCBzdGF0dXMgPSBjaGVja0xhc3REaWdpdChjb29yZHMpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChncmlkLmdyaWRbY29vcmRdLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhhdCBzcGFjZSBpcyBvY2N1cGllZCcpXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja0xhc3REaWdpdChhcnJheSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXJyYXlbaV07XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXJyYXlbaSAtIDFdO1xyXG4gICAgICBcclxuICAgICAgaWYgKGdldExhc3REaWdpdChjdXJyZW50KSA8PSBnZXRMYXN0RGlnaXQocHJldmlvdXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBnZXRMYXN0RGlnaXQobnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbnVtYmVyICUgMTA7XHJcbiAgfVxyXG4gICIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG5cclxuZ2FtZSgpOyIsImltcG9ydCBnYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XHJcbmltcG9ydCB7IGdldExlZ2FsUGxhY2UgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5mdW5jdGlvbiBwbGF5ZXIob3duQm9hcmQgPSBnYW1lYm9hcmQoKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvd25Cb2FyZCxcclxuICAgIFxyXG4gICAgICAgIGF1dG9Nb3ZlKGJvYXJkKSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBhdHRlbXB0ZWRNb3ZlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKCFtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLnJlY2VpdmVBdHRhY2socmFuZG9tTW92ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZE1vdmVzLnB1c2gocmFuZG9tTW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tTW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJldHVybmluZyByYW5kb21Nb3ZlIGNvdWxkIGJlIHVzZWZ1bCBmb3IgZG9tXHJcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tTW92ZSwgYXR0ZW1wdGVkTW92ZXNdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vZm9yIGJvdHMgb25seS4uLlxyXG4gICAgICAgIC8vcGxheWVycyB3aWxsIHVzZSBnYW1lYm9hcmQgb2JqZWN0J3MgJ3BsYWNlU2hpcCBtZXRob2QnXHJcbiAgICAgICAgYXV0b1BsYWNlKC4uLnNoaXBzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNoaXAgb2Ygc2hpcHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBjb29yZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBnZXRMZWdhbFBsYWNlKHNoaXAuc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTsgLy8gRmxhZyB0byB0cmFjayBpZiBzcGFjZSBvY2N1cGllZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgb2YgY29vcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm93bkJvYXJkLmdyaWRbY29vcmRdLm9jY3VwaWVkKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlOyAvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSBpZiBjb25kaXRpb24gaXMgc2F0aXNmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBlYXJseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgLi4uY29vcmRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImltcG9ydCB7IGlzTGVnYWxQbGFjZW1lbnQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7IHJlc3RhcnQgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5cclxubGV0IERPTUJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90R3JpZCcpO1xyXG5sZXQgRE9NUGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJHcmlkJyk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWUoYm90LCBwbGF5ZXIpIHtcclxuXHJcbiAgICAvL2RlbGV0ZSBhbGwgZXhpc3RpbmcgY2VsbHM6XHJcblxyXG5cclxuICAgIC8vcmVuZGVyICdoaXRzJyBvbiBib3RoIGJvYXJkc1xyXG4gICAgLy9yZW5kZXIgcGxheWVyIG9jY3VwaWVkIHBvc2l0aW9uc1xyXG4gICAgLy9yZW5kZXIgZW5lbXkgc2hpcHMgb25jZSBzdW5rXHJcblxyXG5cclxuICAgIGxldCBET01Cb3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdEdyaWQnKTtcclxuICAgIGxldCBET01QbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWQnKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWxsQ2hpbGRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcblxyXG4gICAgYWxsQ2hpbGRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIGxldCBib3RDb3VudCA9IDA7XHJcbiAgICBsZXQgcGxheWVyQ291bnQgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGNlbGwgb2YgYm90Lm93bkJvYXJkLmdyaWQpIHtcclxuICAgICAgICBsZXQgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcsIGJvdENvdW50KVxyXG4gICAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYm90Q291bnQgKyAxMDApO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBib3RDb3VudCsrXHJcblxyXG4gICAgICAgIGlmIChjZWxsLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnb2NjdXBpZWQnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5hbHJlYWR5SGl0KSB7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnYWxyZWFkeUhpdCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2VsbC5vY2N1cGllZC5zdW5rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTUJvdEdyaWQuYXBwZW5kKGNlbGxEaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNlbGwgb2YgcGxheWVyLm93bkJvYXJkLmdyaWQpIHtcclxuICAgICAgICBsZXQgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcsIHBsYXllckNvdW50KVxyXG4gICAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcGxheWVyQ291bnQpXHJcblxyXG4gICAgICAgIHBsYXllckNvdW50KytcclxuXHJcbiAgICAgICAgaWYgKGNlbGwub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmFscmVhZHlIaXQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5SGl0JylcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgRE9NUGxheWVyR3JpZC5hcHBlbmQoY2VsbERpdik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmxlZXQoYm90Lm93bkJvYXJkLmdyaWQsICcuYm90Jyk7XHJcbiAgICByZW5kZXJGbGVldChwbGF5ZXIub3duQm9hcmQuZ3JpZCwgJy5wbGF5ZXInKTtcclxuXHJcbiAgICAvLyBsZXQgc3Vua1NoaXBzID0gYm90Lm93bkJvYXJkLmdyaWQuZmlsdGVyKChzcXVhcmUgPT4gc3F1YXJlLm9jY3VwaWVkLnN1bmsgPT09IHRydWUpKVxyXG4gICAgLy8gY29uc29sZS5sb2coc3Vua1NoaXBzKTtcclxuXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGZvciBzaGlwIHBsYWNlbWVudCAtIHVzZXIuXHJcbi8vIHVzZXJzIGNhbiBob3ZlciB3aXRoIG1vdXNlIG92ZXIgYm9hcmQgYW5kIGNsaWNrIHRvIHBsYWNlIHNoaXBcclxuLy8gKCBtb2JpbGUgdXNlcnMgPylcclxuLy8gaWYgYSB2YWxpZCBwb3NpdGlvbiBpcyBzZWxlY3RlZCB0aGUgc2hpcCB3aWxsIHNuYXAgaW50byBwbGFjZVxyXG4vLyBvbmNlIHRoZSBmbGVldCBpcyBwbGFjZWQsIHBsYWNlbWVudCBmdW5jdGlvbmFsaXR5IGlzIGRpc2FibGVkIGFuZFxyXG4gICAgLy8gdGhlIGJvYXJkIHdpbGwgcmUtcmVuZGVyIHZpYSB0aGUgY2FsbGJhY2suIFxyXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwcyhmbGVldCwgZ3JpZCwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmbGVldFJlbWFpbmluZyA9IGZsZWV0O1xyXG4gICAgbGV0IERPTVBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZCcpO1xyXG4gIFxyXG4gICAgbGV0IGN1cnJlbnRTaGlwID0gZmxlZXRSZW1haW5pbmdbMF07XHJcbiAgICBsZXQgc2VsZWN0ZWRTcGFjZXMgPSBbXTtcclxuICAgIGxldCBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gRE9NUGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuXHJcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJykpXHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soZXZlbnQpIHtcclxuICAgICAgaWYgKHNlbGVjdGVkU3BhY2VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGlzTGVnYWxQbGFjZW1lbnQoZ3JpZCwgc2VsZWN0ZWRTcGFjZXMpKSB7XHJcbiAgICAgICAgZ3JpZC5wbGFjZVNoaXAoZmxlZXRSZW1haW5pbmcuc2hpZnQoKSwgLi4uc2VsZWN0ZWRTcGFjZXMpO1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9jY3VwaWVkJykpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlmIChmbGVldFJlbWFpbmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3VycmVudFNoaXAgPSBmbGVldFJlbWFpbmluZ1swXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGbGVldCBwbGFjZW1lbnQgaXMgY29tcGxldGUsIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIGludm9rZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsTW91c2VPdmVyKGV2ZW50KSB7XHJcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJykpO1xyXG4gIFxyXG4gICAgICBzZWxlY3RlZFNwYWNlcyA9IFtdO1xyXG4gICAgICBzZWxlY3RlZEVsZW1lbnRzID0gW107XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgXHJcbiAgICAgIHNlbGVjdGVkU3BhY2VzLnB1c2goc2VsZWN0ZWQpO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTaGlwLnNpemUgLSAxOyBqKyspIHtcclxuICAgICAgICBzZWxlY3RlZFNwYWNlcy5wdXNoKHNlbGVjdGVkU3BhY2VzW2pdICsgMSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZm9yIChsZXQgaSBvZiBzZWxlY3RlZFNwYWNlcykge1xyXG4gICAgICAgIHNlbGVjdGVkRWxlbWVudHMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpfSddYCkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29mZiBncmlkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpO1xyXG4gICAgICBET01QbGF5ZXJHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICAgIH1cclxuICBcclxuICAgIERPTVBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ2VsbE1vdXNlT3Zlcik7XHJcbiAgICBET01QbGF5ZXJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKTtcclxuICB9XHJcbiAgXHJcbiAgLy9wcm92aWRlcyB2aXN1YWwgY3VlcyBmb3IgcGxheWVyIGF0dGFja3NcclxuICBleHBvcnQgZnVuY3Rpb24gcGxhY2VBdHRhY2soYm90LCBjYWxsYmFjaykge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdwbGFjZSBhdHRhY2sgZnVuY3Rpb24gY2FsbGVkJylcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWQ7XHJcbiAgICBsZXQgRE9NQm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkJyk7XHJcbiAgICBsZXQgYm90Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYm90R3JpZCAuY2VsbCcpO1xyXG5cclxuICAgIGJvdENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbHJlYWR5SGl0JykpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVjZWl2ZUF0dGFjaygpIHtcclxuICAgICAgICBpZiAoYm90Lm93bkJvYXJkLnJlY2VpdmVBdHRhY2soc2VsZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2VsbE1vdXNlT3ZlcihldmVudCkge1xyXG4gICAgICAgIGJvdENlbGxzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpKTtcclxuICAgIFxyXG4gICAgICAgIHNlbGVjdGVkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSAtIDEwMClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZXRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKVxyXG4gICAgICAgIERPTUJvdEdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZWNlaXZlQXR0YWNrKSAgICBcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRldGFjaExpc3RlbmVycygpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhdGNoIGRldGFjaCcpXHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIGF0dGFjaExpc3RlbmVycygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0YWNoTGlzdGVuZXJzOiBkZXRhY2hMaXN0ZW5lcnNcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc3RhcnQoKSB7XHJcbiAgICBsZXQgc3RhdHVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xyXG4gICAgbGV0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5QWdhaW4nKTtcclxuICAgIHBsYXlBZ2Fpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgd2hpbGUgKHN0YXR1c0JveC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgc3RhdHVzQm94LnJlbW92ZUNoaWxkKHN0YXR1c0JveC5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgIC8vcmVzdGFydCgpO1xyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH1cclxuXHJcbiAgLy8gc2hvdWxkIGNhbGwgcmVzdGFydCBmcm9tIGdhbWUuIFRoaXMgbW9kdWxlIHNob3VsZCBzaW1wbHkgcmV0dXJuIHRydWUgd2hlbiBldmVudCBpcyB0cmlnZ2VyZWQuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lT3Zlcih3aW5uZXIpIHtcclxuICAgIGxldCBzdGF0dXNNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXJNc2cnKTtcclxuICAgIGxldCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbiBidXR0b24nKTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXlBZ2FpbkNsaWNrKCkge1xyXG4gICAgICAgIHRyaWdnZXJSZXN0YXJ0KClcclxuICAgIH07XHJcbiAgICByZXN0YXJ0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluQ2xpY2spO1xyXG5cclxuICAgIFxyXG4gICAgc3RhdHVzTXNnLnRleHRDb250ZW50ID0gYEdhbWUgT3Zlci5cXG4gJHt3aW5uZXJ9IHdvbi5gLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICByZXN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc3RhdHVzTXNnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW5DbGljaylcclxuICB9XHJcblxyXG5cclxuICAvL3RvIGluZGljYXRlIHdoYXQncyBoYXBwZW5pbmcgaW4gZ2FtZS5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RhdHVzKHdobywgd2hhdCl7XHJcbiAgICBsZXQgbXNnID0gYFxcbiAke3dob30gJHt3aGF0fS5gXHJcbiAgICBsZXQgbGF0ZXN0QWN0aW9uTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdGVzdEFjdGlvbicpO1xyXG4gICAgbGF0ZXN0QWN0aW9uTXNnLnRleHRDb250ZW50ID0gbXNnO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAvL0ZvciBmdW4uXHJcbi8vICAgZnVuY3Rpb24gc2hha2UoLi4uZWxlbWVudHMpIHtcclxuLy8gICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbi8vICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJykpO1xyXG5cclxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKSk7XHJcbi8vICAgICAgIH0sIDIwMCk7XHJcbi8vICAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJGbGVldCA9IChmbGVldCwgd2hvKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHdobyk7XHJcbiAgICBsZXQgb2NjdXBpZWRDZWxscyA9IGZsZWV0LmZpbHRlcihjZWxsID0+IGNlbGwub2NjdXBpZWQpO1xyXG4gICAgY29uc3QgdW5pcXVlU2l6ZXNTZXQgPSBuZXcgU2V0KCk7XHJcbiAgICBvY2N1cGllZENlbGxzLmZpbHRlcihjZWxsID0+IHtcclxuICAgICAgICBjb25zdCBzaXplID0gY2VsbC5vY2N1cGllZC5zaXplO1xyXG4gICAgICAgIGlmICghdW5pcXVlU2l6ZXNTZXQuaGFzKHNpemUpKSB7XHJcbiAgICAgICAgICAgIHVuaXF1ZVNpemVzU2V0LmFkZChjZWxsLm9jY3VwaWVkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codW5pcXVlU2l6ZXNTZXQpXHJcbiAgICB1bmlxdWVTaXplc1NldC5mb3JFYWNoKChzaGlwID0+IHtcclxuICAgICAgICBpZiAoc2hpcC5zdW5rID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcltzaGlwLnNpemUgLSAyXS5jbGFzc0xpc3QuYWRkKCdzdW5rU2hpcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG59XHJcblxyXG5cclxuICAvL2JhbmRhaWQgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVQbGF5KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc2FibGUgcGxheScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBET01Cb3RHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpXHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlY2VpdmVBdHRhY2spXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=