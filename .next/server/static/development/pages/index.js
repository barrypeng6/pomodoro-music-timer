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
var _jsxFileName = "/Users/barry/Documents/Works/music-promodoro/pages/index.js";


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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPlayerStateChange", function (e) {
      if (event.data === 0) {
        console.log("done");
      }
    });

    _this.state = {};
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
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-773225811" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Pomodoro Music Timer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "tomato-fill",
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        id: "tomato",
        src: "/static/tomato.svg",
        width: "242",
        height: "210",
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "menu",
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        onClick: function onClick() {},
        width: "60",
        height: "60",
        src: "/static/settings.png",
        className: "jsx-773225811" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "player",
        className: "jsx-773225811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "929344154",
        css: "div.container.jsx-773225811{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#f95f62;}main.jsx-773225811{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}#tomato.jsx-773225811{position:absolute;}#tomato-fill.jsx-773225811{position:absolute;top:10px;left:12px;width:216px;height:190px;border-radius:50%;background:url(https://png.pngtree.com/thumb_back/fw800/back_pic/04/09/27/5458156b6e9481f.jpg);background-position:0px 160px;background-repeat:repeat-x;-webkit-animation:filling-jsx-773225811 5s linear infinite;animation:filling-jsx-773225811 5s linear infinite;background-size:cover;}@-webkit-keyframes filling-jsx-773225811{100%{background-position:1800px 10px;}}@keyframes filling-jsx-773225811{100%{background-position:1800px 10px;}}#title.jsx-773225811{color:#fff;text-align:center;}#menu.jsx-773225811{background-color:#eeeeee38;width:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0;}#menu.jsx-773225811>.icon.jsx-773225811{-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);cursor:pointer;}#menu.jsx-773225811>.icon.jsx-773225811:hover{-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);}#player.jsx-773225811{position:fixed;bottom:0;right:0;margin:20px;box-shadow:1px 1px 3px 1px #333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHK0IsQUFVTixBQUdNLEFBR0EsQUFhbUIsQUFHMUIsQUFJZ0IsQUFTRSxBQUtILEFBR1gsV0FwQkcsSUFxQlQsR0FyREgsQUFhUixBQUdXLE1BZkEsQUFxREQsR0FyQ0UsQUFtQkUsRUFIZCxHQUx3QyxBQTJCMUIsQ0FyREwsSUFnQkssRUFtQkMsQ0FsQ0wsSUFxRHdCLElBcERuQixDQWVBLGFBQ0ssSUF5QkksS0FuQ3hCLEtBK0NBLElBcENpRyxPQTZCakcsMEJBWndCLFNBakNILG1CQXlDSixlQUNqQixtQkF6QmdDLGdCQWhCTCxBQWlDRSxjQWhCQSxXQWhCN0IsZ0JBaUJ1QyxnRUFnQmxCLDhDQWZHLHNCQUN4Qix5QkFlaUIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2JhcnJ5L0RvY3VtZW50cy9Xb3Jrcy9tdXNpYy1wcm9tb2Rvcm8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gU2V0dGluZyB1cCBZb3V0dWJlIGlmcmFtZVxuICAgIHdpbmRvdy5vbllvdVR1YmVQbGF5ZXJBUElSZWFkeSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IHdpbmRvdy5ZVC5QbGF5ZXIoXCJwbGF5ZXJcIiwge1xuICAgICAgICBoZWlnaHQ6IFwiMTAwXCIsXG4gICAgICAgIHdpZHRoOiBcIjE4MFwiLFxuICAgICAgICB2aWRlb0lkOiBcImVsc2gzSjVsSjZnXCIsXG4gICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICBjb250cm9sczogMCxcbiAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMVxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgb25TdGF0ZUNoYW5nZTogdGhpcy5vblBsYXllclN0YXRlQ2hhbmdlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBvblBsYXllclJlYWR5ID0gZSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyZWFkeVwiKTtcbiAgfTtcblxuICBvblBsYXllclN0YXRlQ2hhbmdlID0gZSA9PiB7XG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlBvbW9kb3JvIE11c2ljIFRpbWVyPC9oMT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgPGRpdiBpZD1cInRvbWF0by1maWxsXCI+PC9kaXY+XG4gICAgICAgICAgICA8aW1nIGlkPVwidG9tYXRvXCIgc3JjPVwiL3N0YXRpYy90b21hdG8uc3ZnXCIgd2lkdGg9XCIyNDJcIiBoZWlnaHQ9XCIyMTBcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgICAgd2lkdGg9XCI2MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2MFwiXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL3NldHRpbmdzLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJwbGF5ZXJcIiAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTVmNjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdG9tYXRvIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RvbWF0by1maWxsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMjE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL3RodW1iX2JhY2svZnc4MDAvYmFja19waWMvMDQvMDkvMjcvNTQ1ODE1NmI2ZTk0ODFmLmpwZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMTYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICAgICAgICBhbmltYXRpb246IGZpbGxpbmcgNXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBmaWxsaW5nIHtcbiAgICAgICAgICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246IDE4MDBweCAxMHB4O31cbiAgICAgICAgICB9XG4gICAgICAgICAgI3RpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlMzg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZW51ID4gLmljb24ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSA+IC5pY29uOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxheWVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHbG9yaWEgSGFsbGVsdWphaFwiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/barry/Documents/Works/music-promodoro/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4213952704",
        css: "*{font-family:\"Gloria Hallelujah\",cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIMkIsQUFHc0Qsd0NBQzNDIiwiZmlsZSI6Ii9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldHRpbmcgdXAgWW91dHViZSBpZnJhbWVcbiAgICB3aW5kb3cub25Zb3VUdWJlUGxheWVyQVBJUmVhZHkgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyB3aW5kb3cuWVQuUGxheWVyKFwicGxheWVyXCIsIHtcbiAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICB3aWR0aDogXCIxODBcIixcbiAgICAgICAgdmlkZW9JZDogXCJlbHNoM0o1bEo2Z1wiLFxuICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgb25SZWFkeTogdGhpcy5vblBsYXllclJlYWR5LFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgb25QbGF5ZXJSZWFkeSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XG4gIH07XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChldmVudC5kYXRhID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5Qb21vZG9ybyBNdXNpYyBUaW1lcjwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b21hdG8tZmlsbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGltZyBpZD1cInRvbWF0b1wiIHNyYz1cIi9zdGF0aWMvdG9tYXRvLnN2Z1wiIHdpZHRoPVwiMjQyXCIgaGVpZ2h0PVwiMjEwXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgaWQ9XCJtZW51XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cbiAgICAgICAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9zZXR0aW5ncy5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGxheWVyXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk1ZjYyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RvbWF0byB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0b21hdG8tZmlsbCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDIxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3BuZy5wbmd0cmVlLmNvbS90aHVtYl9iYWNrL2Z3ODAwL2JhY2tfcGljLzA0LzA5LzI3LzU0NTgxNTZiNmU5NDgxZi5qcGcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDE2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmaWxsaW5nIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgZmlsbGluZyB7XG4gICAgICAgICAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxODAwcHggMTBweDt9XG4gICAgICAgICAgfVxuICAgICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTM4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSA+IC5pY29uIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21lbnUgPiAuaWNvbjpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BsYXllciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2xvcmlhIEhhbGxlbHVqYWhcIiwgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/barry/Documents/Works/music-promodoro/pages/index.js */",
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