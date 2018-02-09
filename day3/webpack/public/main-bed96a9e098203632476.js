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

throw new Error("Module build failed: SyntaxError: D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\index.js: Unexpected token (4:16)\n\n  2 | const ReactDOM = require(\"react-dom\");\n  3 | \n> 4 | ReactDOM.render(<div>123</div>, document.querySelector(\"#app\"))\n    |                 ^\n    at Parser.raise (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:840:15)\n    at Parser.unexpected (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2236:16)\n    at Parser.parseExprAtom (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:3368:20)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2996:21)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2974:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2879:21)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2849:21)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2805:21)\n    at Parser.parseExprListItem (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4072:18)\n    at Parser.parseCallExpressionArguments (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:3158:22)\n    at Parser.parseSubscript (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:3092:32)\n    at Parser.parseSubscripts (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:3015:19)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:3006:17)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2974:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2879:21)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2849:21)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2805:21)\n    at Parser.parseExpression (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:2756:21)\n    at Parser.parseStatementContent (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4346:21)\n    at Parser.parseStatement (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4230:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4788:23)\n    at Parser.parseBlockBody (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4774:10)\n    at Parser.parseTopLevel (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:4198:10)\n    at Parser.parse (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:5637:17)\n    at parse (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_babylon@7.0.0-beta.38@babylon\\lib\\index.js:10696:38)\n    at parser (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transformation\\normalize-file.js:106:33)\n    at normalizeFile (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transformation\\normalize-file.js:53:11)\n    at runSync (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transformation\\index.js:34:41)\n    at transformSync (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transform-sync.js:15:38)\n    at Object.transform (D:\\xampp\\htdocs\\cq1701\\react\\day3\\webpack\\node_modules\\_@babel_core@7.0.0-beta.38@@babel\\core\\lib\\transform.js:20:65)");

/***/ })
/******/ ]);