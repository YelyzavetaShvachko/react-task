/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/avengers.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/avengers.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/avengers.jpg");

/***/ }),

/***/ "./src/assets/img/background.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/background.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/background.jpg");

/***/ }),

/***/ "./src/assets/img/bohemian-rhapsody.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/bohemian-rhapsody.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/bohemian-rhapsody.jpg");

/***/ }),

/***/ "./src/assets/img/inception.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/inception.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/inception.jpg");

/***/ }),

/***/ "./src/assets/img/kill-bill.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/kill-bill.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/kill-bill.jpg");

/***/ }),

/***/ "./src/assets/img/pulp-fiction.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/pulp-fiction.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/pulp-fiction.jpg");

/***/ }),

/***/ "./src/assets/img/reservoir-dogs.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/reservoir-dogs.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/reservoir-dogs.jpg");

/***/ }),

/***/ "./src/components/AddMovie/index.js":
/*!******************************************!*\
  !*** ./src/components/AddMovie/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.AddMovie, null, "+ ADD MOVIE");
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./src/components/Header/index.js"));

var _MoviesList = _interopRequireDefault(__webpack_require__(/*! ./MoviesList */ "./src/components/MoviesList/index.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer */ "./src/components/Footer/index.js"));

var _ErrorFallback = _interopRequireDefault(__webpack_require__(/*! ./ErrorFallback */ "./src/components/ErrorFallback/index.js"));

var _reactErrorBoundary = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.umd.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  // Use Bomb to check ErrorBoundary
  // function Bomb() {
  //   throw new Error('💥 CABOOM 💥')
  // }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement(_reactErrorBoundary.ErrorBoundary, {
    FallbackComponent: _ErrorFallback["default"]
  }, /*#__PURE__*/_react["default"].createElement(_MoviesList["default"], null)), /*#__PURE__*/_react["default"].createElement(_Footer["default"], null));
}

var _default = App;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Categories/index.js":
/*!********************************************!*\
  !*** ./src/components/Categories/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Category = _interopRequireDefault(__webpack_require__(/*! ../Category */ "./src/components/Category/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var categories = [{
  title: 'ALL',
  styleName: 'category active',
  id: '1'
}, {
  title: 'DOCUMENTARY',
  styleName: 'category',
  id: '2'
}, {
  title: 'COMEDY',
  styleName: 'category',
  id: '3'
}, {
  title: 'HORROR',
  styleName: 'category',
  id: '4'
}, {
  title: 'CRIME',
  styleName: 'category',
  id: '5'
}];

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.CategoriesWrapper, null, categories.map(function (category) {
    return /*#__PURE__*/_react["default"].createElement(_Category["default"], {
      title: category.title,
      styleName: category.styleName,
      key: category.id
    });
  }));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Category/index.js":
/*!******************************************!*\
  !*** ./src/components/Category/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock(_ref) {
  var title = _ref.title,
      styleName = _ref.styleName;
  return /*#__PURE__*/_react["default"].createElement(_styled.Category, {
    className: styleName
  }, /*#__PURE__*/_react["default"].createElement("h3", null, title));
};

StyledBlock.propTypes = {
  title: _propTypes["default"].string.isRequired,
  styleName: _propTypes["default"].string.isRequired
};
var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/ErrorFallback/index.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorFallback/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ErrorFallback = function ErrorFallback() {
  return /*#__PURE__*/_react["default"].createElement(_styled.OoopsText, null, "Ooops, something went wrong... We are doing our best to fix the issue");
};

var _default = ErrorFallback;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/FindMovie/index.js":
/*!*******************************************!*\
  !*** ./src/components/FindMovie/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "find-movie-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_styled.Title, null, "FIND YOUR MOVIE"), /*#__PURE__*/_react["default"].createElement(_styled.SearchForm, null, /*#__PURE__*/_react["default"].createElement(_styled.SearchInput, {
    placeholder: "What do you want to watch?"
  }), /*#__PURE__*/_react["default"].createElement(_styled.SearchBtn, null, "SEARCH")));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
  }));
};

