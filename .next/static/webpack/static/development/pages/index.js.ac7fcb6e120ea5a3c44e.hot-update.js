webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        className: "jsx-1982460010" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-1982460010",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        id: "title",
        className: "jsx-1982460010",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Promodoro Music Timer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "menu",
        className: "jsx-1982460010",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        onClick: function onClick() {},
        width: "60",
        height: "60",
        src: "/static/settings.png",
        className: "jsx-1982460010" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "player",
        className: "jsx-1982460010",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3393996419",
        css: "div.container.jsx-1982460010{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#f95f62;}main.jsx-1982460010{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}h1#title.jsx-1982460010{color:#fff;text-align:center;}div#menu.jsx-1982460010{background-color:#eeeeee38;width:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0;}#menu.jsx-1982460010>.icon.jsx-1982460010{-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);cursor:pointer;}#menu.jsx-1982460010>.icon.jsx-1982460010:hover{-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);}#player.jsx-1982460010{position:fixed;bottom:0;right:0;margin:20px;box-shadow:1px 1px 3px 1px #333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEb0IsQUFHK0IsQUFVTixBQUdELEFBSWdCLEFBU0UsQUFLSCxBQUdYLFdBcEJHLElBcUJULEdBbENILE1BQ0csQUFrQ0QsR0FsQkksRUFIZCxHQXNCYyxDQWxDTCxNQWdCTSxDQWZMLElBa0N3QixJQWpDbkIsa0JBc0JTLEtBaEJ4QixLQTRCQSxXQVBBLDBCQVp3QixTQWRILG1CQXNCSixlQUNqQixtQ0F0QjJCLEFBY0UseUJBYjdCLGdGQWNxQiw2RkFDSixlQUNqQiIsImZpbGUiOiIvVXNlcnMvYmFycnkvRG9jdW1lbnRzL1dvcmtzL211c2ljLXByb21vZG9yby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTZXR0aW5nIHVwIFlvdXR1YmUgaWZyYW1lXG4gICAgd2luZG93Lm9uWW91VHViZVBsYXllckFQSVJlYWR5ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgd2luZG93LllULlBsYXllcihcInBsYXllclwiLCB7XG4gICAgICAgIGhlaWdodDogXCIxMDBcIixcbiAgICAgICAgd2lkdGg6IFwiMTgwXCIsXG4gICAgICAgIHZpZGVvSWQ6IFwiZWxzaDNKNWxKNmdcIixcbiAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgIGNvbnRyb2xzOiAwLFxuICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIG9uUmVhZHk6IHRoaXMub25QbGF5ZXJSZWFkeSxcbiAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uUGxheWVyU3RhdGVDaGFuZ2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIG9uUGxheWVyUmVhZHkgPSBlID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlYWR5XCIpO1xuICB9O1xuXG4gIG9uUGxheWVyU3RhdGVDaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+UHJvbW9kb3JvIE11c2ljIFRpbWVyPC9oMT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGlkPVwibWVudVwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICB3aWR0aD1cIjYwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYwXCJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvc2V0dGluZ3MucG5nXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBsYXllclwiIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NWY2MjtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxI3RpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYjbWVudSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlMzg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZW51ID4gLmljb24ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbWVudSA+IC5pY29uOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxheWVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHbG9yaWEgSGFsbGVsdWphaFwiLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/barry/Documents/Works/music-promodoro/pages/index.js */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4213952704",
        css: "*{font-family:\"Gloria Hallelujah\",cursive;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHMkIsQUFHc0Qsd0NBQzNDIiwiZmlsZSI6Ii9Vc2Vycy9iYXJyeS9Eb2N1bWVudHMvV29ya3MvbXVzaWMtcHJvbW9kb3JvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFNldHRpbmcgdXAgWW91dHViZSBpZnJhbWVcbiAgICB3aW5kb3cub25Zb3VUdWJlUGxheWVyQVBJUmVhZHkgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyB3aW5kb3cuWVQuUGxheWVyKFwicGxheWVyXCIsIHtcbiAgICAgICAgaGVpZ2h0OiBcIjEwMFwiLFxuICAgICAgICB3aWR0aDogXCIxODBcIixcbiAgICAgICAgdmlkZW9JZDogXCJlbHNoM0o1bEo2Z1wiLFxuICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgb25SZWFkeTogdGhpcy5vblBsYXllclJlYWR5LFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgb25QbGF5ZXJSZWFkeSA9IGUgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XG4gIH07XG5cbiAgb25QbGF5ZXJTdGF0ZUNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChldmVudC5kYXRhID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGgxIGlkPVwidGl0bGVcIj5Qcm9tb2Rvcm8gTXVzaWMgVGltZXI8L2gxPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgaWQ9XCJtZW51XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cbiAgICAgICAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9zZXR0aW5ncy5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicGxheWVyXCIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk1ZjYyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEjdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiNtZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUzODtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21lbnUgPiAuaWNvbiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtZW51ID4gLmljb246aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbGF5ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdsb3JpYSBIYWxsZWx1amFoXCIsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/barry/Documents/Works/music-promodoro/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ac7fcb6e120ea5a3c44e.hot-update.js.map