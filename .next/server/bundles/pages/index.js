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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/components/common/circle/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/common/circle/circle.js";



var styles = ["#circle{color:white;}"];
styles.__hash = "2809088914";
styles.__scoped = ["#circle.jsx-3456452883{color:white;}"];
styles.__scopedHash = "3456452883";

var Circle = function Circle(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: styles.__scopedHash,
    css: styles.__scoped
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    id: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-".concat(styles.__scopedHash) + " " + "jsx-".concat(styles.__scopedHash)
  }, "circle"));
};

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),

/***/ "./frontend/components/common/hover/hover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/common/hover/hover.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var styles = [".hover-link-span{display:inline-block;}", ".hover-link-space{width:5px;}"];
styles.__hash = "3446525241";
styles.__scoped = [".hover-link-span.jsx-2300676344{display:inline-block;}", ".hover-link-space.jsx-2300676344{width:5px;}"];
styles.__scopedHash = "2300676344";

var Hover =
/*#__PURE__*/
function (_Component) {
  _inherits(Hover, _Component);

  function Hover(props) {
    var _this;

    _classCallCheck(this, Hover);

    _this = _possibleConstructorReturn(this, (Hover.__proto__ || Object.getPrototypeOf(Hover)).call(this, props)); // REFS

    _this.container = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef(); // VARIABLES

    _this.animation = null;
    _this.text = _this.props.text || _this.props.children;
    _this.handlerHover = _this.handlerHover.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Hover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.prepareDOM();
      this.animation = new TimelineLite({
        paused: true,
        onComplete: function onComplete() {
          return _this2.animation.pause(0);
        }
      }).staggerTo(this.container.current.childNodes, 0.2, {
        y: "-100%",
        opacity: 0
      }, 0.01).set(this.container.current.childNodes, {
        y: "100%"
      }).staggerTo(this.container.current.childNodes, 0.2, {
        y: "0%",
        opacity: 1
      }, 0.01);
    }
  }, {
    key: "handlerHover",
    value: function handlerHover() {
      if (!this.props.isMobile) this.animation.play();
    }
  }, {
    key: "prepareDOM",
    value: function prepareDOM() {
      for (var i = 0; i < this.text.length; i++) {
        var span = document.createElement("span");
        span.textContent = this.text.charAt(i);
        span.classList.add("hover-link-span");
        if (this.text.charAt(i) === " ") span.classList.add("hover-link-space");
        this.container.current.appendChild(span);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: this.props.to,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        style: _objectSpread({}, this.props.style),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: styles.__hash,
        css: styles
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        ref: this.container,
        onMouseEnter: this.handlerHover,
        style: {
          position: "relative"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })));
    }
  }]);

  return Hover;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Hover);

/***/ }),