Logo.defaultProps = {
  viewBox: "0 0 111 30",
  className: "svg-icon svg-icon-netflix-logo"
};

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.Footer, null, /*#__PURE__*/_react["default"].createElement(Logo, null));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

var _AddMovie = _interopRequireDefault(__webpack_require__(/*! ../AddMovie */ "./src/components/AddMovie/index.js"));

var _FindMovie = _interopRequireDefault(__webpack_require__(/*! ../FindMovie */ "./src/components/FindMovie/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"
  }));
};

Logo.defaultProps = {
  viewBox: "0 0 111 30",
  className: "svg-icon svg-icon-netflix-logo"
};

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styled.Background, null), /*#__PURE__*/_react["default"].createElement("header", {
    className: "header container"
  }, /*#__PURE__*/_react["default"].createElement(Logo, null), /*#__PURE__*/_react["default"].createElement(_AddMovie["default"], null), /*#__PURE__*/_react["default"].createElement(_FindMovie["default"], null)));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/MovieCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/MovieCard/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock(_ref) {
  var title = _ref.title,
      year = _ref.year,
      genre = _ref.genre,
      photo = _ref.photo;
  return /*#__PURE__*/_react["default"].createElement(_styled.MovieCard, null, /*#__PURE__*/_react["default"].createElement(_styled.Image, {
    src: photo
  }), /*#__PURE__*/_react["default"].createElement(_styled.DescriptionWrapper, null, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement(_styled.Genre, null, genre), /*#__PURE__*/_react["default"].createElement(_styled.Year, null, year)));
};

StyledBlock.propTypes = {
  title: _propTypes["default"].string.isRequired,
  year: _propTypes["default"].string.isRequired,
  genre: _propTypes["default"].string.isRequired,
  photo: _propTypes["default"].string.isRequired
};
var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/MoviesList/index.js":
/*!********************************************!*\
  !*** ./src/components/MoviesList/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

var _MovieCard = _interopRequireDefault(__webpack_require__(/*! ../MovieCard */ "./src/components/MovieCard/index.js"));

var _Categories = _interopRequireDefault(__webpack_require__(/*! ../Categories */ "./src/components/Categories/index.js"));

var _SearchResults = _interopRequireDefault(__webpack_require__(/*! ../SearchResults */ "./src/components/SearchResults/index.js"));

var _Sorting = _interopRequireDefault(__webpack_require__(/*! ../Sorting */ "./src/components/Sorting/index.js"));

var _avengers = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/avengers.jpg */ "./src/assets/img/avengers.jpg"));

var _bohemianRhapsody = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/bohemian-rhapsody.jpg */ "./src/assets/img/bohemian-rhapsody.jpg"));

var _inception = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/inception.jpg */ "./src/assets/img/inception.jpg"));

var _killBill = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/kill-bill.jpg */ "./src/assets/img/kill-bill.jpg"));

var _pulpFiction = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/pulp-fiction.jpg */ "./src/assets/img/pulp-fiction.jpg"));

