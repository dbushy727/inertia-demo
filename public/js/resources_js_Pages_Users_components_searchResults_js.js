(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_components_searchResults_js"],{

/***/ "./resources/js/Pages/Users/components/searchResults.js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Users/components/searchResults.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var radiance_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! radiance-ui */ "./node_modules/radiance-ui/dist/bundle-es/shared-components/container/style.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






var SearchResults = function SearchResults(_ref) {
  var users = _ref.users;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(radiance_ui__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "ID"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "Name"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
          children: "Email"
        })
      })]
    }), users.map(function (user) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: user.id
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: user.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: user.email
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './style'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InertiaLink, {
            href: route('users.show', {
              user: user.id
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ArrowRightIcon, {})
          })
        })]
      }, user.id);
    })]
  });
};

/***/ })

}]);