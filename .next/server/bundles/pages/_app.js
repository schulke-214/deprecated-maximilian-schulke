module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./frontend/components/common/logo/logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/common/logo/logo.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var logo = function logo(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _extends({}, props, {
    src: "/static/logo/logo-nospace.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (logo);

/***/ }),

/***/ "./frontend/components/common/pageLoader/pageLoader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_logo__ = __webpack_require__("./frontend/components/common/logo/logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__ = __webpack_require__("./frontend/layout/layout-styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__ = __webpack_require__("./frontend/styles/components/pageLoader.js");
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/common/pageLoader/pageLoader.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // COMPONENT IMPORTS

 // STYLE IMPORTS




var pageLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(pageLoader, _Component);

  function pageLoader(props) {
    _classCallCheck(this, pageLoader);

    return _possibleConstructorReturn(this, (pageLoader.__proto__ || Object.getPrototypeOf(pageLoader)).call(this, props));
  }

  _createClass(pageLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var progress = {
        value: 1,
        ease: Power4.easeInOut
      };

      var updateEl = function updateEl() {
        return document.getElementById('pageloader-counter').textContent = Math.floor(progress.value);
      };

      updateEl();
      var loader = new TimelineLite({
        paused: true,
        onComplete: this.props.finished
      }).to(progress, 2, {
        value: 99,
        delay: 0.25,
        ease: progress.ease,
        onUpdate: updateEl
      }).to(progress, 1, {
        value: 100,
        ease: progress.ease,
        onUpdate: updateEl
      }).to("#pageloader", 2, {
        opacity: 0,
        ease: progress.ease
      }).play();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "pageloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "layout-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "gui-layer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + "top flex space-between" || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__logo_logo__["a" /* default */], {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        id: "pageloader-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__layout_layout_styles__["a" /* default */].__scopedHash, " jsx-").concat(__WEBPACK_IMPORTED_MODULE_4__styles_components_pageLoader__["a" /* default */].__scopedHash)
      })));
    }
  }]);

  return pageLoader;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (pageLoader);

/***/ }),

/***/ "./frontend/context/device.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/context/device.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// ORIGINAL AUTHOR github@marvin1003
// I just optimized this a bit.
var DeviceContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
var DeviceProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeviceProvider, _React$Component);

  function DeviceProvider(props) {
    var _this;

    _classCallCheck(this, DeviceProvider);

    _this = _possibleConstructorReturn(this, (DeviceProvider.__proto__ || Object.getPrototypeOf(DeviceProvider)).call(this, props));
    _this.state = {
      width: null,
      hideDesktop: null,
      isSmall: null,
      isMobile: null
    };
    _this.target = _this.target.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DeviceProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.target();
      window.addEventListener('resize', this.target);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.target);
    }
  }, {
    key: "target",
    value: function target() {
      var width = window.innerWidth;
      var isSmall = window.innerWidth <= 1024;
      var hideDesktop = window.innerWidth <= 320;
      this.setState({
        width: width,
        isSmall: isSmall,
        hideDesktop: hideDesktop,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DeviceContext.Provider, {
        value: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.children);
    }
  }]);

  return DeviceProvider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ }),

/***/ "./frontend/layout/layout-styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_var__);

