webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Techfolio/Technolgyfolio.jsx":
/*!*************************************************!*\
  !*** ./components/Techfolio/Technolgyfolio.jsx ***!
  \*************************************************/
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
/* harmony import */ var _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/TechData.js */ "./components/Data/TechData.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/decorations/blob2 */ "./components/images/decorations/blob2.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/folios/techstackimage */ "./components/images/folios/techstackimage.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Techfolio/Technolgyfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var TechnoPortfolio = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TechnoPortfolio, _Component);

  var _super = _createSuper(TechnoPortfolio);

  function TechnoPortfolio(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TechnoPortfolio);

    _this = _super.call(this, props);
    _this.state = {
      tech: _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TechnoPortfolio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tech = this.state.tech;
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
          lineNumber: 41,
          columnNumber: 1
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }
      }, " ", __jsx("div", {
        className: "text-indigo-400 text-bold text-center text-3xl md:text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }
      }, " Tech-Stack "), " "), __jsx("div", {
        className: "-my-8 mx-auto w-2/3 md:w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 8
        }
      }, " ", __jsx(_images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 55
        }
      }), "  "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["MobileOnly"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: styles.root,
        slideStyle: styles.slideContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 12
        }
      }, tech.map(function (_ref) {
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
            lineNumber: 48,
            columnNumber: 23
          }
        });
      }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["PreviewContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, tech.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            description = _ref2.description,
            imageUrl = _ref2.imageUrl;
        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 27
          }
        });
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, " ", __jsx(_images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 76
        }
      }), " "));
    }
  }]);

  return TechnoPortfolio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TechnoPortfolio);

/***/ })

})
//# sourceMappingURL=index.js.f8d0eee30293766e690e.hot-update.js.map