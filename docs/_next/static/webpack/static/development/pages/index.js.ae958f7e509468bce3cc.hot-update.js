webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/utils */ \"./src/lib/utils/utils.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/d3-locale */ \"./node_modules/@reuters-graphics/d3-locale/dist/index.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default.a();\n\nvar StackedAreaChart = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(StackedAreaChart, _ChartComponent);\n\n  var _super = _createSuper(StackedAreaChart);\n\n  function StackedAreaChart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, StackedAreaChart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      stroke: '#2f353f',\n      stroke_width: 0.5,\n      fills: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0.25)'],\n      margin: {\n        left: 10,\n        right: 35,\n        top: 20,\n        bottom: 20\n      },\n      height: 300,\n      avg_days: 7,\n      locale: 'en',\n      absolute: false,\n      highlight_variable: 'asia',\n      highlight_color: '#fce587',\n      chart_formats: {\n        number: ',',\n        percent: '.0%',\n        date: '%b'\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(StackedAreaChart, [{\n    key: \"draw\",\n    value: function draw() {\n      var dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n      var locale = new _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default.a(props.locale);\n      var formatPer = locale.format(props.chart_formats.percent);\n      var formatNum = locale.format(props.chart_formats.number);\n      var dateFormat = locale.formatTime(props.chart_formats.date);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var reshapedData = [];\n      var regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"uniq\"])(data.map(function (d) {\n        return d.region;\n      }));\n      var dateWise = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nest().key(function (d) {\n        return d.date;\n      }).entries(data);\n      dateWise.forEach(function (d, index) {\n        var obj = {\n          date: dateParse(d.key),\n          total: _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sum(d.values, function (e) {\n            return e.count;\n          })\n        };\n        regionList.forEach(function (e) {\n          return obj[e] = 0;\n        });\n        d.values.forEach(function (e) {\n          obj[e.region] = e.count;\n        });\n        reshapedData.push(obj);\n      });\n      reshapedData = reshapedData.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__[\"compareValues\"])('date'));\n      reshapedData.forEach(function (d, index) {\n        regionList.forEach(function (e) {\n          d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n            return +f[e];\n          }); // avg calc\n\n          if (!d['mean_' + e]) {\n            d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n              return +f[e];\n            });\n          }\n\n          if (index === 0) {\n            d['mean_' + e] = d[e];\n          }\n        });\n        d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n          return +f.total;\n        }); // avg calc\n\n        if (!d.mean_total) {\n          d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n            return +f.total;\n          });\n        }\n\n        if (index === 0) {\n          d.mean_total = d.total;\n        }\n      });\n      var maxData = reshapedData[reshapedData.length - 1];\n      var meanList = regionList.map(function (d) {\n        return 'mean_' + d;\n      });\n      regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"sortBy\"])(meanList, function (d) {\n        return +maxData[d];\n      });\n      var seriesDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].stack().keys(regionList)(reshapedData);\n      var scaleX = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleTime().range([0, width - props.margin.left - props.margin.right]).domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(reshapedData, function (d) {\n        return d.date;\n      }));\n      var scaleYPer = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, 1]);\n      var scaleYNum = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(reshapedData, function (d) {\n        return d.mean_total;\n      })]);\n      var areaDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().x(function (d) {\n        return scaleX(d.data.date);\n      }).y0(function (d) {\n        return props.absolute ? scaleYNum(d[0]) : scaleYPer(d[0] / d.data.mean_total);\n      }).y1(function (d) {\n        return props.absolute ? scaleYNum(d[1]) : scaleYPer(d[1] / d.data.mean_total);\n      }).curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveMonotoneX);\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750);\n      var labels = this.selection().appendSelect('div.label-container').selectAll('div.label').data(seriesDeath.reverse(), function (d, i) {\n        return d.key;\n      });\n      var labelInner = labels.enter().append('div').attr('class', function (d) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return 'label highlight';\n        } else {\n          return 'label';\n        }\n      }).merge(labels);\n      labelInner.appendSelect('div.label-box').style('background', function (d, i) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return props.highlight_color;\n        } else {\n          return props.fills[i] ? props.fills[i] : '#000';\n        }\n      });\n      labelInner.appendSelect('div.label-text').text(function (d) {\n        return client.getRegion(d.key.split('_')[1]).translations[props.locale];\n      });\n      labels.exit().remove();\n      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', \"translate(\".concat(props.margin.left, \", \").concat(props.margin.top, \")\"));\n      var deathChartPaths = g.appendSelect('g.areas').selectAll('g.area').data(seriesDeath).join('g').attr('class', 'area');\n      deathChartPaths.append('path');\n      deathChartPaths.select('path').attr('class', function (d) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return d.key + ' highlight';\n        } else {\n          return d.key;\n        }\n      }).transition(transition).attr('fill', function (d, i) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return props.highlight_color;\n        } else {\n          return props.fills[i] ? props.fills[i] : '#000';\n        }\n      }).attr('d', areaDeath).attr('stroke', props.stroke).attr('stroke-width', props.stroke_width);\n      g.appendSelect('g.axis--y.axis').transition(transition).attr('transform', \"translate(\".concat(width - props.margin.right - props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));\n      g.appendSelect('g.axis--x.axis').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom - props.margin.top, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(scaleX).ticks(4).tickFormat(dateFormat));\n      return this;\n    }\n  }]);\n\n  return StackedAreaChart;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedAreaChart);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiY2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsIlN0YWNrZWRBcmVhQ2hhcnQiLCJzdHJva2UiLCJzdHJva2Vfd2lkdGgiLCJmaWxscyIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImhlaWdodCIsImF2Z19kYXlzIiwibG9jYWxlIiwiYWJzb2x1dGUiLCJoaWdobGlnaHRfdmFyaWFibGUiLCJoaWdobGlnaHRfY29sb3IiLCJjaGFydF9mb3JtYXRzIiwibnVtYmVyIiwicGVyY2VudCIsImRhdGUiLCJkYXRlUGFyc2UiLCJkMyIsInRpbWVQYXJzZSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJEM0xvY2FsZSIsImZvcm1hdFBlciIsImZvcm1hdCIsImZvcm1hdE51bSIsImRhdGVGb3JtYXQiLCJmb3JtYXRUaW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJyZXNoYXBlZERhdGEiLCJyZWdpb25MaXN0IiwidW5pcSIsIm1hcCIsImQiLCJyZWdpb24iLCJkYXRlV2lzZSIsIm5lc3QiLCJrZXkiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImluZGV4Iiwib2JqIiwidG90YWwiLCJzdW0iLCJ2YWx1ZXMiLCJlIiwiY291bnQiLCJwdXNoIiwic29ydCIsImNvbXBhcmVWYWx1ZXMiLCJtZWFuIiwic2xpY2UiLCJmIiwibWVhbl90b3RhbCIsIm1heERhdGEiLCJsZW5ndGgiLCJtZWFuTGlzdCIsInNvcnRCeSIsInNlcmllc0RlYXRoIiwic3RhY2siLCJrZXlzIiwic2NhbGVYIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJkb21haW4iLCJleHRlbnQiLCJzY2FsZVlQZXIiLCJzY2FsZUxpbmVhciIsInNjYWxlWU51bSIsIm1heCIsImFyZWFEZWF0aCIsImFyZWEiLCJ4IiwieTAiLCJ5MSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsYWJlbHMiLCJhcHBlbmRTZWxlY3QiLCJzZWxlY3RBbGwiLCJyZXZlcnNlIiwiaSIsImxhYmVsSW5uZXIiLCJlbnRlciIsImFwcGVuZCIsImF0dHIiLCJzcGxpdCIsIm1lcmdlIiwic3R5bGUiLCJ0ZXh0IiwiZ2V0UmVnaW9uIiwidHJhbnNsYXRpb25zIiwiZXhpdCIsInJlbW92ZSIsImciLCJkZWF0aENoYXJ0UGF0aHMiLCJqb2luIiwic2VsZWN0IiwiY2FsbCIsImF4aXNSaWdodCIsInRpY2tzIiwidGlja0Zvcm1hdCIsImF4aXNCb3R0b20iLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0VBQUosRUFBZjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsWUFBTSxFQUFFLFNBREs7QUFFYkMsa0JBQVksRUFBRSxHQUZEO0FBR2JDLFdBQUssRUFBRSxDQUFDLHVCQUFELEVBQ0wsdUJBREssRUFFTCx1QkFGSyxFQUdMLHdCQUhLLEVBSUwsd0JBSkssRUFLTCx3QkFMSyxDQUhNO0FBU2JDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUUsRUFBUjtBQUFZQyxhQUFLLEVBQUUsRUFBbkI7QUFBdUJDLFdBQUcsRUFBRSxFQUE1QjtBQUFnQ0MsY0FBTSxFQUFFO0FBQXhDLE9BVEs7QUFVYkMsWUFBTSxFQUFFLEdBVks7QUFXYkMsY0FBUSxFQUFFLENBWEc7QUFZYkMsWUFBTSxFQUFFLElBWks7QUFhYkMsY0FBUSxFQUFFLEtBYkc7QUFjYkMsd0JBQWtCLEVBQUUsTUFkUDtBQWViQyxxQkFBZSxFQUFFLFNBZko7QUFnQmJDLG1CQUFhLEVBQUU7QUFDYkMsY0FBTSxFQUFFLEdBREs7QUFFYkMsZUFBTyxFQUFFLEtBRkk7QUFHYkMsWUFBSSxFQUFFO0FBSE87QUFoQkYsSzs7Ozs7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Q2UsS0FBSyxDQUFDbkIsTUFBTixDQUFhRyxHQUZ0RixRQUdHa0csSUFISCxDQUdRckYsaURBQUUsQ0FBQ3lGLFVBQUgsQ0FBYzNDLE1BQWQsRUFBc0J5QyxLQUF0QixDQUE0QixDQUE1QixFQUErQkMsVUFBL0IsQ0FBMEM5RSxVQUExQyxDQUhSO0FBS0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFqTDRCZ0YsNEQ7O0FBb0xoQjlHLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IHsgdW5pcSwgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBhcmVWYWx1ZXMgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmltcG9ydCBEM0xvY2FsZSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9kMy1sb2NhbGUnO1xuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIFN0YWNrZWRBcmVhQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHJva2U6ICcjMmYzNTNmJyxcbiAgICBzdHJva2Vfd2lkdGg6IDAuNSxcbiAgICBmaWxsczogWydyZ2JhKDI1NSwyNTUsMjU1LDAuOSknLFxuICAgICAgJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjUpJ10sXG4gICAgbWFyZ2luOiB7IGxlZnQ6IDEwLCByaWdodDogMzUsIHRvcDogMjAsIGJvdHRvbTogMjAgfSxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBhdmdfZGF5czogNyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgYWJzb2x1dGU6IGZhbHNlLFxuICAgIGhpZ2hsaWdodF92YXJpYWJsZTogJ2FzaWEnLFxuICAgIGhpZ2hsaWdodF9jb2xvcjogJyNmY2U1ODcnLFxuICAgIGNoYXJ0X2Zvcm1hdHM6IHtcbiAgICAgIG51bWJlcjogJywnLFxuICAgICAgcGVyY2VudDogJy4wJScsXG4gICAgICBkYXRlOiAnJWInLFxuICAgIH0sXG4gIH07XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBkYXRlUGFyc2UgPSBkMy50aW1lUGFyc2UoJyVZLSVtLSVkJyk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzKCk7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VsZWN0aW9uKCkubm9kZSgpO1xuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBEM0xvY2FsZShwcm9wcy5sb2NhbGUpO1xuICAgIGNvbnN0IGZvcm1hdFBlciA9IGxvY2FsZS5mb3JtYXQocHJvcHMuY2hhcnRfZm9ybWF0cy5wZXJjZW50KTtcbiAgICBjb25zdCBmb3JtYXROdW0gPSBsb2NhbGUuZm9ybWF0KHByb3BzLmNoYXJ0X2Zvcm1hdHMubnVtYmVyKTtcbiAgICBjb25zdCBkYXRlRm9ybWF0ID0gbG9jYWxlLmZvcm1hdFRpbWUocHJvcHMuY2hhcnRfZm9ybWF0cy5kYXRlKTtcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCByZXNoYXBlZERhdGEgPSBbXTtcbiAgICBsZXQgcmVnaW9uTGlzdCA9IHVuaXEoZGF0YS5tYXAoZCA9PiBkLnJlZ2lvbikpO1xuICAgIGNvbnN0IGRhdGVXaXNlID0gZDMubmVzdCgpXG4gICAgICAua2V5KGQgPT4gZC5kYXRlKVxuICAgICAgLmVudHJpZXMoZGF0YSk7XG5cbiAgICBkYXRlV2lzZS5mb3JFYWNoKGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGRhdGU6IGRhdGVQYXJzZShkLmtleSksXG4gICAgICAgIHRvdGFsOiBkMy5zdW0oZC52YWx1ZXMsIGUgPT4gZS5jb3VudCksXG4gICAgICB9O1xuICAgICAgcmVnaW9uTGlzdC5mb3JFYWNoKGUgPT4gb2JqW2VdID0gMCk7XG4gICAgICBkLnZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgb2JqW2UucmVnaW9uXSA9IGUuY291bnQ7XG4gICAgICB9KTtcbiAgICAgIHJlc2hhcGVkRGF0YS5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgICByZXNoYXBlZERhdGEgPSByZXNoYXBlZERhdGEuc29ydChjb21wYXJlVmFsdWVzKCdkYXRlJykpO1xuXG4gICAgcmVzaGFwZWREYXRhLmZvckVhY2goZnVuY3Rpb24oZCwgaW5kZXgpIHtcbiAgICAgIHJlZ2lvbkxpc3QuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBkWydtZWFuXycgKyBlXSA9IGQzLm1lYW4ocmVzaGFwZWREYXRhLnNsaWNlKChpbmRleCAtIHByb3BzLmF2Z19kYXlzKSwgaW5kZXgpLCBmID0+ICtmW2VdICk7IC8vIGF2ZyBjYWxjXG4gICAgICAgIGlmICghZFsnbWVhbl8nICsgZV0pIHtcbiAgICAgICAgICBkWydtZWFuXycgKyBlXSA9IGQzLm1lYW4ocmVzaGFwZWREYXRhLnNsaWNlKDAsIGluZGV4KSwgZiA9PiArZltlXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZFsnbWVhbl8nICsgZV0gPSBkW2VdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGQubWVhbl90b3RhbCA9IGQzLm1lYW4ocmVzaGFwZWREYXRhLnNsaWNlKChpbmRleCAtIHByb3BzLmF2Z19kYXlzKSwgaW5kZXgpLCBmID0+ICtmLnRvdGFsKTsgLy8gYXZnIGNhbGNcbiAgICAgIGlmICghZC5tZWFuX3RvdGFsKSB7XG4gICAgICAgIGQubWVhbl90b3RhbCA9IGQzLm1lYW4ocmVzaGFwZWREYXRhLnNsaWNlKDAsIGluZGV4KSwgZiA9PiArZi50b3RhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBkLm1lYW5fdG90YWwgPSBkLnRvdGFsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG1heERhdGEgPSByZXNoYXBlZERhdGFbcmVzaGFwZWREYXRhLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG1lYW5MaXN0ID0gcmVnaW9uTGlzdC5tYXAoZCA9PiAnbWVhbl8nICsgZCk7XG4gICAgcmVnaW9uTGlzdCA9IHNvcnRCeShtZWFuTGlzdCwgZCA9PiArbWF4RGF0YVtkXSk7XG5cbiAgICBjb25zdCBzZXJpZXNEZWF0aCA9IGQzLnN0YWNrKCkua2V5cyhyZWdpb25MaXN0KShyZXNoYXBlZERhdGEpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gcHJvcHMubWFyZ2luLmxlZnQgLSBwcm9wcy5tYXJnaW4ucmlnaHRdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQocmVzaGFwZWREYXRhLCBkID0+IGQuZGF0ZSkpO1xuXG4gICAgY29uc3Qgc2NhbGVZUGVyID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgMF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG5cbiAgICBjb25zdCBzY2FsZVlOdW0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCAwXSlcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChyZXNoYXBlZERhdGEsIGQgPT4gZC5tZWFuX3RvdGFsICldKTtcblxuICAgIGNvbnN0IGFyZWFEZWF0aCA9IGQzLmFyZWEoKVxuICAgICAgLngoZCA9PiBzY2FsZVgoZC5kYXRhLmRhdGUpKVxuICAgICAgLnkwKGQgPT4gcHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0oZFswXSkgOiBzY2FsZVlQZXIoZFswXSAvIGQuZGF0YS5tZWFuX3RvdGFsKSlcbiAgICAgIC55MShkID0+IHByb3BzLmFic29sdXRlID8gc2NhbGVZTnVtKGRbMV0pIDogc2NhbGVZUGVyKGRbMV0gLyBkLmRhdGEubWVhbl90b3RhbCkpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdkaXYubGFiZWwtY29udGFpbmVyJylcbiAgICAgIC5zZWxlY3RBbGwoJ2Rpdi5sYWJlbCcpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aC5yZXZlcnNlKCksIChkLCBpKSA9PiBkLmtleSk7XG5cbiAgICBjb25zdCBsYWJlbElubmVyID0gbGFiZWxzLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGlmIChkLmtleS5zcGxpdCgnXycpWzFdID09PSBwcm9wcy5oaWdobGlnaHRfdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gJ2xhYmVsIGhpZ2hsaWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdsYWJlbCc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAubWVyZ2UobGFiZWxzKTtcblxuICAgIGxhYmVsSW5uZXIuYXBwZW5kU2VsZWN0KCdkaXYubGFiZWwtYm94JylcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIChkLCBpKSA9PiB7XG4gICAgICAgIGlmIChkLmtleS5zcGxpdCgnXycpWzFdID09PSBwcm9wcy5oaWdobGlnaHRfdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoKHByb3BzLmZpbGxzW2ldKSA/IHByb3BzLmZpbGxzW2ldIDogJyMwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBsYWJlbElubmVyLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLXRleHQnKVxuICAgICAgLnRleHQoZCA9PiBjbGllbnQuZ2V0UmVnaW9uKGQua2V5LnNwbGl0KCdfJylbMV0pLnRyYW5zbGF0aW9uc1twcm9wcy5sb2NhbGVdKTtcblxuICAgIGxhYmVscy5leGl0KClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGcgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdzdmcnKSAvLyBzZWUgZG9jcyBpbiAuL3V0aWxzL2QzLmpzXG4gICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBwcm9wcy5oZWlnaHQpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7cHJvcHMubWFyZ2luLmxlZnR9LCAke3Byb3BzLm1hcmdpbi50b3B9KWApO1xuXG4gICAgY29uc3QgZGVhdGhDaGFydFBhdGhzID0gZy5hcHBlbmRTZWxlY3QoJ2cuYXJlYXMnKVxuICAgICAgLnNlbGVjdEFsbCgnZy5hcmVhJylcbiAgICAgIC5kYXRhKHNlcmllc0RlYXRoKVxuICAgICAgLmpvaW4oJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2FyZWEnKTtcblxuICAgIGRlYXRoQ2hhcnRQYXRocy5hcHBlbmQoJ3BhdGgnKTtcblxuICAgIGRlYXRoQ2hhcnRQYXRocy5zZWxlY3QoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5rZXkuc3BsaXQoJ18nKVsxXSA9PT0gcHJvcHMuaGlnaGxpZ2h0X3ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGQua2V5ICsgJyBoaWdobGlnaHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBkLmtleTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgaWYgKGQua2V5LnNwbGl0KCdfJylbMV0gPT09IHByb3BzLmhpZ2hsaWdodF92YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5oaWdobGlnaHRfY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICgocHJvcHMuZmlsbHNbaV0pID8gcHJvcHMuZmlsbHNbaV0gOiAnIzAwMCcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2QnLCBhcmVhRGVhdGgpXG4gICAgICAuYXR0cignc3Ryb2tlJywgcHJvcHMuc3Ryb2tlKVxuICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIHByb3BzLnN0cm9rZV93aWR0aCk7XG5cbiAgICBnLmFwcGVuZFNlbGVjdCgnZy5heGlzLS15LmF4aXMnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7d2lkdGggLSBwcm9wcy5tYXJnaW4ucmlnaHQgLSBwcm9wcy5tYXJnaW4ubGVmdH0sMClgKVxuICAgICAgLmNhbGwoZDMuYXhpc1JpZ2h0KHByb3BzLmFic29sdXRlID8gc2NhbGVZTnVtIDogc2NhbGVZUGVyKS50aWNrcygzKS50aWNrRm9ybWF0KHByb3BzLmFic29sdXRlID8gZm9ybWF0TnVtIDogZm9ybWF0UGVyKSk7XG5cbiAgICBnLmFwcGVuZFNlbGVjdCgnZy5heGlzLS14LmF4aXMnKVxuICAgICAgLnRyYW5zaXRpb24odHJhbnNpdGlvbilcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4uYm90dG9tIC0gcHJvcHMubWFyZ2luLnRvcH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oc2NhbGVYKS50aWNrcyg0KS50aWNrRm9ybWF0KGRhdGVGb3JtYXQpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrZWRBcmVhQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})