var _defaultExport = ["#layout-layer{display:block;position:fixed;width:".concat(100 - __WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut * 2 + 'vw', ";height:calc( 100vh - ").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut * 2 + 'vw', ");top:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut + 'vw', ";left:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut + 'vw', ";z-index:1000;}"), "#gui-layer{width:100%;height:100%;position:relative;z-index:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "#gui-layer>div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:-webkit-min-content;height:-moz-min-content;height:min-content;}", ".top{height:25px;}", ".top>span{position:absolute;left:calc( 25vw - ".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut, "vw );white-space:nowrap;}"), ".mid>a{position:relative;display:block;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:rotate( -90deg );-ms-transform:rotate( -90deg );transform:rotate( -90deg );heigth:15px;width:50px;text-align:center;left:".concat(-25 + 7.5, "px;}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.breakpoints.tablet, "px ){#layout-layer{width:calc( 100vw - 100px );height:calc( 100vh - 100px );top:50px;left:50px;}.top>span{display:none;}}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.breakpoints.phone, "px ){#layout-layer{width:calc( 100vw - 75px );height:calc( 100vh - 75px );top:37.5px;left:37.5px;}}")];
_defaultExport.__hash = "1324891411";
_defaultExport.__scoped = ["#layout-layer.jsx-2245529746{display:block;position:fixed;width:".concat(100 - __WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut * 2 + 'vw', ";height:calc( 100vh - ").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut * 2 + 'vw', ");top:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut + 'vw', ";left:").concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut + 'vw', ";z-index:1000;}"), "#gui-layer.jsx-2245529746{width:100%;height:100%;position:relative;z-index:500;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "#gui-layer.jsx-2245529746>div.jsx-2245529746{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:-webkit-min-content;height:-moz-min-content;height:min-content;}", ".top.jsx-2245529746{height:25px;}", ".top.jsx-2245529746>span.jsx-2245529746{position:absolute;left:calc( 25vw - ".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.spacing.layout.marginOut, "vw );white-space:nowrap;}"), ".mid.jsx-2245529746>a.jsx-2245529746{position:relative;display:block;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:rotate( -90deg );-ms-transform:rotate( -90deg );transform:rotate( -90deg );heigth:15px;width:50px;text-align:center;left:".concat(-25 + 7.5, "px;}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.breakpoints.tablet, "px ){#layout-layer.jsx-2245529746{width:calc( 100vw - 100px );height:calc( 100vh - 100px );top:50px;left:50px;}.top.jsx-2245529746>span.jsx-2245529746{display:none;}}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__styles_var___default.a.breakpoints.phone, "px ){#layout-layer.jsx-2245529746{width:calc( 100vw - 75px );height:calc( 100vh - 75px );top:37.5px;left:37.5px;}}")];
_defaultExport.__scopedHash = "2245529746";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/layout/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_common_logo_logo__ = __webpack_require__("./frontend/components/common/logo/logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_styles__ = __webpack_require__("./frontend/layout/layout-styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context_device__ = __webpack_require__("./frontend/context/device.js");
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/layout/layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


 // COMPONENT IMPORTS

 // IMPORT STYLES

 // CONTEXT IMPORTS



var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {
      isLayout: true
    };
    _this.initCursor = _this.initCursor.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initCursor();
    }
  }, {
    key: "initCursor",
    value: function initCursor() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_4__layout_styles__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_4__layout_styles__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__layout_styles__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_4__layout_styles__["a" /* default */].__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__context_device__["a" /* DeviceContext */].Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, function (state) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(_this2.props.children, {
          device: state
        });
      })));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./frontend/styles/common/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = ["@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');", "@import url('https://fonts.googleapis.com/css?family=Spectral:400,600');", "*{margin:0;padding:0;box-sizing:border-box;font-family:'Noto Sans','Helvetica','Montserrat','Arial';font-weight:400;outline:none;color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.highlight, ";font-smoothing:antialiased;tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);}"), "html,body{background-color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.main, ";}"), "body{height:100vh;width:100vw;overflow:hidden;}", "h1,h2,h3,h4,h5,h6,a,p,span,div{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.font.sizes.medium, ";line-height:80%;font-weight:400;-webkit-text-decoration:none;text-decoration:none;}"), "a{text-transform:lowercase;white-space:nowrap;}", "span{white-space:nowrap;}", ".logo{width:20px;height:10px;}", ".logo-pageloader{width:25px;height:25px;position:absolute;top:50px;left:50px;}", "img{object-fit:cover;display:block;}", "html::-webkit-scrollbar{width:0px;}", "html::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0);}"];
