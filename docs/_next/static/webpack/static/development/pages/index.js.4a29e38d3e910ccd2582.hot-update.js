webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/utils */ \"./src/lib/utils/utils.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/d3-locale */ \"./node_modules/@reuters-graphics/d3-locale/dist/index.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default.a();\n\nvar StackedAreaChart = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(StackedAreaChart, _ChartComponent);\n\n  var _super = _createSuper(StackedAreaChart);\n\n  function StackedAreaChart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, StackedAreaChart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      stroke: '#2f353f',\n      stroke_width: 0.5,\n      fills: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0.25)'],\n      margin: {\n        left: 10,\n        right: 35,\n        top: 20,\n        bottom: 20\n      },\n      height: 300,\n      avg_days: 7,\n      locale: 'en',\n      absolute: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(StackedAreaChart, [{\n    key: \"draw\",\n    value: function draw() {\n      var dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\n      var dateFormatBack = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%Y-%m-%d');\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n      var locale = new _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default.a(props.locale);\n      var dateFormat = locale.formatTime('%B');\n      var dateFormatMobile = locale.formatTime('%b');\n      var formatPer = locale.format('.0%');\n      var formatNum = locale.format(',');\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var reshapedData = [];\n      var regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"uniq\"])(data.map(function (d) {\n        return d.region;\n      }));\n      var dateWise = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nest().key(function (d) {\n        return d.date;\n      }).entries(data);\n      dateWise.forEach(function (d, index) {\n        var obj = {\n          date: dateParse(d.key),\n          total: _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sum(d.values, function (e) {\n            return e.count;\n          })\n        };\n        regionList.forEach(function (e) {\n          return obj[e] = 0;\n        });\n        d.values.forEach(function (e) {\n          obj[e.region] = e.count;\n        });\n        reshapedData.push(obj);\n      });\n      reshapedData = reshapedData.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__[\"compareValues\"])('date'));\n      reshapedData.forEach(function (d, index) {\n        regionList.forEach(function (e) {\n          d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n            return +f[e];\n          }); // avg calc\n\n          if (!d['mean_' + e]) {\n            d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n              return +f[e];\n            });\n          }\n\n          if (index === 0) {\n            d['mean_' + e] = d[e];\n          }\n        });\n        d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n          return +f.total;\n        }); // avg calc\n\n        if (!d.mean_total) {\n          d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n            return +f.total;\n          });\n        }\n\n        if (index === 0) {\n          d.mean_total = d.total;\n        }\n      });\n      var maxData = reshapedData[reshapedData.length - 1];\n      var meanList = regionList.map(function (d) {\n        return 'mean_' + d;\n      });\n      regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"sortBy\"])(meanList, function (d) {\n        return +maxData[d];\n      });\n      var seriesDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].stack().keys(regionList)(reshapedData);\n      var scaleX = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleTime().range([0, width - props.margin.left - props.margin.right]).domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(reshapedData, function (d) {\n        return d.date;\n      }));\n      var scaleYPer = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, 1]);\n      var scaleYNum = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(reshapedData, function (d) {\n        return d.mean_total;\n      })]);\n      var areaDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().x(function (d) {\n        return scaleX(d.data.date);\n      }).y0(function (d) {\n        return props.absolute ? scaleYNum(d[0]) : scaleYPer(d[0] / d.data.mean_total);\n      }).y1(function (d) {\n        return props.absolute ? scaleYNum(d[1]) : scaleYPer(d[1] / d.data.mean_total);\n      }).curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveMonotoneX);\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750);\n      var labels = this.selection().appendSelect('div.label-container').selectAll('div.label').data(seriesDeath.reverse(), function (d, i) {\n        return d.key;\n      });\n      var labelInner = labels.enter().append('div').attr('class', 'label').merge(labels);\n      labelInner.appendSelect('div.label-box').style('background', function (d, i) {\n        return props.fills[i];\n      });\n      labelInner.appendSelect('div.label-text').text(function (d) {\n        return client.getRegion(d.key.split('_')[1]).translations[props.locale];\n      });\n      labels.exit().remove();\n      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', \"translate(\".concat(props.margin.left, \", \").concat(props.margin.top, \")\"));\n      var deathChartPaths = g.appendSelect('g.areas').selectAll('g.area').data(seriesDeath).join('g').attr('class', 'area');\n      deathChartPaths.append('path').attr('fill', function (d, i) {\n        return props.fills[i] ? props.fills[i] : '#000';\n      });\n      deathChartPaths.select('path').attr('class', function (d) {\n        return d.key;\n      }).transition(transition).attr('d', areaDeath).attr('stroke', props.stroke).attr('stroke-width', props.stroke_width);\n      g.appendSelect('g.axis--y.axis').transition(transition).attr('transform', \"translate(\".concat(width - props.margin.right - props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));\n      g.appendSelect('g.axis--x.axis').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom - props.margin.top, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(scaleX).ticks(4).tickFormat(width < 500 ? dateFormatMobile : dateFormat));\n      return this;\n    }\n  }]);\n\n  return StackedAreaChart;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedAreaChart);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiY2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsIlN0YWNrZWRBcmVhQ2hhcnQiLCJzdHJva2UiLCJzdHJva2Vfd2lkdGgiLCJmaWxscyIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImhlaWdodCIsImF2Z19kYXlzIiwibG9jYWxlIiwiYWJzb2x1dGUiLCJkYXRlUGFyc2UiLCJkMyIsInRpbWVQYXJzZSIsImRhdGVGb3JtYXRCYWNrIiwidGltZUZvcm1hdCIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJEM0xvY2FsZSIsImRhdGVGb3JtYXQiLCJmb3JtYXRUaW1lIiwiZGF0ZUZvcm1hdE1vYmlsZSIsImZvcm1hdFBlciIsImZvcm1hdCIsImZvcm1hdE51bSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicmVzaGFwZWREYXRhIiwicmVnaW9uTGlzdCIsInVuaXEiLCJtYXAiLCJkIiwicmVnaW9uIiwiZGF0ZVdpc2UiLCJuZXN0Iiwia2V5IiwiZGF0ZSIsImVudHJpZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJvYmoiLCJ0b3RhbCIsInN1bSIsInZhbHVlcyIsImUiLCJjb3VudCIsInB1c2giLCJzb3J0IiwiY29tcGFyZVZhbHVlcyIsIm1lYW4iLCJzbGljZSIsImYiLCJtZWFuX3RvdGFsIiwibWF4RGF0YSIsImxlbmd0aCIsIm1lYW5MaXN0Iiwic29ydEJ5Iiwic2VyaWVzRGVhdGgiLCJzdGFjayIsImtleXMiLCJzY2FsZVgiLCJzY2FsZVRpbWUiLCJyYW5nZSIsImRvbWFpbiIsImV4dGVudCIsInNjYWxlWVBlciIsInNjYWxlTGluZWFyIiwic2NhbGVZTnVtIiwibWF4IiwiYXJlYURlYXRoIiwiYXJlYSIsIngiLCJ5MCIsInkxIiwiY3VydmUiLCJjdXJ2ZU1vbm90b25lWCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImxhYmVscyIsImFwcGVuZFNlbGVjdCIsInNlbGVjdEFsbCIsInJldmVyc2UiLCJpIiwibGFiZWxJbm5lciIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsIm1lcmdlIiwic3R5bGUiLCJ0ZXh0IiwiZ2V0UmVnaW9uIiwic3BsaXQiLCJ0cmFuc2xhdGlvbnMiLCJleGl0IiwicmVtb3ZlIiwiZyIsImRlYXRoQ2hhcnRQYXRocyIsImpvaW4iLCJzZWxlY3QiLCJjYWxsIiwiYXhpc1JpZ2h0IiwidGlja3MiLCJ0aWNrRm9ybWF0IiwiYXhpc0JvdHRvbSIsIkNoYXJ0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBRyxJQUFJQywrRUFBSixFQUFmOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozt1TkFDVztBQUNiQyxZQUFNLEVBQUUsU0FESztBQUViQyxrQkFBWSxFQUFFLEdBRkQ7QUFHYkMsV0FBSyxFQUFFLENBQUMsdUJBQUQsRUFDTCx1QkFESyxFQUVMLHVCQUZLLEVBR0wsd0JBSEssRUFJTCx3QkFKSyxFQUtMLHdCQUxLLENBSE07QUFTYkMsWUFBTSxFQUFFO0FBQUVDLFlBQUksRUFBRSxFQUFSO0FBQVlDLGFBQUssRUFBRSxFQUFuQjtBQUF1QkMsV0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxjQUFNLEVBQUU7QUFBeEMsT0FUSztBQVViQyxZQUFNLEVBQUUsR0FWSztBQVdiQyxjQUFRLEVBQUUsQ0FYRztBQVliQyxZQUFNLEVBQUUsSUFaSztBQWFiQyxjQUFRLEVBQUU7QUFiRyxLOzs7Ozs7OzJCQWdCUjtBQUNMLFVBQU1DLFNBQVMsR0FBR0MsaURBQUUsQ0FBQ0MsU0FBSCxDQUFhLFVBQWIsQ0FBbEI7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLGlEQUFFLENBQUNHLFVBQUgsQ0FBYyxVQUFkLENBQXZCO0FBRUEsVUFBTUMsSUFBSSxHQUFHLEtBQUtBLElBQUwsRUFBYjtB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QUZSLHdCQUVvQ3ZFLEtBQUssQ0FBQ1YsTUFBTixHQUFlVSxLQUFLLENBQUNmLE1BQU4sQ0FBYUksTUFBNUIsR0FBcUNXLEtBQUssQ0FBQ2YsTUFBTixDQUFhRyxHQUZ0RixRQUdHZ0csSUFISCxDQUdRekYsaURBQUUsQ0FBQzZGLFVBQUgsQ0FBYzNDLE1BQWQsRUFBc0J5QyxLQUF0QixDQUE0QixDQUE1QixFQUErQkMsVUFBL0IsQ0FBMEM1RSxLQUFLLEdBQUcsR0FBUixHQUFjTCxnQkFBZCxHQUFpQ0YsVUFBM0UsQ0FIUjtBQUtBLGFBQU8sSUFBUDtBQUNEOzs7O0VBdko0QnFGLDREOztBQTBKaEI1RywrRUFBZiIsImZpbGUiOiIuL3NyYy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCB7IHVuaXEsIHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb21wYXJlVmFsdWVzIH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5pbXBvcnQgRDNMb2NhbGUgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZDMtbG9jYWxlJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5jb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBTdGFja2VkQXJlYUNoYXJ0IGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3Ryb2tlOiAnIzJmMzUzZicsXG4gICAgc3Ryb2tlX3dpZHRoOiAwLjUsXG4gICAgZmlsbHM6IFsncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjU1KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjI1KSddLFxuICAgIG1hcmdpbjogeyBsZWZ0OiAxMCwgcmlnaHQ6IDM1LCB0b3A6IDIwLCBib3R0b206IDIwIH0sXG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgYXZnX2RheXM6IDcsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGFic29sdXRlOiBmYWxzZSxcbiAgfTtcblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGRhdGVQYXJzZSA9IGQzLnRpbWVQYXJzZSgnJVktJW0tJWQnKTtcbiAgICBjb25zdCBkYXRlRm9ybWF0QmFjayA9IGQzLnRpbWVGb3JtYXQoJyVZLSVtLSVkJyk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBEM0xvY2FsZShwcm9wcy5sb2NhbGUpO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBsb2NhbGUuZm9ybWF0VGltZSgnJUInKTtcbiAgICBjb25zdCBkYXRlRm9ybWF0TW9iaWxlID0gbG9jYWxlLmZvcm1hdFRpbWUoJyViJyk7XG4gICAgY29uc3QgZm9ybWF0UGVyID0gbG9jYWxlLmZvcm1hdCgnLjAlJyk7XG4gICAgY29uc3QgZm9ybWF0TnVtID0gbG9jYWxlLmZvcm1hdCgnLCcpO1xuXG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcmVzaGFwZWREYXRhID0gW107XG4gICAgbGV0IHJlZ2lvbkxpc3QgPSB1bmlxKGRhdGEubWFwKGQgPT4gZC5yZWdpb24pKTtcbiAgICBjb25zdCBkYXRlV2lzZSA9IGQzLm5lc3QoKVxuICAgICAgLmtleShkID0+IGQuZGF0ZSlcbiAgICAgIC5lbnRyaWVzKGRhdGEpO1xuXG4gICAgZGF0ZVdpc2UuZm9yRWFjaChmdW5jdGlvbihkLCBpbmRleCkge1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBkYXRlOiBkYXRlUGFyc2UoZC5rZXkpLFxuICAgICAgICB0b3RhbDogZDMuc3VtKGQudmFsdWVzLCBlID0+IGUuY291bnQpLFxuICAgICAgfTtcbiAgICAgIHJlZ2lvbkxpc3QuZm9yRWFjaChlID0+IG9ialtlXSA9IDApO1xuICAgICAgZC52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgIG9ialtlLnJlZ2lvbl0gPSBlLmNvdW50O1xuICAgICAgfSk7XG4gICAgICByZXNoYXBlZERhdGEucHVzaChvYmopO1xuICAgIH0pO1xuXG4gICAgcmVzaGFwZWREYXRhID0gcmVzaGFwZWREYXRhLnNvcnQoY29tcGFyZVZhbHVlcygnZGF0ZScpKTtcblxuICAgIHJlc2hhcGVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICByZWdpb25MaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZFsnbWVhbl8nICsgZV0gPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgoaW5kZXggLSBwcm9wcy5hdmdfZGF5cyksIGluZGV4KSwgZiA9PiArZltlXSApOyAvLyBhdmcgY2FsY1xuICAgICAgICBpZiAoIWRbJ21lYW5fJyArIGVdKSB7XG4gICAgICAgICAgZFsnbWVhbl8nICsgZV0gPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgwLCBpbmRleCksIGYgPT4gK2ZbZV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRbJ21lYW5fJyArIGVdID0gZFtlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkLm1lYW5fdG90YWwgPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgoaW5kZXggLSBwcm9wcy5hdmdfZGF5cyksIGluZGV4KSwgZiA9PiArZi50b3RhbCk7IC8vIGF2ZyBjYWxjXG4gICAgICBpZiAoIWQubWVhbl90b3RhbCkge1xuICAgICAgICBkLm1lYW5fdG90YWwgPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgwLCBpbmRleCksIGYgPT4gK2YudG90YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZC5tZWFuX3RvdGFsID0gZC50b3RhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYXhEYXRhID0gcmVzaGFwZWREYXRhW3Jlc2hhcGVkRGF0YS5sZW5ndGgtMV1cbiAgICBjb25zdCBtZWFuTGlzdCA9IHJlZ2lvbkxpc3QubWFwKGQgPT4gJ21lYW5fJyArIGQpXG4gICAgcmVnaW9uTGlzdCA9IHNvcnRCeShtZWFuTGlzdCwgZCA9PiArbWF4RGF0YVtkXSlcbiAgICBcbiAgICBjb25zdCBzZXJpZXNEZWF0aCA9IGQzLnN0YWNrKCkua2V5cyhyZWdpb25MaXN0KShyZXNoYXBlZERhdGEpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gcHJvcHMubWFyZ2luLmxlZnQgLSBwcm9wcy5tYXJnaW4ucmlnaHRdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQocmVzaGFwZWREYXRhLCBkID0+IGQuZGF0ZSkpO1xuXG4gICAgY29uc3Qgc2NhbGVZUGVyID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgMF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG5cbiAgICBjb25zdCBzY2FsZVlOdW0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCAwXSlcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChyZXNoYXBlZERhdGEsIGQgPT4gZC5tZWFuX3RvdGFsICldKTtcblxuICAgIGNvbnN0IGFyZWFEZWF0aCA9IGQzLmFyZWEoKVxuICAgICAgLngoZCA9PiBzY2FsZVgoZC5kYXRhLmRhdGUpKVxuICAgICAgLnkwKGQgPT4gcHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0oZFswXSkgOiBzY2FsZVlQZXIoZFswXSAvIGQuZGF0YS5tZWFuX3RvdGFsKSlcbiAgICAgIC55MShkID0+IHByb3BzLmFic29sdXRlID8gc2NhbGVZTnVtKGRbMV0pIDogc2NhbGVZUGVyKGRbMV0gLyBkLmRhdGEubWVhbl90b3RhbCkpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdkaXYubGFiZWwtY29udGFpbmVyJylcbiAgICAgIC5zZWxlY3RBbGwoJ2Rpdi5sYWJlbCcpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aC5yZXZlcnNlKCksIChkLCBpKSA9PiBkLmtleSk7XG5cbiAgICBjb25zdCBsYWJlbElubmVyID0gbGFiZWxzLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLm1lcmdlKGxhYmVscyk7XG5cbiAgICBsYWJlbElubmVyLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLWJveCcpXG4gICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAoZCwgaSkgPT4gcHJvcHMuZmlsbHNbaV0pO1xuXG4gICAgbGFiZWxJbm5lci5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC10ZXh0JylcbiAgICAgIC50ZXh0KGQgPT4gY2xpZW50LmdldFJlZ2lvbihkLmtleS5zcGxpdCgnXycpWzFdKS50cmFuc2xhdGlvbnNbcHJvcHMubG9jYWxlXSk7XG5cbiAgICBsYWJlbHMuZXhpdCgpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBnID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmFwcGVuZFNlbGVjdCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fSwgJHtwcm9wcy5tYXJnaW4udG9wfSlgKTtcblxuICAgIGNvbnN0IGRlYXRoQ2hhcnRQYXRocyA9IGcuYXBwZW5kU2VsZWN0KCdnLmFyZWFzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cuYXJlYScpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aClcbiAgICAgIC5qb2luKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcmVhJyk7XG5cbiAgICBkZWF0aENoYXJ0UGF0aHMuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gKChwcm9wcy5maWxsc1tpXSkgPyBwcm9wcy5maWxsc1tpXSA6ICcjMDAwJyk7XG4gICAgICB9KTtcblxuICAgIGRlYXRoQ2hhcnRQYXRocy5zZWxlY3QoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBkLmtleSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZCcsIGFyZWFEZWF0aClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlX3dpZHRoKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXkuYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodCAtIHByb3BzLm1hcmdpbi5sZWZ0fSwwKWApXG4gICAgICAuY2FsbChkMy5heGlzUmlnaHQocHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0gOiBzY2FsZVlQZXIpLnRpY2tzKDMpLnRpY2tGb3JtYXQocHJvcHMuYWJzb2x1dGUgPyBmb3JtYXROdW0gOiBmb3JtYXRQZXIpKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXguYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSBwcm9wcy5tYXJnaW4udG9wfSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZVgpLnRpY2tzKDQpLnRpY2tGb3JtYXQod2lkdGggPCA1MDAgPyBkYXRlRm9ybWF0TW9iaWxlIDogZGF0ZUZvcm1hdCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tlZEFyZWFDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})