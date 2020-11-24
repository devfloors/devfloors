webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./containers/Topbar/TopbarUser.js":
/*!*****************************************!*\
  !*** ./containers/Topbar/TopbarUser.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopbarUser; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/uielements/popover */ \"../../node_modules/@iso/components/uielements/popover.js\");\n/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/actions */ \"./authentication/actions.js\");\n/* harmony import */ var _TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopbarDropdown.styles */ \"./containers/Topbar/TopbarDropdown.styles.js\");\n/* harmony import */ var _iso_assets_images_devfloor_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/assets/images/devfloor.png */ \"../../node_modules/@iso/assets/images/devfloor.png\");\n/* harmony import */ var _iso_assets_images_devfloor_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_devfloor_png__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/sh1000/Documents/Project/devfloor/packages/front/containers/Topbar/TopbarUser.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar logout = _authentication_actions__WEBPACK_IMPORTED_MODULE_4__[\"default\"].logout;\n\nfunction TopbarUser() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      visible = _React$useState2[0],\n      setVisibility = _React$useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  function handleVisibleChange() {\n    setVisibility(function (visible) {\n      return !visible;\n    });\n  }\n\n  var content = __jsx(_TopbarDropdown_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"isoUserDropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: \"isoDropdownLink\",\n    onClick: function onClick() {\n      return dispatch(logout());\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Logout\"));\n\n  return __jsx(_iso_components_uielements_popover__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: content,\n    trigger: \"click\",\n    visible: visible,\n    onVisibleChange: handleVisibleChange,\n    arrowPointAtCenter: true,\n    placement: \"bottomLeft\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"isoImgWrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    alt: \"user\",\n    src: _iso_assets_images_devfloor_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"span\", {\n    className: \"userActivity online\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(TopbarUser, \"EFUS0EzoLRRVupK5d7a1BulvRzw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = TopbarUser;\n\nvar _c;\n\n$RefreshReg$(_c, \"TopbarUser\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Ub3BiYXIvVG9wYmFyVXNlci5qcz82MzQ4Il0sIm5hbWVzIjpbImxvZ291dCIsImF1dGhBY3Rpb24iLCJUb3BiYXJVc2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmlsaXR5IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZVZpc2libGVDaGFuZ2UiLCJjb250ZW50IiwidXNlcnBpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLE0sR0FBV0MsK0QsQ0FBWEQsTTtBQUNSO0FBRWUsU0FBU0UsVUFBVCxHQUFzQjtBQUFBOztBQUFBLHdCQUNGQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURFO0FBQUE7QUFBQSxNQUM1QkMsT0FENEI7QUFBQSxNQUNuQkMsYUFEbUI7O0FBRW5DLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EsV0FBU0MsbUJBQVQsR0FBK0I7QUFDN0JILGlCQUFhLENBQUMsVUFBQUQsT0FBTztBQUFBLGFBQUksQ0FBQ0EsT0FBTDtBQUFBLEtBQVIsQ0FBYjtBQUNEOztBQUVELE1BQU1LLE9BQU8sR0FDWCxNQUFDLDhEQUFEO0FBQXVCLGFBQVMsRUFBQyxpQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQStCLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFFBQVEsQ0FBQ1AsTUFBTSxFQUFQLENBQWQ7QUFBQSxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsQ0FERjs7QUFXQSxTQUNFLE1BQUMsMEVBQUQ7QUFDRSxXQUFPLEVBQUVVLE9BRFg7QUFFRSxXQUFPLEVBQUMsT0FGVjtBQUdFLFdBQU8sRUFBRUwsT0FIWDtBQUlFLG1CQUFlLEVBQUVJLG1CQUpuQjtBQUtFLHNCQUFrQixFQUFFLElBTHRCO0FBTUUsYUFBUyxFQUFDLFlBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLE1BQVQ7QUFBZ0IsT0FBRyxFQUFFRSxzRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVJGLENBREY7QUFlRDs7R0FqQ3VCVCxVO1VBRUxNLHVEOzs7S0FGS04sVSIsImZpbGUiOiIuL2NvbnRhaW5lcnMvVG9wYmFyL1RvcGJhclVzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9wb3BvdmVyJztcbmltcG9ydCBhdXRoQWN0aW9uIGZyb20gJy4uLy4uL2F1dGhlbnRpY2F0aW9uL2FjdGlvbnMnO1xuaW1wb3J0IFRvcGJhckRyb3Bkb3duV3JhcHBlciBmcm9tICcuL1RvcGJhckRyb3Bkb3duLnN0eWxlcyc7XG5cbmNvbnN0IHsgbG9nb3V0IH0gPSBhdXRoQWN0aW9uO1xuaW1wb3J0IHVzZXJwaWMgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2RldmZsb29yLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGJhclVzZXIoKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmlsaXR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBmdW5jdGlvbiBoYW5kbGVWaXNpYmxlQ2hhbmdlKCkge1xuICAgIHNldFZpc2liaWxpdHkodmlzaWJsZSA9PiAhdmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxUb3BiYXJEcm9wZG93bldyYXBwZXIgY2xhc3NOYW1lPVwiaXNvVXNlckRyb3Bkb3duXCI+XG4gICAgICB7LyogPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaW5rXCI+U2V0dGluZ3M8L2E+XG4gICAgICA8YSBjbGFzc05hbWU9XCJpc29Ecm9wZG93bkxpbmtcIj5GZWVkYmFjazwvYT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImlzb0Ryb3Bkb3duTGlua1wiPkhlbHA8L2E+ICovfVxuICAgICAgPGEgY2xhc3NOYW1lPVwiaXNvRHJvcGRvd25MaW5rXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2gobG9nb3V0KCkpfT5cbiAgICAgICAgTG9nb3V0XG4gICAgICA8L2E+XG4gICAgPC9Ub3BiYXJEcm9wZG93bldyYXBwZXI+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgY29udGVudD17Y29udGVudH1cbiAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgb25WaXNpYmxlQ2hhbmdlPXtoYW5kbGVWaXNpYmxlQ2hhbmdlfVxuICAgICAgYXJyb3dQb2ludEF0Q2VudGVyPXt0cnVlfVxuICAgICAgcGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29JbWdXcmFwcGVyXCI+XG4gICAgICAgIDxpbWcgYWx0PVwidXNlclwiIHNyYz17dXNlcnBpY30gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlckFjdGl2aXR5IG9ubGluZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BvcG92ZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/Topbar/TopbarUser.js\n");

/***/ })

})