_defaultExport.__hash = "562888463";
_defaultExport.__scoped = ["@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');", "@import url('https://fonts.googleapis.com/css?family=Spectral:400,600');", "*.jsx-3470633134{margin:0;padding:0;box-sizing:border-box;font-family:'Noto Sans','Helvetica','Montserrat','Arial';font-weight:400;outline:none;color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.highlight, ";font-smoothing:antialiased;tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0);}"), "html.jsx-3470633134,body.jsx-3470633134{background-color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.main, ";}"), "body.jsx-3470633134{height:100vh;width:100vw;overflow:hidden;}", "h1.jsx-3470633134,h2.jsx-3470633134,h3.jsx-3470633134,h4.jsx-3470633134,h5.jsx-3470633134,h6.jsx-3470633134,a.jsx-3470633134,p.jsx-3470633134,span.jsx-3470633134,div.jsx-3470633134{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.font.sizes.medium, ";line-height:80%;font-weight:400;-webkit-text-decoration:none;text-decoration:none;}"), "a.jsx-3470633134{text-transform:lowercase;white-space:nowrap;}", "span.jsx-3470633134{white-space:nowrap;}", ".logo.jsx-3470633134{width:20px;height:10px;}", ".logo-pageloader.jsx-3470633134{width:25px;height:25px;position:absolute;top:50px;left:50px;}", "img.jsx-3470633134{object-fit:cover;display:block;}", "html.jsx-3470633134::-webkit-scrollbar{width:0px;}", "html.jsx-3470633134::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0);}"];
_defaultExport.__scopedHash = "3470633134";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/common/utility.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = [".block{display:block;}", ".relative{position:relative;}", ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".row{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", ".column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".space-around{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", ".space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".spectral{font-family:'Spectral';font-weight:600;}"];
_defaultExport.__hash = "377136639";
_defaultExport.__scoped = [".block.jsx-3526320446{display:block;}", ".relative.jsx-3526320446{position:relative;}", ".flex.jsx-3526320446{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".row.jsx-3526320446{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", ".column.jsx-3526320446{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".center.jsx-3526320446{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".space-around.jsx-3526320446{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", ".space-between.jsx-3526320446{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".spectral.jsx-3526320446{font-family:'Spectral';font-weight:600;}"];
_defaultExport.__scopedHash = "3526320446";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/components/pageLoader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = ["div{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:999;background-color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.main, ";}"), "#pageloader-counter{display:block;width:25px;height:25px;z-index:1000;position:absolute;top:calc( 50vh - 12.5px );left:calc( 50vw - 12.5px );font-family:\"Spectral\";}"];
_defaultExport.__hash = "451339825";
_defaultExport.__scoped = ["div.jsx-1452407408{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:999;background-color:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.colors.main, ";}"), "#pageloader-counter.jsx-1452407408{display:block;width:25px;height:25px;z-index:1000;position:absolute;top:calc( 50vh - 12.5px );left:calc( 50vw - 12.5px );font-family:\"Spectral\";}"];
_defaultExport.__scopedHash = "1452407408";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/var.js":
/***/ (function(module, exports) {

var font = {
  sizes: {
    small: '12.5px',
    medium: '14px'
  }
};
var colors = {
  main: '#121212',
  highlight: '#fff'
};
var spacing = {
  layout: {
    marginOut: 5
  }
};
var breakpoints = {
  desktop: 1280,
  tablet: 1024,
  phone: 620
};
module.exports = {
  font: font,
  colors: colors,
  spacing: spacing,
  breakpoints: breakpoints
};

/***/ }),

/***/ "./frontend/utility/stringHelper.js":
/***/ (function(module, exports) {

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  capitalize: capitalize
};

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontend_context_device__ = __webpack_require__("./frontend/context/device.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frontend_layout_layout__ = __webpack_require__("./frontend/layout/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__frontend_components_common_pageLoader_pageLoader__ = __webpack_require__("./frontend/components/common/pageLoader/pageLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper__ = __webpack_require__("./frontend/utility/stringHelper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frontend_styles_common_index__ = __webpack_require__("./frontend/styles/common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__frontend_styles_common_utility__ = __webpack_require__("./frontend/styles/common/utility.js");
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/pages/_app.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // NEXT IMPORTS


 // CONTEXT PROVIDER IMPORTS

 // COMPONENT IMPORTS


 // UTILITY IMPORTS

 // STYLE IMPORTS




var Application =
/*#__PURE__*/
function (_App) {
  _inherits(Application, _App);

  function Application(props) {
    var _this;

    _classCallCheck(this, Application);

    _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this, props));
    _this.state = {
      pageLoader: {
        // COMMENTED OUT FOR JUST FOR DEVELOPMENT
        isOpen: false
      }
    };
    _this.removePageLoader = _this.removePageLoader.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Application, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      //     window.location = "https://www.domain.com/lightweight";
      // }
      window.LIGHTWEIGHT = "https://www.domain.com/lightweight";
      document.getElementsByTagName('body')[0].style.display = "block";
    }
  }, {
    key: "removePageLoader",
    value: function removePageLoader() {
      console.log('removed page loader');
      this.setState({
        pageLoader: {
          isOpen: false
        }
      });
    }
  }, {
    key: "dynamicPageTitle",
    value: function dynamicPageTitle() {
      var url = this.props.router.pathname;
      url = url.slice(1, url.length);
      url = url.split('/', 2);

      if (url.length === 2) {
        var projectName = url[1];
        projectName = projectName.split('-', 3);

        for (var i = 0; i < projectName.length; i++) {
          projectName[i] = Object(__WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper__["capitalize"])(projectName[i]);
        }

        url[1] = projectName.join(' ');
      }

      if (url[0] === "") url.shift();
      var pageTitle;

      switch (url.length) {
        case 1:
          pageTitle = Object(__WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper__["capitalize"])(url[0]);
          break;

        case 2:
          pageTitle = Object(__WEBPACK_IMPORTED_MODULE_7__frontend_utility_stringHelper__["capitalize"])(url[0]) + " - " + url[1];
          break;

        default:
          pageTitle = "Maximilian Schulke - Creative Developer";
          break;
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, pageTitle);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__frontend_context_device__["b" /* DeviceProvider */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.dynamicPageTitle()), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_8__frontend_styles_common_index__["a" /* default */].__hash,
        css: __WEBPACK_IMPORTED_MODULE_8__frontend_styles_common_index__["a" /* default */]
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_9__frontend_styles_common_utility__["a" /* default */].__hash,
        css: __WEBPACK_IMPORTED_MODULE_9__frontend_styles_common_utility__["a" /* default */]
      }), this.state.pageLoader.isOpen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__frontend_components_common_pageLoader_pageLoader__["a" /* default */], {
        finished: this.removePageLoader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__frontend_layout_layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })))));
    }
  }]);

  return Application;
}(__WEBPACK_IMPORTED_MODULE_2_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map