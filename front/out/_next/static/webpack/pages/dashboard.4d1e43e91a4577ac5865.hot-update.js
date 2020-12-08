webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _authentication_auth_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/auth.utils */ \"./authentication/auth.utils.js\");\n/* harmony import */ var _containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/DashboardLayout/DashboardLayout */ \"./containers/DashboardLayout/DashboardLayout.js\");\n/* harmony import */ var _containers_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/Widgets/Widgets */ \"./containers/Widgets/Widgets.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"../../node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/api/axios */ \"./pages/api/axios.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"../../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_socket_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/socket/actions */ \"./redux/socket/actions.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/sh1000/Documents/Project/devfloor/packages/front/pages/dashboard/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar socketClient = socket_io_client__WEBPACK_IMPORTED_MODULE_7___default()('https://elb.devfloors.com:443/deviceRoom', {\n  transports: ['websocket']\n});\nvar getTempData = _redux_socket_actions__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getTempData,\n    getHumData = _redux_socket_actions__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getHumData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_4__[\"withAuthSync\"])(_c = _s(function () {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"])(function (state) {\n    return state.Auth;\n  }),\n      userData = _useSelector.userData;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"])(function (state) {\n    return state.socketReducer;\n  }),\n      tempData = _useSelector2.tempData,\n      humData = _useSelector2.humData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      temp = _useState[0],\n      setTempData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      hum = _useState2[0],\n      setHumData = _useState2[1]; // useEffect(() => {\n  //   if (tempData) {\n  //     setTempData(tempData)\n  //   }\n  //   if (humData) {\n  //     setHumData(humData)\n  //   }\n  // }, [tempData, humData])\n\n\n  function socketConnect(userData) {\n    socketClient.on('connect', /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              console.log('socket connected');\n              socketClient.on('newRoom', function (data) {\n                if (userData.userId == data.userId) {\n                  Object.values(data.topics).map(function (v) {\n                    socketClient.on(\"\".concat(v), function (data) {\n                      switch (JSON.parse(data).dataType) {\n                        case 'Temp':\n                          dispatch(getTempData(JSON.parse(data).data)); // setTempData(JSON.parse(data).data)\n\n                          break;\n\n                        case 'Hum':\n                          dispatch(getHumData(JSON.parse(data).data)); // setHumData(JSON.parse(data).data)\n\n                          break;\n                      }\n                    });\n                  });\n                }\n              });\n              socketClient.on('disconnect', /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        console.log('접속 해제');\n\n                      case 1:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              })));\n              _context2.next = 5;\n              return _pages_api_axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/socket/room\", userData);\n\n            case 5:\n              result = _context2.sent;\n              dispatch(getTempData(result.datas[0]));\n              dispatch(getHumData(result.datas[1]));\n              console.log('userDAta', result);\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n  }\n\n  socketConnect(userData);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, \"Home page\")), __jsx(_containers_DashboardLayout_DashboardLayout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, __jsx(_containers_Widgets_Widgets__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  })));\n}, \"cQOUeGfaHlcK8wWf5PfErbPx5Rk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_9__[\"useSelector\"]];\n})));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$withAuthSync\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzP2U1NDkiXSwibmFtZXMiOlsic29ja2V0Q2xpZW50IiwiaW8iLCJ0cmFuc3BvcnRzIiwiZ2V0VGVtcERhdGEiLCJzb2NrZXRBY3Rpb25zIiwiZ2V0SHVtRGF0YSIsIndpdGhBdXRoU3luYyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiQXV0aCIsInVzZXJEYXRhIiwic29ja2V0UmVkdWNlciIsInRlbXBEYXRhIiwiaHVtRGF0YSIsInVzZVN0YXRlIiwidGVtcCIsInNldFRlbXBEYXRhIiwiaHVtIiwic2V0SHVtRGF0YSIsInNvY2tldENvbm5lY3QiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcklkIiwiT2JqZWN0IiwidmFsdWVzIiwidG9waWNzIiwibWFwIiwidiIsIkpTT04iLCJwYXJzZSIsImRhdGFUeXBlIiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwiZGF0YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBR0MsdURBQUUsQ0FBQywwQ0FBRCxFQUE2QztBQUFFQyxZQUFVLEVBQUUsQ0FBQyxXQUFEO0FBQWQsQ0FBN0MsQ0FBdkI7SUFFUUMsVyxHQUE0QkMsOEQsQ0FBNUJELFc7SUFBYUUsVSxHQUFlRCw4RCxDQUFmQyxVO0FBRU4scUVBQUFDLCtFQUFZLFNBQUMsWUFBTTtBQUFBOztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURnQyxxQkFHWEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FIQTtBQUFBLE1BR3hCQyxRQUh3QixnQkFHeEJBLFFBSHdCOztBQUFBLHNCQUlGSCwrREFBVyxDQUFD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QUFBLEdBQTNCIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgd2l0aEF1dGhTeW5jIH0gZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aC51dGlscyc7XG5pbXBvcnQgRGFzaGJvYXJkTGF5b3V0IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRGFzaGJvYXJkTGF5b3V0L0Rhc2hib2FyZExheW91dCc7XG5pbXBvcnQgV2lkZ2V0cyBmcm9tICcuLi8uLi9jb250YWluZXJzL1dpZGdldHMvV2lkZ2V0cyc7XG5cbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9wYWdlcy9hcGkvYXhpb3MnXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc29ja2V0QWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9zb2NrZXQvYWN0aW9ucydcblxuXG5jb25zdCBzb2NrZXRDbGllbnQgPSBpbygnaHR0cHM6Ly9lbGIuZGV2Zmxvb3JzLmNvbTo0NDMvZGV2aWNlUm9vbScsIHsgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSB9KTtcblxuY29uc3QgeyBnZXRUZW1wRGF0YSwgZ2V0SHVtRGF0YSB9ID0gc29ja2V0QWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGhTeW5jKCgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IHsgdXNlckRhdGEgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuQXV0aCk7XG4gIGNvbnN0IHsgdGVtcERhdGEsIGh1bURhdGEgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc29ja2V0UmVkdWNlcilcbiAgY29uc3QgW3RlbXAsIHNldFRlbXBEYXRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2h1bSwgc2V0SHVtRGF0YV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAodGVtcERhdGEpIHtcbiAgLy8gICAgIHNldFRlbXBEYXRhKHRlbXBEYXRhKVxuICAvLyAgIH1cbiAgLy8gICBpZiAoaHVtRGF0YSkge1xuICAvLyAgICAgc2V0SHVtRGF0YShodW1EYXRhKVxuICAvLyAgIH1cbiAgLy8gfSwgW3RlbXBEYXRhLCBodW1EYXRhXSlcblxuICBmdW5jdGlvbiBzb2NrZXRDb25uZWN0KHVzZXJEYXRhKSB7XG4gICAgc29ja2V0Q2xpZW50Lm9uKCdjb25uZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3NvY2tldCBjb25uZWN0ZWQnKTtcblxuICAgICAgc29ja2V0Q2xpZW50Lm9uKCduZXdSb29tJywgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHVzZXJEYXRhLnVzZXJJZCA9PSBkYXRhLnVzZXJJZCkge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS50b3BpY3MpLm1hcCgodikgPT4ge1xuICAgICAgICAgICAgc29ja2V0Q2xpZW50Lm9uKGAke3Z9YCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgc3dpdGNoIChKU09OLnBhcnNlKGRhdGEpLmRhdGFUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnVGVtcCc6XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChnZXRUZW1wRGF0YShKU09OLnBhcnNlKGRhdGEpLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgLy8gc2V0VGVtcERhdGEoSlNPTi5wYXJzZShkYXRhKS5kYXRhKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSHVtJzpcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGdldEh1bURhdGEoSlNPTi5wYXJzZShkYXRhKS5kYXRhKSlcbiAgICAgICAgICAgICAgICAgIC8vIHNldEh1bURhdGEoSlNPTi5wYXJzZShkYXRhKS5kYXRhKVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgc29ja2V0Q2xpZW50Lm9uKCdkaXNjb25uZWN0JywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn7KCR7IaNIO2VtOygnCcpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9zb2NrZXQvcm9vbWAsIHVzZXJEYXRhKTtcbiAgICAgIGRpc3BhdGNoKGdldFRlbXBEYXRhKHJlc3VsdC5kYXRhc1swXSkpXG4gICAgICBkaXNwYXRjaChnZXRIdW1EYXRhKHJlc3VsdC5kYXRhc1sxXSkpXG5cbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyREF0YScsIHJlc3VsdClcbiAgICB9KVxuICB9XG4gIHNvY2tldENvbm5lY3QodXNlckRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxEYXNoYm9hcmRMYXlvdXQ+XG4gICAgICAgIHsvKiA8Q2FyZCAvPiAqL31cbiAgICAgICAgPFdpZGdldHMgLz5cbiAgICAgIDwvRGFzaGJvYXJkTGF5b3V0PlxuICAgIDwvPlxuICApXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ })

})