var _reservoirDogs = _interopRequireDefault(__webpack_require__(/*! ../../assets/img/reservoir-dogs.jpg */ "./src/assets/img/reservoir-dogs.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// images
var movies = [{
  title: 'Pulp Fiction',
  genre: 'Action & Adventure',
  year: '2004',
  photo: _pulpFiction["default"],
  id: '1'
}, {
  title: 'Bohemian Rhapsody',
  genre: 'Drama, Biography, Music',
  year: '2003',
  photo: _bohemianRhapsody["default"],
  id: '2'
}, {
  title: 'Kill Bill: Vol 2',
  genre: 'Oscar winning movie',
  year: '1994',
  photo: _killBill["default"],
  id: '3'
}, {
  title: 'Avengers: War of Infinity',
  genre: 'Action & Adventure',
  year: '2004',
  photo: _avengers["default"],
  id: '4'
}, {
  title: 'Inception',
  genre: 'Action & Adventure',
  year: '2003',
  photo: _inception["default"],
  id: '5'
}, {
  title: 'Reservoir dogs',
  genre: 'Oscar winning movie',
  year: '1994',
  photo: _reservoirDogs["default"],
  id: '6'
}];

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.MoviesSection, {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_styled.Navigation, {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_Categories["default"], null), /*#__PURE__*/_react["default"].createElement(_Sorting["default"], null)), /*#__PURE__*/_react["default"].createElement(_SearchResults["default"], null), /*#__PURE__*/_react["default"].createElement(_styled.MoviesWrapper, {
    className: "container"
  }, movies.map(function (movie) {
    return /*#__PURE__*/_react["default"].createElement(_MovieCard["default"], {
      title: movie.title,
      genre: movie.genre,
      year: movie.year,
      photo: movie.photo,
      key: movie.id
    });
  })));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/SearchResults/index.js":
/*!***********************************************!*\
  !*** ./src/components/SearchResults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.SearchResults, {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement(_styled.MoviesAmount, null, "39 "), "movies found");
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/Sorting/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sorting/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styled = __webpack_require__(/*! ../styled.js */ "./src/components/styled.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledBlock = function StyledBlock() {
  return /*#__PURE__*/_react["default"].createElement(_styled.SortingWrapper, null, /*#__PURE__*/_react["default"].createElement(_styled.SortingTitle, null, "SORT BY"), /*#__PURE__*/_react["default"].createElement(_styled.SortingValue, null, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "RELEASE DATE"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "1"
  }, "else"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "2"
  }, "else")));
};

