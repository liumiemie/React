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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module '@babel/preset-react' from 'D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack'\n    at Function.module.exports [as sync] (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_resolve@1.5.0@resolve\\lib\\sync.js:40:15)\n    at resolveStandardizedName (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\files\\plugins.js:78:29)\n    at resolvePreset (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\files\\plugins.js:31:10)\n    at loadPreset (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\files\\plugins.js:50:18)\n    at createDescriptor (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:135:21)\n    at D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:101:12\n    at Array.map (native)\n    at createDescriptors (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:100:27)\n    at createPresetDescriptors (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:92:10)\n    at D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:78:14\n    at cachedFunction (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\caching.js:40:17)\n    at presets (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-descriptors.js:23:68)\n    at mergeChainOpts (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-chain.js:293:68)\n    at D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-chain.js:246:7\n    at buildRootChain (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\config-chain.js:64:27)\n    at loadConfig (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\config\\index.js:50:53)\n    at transformSync (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transform-sync.js:13:36)\n    at Object.transform (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transform.js:20:65)\n    at transpile (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babel-loader@8.0.0-beta.0@babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babel-loader@8.0.0-beta.0@babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);