/***/ "./frontend/components/common/textTransition/textTransition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/common/textTransition/textTransition.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var TextTransition =
/*#__PURE__*/
function (_Component) {
  _inherits(TextTransition, _Component);

  function TextTransition(props) {
    var _this;

    _classCallCheck(this, TextTransition);

    _this = _possibleConstructorReturn(this, (TextTransition.__proto__ || Object.getPrototypeOf(TextTransition)).call(this, props)); // VARIABLES

    _this.mounted = null; // REFS

    _this.parent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.current = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.hiddenNext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.hiddenPrev = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef(); // STATE

    _this.state = {
      current: null,
      value: null
    }; // THIS BINDS

    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextTransition, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.mounted = true;
      this.setState({
        current: this.props.defaultValue
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "next",
    value: function next(nextValue) {
      var _this2 = this;

      this.setState({
        value: nextValue
      });
      var ease = Power1.easeInOut;
      TweenLite.to(this.current.current, 0.5, {
        opacity: 0,
        ease: ease
      });
      TweenLite.to(this.hiddenNext.current, 0.5, {
        opacity: 1,
        ease: ease
      });
      TweenLite.to(this.parent.current, 0.5, {
        y: "-100%",
        ease: ease,
        onComplete: function onComplete() {
          if (_this2.mounted) {
            _this2.setState({
              current: nextValue
            });

            TweenLite.set(_this2.parent.current, {
              y: "0%"
            });
            TweenLite.set(_this2.current.current, {
              opacity: 1
            });
            TweenLite.set(_this2.hiddenNext.current, {
              opacity: 0
            });
          }
        }
      });
    }
  }, {
    key: "prev",
    value: function prev(prevValue) {
      var _this3 = this;

      this.setState({
        value: prevValue
      });
      var ease = Power2.easeOut;
      TweenLite.to(this.current.current, 0.5, {
        opacity: 0,
        ease: ease
      });
      TweenLite.to(this.hiddenPrev.current, 0.5, {
        opacity: 1,
        ease: ease
      });
      TweenLite.to(this.parent.current, 0.5, {
        y: "100%",
        ease: ease,
        onComplete: function onComplete() {
          if (_this3.mounted) {
            _this3.setState({
              current: prevValue
            });

            TweenLite.set(_this3.parent.current, {
              y: "0%"
            });
            TweenLite.set(_this3.current.current, {
              opacity: 1
            });
            TweenLite.set(_this3.hiddenPrev.current, {
              opacity: 0
            });
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: this.parent,
        className: "block relative",
        style: {
          height: "100%",
          top: "-100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: this.hiddenPrev,
        className: "block",
        style: {
          height: "100%",
          opacity: "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.state.value), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: this.current,
        className: "block",
        style: {
          height: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, " ", this.state.current, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        ref: this.hiddenNext,
        className: "block",
        style: {
          height: "100%",
          opacity: "0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.state.value));
    }
  }]);

  return TextTransition;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TextTransition);

/***/ }),

/***/ "./frontend/components/pages/home/slider/slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_slider_sizes__ = __webpack_require__("./static/slider/sizes.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_slider_sizes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_slider_sizes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__ = __webpack_require__("./frontend/styles/components/slider/slider-common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_components_slider_slider_mobile__ = __webpack_require__("./frontend/styles/components/slider/slider-mobile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_components_slider_slider_desktop__ = __webpack_require__("./frontend/styles/components/slider/slider-desktop.js");
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/frontend/components/pages/home/slider/slider.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // JSON IMPORTS

 // STYLE IMPORTS

 // DYNAMICALLY INSERTED STYLESHEET - DEPENDING ON SCREEN SIZE




var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    _this.pixi = {
      stage: null,
      renderer: null,
      container: null,
      displacementSprite: null,
      displacementFilter: null,
      delta_scale: 10,
      delta_offset: 1,
      width: 1000,
      height: 1500
    };
    _this.canvas = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef();
    _this.wrapper = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef();
    _this.raf = null; // THIS FIXES

    _this.animate = _this.animate.bind(_assertThisInitialized(_this));
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.prev = _this.prev.bind(_assertThisInitialized(_this));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.pixi.renderer = PIXI.autoDetectRenderer(this.pixi.width, this.pixi.height, {
        transparent: true,
        view: this.canvas.current,
        legacy: true
      });
      this.pixi.stage = new PIXI.Container();
      this.pixi.stage.interactive = true;
      this.pixi.container = new PIXI.Container();
      this.pixi.stage.addChild(this.pixi.container);
      this.pixi.displacementSprite = PIXI.Sprite.fromImage('static/slider/map.jpg');
      this.pixi.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
      this.pixi.displacementFilter = new PIXI.filters.DisplacementFilter(this.pixi.displacementSprite);
      this.pixi.displacementFilter.scale.x = 2;
      this.pixi.displacementFilter.scale.y = 2;
      this.pixi.stage.addChild(this.pixi.displacementSprite);
      this.pixi.container.filters = [this.pixi.displacementFilter];
      var bg = PIXI.Sprite.fromImage('static/slider/1-min.jpg');
      bg.width = this.pixi.renderer.width;
      bg.height = this.pixi.renderer.height; // bg.width = sizes[0].width;
      // bg.height = sizes[0].height;
      // bg.x = - this.pixi.renderer.width / 4;
      // bg.y = - this.pixi.renderer.height / 4;

      this.pixi.container.addChild(bg);
      window.addEventListener('resize', this.handleResize);
      this.animate();
      this.handleResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.raf);
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "calcSize",
    value: function calcSize(size, containerSize) {}
  }, {
    key: "animate",
    value: function animate() {
      this.raf = requestAnimationFrame(this.animate);
      this.pixi.displacementFilter.scale.x = this.pixi.delta_scale;
      this.pixi.displacementFilter.scale.y = this.pixi.delta_scale;
      this.pixi.displacementSprite.x += this.pixi.delta_offset;
      this.pixi.displacementSprite.y += this.pixi.delta_offset;
      this.pixi.stage.filters = [this.pixi.displacementFilter];
      this.pixi.renderer.render(this.pixi.stage);
    }
  }, {
    key: "next",
    value: function next(callback) {// this.props.updateCurrent('+');
      // this.zIndex++;
      // document.getElementById(this.props.current).style.zIndex = this.zIndex;
      // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "100%", ease: Power2.easeOut, onComplete: callback} )
    }
  }, {
    key: "prev",
    value: function prev(callback) {// this.props.updateCurrent('-');
      // this.zIndex++;
      // document.getElementById(this.props.current).style.zIndex = this.zIndex;
      // TweenLite.from( document.getElementById( this.props.current ) , 0.5, { y: "-100%", ease: Power2.easeOut, onComplete: callback} )
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var _pixi = this.pixi,
          width = _pixi.width,
          height = _pixi.height;
      var rect = this.wrapper.current.getBoundingClientRect();
      var factor = 1; // SET THE FACTOR BY THE VALUE WHICH IS SMALLER

      if (rect.width < rect.height) factor = rect.width / width;else if (rect.height < rect.width) factor = rect.height / height; // USE THE FACTOR TO CALC A FITTING POSITION

      if (this.pixi.height * factor < rect.height) factor = rect.height / height;else if (this.pixi.width * factor < rect.width) factor = rect.width / width;
      TweenLite.set(this.canvas.current, {
        scale: factor,
        left: (rect.width - this.pixi.width) / 2,
        top: (rect.height - this.pixi.height) / 2
      });
    }
  }, {
    key: "render",
    value: function render() {
      var dynamicStyles = this.props.isMobile ? __WEBPACK_IMPORTED_MODULE_4__styles_components_slider_slider_mobile__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_5__styles_components_slider_slider_desktop__["a" /* default */];
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: dynamicStyles.__scopedHash,
        css: dynamicStyles.__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        ref: this.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scopedHash, " jsx-").concat(dynamicStyles.__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scopedHash, " jsx-").concat(dynamicStyles.__scopedHash)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("canvas", {
        ref: this.canvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scopedHash, " jsx-").concat(dynamicStyles.__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_3__styles_components_slider_slider_common__["a" /* default */].__scopedHash, " jsx-").concat(dynamicStyles.__scopedHash)
      })));
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),

/***/ "./frontend/styles/components/slider/slider-common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = ["div{z-index:100;overflow:hidden;position:relative;}", "canvas{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;position:absolute;}"];
_defaultExport.__hash = "2909182042";
_defaultExport.__scoped = ["div.jsx-48929883{z-index:100;overflow:hidden;position:relative;}", "canvas.jsx-48929883{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;position:absolute;}"];
_defaultExport.__scopedHash = "48929883";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/components/slider/slider-desktop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = ["div{z-index:-1;position:absolute;left:37.5%;top:0;width:25%;height:100%;}"];
_defaultExport.__hash = "2877501266";
_defaultExport.__scoped = ["div.jsx-2805001427{z-index:-1;position:absolute;left:37.5%;top:0;width:25%;height:100%;}"];
_defaultExport.__scopedHash = "2805001427";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/components/slider/slider-mobile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _defaultExport = ["div{position:relative;top:0;left:0;width:100%;height:50vh;}"];
_defaultExport.__hash = "1353938975";
_defaultExport.__scoped = ["div.jsx-2274509726{position:relative;top:0;left:0;width:100%;height:50vh;}"];
_defaultExport.__scopedHash = "2274509726";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/pages/home-common.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = ["#home-wrapper{display:block;position:fixed;width:".concat(100 - __WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut * 2 + 'vw', ";height:calc( 100vh - ").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut * 2 + 'vw', ");top:").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut + 'vw', ";left:").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut + 'vw', ";}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.breakpoints.tablet, "px ){#home-wrapper{width:calc( 100vw - 100px );height:calc( 100vh - 100px );top:50px;left:50px;}}")];
_defaultExport.__hash = "1655271409";
_defaultExport.__scoped = ["#home-wrapper.jsx-2575909808{display:block;position:fixed;width:".concat(100 - __WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut * 2 + 'vw', ";height:calc( 100vh - ").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut * 2 + 'vw', ");top:").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut + 'vw', ";left:").concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut + 'vw', ";}"), "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.breakpoints.tablet, "px ){#home-wrapper.jsx-2575909808{width:calc( 100vw - 100px );height:calc( 100vh - 100px );top:50px;left:50px;}}")];
_defaultExport.__scopedHash = "2575909808";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/pages/home-desktop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = [".inner{position:absolute;top:calc( 50% - 25vh );width:100%;height:50vh;}", ".indication{position:absolute;left:calc( 25vw - ".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut, "vw );width:-webkit-min-content;width:-moz-min-content;width:min-content;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}"), ".projectNum{height:15px;margin-bottom:5vh;}", "#projectTitle{position:absolute;top:calc(50% - 37.5px);left:50%;font-size:80px;height:75px;width:-webkit-min-content;width:-moz-min-content;width:min-content;white-space:nowrap;text-transform:lowercase;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;-webkit-transition-property:font-size height top;transition-property:font-size height top;}", ".project-info{position:absolute;height:100%;width:-webkit-min-content;width:-moz-min-content;width:min-content;left:67.5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "#home-date-topic{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:50px;margin-bottom:calc( 7.5vh - 50px );}", "#home-date-topic>span:first-child{margin-bottom:15px;}"];
_defaultExport.__hash = "2352164161";
_defaultExport.__scoped = [".inner.jsx-888970720{position:absolute;top:calc( 50% - 25vh );width:100%;height:50vh;}", ".indication.jsx-888970720{position:absolute;left:calc( 25vw - ".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.spacing.layout.marginOut, "vw );width:-webkit-min-content;width:-moz-min-content;width:min-content;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}"), ".projectNum.jsx-888970720{height:15px;margin-bottom:5vh;}", "#projectTitle.jsx-888970720{position:absolute;top:calc(50% - 37.5px);left:50%;font-size:80px;height:75px;width:-webkit-min-content;width:-moz-min-content;width:min-content;white-space:nowrap;text-transform:lowercase;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;-webkit-transition-property:font-size height top;transition-property:font-size height top;}", ".project-info.jsx-888970720{position:absolute;height:100%;width:-webkit-min-content;width:-moz-min-content;width:min-content;left:67.5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "#home-date-topic.jsx-888970720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:50px;margin-bottom:calc( 7.5vh - 50px );}", "#home-date-topic.jsx-888970720>span.jsx-888970720:first-child{margin-bottom:15px;}"];
_defaultExport.__scopedHash = "888970720";
/* harmony default export */ __webpack_exports__["a"] = (_defaultExport);

/***/ }),

