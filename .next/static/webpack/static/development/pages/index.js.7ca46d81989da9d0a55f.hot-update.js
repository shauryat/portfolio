webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/projectfolio/Portfolio.jsx":
/*!***********************************************!*\
  !*** ./components/projectfolio/Portfolio.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/decorations/blob1 */ "./components/images/decorations/blob1.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/folios/projectimage */ "./components/images/folios/projectimage.js");





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/projectfolio/Portfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Portfolio = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Portfolio, _Component);

  var _super = _createSuper(Portfolio);

  function Portfolio(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Portfolio);

    _this = _super.call(this, props);
    _this.state = {
      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Portfolio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var projects = this.state.projects;
      var styles = {
        root: {
          padding: '0 2rem',
          marginLeft: '-0.9rem'
        },
        slideContainer: {
          marginLeft: '-0.2rem'
        }
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }
      }, " ", __jsx("div", {
        className: "text-teal-400 text-bold text-center text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 20
        }
      }, " Projects "), " "), __jsx("div", {
        className: "my-4 mx-auto w-2/3 md:w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, " ", __jsx(_images_folios_projectimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 53
        }
      }), " "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["PreviewContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, projects.map(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            description = _ref.description,
            imageUrl = _ref.imageUrl;
        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 27
          }
        });
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, " ", __jsx(_images_decorations_blob1__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 76
        }
      }), " "));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ })

})
//# sourceMappingURL=index.js.7ca46d81989da9d0a55f.hot-update.js.map