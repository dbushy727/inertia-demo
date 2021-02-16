(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Style_js"],{

/***/ "./resources/js/Pages/Users/Style.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Users/Style.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "Cell": () => (/* binding */ Cell),
/* harmony export */   "RightAlignedCell": () => (/* binding */ RightAlignedCell)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var radiance_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radiance-ui */ "./node_modules/radiance-ui/dist/bundle-es/shared-components/container/style.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\twidth: 25%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tborder-bottom: 1px solid ", ";\n\n\t&:last-child {\n\t\tborder-bottom: none;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Row = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default)(radiance_ui__WEBPACK_IMPORTED_MODULE_1__.Container.Section)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.COLORS.border;
});
var Cell = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject2());
var RightAlignedCell = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default)(Cell)(_templateObject3());

/***/ })

}]);