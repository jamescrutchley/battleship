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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  background-color: rgb(238, 238, 238);\r\n  font-family: sans-serif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-1px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(1px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation: shake 0.1s infinite;\r\n}\r\n\r\n.app {\r\n  --dynamic-width: calc(100vw / 10);\r\n\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: fit-content;\r\n  padding-top: 10px;\r\n  padding: 0;\r\n  justify-self: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: lightblue;\r\n}\r\n\r\nh1::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  transform: scale(0.12);\r\n  width: 0px;\r\n  padding: 5px;\r\n}\r\n\r\nh2 {\r\n  margin: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.labelContainer {\r\n  color: black;\r\n  background-color: lightblue;\r\n  height: 15vh;\r\n  padding: 0;\r\n  display: flex;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  margin-bottom: 2vw;\r\n  border-bottom: 2px solid;\r\n}\r\n\r\n.labelContainer p {\r\n  padding: 0;\r\n}\r\n\r\n.label {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-end;\r\n  position: relative;\r\n  font-weight: bold;\r\n\r\n  font-size: calc(1vw + 10px);\r\n}\r\n\r\n.gridContainer {\r\n  height: fit-content;\r\n  width: fit-content;\r\n\r\n  margin-top: 1vh;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: calc(var(--dynamic-width));\r\n}\r\n\r\n.grid {\r\n  width: fit-content;\r\n  height: fit-content;\r\n\r\n  border: 2px black solid;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: calc(1.8vw + 13px);\r\n  height: calc(1.8vw + 13px);\r\n\r\n  background-color: rgb(226, 252, 255);\r\n  border: 1px rgb(48, 48, 48) solid;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 10vh;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  opacity: 1;\r\n}\r\n\r\n.sunkShip {\r\n    opacity: 0.5;\r\n}\r\n\r\n.playerFleet,\r\n.botFleet {\r\n  max-height: 10vh;\r\n  max-width: 30vw;\r\n}\r\n\r\n.ship::after {\r\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  transform: scale(0.2);\r\n  position: relative;\r\n}\r\n.cell p {\r\n  font-size: 0.5rem;\r\n  font-weight: bold;\r\n  background: none;\r\n}\r\n\r\n.hovered {\r\n  background-color: lightgrey !important;\r\n  size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n#playerGrid .occupied {\r\n  background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n  background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n  cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: red;\r\n}\r\n\r\n#playAgain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n  display: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.restart {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#info {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  margin-bottom: 10vh;\r\n\r\n  display: flex;\r\n  align-items: flex-start;\r\n  max-height: 40vh;\r\n  overflow: hidden;\r\n  animation: fadein 1s ease;\r\n}\r\n\r\n.latestaction {\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: break-spaces;\r\n  text-align: center;\r\n  transition: fadein 0.3s ease;\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playerContainer,\r\n.botContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .app {\r\n    --dynamic-width: calc(100vw / 20);\r\n  }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    .ship::after {\r\n        transform: scale(0.8);\r\n    }\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 8vh;\r\n}\r\n  .playerContainer,\r\n  .botContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n  }\r\n  h2 {\r\n    font-size: 16px;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    max-width: 10vw;\r\n    margin-right: 5vw;\r\n  }\r\n  #info {\r\n    max-height: 8vh;\r\n  }\r\n  .cell {\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .grid {\r\n    height: 35vh;\r\n    width: 70vw;\r\n  }\r\n  .gridContainer {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n  }\r\n  .labelContainer {\r\n    height: 10vh;\r\n    justify-content: center;\r\n  }\r\n  .playerLabel {\r\n    position: absolute;\r\n    bottom: 40vh;\r\n    right: 10px;\r\n  }\r\n  .botLabel {\r\n    position: absolute;\r\n    top: 10vh;\r\n    left: 15px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  background-color: rgb(238, 238, 238);\r\n  font-family: sans-serif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    transform: translateX(-1px);\r\n  }\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(1px);\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  animation: shake 0.1s infinite;\r\n}\r\n\r\n.app {\r\n  --dynamic-width: calc(100vw / 10);\r\n\r\n  width: 100vw;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: fit-content;\r\n  padding-top: 10px;\r\n  padding: 0;\r\n  justify-self: center;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: lightblue;\r\n}\r\n\r\nh1::after {\r\n  content: url(./battleship.svg);\r\n  transform: scale(0.12);\r\n  width: 0px;\r\n  padding: 5px;\r\n}\r\n\r\nh2 {\r\n  margin: 5px;\r\n  padding: 0;\r\n}\r\n\r\n.labelContainer {\r\n  color: black;\r\n  background-color: lightblue;\r\n  height: 15vh;\r\n  padding: 0;\r\n  display: flex;\r\n  width: 100vw;\r\n  justify-content: center;\r\n  margin-bottom: 2vw;\r\n  border-bottom: 2px solid;\r\n}\r\n\r\n.labelContainer p {\r\n  padding: 0;\r\n}\r\n\r\n.label {\r\n  margin: 0;\r\n  padding: 0;\r\n  align-self: flex-end;\r\n  position: relative;\r\n  font-weight: bold;\r\n\r\n  font-size: calc(1vw + 10px);\r\n}\r\n\r\n.gridContainer {\r\n  height: fit-content;\r\n  width: fit-content;\r\n\r\n  margin-top: 1vh;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  gap: calc(var(--dynamic-width));\r\n}\r\n\r\n.grid {\r\n  width: fit-content;\r\n  height: fit-content;\r\n\r\n  border: 2px black solid;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n  width: calc(1.8vw + 13px);\r\n  height: calc(1.8vw + 13px);\r\n\r\n  background-color: rgb(226, 252, 255);\r\n  border: 1px rgb(48, 48, 48) solid;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.sunk {\r\n  background-color: black;\r\n}\r\n\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 10vh;\r\n}\r\n\r\n.ship {\r\n  position: relative;\r\n  opacity: 1;\r\n}\r\n\r\n.sunkShip {\r\n    opacity: 0.5;\r\n}\r\n\r\n.playerFleet,\r\n.botFleet {\r\n  max-height: 10vh;\r\n  max-width: 30vw;\r\n}\r\n\r\n.ship::after {\r\n  content: url(\"./battleship.svg\");\r\n  transform: scale(0.2);\r\n  position: relative;\r\n}\r\n.cell p {\r\n  font-size: 0.5rem;\r\n  font-weight: bold;\r\n  background: none;\r\n}\r\n\r\n.hovered {\r\n  background-color: lightgrey !important;\r\n  size: 40px;\r\n}\r\n\r\n/* .cell:not(.occupied) {\r\n    background-color: lightblue;\r\n} */\r\n\r\n#playerGrid .occupied {\r\n  background-color: grey;\r\n}\r\n\r\n.temp-occupied {\r\n  background-color: darkgray;\r\n}\r\n\r\n.clickable:not(.temp-occupied) {\r\n  cursor: pointer;\r\n}\r\n\r\n.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: blue;\r\n}\r\n\r\n.occupied.alreadyHit::after {\r\n  content: \"◍\";\r\n  position: absolute;\r\n  scale: 1.5;\r\n\r\n  color: red;\r\n}\r\n\r\n#playAgain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.gameoverMsg {\r\n  display: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.restart {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  font-weight: 600;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#info {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n  margin-bottom: 10vh;\r\n\r\n  display: flex;\r\n  align-items: flex-start;\r\n  max-height: 40vh;\r\n  overflow: hidden;\r\n  animation: fadein 1s ease;\r\n}\r\n\r\n.latestaction {\r\n  margin: 0;\r\n  padding: 0;\r\n  white-space: break-spaces;\r\n  text-align: center;\r\n  transition: fadein 0.3s ease;\r\n  background-image: linear-gradient(rgba(255, 255, 255, 0), white);\r\n}\r\n\r\n.wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n@keyframes fadein {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.playerContainer,\r\n.botContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .app {\r\n    --dynamic-width: calc(100vw / 20);\r\n  }\r\n}\r\n\r\n@media (max-width: 440px) {\r\n    .ship::after {\r\n        transform: scale(0.8);\r\n    }\r\n.playerFleet ul,\r\n.botFleet ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 8vh;\r\n}\r\n  .playerContainer,\r\n  .botContainer {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n  }\r\n  h2 {\r\n    font-size: 16px;\r\n    padding-left: 0;\r\n    margin-left: 0;\r\n    max-width: 10vw;\r\n    margin-right: 5vw;\r\n  }\r\n  #info {\r\n    max-height: 8vh;\r\n  }\r\n  .cell {\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n  .grid {\r\n    height: 35vh;\r\n    width: 70vw;\r\n  }\r\n  .gridContainer {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n  }\r\n  .labelContainer {\r\n    height: 10vh;\r\n    justify-content: center;\r\n  }\r\n  .playerLabel {\r\n    position: absolute;\r\n    bottom: 40vh;\r\n    right: 10px;\r\n  }\r\n  .botLabel {\r\n    position: absolute;\r\n    top: 10vh;\r\n    left: 15px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "3a1c60035d8aac9c4256.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNULG9CQUFvQixLQUFLLEVBQUUsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3JlbmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iYXR0bGVzaGlwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSxcXHJcXG4gIDcwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDIwJSxcXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSxcXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEyKTtcXHJcXG4gIHdpZHRoOiAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsQ29udGFpbmVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAydnc7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbENvbnRhaW5lciBwIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogY2FsYygxdncgKyAxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDF2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgZ2FwOiBjYWxjKHZhcigtLWR5bmFtaWMtd2lkdGgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIHdpZHRoOiBjYWxjKDEuOHZ3ICsgMTNweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMS44dncgKyAxM3B4KTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDI1MiwgMjU1KTtcXHJcXG4gIGJvcmRlcjogMXB4IHJnYig0OCwgNDgsIDQ4KSBzb2xpZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyRmxlZXQgdWwsXFxyXFxuLmJvdEZsZWV0IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5zdW5rU2hpcCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckZsZWV0LFxcclxcbi5ib3RGbGVldCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAzMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmNlbGwgcCB7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XFxyXFxuICBzaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbDpub3QoLm9jY3VwaWVkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuI3BsYXllckdyaWQgLm9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLW9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOm5vdCgudGVtcC1vY2N1cGllZCkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXjVxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZC5hbHJlYWR5SGl0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwi4peNXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHNjYWxlOiAxLjU7XFxyXFxuXFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheUFnYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyTXNnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWF4LWhlaWdodDogNDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBhbmltYXRpb246IGZhZGVpbiAxcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0YWN0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZmFkZWluIDAuM3MgZWFzZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckNvbnRhaW5lcixcXHJcXG4uYm90Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuYXBwIHtcXHJcXG4gICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMjApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcXHJcXG4gICAgLnNoaXA6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gICAgfVxcclxcbi5wbGF5ZXJGbGVldCB1bCxcXHJcXG4uYm90RmxlZXQgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuICAucGxheWVyQ29udGFpbmVyLFxcclxcbiAgLmJvdENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcXHJcXG4gIH1cXHJcXG4gICNpbmZvIHtcXHJcXG4gICAgbWF4LWhlaWdodDogOHZoO1xcclxcbiAgfVxcclxcbiAgLmNlbGwge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdyaWQge1xcclxcbiAgICBoZWlnaHQ6IDM1dmg7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgfVxcclxcbiAgLmdyaWRDb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICB9XFxyXFxuICAubGFiZWxDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnBsYXllckxhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDQwdmg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLmJvdExhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwdmg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7Ozs7O0lBS0UsMkJBQTJCO0VBQzdCO0VBQ0E7Ozs7SUFJRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDOztFQUVqQyxZQUFZOztFQUVaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVB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Q0UsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtFQUNFOztJQUVFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSxcXHJcXG4gIDcwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXHJcXG4gIH1cXHJcXG4gIDIwJSxcXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSxcXHJcXG4gIDgwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc2hha2UgMC4xcyBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAtLWR5bmFtaWMtd2lkdGg6IGNhbGMoMTAwdncgLyAxMCk7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbmgxOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoLi9iYXR0bGVzaGlwLnN2Zyk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMTIpO1xcclxcbiAgd2lkdGg6IDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWxDb250YWluZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsQ29udGFpbmVyIHAge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcclxcbiAgZm9udC1zaXplOiBjYWxjKDF2dyArIDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZENvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogMXZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBnYXA6IGNhbGModmFyKC0tZHluYW1pYy13aWR0aCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgd2lkdGg6IGNhbGMoMS44dncgKyAxM3B4KTtcXHJcXG4gIGhlaWdodDogY2FsYygxLjh2dyArIDEzcHgpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwgMjUyLCAyNTUpO1xcclxcbiAgYm9yZGVyOiAxcHggcmdiKDQ4LCA0OCwgNDgpIHNvbGlkO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJGbGVldCB1bCxcXHJcXG4uYm90RmxlZXQgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWF4LWhlaWdodDogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmtTaGlwIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyRmxlZXQsXFxyXFxuLmJvdEZsZWV0IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwdmg7XFxyXFxuICBtYXgtd2lkdGg6IDMwdnc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB1cmwoXFxcIi4vYmF0dGxlc2hpcC5zdmdcXFwiKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmNlbGwgcCB7XFxyXFxuICBmb250LXNpemU6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XFxyXFxuICBzaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY2VsbDpub3QoLm9jY3VwaWVkKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuI3BsYXllckdyaWQgLm9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbi50ZW1wLW9jY3VwaWVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xpY2thYmxlOm5vdCgudGVtcC1vY2N1cGllZCkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxyZWFkeUhpdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIuKXjVxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBzY2FsZTogMS41O1xcclxcblxcclxcbiAgY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5vY2N1cGllZC5hbHJlYWR5SGl0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwi4peNXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHNjYWxlOiAxLjU7XFxyXFxuXFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheUFnYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVvdmVyTXNnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgbWF4LWhlaWdodDogNDB2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBhbmltYXRpb246IGZhZGVpbiAxcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0YWN0aW9uIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogZmFkZWluIDAuM3MgZWFzZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCB3aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckNvbnRhaW5lcixcXHJcXG4uYm90Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuYXBwIHtcXHJcXG4gICAgLS1keW5hbWljLXdpZHRoOiBjYWxjKDEwMHZ3IC8gMjApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcXHJcXG4gICAgLnNoaXA6OmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gICAgfVxcclxcbi5wbGF5ZXJGbGVldCB1bCxcXHJcXG4uYm90RmxlZXQgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDh2aDtcXHJcXG59XFxyXFxuICAucGxheWVyQ29udGFpbmVyLFxcclxcbiAgLmJvdENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMHZ3O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcXHJcXG4gIH1cXHJcXG4gICNpbmZvIHtcXHJcXG4gICAgbWF4LWhlaWdodDogOHZoO1xcclxcbiAgfVxcclxcbiAgLmNlbGwge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdyaWQge1xcclxcbiAgICBoZWlnaHQ6IDM1dmg7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgfVxcclxcbiAgLmdyaWRDb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICB9XFxyXFxuICAubGFiZWxDb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnBsYXllckxhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDQwdmg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLmJvdExhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwdmg7XFxyXFxuICAgIGxlZnQ6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR3JpZCgpIHtcclxuICAgIGNvbnN0IHNxdWFyZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlID0ge1xyXG4gICAgICAgICAgICBhbHJlYWR5SGl0OiBmYWxzZSxcclxuICAgICAgICAgICAgb2NjdXBpZWQ6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3F1YXJlcy5wdXNoKHNxdWFyZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBzcXVhcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lYm9hcmQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdyaWQ6IGdlbmVyYXRlR3JpZCgpLFxyXG5cclxuICAgICAgICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcclxuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZFtjb29yZGluYXRlXTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGFscmVhZHlIaXQsIHJldHVybjpcclxuICAgICAgICAgICAgaWYgKHNxdWFyZS5hbHJlYWR5SGl0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc3F1YXJlLmFscmVhZHlIaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gJ29jY3VwaWVkJyByZWZlcnMgdG8gYSBzaGlwLlxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLm9jY3VwaWVkLnNoaXBIaXQoKVxyXG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZS5vY2N1cGllZC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVuZGVyIGhvb2suLi5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSBzaGlwIGhhcyBiZWVuIHN1bmshJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGxhY2VTaGlwKHNoaXAsIC4uLmNvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmQgPT4gXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbY29vcmRdLm9jY3VwaWVkID0gc2hpcClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaGVja0FsbFN1bmsoKSB7XHJcbiAgICAgICAgICAgIC8vZGVmYXVsdCB0byBnYW1lb3ZlciAtIGNoZWNrIGlmIG9uZ29pbmcuXHJcbiAgICAgICAgICAgIGxldCBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdyaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm9jY3VwaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYWxyZWFkeUhpdCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrU2hpcFN1bmsoZmxlZXQpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoZWNraW5nJylcclxuICAgICAgICAvLyAgICAgZmxlZXQuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHNoaXApXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgdGhpc1NoaXAgPSBzaGlwO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3Qgc3VuayA9IHRoaXMuZ3JpZC5maWx0ZXIoc3F1YXJlID0+IHNxdWFyZS5hbHJlYWR5SGl0ICYmIHNxdWFyZS5zaGlwID09PSB0aGlzU2hpcClcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHN1bmspO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZDtcclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKHNpemUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBoaXRzOiAwLFxyXG4gICAgICAgIHN1bms6IGZhbHNlLFxyXG5cclxuICAgICAgICBzaGlwSGl0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmhpdHMrK1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGlzU3VuaygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA9PSB0aGlzLmhpdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VuaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBwbGFjZVNoaXBzLCByZW5kZXJHYW1lLCBwbGFjZUF0dGFjaywgcmVuZGVyR2FtZU92ZXIsIHJlbmRlclN0YXR1cywgZGlzYWJsZVBsYXkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuXHJcblxyXG5cclxubGV0IHJlY29uLCByZWNvbjIsIGJvdEZsZWV0LCBwbGF5ZXJGbGVldCwgYm90LCB5b3U7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbWUoKSB7XHJcbiAgICBsZXQgZ2FtZW92ZXJGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgaW5zdGFudGlhdGVPYmplY3RzKCk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWwoKSB7XHJcblxyXG4gICAgYm90LmF1dG9QbGFjZSguLi5ib3RGbGVldClcclxuXHJcbiAgICByZW5kZXJHYW1lKGJvdCwgeW91KTtcclxuXHJcbiAgICByZW5kZXJTdGF0dXMoJ1BsYXllciwnLCAncGxhY2UgeW91ciBiYXR0bGVzaGlwcycpXHJcblxyXG4gICAgcGxhY2VTaGlwcyhwbGF5ZXJGbGVldCwgeW91Lm93bkJvYXJkLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKTtcclxuICAgICAgICByZW5kZXJHYW1lKGJvdCwgeW91KTtcclxuICAgICAgICByZW5kZXJTdGF0dXMoJ1lvdScsICdwbGFjZWQgeW91ciBzaGlwcycpXHJcbiAgICAgICAgaWYgKGdhbWVMb29wKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5cclxubGV0IHR1cm4gPSAnYidcclxuXHJcbiBhc3luYyBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcclxuICAgIHdoaWxlICghZ2FtZW92ZXJGbGFnKSB7XHJcbiAgICAgICAgaWYgKHR1cm4gPT0gJ3AnKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHBsYXllck1vdmUoKTtcclxuICAgICAgICAgICAgdHVybiA9ICdiJ1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHVybiA9PSAnYicpIHtcclxuICAgICAgICAgICAgYXdhaXQgYm90TW92ZSgpO1xyXG4gICAgICAgICAgICB0dXJuID0gJ3AnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dhbWVvdmVyJylcclxuICAgICAgICAgICAgZ2FtZW92ZXJGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyTW92ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgYXR0YWNrJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHBsYWNlQXR0YWNrKGJvdCwgKCkgPT4ge1xyXG4gICAgICAgIHJlbmRlckdhbWUoYm90LCB5b3UpO1xyXG4gICAgICAgIGlmIChib3Qub3duQm9hcmQuY2hlY2tBbGxTdW5rKCkpIHtcclxuICAgICAgICAgIGdhbWVvdmVyRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICBnYW1lT3ZlcigneW91Jyk7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVuZGVyU3RhdHVzKCdZb3UnLCAnYXR0YWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vL1xyXG5mdW5jdGlvbiBib3RNb3ZlKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYm90LmF1dG9Nb3ZlKHlvdS5vd25Cb2FyZCk7XHJcbiAgICAgICAgcmVuZGVyR2FtZShib3QsIHlvdSk7XHJcbiAgICAgICAgaWYgKHlvdS5vd25Cb2FyZC5jaGVja0FsbFN1bmsoKSkge1xyXG4gICAgICAgICAgICBnYW1lb3ZlckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBnYW1lT3ZlcignYm90Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib3Rtb3ZlIHJlc29sdmVkIGZhbHNlJylcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVuZGVyU3RhdHVzKCdCb3QnLCAnYXR0YWNrZWQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvdG1vdmUgcmVzb2x2ZWQgdHJ1ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdhbWVPdmVyKGRpc3BsYXkpIHtcclxuICAgIHJlbmRlckdhbWVPdmVyKGRpc3BsYXkpO1xyXG59XHJcblxyXG5cclxuaW5pdGlhbCgpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbnRpYXRlT2JqZWN0cygpIHtcclxuXHJcbiAgICBib3QgPSBwbGF5ZXIoKTtcclxuICAgIHlvdSA9IHBsYXllcigpO1xyXG5cclxuICAgIGxldCBbcmVjb24sIGNydWlzZXIsIGRlc3Ryb3llciwgdGFua2VyXSA9IFtcclxuICAgICAgICBjcmVhdGVTaGlwKDIpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoMyksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg0KSxcclxuICAgICAgICBjcmVhdGVTaGlwKDUpXHJcbiAgICAgIF07XHJcbiAgICBcclxuICAgICAgbGV0IFtyZWNvbjIsIGNydWlzZXIyLCBkZXN0cm95ZXIyLCB0YW5rZXIyXSA9IFtcclxuICAgICAgICBjcmVhdGVTaGlwKDIpLFxyXG4gICAgICAgIGNyZWF0ZVNoaXAoMyksXHJcbiAgICAgICAgY3JlYXRlU2hpcCg0KSxcclxuICAgICAgICBjcmVhdGVTaGlwKDUpXHJcbiAgICAgIF07XHJcbiAgICAgIFxyXG4gICAgYm90RmxlZXQgPSBbcmVjb24sIGNydWlzZXIsIGRlc3Ryb3llciwgdGFua2VyXVxyXG4gICAgcGxheWVyRmxlZXQgPSBbcmVjb24yLCBjcnVpc2VyMiwgZGVzdHJveWVyMiwgdGFua2VyMl1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9iamVjdHMoKSB7XHJcbiAgICByZWNvbiA9IG51bGxcclxuICAgIHJlY29uMiA9IG51bGxcclxuICAgIGJvdEZsZWV0ID0gbnVsbFxyXG4gICAgcGxheWVyRmxlZXQgPSBudWxsXHJcbiAgICBib3QgPSBudWxsXHJcbiAgICB5b3UgPSBudWxsXHJcbn1cclxuIiwiXHJcblxyXG4vLyB0YWtlcyBpbiBhbiBpbnRlZ2VyIG5cclxuLy8gZ2VuZXJhdGVzIG4gJ2Fkam9pbmluZycgc3BhY2VzXHJcbi8vIGVnLiAyLCAzLCA0IChob3Jpem9udGFsKSB8fCAzLCAxMywgMjMgKHZlcnRpY2FsKVxyXG5cclxuZnVuY3Rpb24gZ2V0SG9yaXpvbnRhbChzaGlwU2l6ZSkge1xyXG4gICAgbGV0IGZpcnN0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICBsZXQgc2Vjb25kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLXNoaXBTaXplKSlcclxuXHJcbiAgICByZXR1cm4gTnVtYmVyKGZpcnN0LnRvU3RyaW5nKCkgKyBzZWNvbmQudG9TdHJpbmcoKSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExlZ2FsUGxhY2Uoc2hpcFNpemUpIHtcclxuICAgIGxldCBob3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcclxuXHJcbiAgICBsZXQgcmFuZ2UgPSAoOTktc2hpcFNpemUqMTApIC0gMCArIDFcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSlcclxuICAgIGxldCBib2F0U3RhcnQgPSBob3Jpem9udGFsID8gZ2V0SG9yaXpvbnRhbChzaGlwU2l6ZSkgOlxyXG4gICAgICAgIDAgKyByYW5kb207XHJcbiAgICBsZXQgcmVzdWx0ID0gW2JvYXRTdGFydF1cclxuXHJcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNpemUgLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goKytib2F0U3RhcnQpXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBTaXplIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvYXRTdGFydCs9MTApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcblxyXG4vLyB0d28gcmFuZG9tIG51bWJlcnMgLSAxIGJldHdlZW4gMC05LCAxIGJldHdlZW4gMC05LXNoaXBzaXplXHJcbi8vIGNvbWJpbmUgc3RyaW5nLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVnYWxQbGFjZW1lbnQoZ3JpZCwgY29vcmRzKSB7XHJcblxyXG4gICAgbGV0IHN0YXR1cyA9IGNoZWNrTGFzdERpZ2l0KGNvb3Jkcyk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBmb3IgKGxldCBjb29yZCBvZiBjb29yZHMpIHtcclxuICAgICAgICAgICAgaWYgKGdyaWQuZ3JpZFtjb29yZF0ub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGF0IHNwYWNlIGlzIG9jY3VwaWVkJylcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTGFzdERpZ2l0KGFycmF5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhcnJheVtpXTtcclxuICAgICAgY29uc3QgcHJldmlvdXMgPSBhcnJheVtpIC0gMV07XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ2V0TGFzdERpZ2l0KGN1cnJlbnQpIDw9IGdldExhc3REaWdpdChwcmV2aW91cykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldExhc3REaWdpdChudW1iZXIpIHtcclxuICAgIHJldHVybiBudW1iZXIgJSAxMDtcclxuICB9XHJcbiAgIiwiXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcblxyXG5nYW1lKCk7IiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcclxuaW1wb3J0IHsgZ2V0TGVnYWxQbGFjZSB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuXHJcbmZ1bmN0aW9uIHBsYXllcihvd25Cb2FyZCA9IGdhbWVib2FyZCgpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG93bkJvYXJkLFxyXG4gICAgXHJcbiAgICAgICAgYXV0b01vdmUoYm9hcmQpIHtcclxuICAgICAgICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21Nb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICAgICAgbGV0IGF0dGVtcHRlZE1vdmVzID0gW107XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoIW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Nb3ZlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdGVkTW92ZXMucHVzaChyYW5kb21Nb3ZlKTtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21Nb3ZlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmV0dXJuaW5nIHJhbmRvbU1vdmUgY291bGQgYmUgdXNlZnVsIGZvciBkb21cclxuICAgICAgICAgICAgcmV0dXJuIFtyYW5kb21Nb3ZlLCBhdHRlbXB0ZWRNb3Zlc107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9mb3IgYm90cyBvbmx5Li4uXHJcbiAgICAgICAgLy9wbGF5ZXJzIHdpbGwgdXNlIGdhbWVib2FyZCBvYmplY3QncyAncGxhY2VTaGlwIG1ldGhvZCdcclxuICAgICAgICBhdXRvUGxhY2UoLi4uc2hpcHMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2hpcCBvZiBzaGlwcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkcztcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkcyA9IGdldExlZ2FsUGxhY2Uoc2hpcC5zaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlOyAvLyBGbGFnIHRvIHRyYWNrIGlmIHNwYWNlIG9jY3VwaWVkXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb29yZCBvZiBjb29yZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3duQm9hcmQuZ3JpZFtjb29yZF0ub2NjdXBpZWQpIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7IC8vIFNldCB0aGUgZmxhZyB0byB0cnVlIGlmIGNvbmRpdGlvbiBpcyBzYXRpc2ZpZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBFeGl0IHRoZSBsb29wIGVhcmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm93bkJvYXJkLnBsYWNlU2hpcChzaGlwLCAuLi5jb29yZHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7IiwiaW1wb3J0IHsgaXNMZWdhbFBsYWNlbWVudCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgcmVzdGFydCB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcblxyXG5sZXQgRE9NQm90R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3RHcmlkJyk7XHJcbmxldCBET01QbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllckdyaWQnKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZShib3QsIHBsYXllcikge1xyXG5cclxuICAgIC8vZGVsZXRlIGFsbCBleGlzdGluZyBjZWxsczpcclxuXHJcblxyXG4gICAgLy9yZW5kZXIgJ2hpdHMnIG9uIGJvdGggYm9hcmRzXHJcbiAgICAvL3JlbmRlciBwbGF5ZXIgb2NjdXBpZWQgcG9zaXRpb25zXHJcbiAgICAvL3JlbmRlciBlbmVteSBzaGlwcyBvbmNlIHN1bmtcclxuXHJcblxyXG4gICAgbGV0IERPTUJvdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90R3JpZCcpO1xyXG4gICAgbGV0IERPTVBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyR3JpZCcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhbGxDaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuXHJcbiAgICBhbGxDaGlsZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgbGV0IGJvdENvdW50ID0gMDtcclxuICAgIGxldCBwbGF5ZXJDb3VudCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgY2VsbCBvZiBib3Qub3duQm9hcmQuZ3JpZCkge1xyXG4gICAgICAgIGxldCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJywgYm90Q291bnQpXHJcbiAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBib3RDb3VudCArIDEwMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGJvdENvdW50KytcclxuXHJcbiAgICAgICAgaWYgKGNlbGwub2NjdXBpZWQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChjZWxsLmFscmVhZHlIaXQpIHtcclxuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdhbHJlYWR5SGl0JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjZWxsLm9jY3VwaWVkLnN1bmspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2VsbCk7XHJcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NQm90R3JpZC5hcHBlbmQoY2VsbERpdik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY2VsbCBvZiBwbGF5ZXIub3duQm9hcmQuZ3JpZCkge1xyXG4gICAgICAgIGxldCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJywgcGxheWVyQ291bnQpXHJcbiAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBwbGF5ZXJDb3VudClcclxuXHJcbiAgICAgICAgcGxheWVyQ291bnQrK1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5vY2N1cGllZCkge1xyXG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNlbGwuYWxyZWFkeUhpdCkge1xyXG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2FscmVhZHlIaXQnKVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBET01QbGF5ZXJHcmlkLmFwcGVuZChjZWxsRGl2KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGbGVldChib3Qub3duQm9hcmQuZ3JpZCwgJy5ib3QnKTtcclxuICAgIHJlbmRlckZsZWV0KHBsYXllci5vd25Cb2FyZC5ncmlkLCAnLnBsYXllcicpO1xyXG5cclxuICAgIC8vIGxldCBzdW5rU2hpcHMgPSBib3Qub3duQm9hcmQuZ3JpZC5maWx0ZXIoKHNxdWFyZSA9PiBzcXVhcmUub2NjdXBpZWQuc3VuayA9PT0gdHJ1ZSkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdW5rU2hpcHMpO1xyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gZm9yIHNoaXAgcGxhY2VtZW50IC0gdXNlci5cclxuLy8gdXNlcnMgY2FuIGhvdmVyIHdpdGggbW91c2Ugb3ZlciBib2FyZCBhbmQgY2xpY2sgdG8gcGxhY2Ugc2hpcFxyXG4vLyAoIG1vYmlsZSB1c2VycyA/KVxyXG4vLyBpZiBhIHZhbGlkIHBvc2l0aW9uIGlzIHNlbGVjdGVkIHRoZSBzaGlwIHdpbGwgc25hcCBpbnRvIHBsYWNlXHJcbi8vIG9uY2UgdGhlIGZsZWV0IGlzIHBsYWNlZCwgcGxhY2VtZW50IGZ1bmN0aW9uYWxpdHkgaXMgZGlzYWJsZWQgYW5kXHJcbiAgICAvLyB0aGUgYm9hcmQgd2lsbCByZS1yZW5kZXIgdmlhIHRoZSBjYWxsYmFjay4gXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVNoaXBzKGZsZWV0LCBncmlkLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGZsZWV0UmVtYWluaW5nID0gZmxlZXQ7XHJcbiAgICBsZXQgRE9NUGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJHcmlkJyk7XHJcbiAgXHJcbiAgICBsZXQgY3VycmVudFNoaXAgPSBmbGVldFJlbWFpbmluZ1swXTtcclxuICAgIGxldCBzZWxlY3RlZFNwYWNlcyA9IFtdO1xyXG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudHMgPSBbXTtcclxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBET01QbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG5cclxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKSlcclxuICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhldmVudCkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRTcGFjZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpZiAoaXNMZWdhbFBsYWNlbWVudChncmlkLCBzZWxlY3RlZFNwYWNlcykpIHtcclxuICAgICAgICBncmlkLnBsYWNlU2hpcChmbGVldFJlbWFpbmluZy5zaGlmdCgpLCAuLi5zZWxlY3RlZFNwYWNlcyk7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RlbXAtb2NjdXBpZWQnKSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGZsZWV0UmVtYWluaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjdXJyZW50U2hpcCA9IGZsZWV0UmVtYWluaW5nWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZsZWV0IHBsYWNlbWVudCBpcyBjb21wbGV0ZSwgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgaW52b2tlIHRoZSBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNlbGxNb3VzZU92ZXIoZXZlbnQpIHtcclxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKSk7XHJcbiAgXHJcbiAgICAgIHNlbGVjdGVkU3BhY2VzID0gW107XHJcbiAgICAgIHNlbGVjdGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcclxuICBcclxuICAgICAgc2VsZWN0ZWRTcGFjZXMucHVzaChzZWxlY3RlZCk7XHJcbiAgXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFNoaXAuc2l6ZSAtIDE7IGorKykge1xyXG4gICAgICAgIHNlbGVjdGVkU3BhY2VzLnB1c2goc2VsZWN0ZWRTcGFjZXNbal0gKyAxKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBmb3IgKGxldCBpIG9mIHNlbGVjdGVkU3BhY2VzKSB7XHJcbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50cy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2l9J11gKSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZWxlY3RlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb2ZmIGdyaWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIERPTVBsYXllckdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ2VsbE1vdXNlT3Zlcik7XHJcbiAgICAgIERPTVBsYXllckdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgRE9NUGxheWVyR3JpZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVDZWxsTW91c2VPdmVyKTtcclxuICAgIERPTVBsYXllckdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spO1xyXG4gIH1cclxuICBcclxuICAvL3Byb3ZpZGVzIHZpc3VhbCBjdWVzIGZvciBwbGF5ZXIgYXR0YWNrc1xyXG4gIGV4cG9ydCBmdW5jdGlvbiBwbGFjZUF0dGFjayhib3QsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3BsYWNlIGF0dGFjayBmdW5jdGlvbiBjYWxsZWQnKVxyXG5cclxuICAgIGxldCBzZWxlY3RlZDtcclxuICAgIGxldCBET01Cb3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdEdyaWQnKTtcclxuICAgIGxldCBib3RDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNib3RHcmlkIC5jZWxsJyk7XHJcblxyXG4gICAgYm90Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FscmVhZHlIaXQnKSkge1xyXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjbGlja2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZWNlaXZlQXR0YWNrKCkge1xyXG4gICAgICAgIGlmIChib3Qub3duQm9hcmQucmVjZWl2ZUF0dGFjayhzZWxlY3RlZCkpIHtcclxuICAgICAgICAgICAgZGV0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsTW91c2VPdmVyKGV2ZW50KSB7XHJcbiAgICAgICAgYm90Q2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJykpO1xyXG4gICAgXHJcbiAgICAgICAgc2VsZWN0ZWQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpIC0gMTAwKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF0dGFjaExpc3RlbmVycygpIHtcclxuICAgICAgICBET01Cb3RHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpXHJcbiAgICAgICAgRE9NQm90R3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlY2VpdmVBdHRhY2spICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRldGFjaExpc3RlbmVycygpIHtcclxuICAgICAgICBET01Cb3RHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUNlbGxNb3VzZU92ZXIpXHJcbiAgICAgICAgRE9NQm90R3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlY2VpdmVBdHRhY2spICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGV0YWNoTGlzdGVuZXJzKCk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2F0Y2ggZGV0YWNoJylcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgYXR0YWNoTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRhY2hMaXN0ZW5lcnM6IGRldGFjaExpc3RlbmVyc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyUmVzdGFydCgpIHtcclxuICAgIGxldCBzdGF0dXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XHJcbiAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXlBZ2FpbicpO1xyXG4gICAgcGxheUFnYWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB3aGlsZSAoc3RhdHVzQm94LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBzdGF0dXNCb3gucmVtb3ZlQ2hpbGQoc3RhdHVzQm94LmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgLy9yZXN0YXJ0KCk7XHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgfVxyXG5cclxuICAvLyBzaG91bGQgY2FsbCByZXN0YXJ0IGZyb20gZ2FtZS4gVGhpcyBtb2R1bGUgc2hvdWxkIHNpbXBseSByZXR1cm4gdHJ1ZSB3aGVuIGV2ZW50IGlzIHRyaWdnZXJlZC5cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWVPdmVyKHdpbm5lcikge1xyXG4gICAgbGV0IHN0YXR1c01zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lb3Zlck1zZycpO1xyXG4gICAgbGV0IHJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheUFnYWluIGJ1dHRvbicpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxheUFnYWluQ2xpY2soKSB7XHJcbiAgICAgICAgdHJpZ2dlclJlc3RhcnQoKVxyXG4gICAgfTtcclxuICAgIHJlc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW5DbGljayk7XHJcblxyXG4gICAgXHJcbiAgICBzdGF0dXNNc2cudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyLlxcbiAke3dpbm5lcn0gd29uLmAudG9VcHBlckNhc2UoKVxyXG5cclxuICAgIHJlc3RhcnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBzdGF0dXNNc2cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgcmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXlBZ2FpbkNsaWNrKVxyXG4gIH1cclxuXHJcblxyXG4gIC8vdG8gaW5kaWNhdGUgd2hhdCdzIGhhcHBlbmluZyBpbiBnYW1lLlxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdGF0dXMod2hvLCB3aGF0KXtcclxuICAgIGxldCBtc2cgPSBgXFxuICR7d2hvfSAke3doYXR9LmBcclxuICAgIGxldCBsYXRlc3RBY3Rpb25Nc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF0ZXN0QWN0aW9uJyk7XHJcbiAgICBsYXRlc3RBY3Rpb25Nc2cudGV4dENvbnRlbnQgPSBtc2c7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8vRm9yIGZ1bi5cclxuLy8gICBmdW5jdGlvbiBzaGFrZSguLi5lbGVtZW50cykge1xyXG4vLyAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpKTtcclxuLy8gICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hha2UnKSk7XHJcblxyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpKTtcclxuLy8gICAgICAgfSwgMjAwKTtcclxuLy8gICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckZsZWV0ID0gKGZsZWV0LCB3aG8pID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwod2hvKTtcclxuICAgIGxldCBvY2N1cGllZENlbGxzID0gZmxlZXQuZmlsdGVyKGNlbGwgPT4gY2VsbC5vY2N1cGllZCk7XHJcbiAgICBjb25zdCB1bmlxdWVTaXplc1NldCA9IG5ldyBTZXQoKTtcclxuICAgIG9jY3VwaWVkQ2VsbHMuZmlsdGVyKGNlbGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSBjZWxsLm9jY3VwaWVkLnNpemU7XHJcbiAgICAgICAgaWYgKCF1bmlxdWVTaXplc1NldC5oYXMoc2l6ZSkpIHtcclxuICAgICAgICAgICAgdW5pcXVlU2l6ZXNTZXQuYWRkKGNlbGwub2NjdXBpZWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh1bmlxdWVTaXplc1NldClcclxuICAgIHVuaXF1ZVNpemVzU2V0LmZvckVhY2goKHNoaXAgPT4ge1xyXG4gICAgICAgIGlmIChzaGlwLnN1bmsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyW3NoaXAuc2l6ZSAtIDJdLmNsYXNzTGlzdC5hZGQoJ3N1bmtTaGlwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpXHJcbn1cclxuXHJcblxyXG4gIC8vYmFuZGFpZCBcclxuICBleHBvcnQgZnVuY3Rpb24gZGlzYWJsZVBsYXkoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGlzYWJsZSBwbGF5Jyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIERPTUJvdEdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlQ2VsbE1vdXNlT3ZlcilcclxuICAgICAgICBET01Cb3RHcmlkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVjZWl2ZUF0dGFjaylcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==