/***/ "./frontend/styles/pages/home-mobile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var__ = __webpack_require__("./frontend/styles/var.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__var___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__var__);

var _defaultExport = [".inner{position:relative;width:100%;height:100%;}", ".inner-wrap{position:absolute;top:0;left:25%;width:50%;height:100%;}", ".top{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".projectNum{height:15px;margin-bottom:5vh;}", ".lower{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".projectData{margin-top:50px;text-align:right;}", ".projectYear{height:15px;position:absolute;right:75px;}", ".projectCategory{height:15px;}", "#projectTitle{position:absolute;top:calc(50% - 25px);font-family:'Spectral';font-weight:600;font-size:70px;white-space:nowrap;height:50px;width:100%;text-align:center;text-transform:lowercase;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;-webkit-transition-property:font-size height top;transition-property:font-size height top;}", "#home-date-topic{margin-top:5vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:right;width:-webkit-min-content;width:-moz-min-content;width:min-content;}", "#home-date-topic>span:first-child{margin-bottom:15px;}", "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.breakpoints.phone, "px ){.inner-wrap{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:0;left:12.5%;width:75%;height:100%;}}")];
_defaultExport.__hash = "2229333031";
_defaultExport.__scoped = [".inner.jsx-2061892614{position:relative;width:100%;height:100%;}", ".inner-wrap.jsx-2061892614{position:absolute;top:0;left:25%;width:50%;height:100%;}", ".top.jsx-2061892614{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".projectNum.jsx-2061892614{height:15px;margin-bottom:5vh;}", ".lower.jsx-2061892614{-webkit-flex:1 1 0;-ms-flex:1 1 0;flex:1 1 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".projectData.jsx-2061892614{margin-top:50px;text-align:right;}", ".projectYear.jsx-2061892614{height:15px;position:absolute;right:75px;}", ".projectCategory.jsx-2061892614{height:15px;}", "#projectTitle.jsx-2061892614{position:absolute;top:calc(50% - 25px);font-family:'Spectral';font-weight:600;font-size:70px;white-space:nowrap;height:50px;width:100%;text-align:center;text-transform:lowercase;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;-webkit-transition-property:font-size height top;transition-property:font-size height top;}", "#home-date-topic.jsx-2061892614{margin-top:5vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:right;width:-webkit-min-content;width:-moz-min-content;width:min-content;}", "#home-date-topic.jsx-2061892614>span.jsx-2061892614:first-child{margin-bottom:15px;}", "@media screen and ( max-width:".concat(__WEBPACK_IMPORTED_MODULE_0__var___default.a.breakpoints.phone, "px ){.inner-wrap.jsx-2061892614{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;top:0;left:12.5%;width:75%;height:100%;}}")];
_defaultExport.__scopedHash = "2061892614";
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frontend_components_pages_home_slider_slider__ = __webpack_require__("./frontend/components/pages/home/slider/slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frontend_components_common_circle_circle__ = __webpack_require__("./frontend/components/common/circle/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontend_components_common_textTransition_textTransition__ = __webpack_require__("./frontend/components/common/textTransition/textTransition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frontend_components_common_hover_hover__ = __webpack_require__("./frontend/components/common/hover/hover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_Project_json__ = __webpack_require__("./static/Project.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_Project_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_Project_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frontend_styles_pages_home_common__ = __webpack_require__("./frontend/styles/pages/home-common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__ = __webpack_require__("./frontend/styles/pages/home-desktop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__frontend_styles_pages_home_mobile__ = __webpack_require__("./frontend/styles/pages/home-mobile.js");
var _jsxFileName = "/Users/max/Desktop/maximilian-schulke/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // COMPONENT IMPORTS




 // JSON IMPORTS

 // STYLE IMPORTS





var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props)); // REFS

    Object.defineProperty(_assertThisInitialized(_this), "getProjectData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.state.projects[_this.state.slider.current - 1];
      }
    });
    _this.slider = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef();
    _this.textTransitions = {
      projectNumber: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef(),
      projectYear: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef(),
      projectCategory: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createRef()
    }; // VARIABLES

    _this.threshold = 50;
    _this.running = false; // MAP JSON TO ARRAY

    var projects = [];
    Object.keys(__WEBPACK_IMPORTED_MODULE_6__static_Project_json___default.a).map(function (key) {
      return projects.push(__WEBPACK_IMPORTED_MODULE_6__static_Project_json___default.a[key]);
    });
    _this.state = {
      projects: projects,
      slider: {
        current: 1,
        length: projects.length
      }
    }; // THIS FIXES

    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.nextProject = _this.nextProject.bind(_assertThisInitialized(_this));
    _this.prevProject = _this.prevProject.bind(_assertThisInitialized(_this));
    _this.getProjectData = _this.getProjectData.bind(_assertThisInitialized(_this));
    _this.updateCurrent = _this.updateCurrent.bind(_assertThisInitialized(_this));
    _this.resetRunningState = _this.resetRunningState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // INIT STUFF
      window.addEventListener('wheel', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // REMOVE LISTENERS
      window.removeEventListener('wheel', this.handleScroll);
    }
  }, {
    key: "updateCurrent",
    value: function updateCurrent(dir) {
      var _this2 = this;

      var setTo = function setTo(newCurrent) {
        return _this2.setState(function (prevState) {
          return {
            slider: _objectSpread({}, prevState.slider, {
              current: newCurrent
            })
          };
        });
      };

      var byPrev = function byPrev(int) {
        return _this2.setState(function (prevState) {
          return {
            slider: _objectSpread({}, prevState.slider, {
              current: prevState.slider.current + int
            })
          };
        });
      };

      switch (dir) {
        case '+':
          if (this.state.slider.current < this.state.slider.length) byPrev(1);else setTo(1);
          break;

        case '-':
          if (this.state.slider.current > 1) byPrev(-1);else setTo(this.state.slider.length);
          break;
      }
    }
  }, {
    key: "nextProject",
    value: function nextProject() {
      var _this3 = this;

      this.running = true;
      var next = this.state.slider.current < this.state.slider.length ? this.state.slider.current + 1 : 1;
      var project = this.state.projects[next - 1];
      /*
              this.textTransitions.projectNumber.current.next( next );
              this.textTransitions.projectYear.current.next( project.meta.year );
              this.textTransitions.projectCategory.current.next( project.meta.category );
      */

      this.slider.current.next(function () {
        return window.addEventListener("wheel", _this3.resetRunningState);
      });
    }
  }, {
    key: "prevProject",
    value: function prevProject() {
      var _this4 = this;

      this.running = true;
      var prev = this.state.slider.current > 1 ? this.state.slider.current - 1 : this.state.slider.length;
      var project = this.state.projects[prev - 1];
      /*
              this.textTransitions.projectNumber.current.prev( prev );
              this.textTransitions.projectYear.current.prev( project.meta.year );
              this.textTransitions.projectCategory.current.prev( project.meta.category );
      */

      this.slider.current.prev(function () {
        return window.addEventListener("wheel", _this4.resetRunningState);
      });
    }
  }, {
    key: "handleScroll",
    // SLIDER FUNCTIONALITY
    value: function handleScroll(ev) {
      var delta = ev.deltaY;

      if (Math.abs(delta) > this.threshold && !this.running) {
        if (delta < 0) this.prevProject();else if (delta > 0) this.nextProject();
      }
    }
  }, {
    key: "resetRunningState",
    value: function resetRunningState(ev) {
      if (Math.abs(ev.deltaY) < this.threshold) {
        this.running = false;
        window.removeEventListener("wheel", this.resetRunningState);
      }
    } // ADD TOUCH SUPPORT LATER
    // ADD KEY SUPPORT LATER
    // ADD DRAG SUPPORT LATER

  }, {
    key: "render",
    value: function render() {
      var Content; // DESKTOP LAYOUT

      if (!this.props.device.isSmall && !this.props.device.isMobile) {
        Content = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: __WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash,
          css: __WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scoped
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "inner" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "indication flex column" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__frontend_components_common_circle_circle__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__frontend_components_common_hover_hover__["a" /* default */], {
          to: "/project",
          text: "view project",
          isMobile: this.props.device.isMobile,
          style: {
            marginBottom: "calc( 7.5vh - 15px )",
            height: "15px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__frontend_components_pages_home_slider_slider__["a" /* default */], {
          ref: this.slider,
          current: this.state.slider.current,
          length: this.state.slider.length,
          updateCurrent: this.updateCurrent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "project-info" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "flex projectNum" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__frontend_components_common_textTransition_textTransition__["a" /* default */], {
          defaultValue: this.state.slider.current,
          ref: this.textTransitions.projectNumber,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash)
        }, "/", this.state.slider.length)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "flex row projectData" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "projectYear" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__frontend_components_common_textTransition_textTransition__["a" /* default */], {
          defaultValue: this.getProjectData().meta.year,
          ref: this.textTransitions.projectYear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "projectCategory" || "")
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__frontend_components_common_textTransition_textTransition__["a" /* default */], {
          defaultValue: this.getProjectData().meta.category,
          ref: this.textTransitions.projectCategory,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }))))));
      } // MOBILE LAYOUT
      else if (!this.props.device.hideDesktop) {
          Content = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_9__frontend_styles_pages_home_mobile__["a" /* default */].__scopedHash) + " " + "inner" || "")
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: __WEBPACK_IMPORTED_MODULE_9__frontend_styles_pages_home_mobile__["a" /* default */].__scopedHash,
            css: __WEBPACK_IMPORTED_MODULE_9__frontend_styles_pages_home_mobile__["a" /* default */].__scoped
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + ("jsx-".concat(__WEBPACK_IMPORTED_MODULE_9__frontend_styles_pages_home_mobile__["a" /* default */].__scopedHash) + " " + "inner-wrap flex column" || "")
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__frontend_components_pages_home_slider_slider__["a" /* default */], {
            ref: this.slider,
            current: this.state.slider.current,
            length: this.state.slider.length,
            updateCurrent: this.updateCurrent,
            isMobile: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 219
            }
          }))));
        } // else if ( this.props.device.isMobile ) {
        //     window.location = window.LIGHTWEIGHT;
        // }
        else {
            Content = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 253
              }
            }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 255
              },
              className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash)
            }, "Please use a bigger device"));
          }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: __WEBPACK_IMPORTED_MODULE_7__frontend_styles_pages_home_common__["a" /* default */].__scopedHash,
        css: __WEBPACK_IMPORTED_MODULE_7__frontend_styles_pages_home_common__["a" /* default */].__scoped
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "home-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        className: "jsx-".concat(__WEBPACK_IMPORTED_MODULE_8__frontend_styles_pages_home_desktop__["a" /* default */].__scopedHash) + " " + "jsx-".concat(__WEBPACK_IMPORTED_MODULE_7__frontend_styles_pages_home_common__["a" /* default */].__scopedHash)
      }, Content));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/Project.json":
/***/ (function(module, exports) {

module.exports = {"zwanzigGrad":{"meta":{"title":"Zwanzig Grad","category":"design","year":2017,"roles":["ui","ux","art direction"],"projectImg":"static/projects/zwanzig-grad/main.jpg"},"images":["static/projects/zwanzig-grad/page-images/","static/projects/zwanzig-grad/page-images/","static/projects/zwanzig-grad/page-images/","static/projects/zwanzig-grad/page-images/"]},"imSad":{"meta":{"title":"im sad","category":"frontend","year":2018,"roles":["fullstack dev","organisation","creative leading"],"projectImg":"static/projects/zwanzig-grad/main.jpg"}},"reciper":{"meta":{"title":"reciper","category":"fullstack","year":2019,"roles":["fullstack dev","organisation","creative leading"],"projectImg":"static/projects/zwanzig-grad/main.jpg"}}}

/***/ }),

/***/ "./static/slider/sizes.json":
/***/ (function(module, exports) {

module.exports = [{"width":2000,"height":1333},{"width":1600,"height":2000},{"width":1333,"height":2000}]

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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
//# sourceMappingURL=index.js.map