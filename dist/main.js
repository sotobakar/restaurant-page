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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Restaurant Page Project</title>\\n</head>\\n<body class=\\\"bg-cover\\\">\\n  <div id=\\\"content\\\" class=\\\"bg-white bg-opacity-20 min-h-screen\\\">\\n\\n  </div>\\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://restaurant-page/./src/index.html?");

/***/ }),

/***/ "./src/tailwind.css":
/*!**************************!*\
  !*** ./src/tailwind.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/tailwind.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tailwind_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tailwind.css */ \"./src/tailwind.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _pages_first_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/first-load */ \"./src/pages/first-load.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n\n\n\n\n\n\n\nconst renderPages = (name) => {\n  const pages = {\n    \"Home\": _pages_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"About\": _pages_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"Menu\": _pages_menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }\n  document.getElementById('page').innerHTML = pages[name];\n}\n\nconst checkPage = () => {\n  const buttons = document.getElementById('navbar').children;\n  for (let i = 0; i < buttons.length; i++) {\n    if(buttons[i].classList.contains('button-active')) {\n      return buttons[i].textContent;\n    }\n  }\n  return \"Home\";\n}\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  ;(0,_pages_first_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(renderPages);\n  let name = checkPage();\n  renderPages(name);\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apron_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apron.png */ \"./src/apron.png\");\n\nconst About = `\n<div class=\"flex flex-row gap-x-4\">\n<img src=\"${_apron_png__WEBPACK_IMPORTED_MODULE_0__}\" class=\"w-1/2 h-auto\" alt=\"Meat Icon\">\n<div class=\"self-center rounded-lg bg-red-800 w-1/2 px-4 py-6 font-semibold text-2xl\">\n  <p class=\"text-red-200\">This website is for the completion of Restaurant Page Project.</p>\n</div>\n</div>\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/first-load.js":
/*!*********************************!*\
  !*** ./src/pages/first-load.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstLoadPage = (renderPages) => {\n  document.getElementById('content').innerHTML = `\n  <div class=\"header h-32 py-2 bg-rose-600 flex flex-col items-center\">\n    <h1 class=\"flex-shrink-0 text-center text-4xl font-bold text-red-200 m-auto\">Daging</h1>\n    <nav id=\"navbar\" class=\"flex flex-row gap-x-12 items-baseline\">\n      <button data-name=\"Home\" class=\"button button-active\">Home</button>\n      <button data-name=\"Menu\" class=\"button\">Menu</button>\n      <button data-name=\"About\" class=\"button\">About</button>\n    </nav>\n  </div>\n  <div class=\"mt-6 container mx-auto\">\n    <div id=\"page\" class=\"max-w-screen-md mx-auto\">\n    </div>\n  </div>\n  `\n\n  const buttons = document.getElementById('navbar').children;\n  for (let i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener('click', (e) => {\n      renderPages(e.target.textContent);\n      changeActiveButton(e.target);\n    })\n  }\n  \n  const changeActiveButton = (targetButton) => {\n    const activeButton = document.querySelector('.button-active');\n    if(activeButton) {\n      activeButton.classList.remove('button-active');\n    }\n\n    targetButton.classList.add('button-active');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/first-load.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _price_label_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../price-label.png */ \"./src/price-label.png\");\n\nconst Home = `\n<div class=\"flex flex-row gap-x-4\">\n<img src=\"${_price_label_png__WEBPACK_IMPORTED_MODULE_0__}\" class=\"w-1/2 h-auto\" alt=\"Meat Icon\">\n<div class=\"self-center rounded-lg bg-red-800 w-1/2 px-4 py-6 font-semibold text-2xl\">\n  <p class=\"text-red-200\">Meat on discount for just $17, order now before it runs out of stock.</p>\n  <button class=\"mt-6 px-4 py-2 rounded-lg shadow-md bg-yellow-300 text-gray-900\">Order Now</button>\n</div>\n</div>\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _refrigerator_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../refrigerator.png */ \"./src/refrigerator.png\");\n/* harmony import */ var _assets_images_pork_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/pork.png */ \"./src/assets/images/pork.png\");\n/* harmony import */ var _assets_images_sheep_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/sheep.png */ \"./src/assets/images/sheep.png\");\n/* harmony import */ var _assets_images_cow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/cow.png */ \"./src/assets/images/cow.png\");\n\n\n\n\n\nconst Menu = `\n<div class=\"flex flex-row gap-x-4\">\n<img src=\"${_refrigerator_png__WEBPACK_IMPORTED_MODULE_0__}\" class=\"w-1/2 h-auto\" alt=\"Meat Icon\">\n<div class=\"self-center rounded-lg bg-red-800 w-1/2 px-4 py-6 font-semibold text-2xl text-red-200\">\n  <p>Meat Menu (per 2 kilograms)</p>\n  <div class=\"mt-4 flex flex-col gap-y-4\">\n    <div class=\"flex flex-row items-center\">\n      <img class=\"h-16 w-auto\" src=\"${_assets_images_pork_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Pork Meat\" />\n      <p class=\"ml-4\">Pork Meat</p>\n      <p class=\"ml-auto\">$17</p>    \n    </div>\n    <div class=\"flex flex-row items-center\">\n      <img class=\"h-16 w-auto\" src=\"${_assets_images_cow_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Cow Meat\" />\n      <p class=\"ml-4\">Cow Meat</p>\n      <p class=\"ml-auto\">$41</p>    \n    </div>\n    <div class=\"flex flex-row items-center\">\n      <img class=\"h-16 w-auto\" src=\"${_assets_images_sheep_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Sheeo Meat\" />\n      <p class=\"ml-4\">Sheep Meat</p>\n      <p class=\"ml-auto\">$25</p>    \n    </div>\n  </div>\n</div>\n</div>\n`\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/apron.png":
/*!***********************!*\
  !*** ./src/apron.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89576880b07e79a85f72.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/apron.png?");

/***/ }),

/***/ "./src/assets/images/cow.png":
/*!***********************************!*\
  !*** ./src/assets/images/cow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75645a4c64b0b846ba10.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/cow.png?");

/***/ }),

/***/ "./src/assets/images/pork.png":
/*!************************************!*\
  !*** ./src/assets/images/pork.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e73eb9ed840992f1e62.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/pork.png?");

/***/ }),

/***/ "./src/assets/images/sheep.png":
/*!*************************************!*\
  !*** ./src/assets/images/sheep.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"78bd287f5bd0362c45b2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/sheep.png?");

/***/ }),

/***/ "./src/price-label.png":
/*!*****************************!*\
  !*** ./src/price-label.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"949bcd4ccc34271b87f2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/price-label.png?");

/***/ }),

/***/ "./src/refrigerator.png":
/*!******************************!*\
  !*** ./src/refrigerator.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"231a9d56c2234d843935.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/refrigerator.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;