var _default = StyledBlock;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/styled.js":
/*!**********************************!*\
  !*** ./src/components/styled.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OoopsText = exports.SortingValue = exports.SortingTitle = exports.SortingWrapper = exports.MoviesAmount = exports.SearchResults = exports.MoviesWrapper = exports.Navigation = exports.MoviesSection = exports.Genre = exports.DescriptionWrapper = exports.Year = exports.Image = exports.MovieCard = exports.Background = exports.Footer = exports.SearchBtn = exports.SearchInput = exports.SearchForm = exports.Title = exports.Category = exports.CategoriesWrapper = exports.AddMovie = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _background = _interopRequireDefault(__webpack_require__(/*! ../assets/img/background.jpg */ "./src/assets/img/background.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    width: 90%;\n    margin: 0 auto;\n    padding: 70px 20px;\n    background: #1d1d1d;\n    color: #e40909;\n    margin-bottom: 8px;\n    text-align: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    background: #232323;\n    border: none;\n    color: #ffffff;\n    appearance: none;\n    padding-right: 8px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    color: #505050; \n    margin-right: 20px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    &:after {\n        content: 'A';\n        color: red;\n        right: 0;\n        position: absolute;\n        content: '';\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        border-width: 4px 6px 4px 0;\n        border-color: transparent red transparent transparent;  \n        display: inline-block;\n        vertical-align: middle;\n        transform: rotate(270deg);\n}\n"], ["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    &:after {\n        content: '\\A';\n        color: red;\n        right: 0;\n        position: absolute;\n        content: '';\n        width: 0px;\n        height: 0px;\n        border-style: solid;\n        border-width: 4px 6px 4px 0;\n        border-color: transparent red transparent transparent;  \n        display: inline-block;\n        vertical-align: middle;\n        transform: rotate(270deg);\n}\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    font-family: 'Arial', sans-serif;\n    font-weight: 600;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    padding: 22px 0;\n    font-size: 16px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap; \n    justify-content: space-between; \n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 2px solid #4c4c4c;\n    position:relative;\n    display: flex;\n    justify-content: space-between;\n\n    &:after {\n        content: \"\";\n        display: block;\n        height: 1px;\n        width: 100%;\n        background: #000000;\n        position: absolute;\n        bottom: -4px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    background-color: #232323;  \n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    font-size: 16px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid #555555;\n    padding: 0 10px;\n    border-radius: 5px;\n    position: absolute;\n    top: 35px;\n    right: 0;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 320px;\n    margin-bottom: 10px;\n    @media (min-width: 768px) {\n        height: 380px;\n  }\n    @media (min-width: 1200px) {\n        height: 520px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    background-color: #232323;\n    width: 30%;\n    margin-bottom: 50px;\n    color: #a2a2a2;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: 100vw;\n    height: 450px;\n    background-image: url(", ");\n    z-index: -1;\n    background-size: cover;\n    &:before {\n    content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6787902661064426) 0%, rgba(0,0,0,0.7) 100%);\n        opacity: .9; \n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    background-color: #424242;\n    padding: 25px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 25%;\n    padding: 15px 0;\n    font-size: 18px;\n    background-color: #e50914;\n    color: #ffffff;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 73%;\n    background-color: #1d1c1c;\n    padding: 16px 10px;\n    opacity: 0.9;\n    font-size: 18px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: #ffffff;\n    margin-bottom: 30px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n    color: #ffffff;\n    font-size: 16px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n    width: 182px;\n    padding: 10px 0;\n    color: #e50914;\n    background-color: rgba(76, 74, 74, 0.7);\n    font-size: 18px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddMovie = _styledComponents["default"].button(_templateObject());

exports.AddMovie = AddMovie;

var CategoriesWrapper = _styledComponents["default"].div(_templateObject2());

exports.CategoriesWrapper = CategoriesWrapper;

var Category = _styledComponents["default"].div(_templateObject3());

exports.Category = Category;

var Title = _styledComponents["default"].h1(_templateObject4());

exports.Title = Title;

var SearchForm = _styledComponents["default"].form(_templateObject5());

exports.SearchForm = SearchForm;

var SearchInput = _styledComponents["default"].input(_templateObject6());

exports.SearchInput = SearchInput;

var SearchBtn = _styledComponents["default"].button(_templateObject7());

exports.SearchBtn = SearchBtn;

var Footer = _styledComponents["default"].footer(_templateObject8());

exports.Footer = Footer;

var Background = _styledComponents["default"].div(_templateObject9(), _background["default"]);

exports.Background = Background;

var MovieCard = _styledComponents["default"].div(_templateObject10());

exports.MovieCard = MovieCard;

var Image = _styledComponents["default"].img(_templateObject11());

exports.Image = Image;

var Year = _styledComponents["default"].span(_templateObject12());

exports.Year = Year;

var DescriptionWrapper = _styledComponents["default"].span(_templateObject13());

exports.DescriptionWrapper = DescriptionWrapper;

var Genre = _styledComponents["default"].p(_templateObject14());

exports.Genre = Genre;

var MoviesSection = _styledComponents["default"].section(_templateObject15());

exports.MoviesSection = MoviesSection;

var Navigation = _styledComponents["default"].nav(_templateObject16());

exports.Navigation = Navigation;

var MoviesWrapper = _styledComponents["default"].div(_templateObject17());

exports.MoviesWrapper = MoviesWrapper;

var SearchResults = _styledComponents["default"].h3(_templateObject18());

exports.SearchResults = SearchResults;

var MoviesAmount = _styledComponents["default"].span(_templateObject19());

exports.MoviesAmount = MoviesAmount;

var SortingWrapper = _styledComponents["default"].div(_templateObject20());

exports.SortingWrapper = SortingWrapper;

var SortingTitle = _styledComponents["default"].span(_templateObject21());

exports.SortingTitle = SortingTitle;

var SortingValue = _styledComponents["default"].select(_templateObject22());

exports.SortingValue = SortingValue;

var OoopsText = _styledComponents["default"].h2(_templateObject23());

exports.OoopsText = OoopsText;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _App = _interopRequireDefault(__webpack_require__(/*! ./components/App.js */ "./src/components/App.js"));

__webpack_require__(/*! ./index.scss */ "./src/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById('app'));

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map