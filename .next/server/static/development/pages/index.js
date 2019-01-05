module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/barry/Documents/Works/pomodoro-music-timer/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPlayerReady", function (e) {
      console.log("ready");

      var duration = _this.player.getDuration();

      _this.setState({
        totalSec: duration,
        curentSec: duration
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPlayerStateChange", function (e) {
      if (event.data === 0) {
        console.log("done");
        clearInterval(_this.timer);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "covertSecToMinSec", function (curentSec) {
      var min = Math.floor(curentSec / 60);
      var sec = curentSec % 60;
      return "".concat(min < 10 ? "0".concat(min) : min, ":").concat(sec < 10 ? "0".concat(sec) : sec);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStart", function () {
      if (_this.player) {
        _this.player.playVideo();

        _this.timer = setInterval(_this.handleCountDown, 1000);

        _this.setState({
          isPlaying: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCountDown", function () {
      var curentSec = _this.state.curentSec;

      if (curentSec > 0) {
        _this.setState({
          curentSec: curentSec - 1
        });
      } else {
        clearInterval(_this.timer);
      }
    });

    _this.state = {
      isPlaying: false,
      curentSec: 0,
      totalSec: 0
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Setting up Youtube iframe
      window.onYouTubePlayerAPIReady = function () {
        _this2.player = new window.YT.Player("player", {
          height: "100",
          width: "180",
          videoId: "elsh3J5lJ6g",
          playerVars: {
            controls: 0,
            modestbranding: 1
          },
          events: {
            onReady: _this2.onPlayerReady,
            onStateChange: _this2.onPlayerStateChange
          }
        });
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          totalSec = _this$state.totalSec,
          curentSec = _this$state.curentSec,
          isPlaying = _this$state.isPlaying;
      var percent = 180 - Math.floor(170 * ((totalSec - curentSec) / totalSec));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2177284897" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Pomodoro Music Timer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "timer",
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.covertSecToMinSec(curentSec)), !isPlaying && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleStart,
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: "relative",
          width: 242,
          height: 210
        },
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "tomato-fill",
        style: {
          backgroundPosition: "0px ".concat(!isPlaying ? 180 : percent, "px")
        },
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        id: "tomato",
        src: "/static/tomato.svg",
        width: "242",
        height: "210",
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "menu",
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-2177284897" + " " + "fas fa-cog icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "jsx-2177284897" + " " + "fas fa-music icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "player",
        className: "jsx-2177284897",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2535251528",
        css: "div.container.jsx-2177284897{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#f95f62;}header.jsx-2177284897{position:absolute;top:0;}main.jsx-2177284897{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}#tomato.jsx-2177284897{position:absolute;top:0;}#tomato-fill.jsx-2177284897{position:relative;top:10px;left:12px;width:216px;height:190px;border-radius:50%;background:url(https://www.colorhexa.com/b5e98b.png);background-repeat:repeat-x;background-size:cover;}#timer.jsx-2177284897{color:#a5e98b;font-size:56px;text-align:center;}#title.jsx-2177284897{color:#fff;text-align:center;}#menu.jsx-2177284897{position:absolute;right:0;bottom:0;top:0;background-color:#eeeeee38;width:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px 0;}#menu.jsx-2177284897>.icon.jsx-2177284897{-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);cursor:pointer;font-size:36px;color:#fff;margin-bottom:40px;}#menu.jsx-2177284897>.icon.jsx-2177284897:hover{-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);}#player.jsx-2177284897{position:fixed;bottom:0;right:0;margin:20px;box-shadow:1px 1px 3px 1px #333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvcG9tb2Rvcm8tbXVzaWMtdGltZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dvQixBQUcrQixBQVVBLEFBSUwsQUFPSyxBQUlBLEFBV0osQUFLSCxBQUlPLEFBYVcsQUFRSCxBQUdYLFdBM0JHLEdBTEgsQ0FpQ04sR0FyRUgsQUFVQSxBQVdBLEFBSUcsQUFvQkQsTUE1Q0MsQUFVWCxBQVdBLEFBZ0RVLEVBeEJDLENBcEJDLEVBV1EsQUFLcEIsR0E2QmMsQ0FyRUwsRUE2Q0QsRUFwQk0sR0F4QkosQ0E2Q21CLEdBd0JLLEdBbENsQyxDQWxDZSxDQXdCQSxhQUNLLElBNkJJLEVBVFYsTUFuQ1UsRUEyRHhCLElBM0N1RCxBQW9CeEMsT0FnQmYsbUNBN0RxQixXQTBCUSxRQTRCWixXQTVDUSxFQW9DRCxFQVNQLElBNUJPLFdBNkJYLFdBNUJiLEFBNkJxQixTQXhETSxVQXlEM0IsZUF4REEsZ0JBNkM2QixtQkFwQ1Isc0ZBcUNBLE9BcENQLHVFQUNkLGVBb0NpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYmFycnkvRG9jdW1lbnRzL1dvcmtzL3BvbW9kb3JvLW11c2ljLXRpbWVyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1BsYXlpbmc6IGZhbHNlLFxuICAgICAgY3VyZW50U2VjOiAwLFxuICAgICAgdG90YWxTZWM6IDBcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU2V0dGluZyB1cCBZb3V0dWJlIGlmcmFtZVxuICAgIHdpbmRvdy5vbllvdVR1YmVQbGF5ZXJBUElSZWFkeSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHdpbmRvdy5ZVC5QbGF5ZXIoXCJwbGF5ZXJcIiwge1xuICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgIHdpZHRoOiBcIjE4MFwiLFxuICAgICAgICB2aWRlb0lkOiBcImVsc2gzSjVsSjZnXCIsXG4gICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMVxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgb25TdGF0ZUNoYW5nZTogdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBvblBsYXllclJlYWR5ID0gZSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZWFkeVwiKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMucGxheWVyLmdldER1cmF0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsU2VjOiBkdXJhdGlvbiwgY3VyZW50U2VjOiBkdXJhdGlvbiB9KTtcbiAgfTtcblxuICBvblBsYXllclN0YXRlQ2hhbmdlID0gZSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuICB9O1xuXG4gIGNvdmVydFNlY1RvTWluU2VjID0gY3VyZW50U2VjID0+IHtcbiAgICBjb25zdCBtaW4gPSBNYXRoLmZsb29yKGN1cmVudFNlYyAvIDYwKTtcbiAgICBjb25zdCBzZWMgPSBjdXJlbnRTZWMgJSA2MDtcbiAgICByZXR1cm4gYCR7bWluIDwgMTAgPyBgMCR7bWlufWAgOiBtaW59OiR7c2VjIDwgMTAgPyBgMCR7c2VjfWAgOiBzZWN9YDtcbiAgfTtcblxuICBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuaGFuZGxlQ291bnREb3duLCAxMDAwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1BsYXlpbmc6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNvdW50RG93biA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cmVudFNlYyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoY3VyZW50U2VjID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cmVudFNlYzogY3VyZW50U2VjIC0gMSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvdGFsU2VjLCBjdXJlbnRTZWMsIGlzUGxheWluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwZXJjZW50ID0gMTgwIC0gTWF0aC5mbG9vcigxNzAgKiAoKHRvdGFsU2VjIC0gY3VyZW50U2VjKSAvIHRvdGFsU2VjKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlBvbW9kb3JvIE11c2ljIFRpbWVyPC9oMT5cbiAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICA8ZGl2IGlkPVwidGltZXJcIj57dGhpcy5jb3ZlcnRTZWNUb01pblNlYyhjdXJlbnRTZWMpfTwvZGl2PlxuICAgICAgICAgIHshaXNQbGF5aW5nICYmIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdGFydH0+U3RhcnQ8L2J1dHRvbj59XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogMjQyLCBoZWlnaHQ6IDIxMCB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJ0b21hdG8tZmlsbFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBgMHB4ICR7IWlzUGxheWluZyA/IDE4MCA6IHBlcmNlbnR9cHhgXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBpZD1cInRvbWF0b1wiXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvdG9tYXRvLnN2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjQyXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjEwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29nIGljb25cIiAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tdXNpYyBpY29uXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXJcIiAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTVmNjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0b21hdG8ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdG9tYXRvLWZpbGwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cuY29sb3JoZXhhLmNvbS9iNWU5OGIucG5nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0aW1lciB7XG4gICAgICAgICAgICBjb2xvcjogI2E1ZTk4YjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUzODtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21lbnUgPiAuaWNvbiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZW51ID4gLmljb246aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbGF5ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdsb3JpYSBIYWxsZWx1amFoXCIsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/barry/Documents/Works/pomodoro-music-timer/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4213952704",
        css: "*{font-family:\"Gloria Hallelujah\",cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvcG9tb2Rvcm8tbXVzaWMtdGltZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0wyQixBQUdzRCx3Q0FDM0MiLCJmaWxlIjoiL1VzZXJzL2JhcnJ5L0RvY3VtZW50cy9Xb3Jrcy9wb21vZG9yby1tdXNpYy10aW1lci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNQbGF5aW5nOiBmYWxzZSxcbiAgICAgIGN1cmVudFNlYzogMCxcbiAgICAgIHRvdGFsU2VjOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldHRpbmcgdXAgWW91dHViZSBpZnJhbWVcbiAgICB3aW5kb3cub25Zb3VUdWJlUGxheWVyQVBJUmVhZHkgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyB3aW5kb3cuWVQuUGxheWVyKFwicGxheWVyXCIsIHtcbiAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICB3aWR0aDogXCIxODBcIixcbiAgICAgICAgdmlkZW9JZDogXCJlbHNoM0o1bEo2Z1wiLFxuICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgb25SZWFkeTogdGhpcy5vblBsYXllclJlYWR5LFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgb25QbGF5ZXJSZWFkeSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnBsYXllci5nZXREdXJhdGlvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFNlYzogZHVyYXRpb24sIGN1cmVudFNlYzogZHVyYXRpb24gfSk7XG4gIH07XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChldmVudC5kYXRhID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb3ZlcnRTZWNUb01pblNlYyA9IGN1cmVudFNlYyA9PiB7XG4gICAgY29uc3QgbWluID0gTWF0aC5mbG9vcihjdXJlbnRTZWMgLyA2MCk7XG4gICAgY29uc3Qgc2VjID0gY3VyZW50U2VjICUgNjA7XG4gICAgcmV0dXJuIGAke21pbiA8IDEwID8gYDAke21pbn1gIDogbWlufToke3NlYyA8IDEwID8gYDAke3NlY31gIDogc2VjfWA7XG4gIH07XG5cbiAgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLmhhbmRsZUNvdW50RG93biwgMTAwMCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNQbGF5aW5nOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDb3VudERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJlbnRTZWMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGN1cmVudFNlYyA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJlbnRTZWM6IGN1cmVudFNlYyAtIDEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b3RhbFNlYywgY3VyZW50U2VjLCBpc1BsYXlpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcGVyY2VudCA9IDE4MCAtIE1hdGguZmxvb3IoMTcwICogKCh0b3RhbFNlYyAtIGN1cmVudFNlYykgLyB0b3RhbFNlYykpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5Qb21vZG9ybyBNdXNpYyBUaW1lcjwvaDE+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGRpdiBpZD1cInRpbWVyXCI+e3RoaXMuY292ZXJ0U2VjVG9NaW5TZWMoY3VyZW50U2VjKX08L2Rpdj5cbiAgICAgICAgICB7IWlzUGxheWluZyAmJiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RhcnR9PlN0YXJ0PC9idXR0b24+fVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IDI0MiwgaGVpZ2h0OiAyMTAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwidG9tYXRvLWZpbGxcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYDBweCAkeyFpc1BsYXlpbmcgPyAxODAgOiBwZXJjZW50fXB4YFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgaWQ9XCJ0b21hdG9cIlxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL3RvbWF0by5zdmdcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjI0MlwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIxMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgaWQ9XCJtZW51XCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvZyBpY29uXCIgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbXVzaWMgaWNvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGxheWVyXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk1ZjYyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdG9tYXRvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RvbWF0by1maWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LmNvbG9yaGV4YS5jb20vYjVlOThiLnBuZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdGltZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhNWU5OGI7XG4gICAgICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlMzg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZW51ID4gLmljb24ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSA+IC5pY29uOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxheWVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHbG9yaWEgSGFsbGVsdWphaFwiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/barry/Documents/Works/pomodoro-music-timer/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map