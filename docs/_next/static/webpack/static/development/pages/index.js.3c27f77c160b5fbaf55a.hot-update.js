webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/utils */ \"./src/lib/utils/utils.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/d3-locale */ \"./node_modules/@reuters-graphics/d3-locale/dist/index.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default.a();\n\nvar StackedAreaChart = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(StackedAreaChart, _ChartComponent);\n\n  var _super = _createSuper(StackedAreaChart);\n\n  function StackedAreaChart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, StackedAreaChart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      stroke: '#2f353f',\n      stroke_width: 0.5,\n      fills: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0.25)'],\n      margin: {\n        left: 10,\n        right: 35,\n        top: 20,\n        bottom: 20\n      },\n      height: 300,\n      avg_days: 7,\n      locale: 'en',\n      absolute: false,\n      highlight_variable: 'asia',\n      highlight_color: '#fce587',\n      chart_formats: {\n        number: ',',\n        percent: '.0%',\n        date: '%b'\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(StackedAreaChart, [{\n    key: \"draw\",\n    value: function draw() {\n      var dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n      var locale = new _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default.a(props.locale);\n      var formatPer = locale.format(props.chart_formats.percent);\n      var formatNum = locale.format(props.chart_formats.number);\n      var dateFormat = locale.formatTime(props.chart_formats.date);\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var reshapedData = [];\n      var regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"uniq\"])(data.map(function (d) {\n        return d.region;\n      }));\n      var dateWise = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nest().key(function (d) {\n        return d.date;\n      }).entries(data);\n      dateWise.forEach(function (d, index) {\n        var obj = {\n          date: dateParse(d.key),\n          total: _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sum(d.values, function (e) {\n            return e.count;\n          })\n        };\n        regionList.forEach(function (e) {\n          return obj[e] = 0;\n        });\n        d.values.forEach(function (e) {\n          obj[e.region] = e.count;\n        });\n        reshapedData.push(obj);\n      });\n      reshapedData = reshapedData.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__[\"compareValues\"])('date'));\n      reshapedData.forEach(function (d, index) {\n        regionList.forEach(function (e) {\n          d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n            return +f[e];\n          }); // avg calc\n\n          if (!d['mean_' + e]) {\n            d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n              return +f[e];\n            });\n          }\n\n          if (index === 0) {\n            d['mean_' + e] = d[e];\n          }\n        });\n        d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n          return +f.total;\n        }); // avg calc\n\n        if (!d.mean_total) {\n          d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n            return +f.total;\n          });\n        }\n\n        if (index === 0) {\n          d.mean_total = d.total;\n        }\n      });\n      var maxData = reshapedData[reshapedData.length - 1];\n      var meanList = regionList.map(function (d) {\n        return 'mean_' + d;\n      });\n      regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"sortBy\"])(meanList, function (d) {\n        return +maxData[d];\n      });\n      var seriesDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].stack().keys(regionList)(reshapedData);\n      var scaleX = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleTime().range([0, width - props.margin.left - props.margin.right]).domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(reshapedData, function (d) {\n        return d.date;\n      }));\n      var scaleYPer = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, 1]);\n      var scaleYNum = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(reshapedData, function (d) {\n        return d.mean_total;\n      })]);\n      var areaDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().x(function (d) {\n        return scaleX(d.data.date);\n      }).y0(function (d) {\n        return props.absolute ? scaleYNum(d[0]) : scaleYPer(d[0] / d.data.mean_total);\n      }).y1(function (d) {\n        return props.absolute ? scaleYNum(d[1]) : scaleYPer(d[1] / d.data.mean_total);\n      }).curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveMonotoneX);\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750);\n      var labels = this.selection().appendSelect('div.label-container').selectAll('div.label').data(seriesDeath.reverse(), function (d, i) {\n        return d.key;\n      });\n      var labelInner = labels.enter().append('div').attr('class', function (d) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return 'label highlight';\n        } else {\n          return 'label';\n        }\n      }).merge(labels);\n      labelInner.appendSelect('div.label-box').style('background', function (d, i) {\n        return props.fills[i];\n      });\n      labelInner.appendSelect('div.label-text').text(function (d) {\n        return client.getRegion(d.key.split('_')[1]).translations[props.locale];\n      });\n      labels.exit().remove();\n      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', \"translate(\".concat(props.margin.left, \", \").concat(props.margin.top, \")\"));\n      var deathChartPaths = g.appendSelect('g.areas').selectAll('g.area').data(seriesDeath).join('g').attr('class', 'area');\n      deathChartPaths.append('path');\n      deathChartPaths.select('path').attr('class', function (d) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return d.key + ' highlight';\n        } else {\n          return d.key;\n        }\n      }).transition(transition).attr('fill', function (d, i) {\n        if (d.key.split('_')[1] === props.highlight_variable) {\n          return props.highlight_color;\n        } else {\n          return props.fills[i] ? props.fills[i] : '#000';\n        }\n      }).attr('d', areaDeath).attr('stroke', props.stroke).attr('stroke-width', props.stroke_width);\n      g.appendSelect('g.axis--y.axis').transition(transition).attr('transform', \"translate(\".concat(width - props.margin.right - props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));\n      g.appendSelect('g.axis--x.axis').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom - props.margin.top, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(scaleX).ticks(4).tickFormat(dateFormat));\n      return this;\n    }\n  }]);\n\n  return StackedAreaChart;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedAreaChart);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiY2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsIlN0YWNrZWRBcmVhQ2hhcnQiLCJzdHJva2UiLCJzdHJva2Vfd2lkdGgiLCJmaWxscyIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImhlaWdodCIsImF2Z19kYXlzIiwibG9jYWxlIiwiYWJzb2x1dGUiLCJoaWdobGlnaHRfdmFyaWFibGUiLCJoaWdobGlnaHRfY29sb3IiLCJjaGFydF9mb3JtYXRzIiwibnVtYmVyIiwicGVyY2VudCIsImRhdGUiLCJkYXRlUGFyc2UiLCJkMyIsInRpbWVQYXJzZSIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJEM0xvY2FsZSIsImZvcm1hdFBlciIsImZvcm1hdCIsImZvcm1hdE51bSIsImRhdGVGb3JtYXQiLCJmb3JtYXRUaW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJyZXNoYXBlZERhdGEiLCJyZWdpb25MaXN0IiwidW5pcSIsIm1hcCIsImQiLCJyZWdpb24iLCJkYXRlV2lzZSIsIm5lc3QiLCJrZXkiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImluZGV4Iiwib2JqIiwidG90YWwiLCJzdW0iLCJ2YWx1ZXMiLCJlIiwiY291bnQiLCJwdXNoIiwic29ydCIsImNvbXBhcmVWYWx1ZXMiLCJtZWFuIiwic2xpY2UiLCJmIiwibWVhbl90b3RhbCIsIm1heERhdGEiLCJsZW5ndGgiLCJtZWFuTGlzdCIsInNvcnRCeSIsInNlcmllc0RlYXRoIiwic3RhY2siLCJrZXlzIiwic2NhbGVYIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJkb21haW4iLCJleHRlbnQiLCJzY2FsZVlQZXIiLCJzY2FsZUxpbmVhciIsInNjYWxlWU51bSIsIm1heCIsImFyZWFEZWF0aCIsImFyZWEiLCJ4IiwieTAiLCJ5MSIsImN1cnZlIiwiY3VydmVNb25vdG9uZVgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJsYWJlbHMiLCJhcHBlbmRTZWxlY3QiLCJzZWxlY3RBbGwiLCJyZXZlcnNlIiwiaSIsImxhYmVsSW5uZXIiLCJlbnRlciIsImFwcGVuZCIsImF0dHIiLCJzcGxpdCIsIm1lcmdlIiwic3R5bGUiLCJ0ZXh0IiwiZ2V0UmVnaW9uIiwidHJhbnNsYXRpb25zIiwiZXhpdCIsInJlbW92ZSIsImciLCJkZWF0aENoYXJ0UGF0aHMiLCJqb2luIiwic2VsZWN0IiwiY2FsbCIsImF4aXNSaWdodCIsInRpY2tzIiwidGlja0Zvcm1hdCIsImF4aXNCb3R0b20iLCJDaGFydENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0VBQUosRUFBZjs7SUFFTUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7dU5BQ1c7QUFDYkMsWUFBTSxFQUFFLFNBREs7QUFFYkMsa0JBQVksRUFBRSxHQUZEO0FBR2JDLFdBQUssRUFBRSxDQUFDLHVCQUFELEVBQ0wsdUJBREssRUFFTCx1QkFGSyxFQUdMLHdCQUhLLEVBSUwsd0JBSkssRUFLTCx3QkFMSyxDQUhNO0FBU2JDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUUsRUFBUjtBQUFZQyxhQUFLLEVBQUUsRUFBbkI7QUFBdUJDLFdBQUcsRUFBRSxFQUE1QjtBQUFnQ0MsY0FBTSxFQUFFO0FBQXhDLE9BVEs7QUFVYkMsWUFBTSxFQUFFLEdBVks7QUFXYkMsY0FBUSxFQUFFLENBWEc7QUFZYkMsWUFBTSxFQUFFLElBWks7QUFhYkMsY0FBUSxFQUFFLEtBYkc7QUFjYkMsd0JBQWtCLEVBQUUsTUFkUDtBQWViQyxxQkFBZSxFQUFFLFNBZko7QUFnQmJDLG1CQUFhLEVBQUU7QUFDYkMsY0FBTSxFQUFFLEdBREs7QUFFYkMsZUFBTyxFQUFFLEtBRkk7QUFHYkMsWUFBSSxFQUFFO0FBSE87QUFoQkYsSzs7Ozs7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Yy9saWIvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnRDb21wb25lbnQgZnJvbSAnLi9iYXNlL0NoYXJ0Q29tcG9uZW50JztcbmltcG9ydCBkMyBmcm9tICcuL3V0aWxzL2QzJztcbmltcG9ydCB7IHVuaXEsIHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb21wYXJlVmFsdWVzIH0gZnJvbSAnLi91dGlscy91dGlscyc7XG5pbXBvcnQgRDNMb2NhbGUgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZDMtbG9jYWxlJztcbmltcG9ydCBBdGxhc01ldGFkYXRhQ2xpZW50IGZyb20gJ0ByZXV0ZXJzLWdyYXBoaWNzL2dyYXBoaWNzLWF0bGFzLWNsaWVudCc7XG5jb25zdCBjbGllbnQgPSBuZXcgQXRsYXNNZXRhZGF0YUNsaWVudCgpO1xuXG5jbGFzcyBTdGFja2VkQXJlYUNoYXJ0IGV4dGVuZHMgQ2hhcnRDb21wb25lbnQge1xuICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3Ryb2tlOiAnIzJmMzUzZicsXG4gICAgc3Ryb2tlX3dpZHRoOiAwLjUsXG4gICAgZmlsbHM6IFsncmdiYSgyNTUsMjU1LDI1NSwwLjkpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuOCknLFxuICAgICAgJ3JnYmEoMjU1LDI1NSwyNTUsMC43KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjU1KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjI1KSddLFxuICAgIG1hcmdpbjogeyBsZWZ0OiAxMCwgcmlnaHQ6IDM1LCB0b3A6IDIwLCBib3R0b206IDIwIH0sXG4gICAgaGVpZ2h0OiAzMDAsXG4gICAgYXZnX2RheXM6IDcsXG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIGFic29sdXRlOiBmYWxzZSxcbiAgICBoaWdobGlnaHRfdmFyaWFibGU6ICdhc2lhJyxcbiAgICBoaWdobGlnaHRfY29sb3I6ICcjZmNlNTg3JyxcbiAgICBjaGFydF9mb3JtYXRzOiB7XG4gICAgICBudW1iZXI6ICcsJyxcbiAgICAgIHBlcmNlbnQ6ICcuMCUnLFxuICAgICAgZGF0ZTogJyViJyxcbiAgICB9LFxuICB9O1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0ZVBhcnNlID0gZDMudGltZVBhcnNlKCclWS0lbS0lZCcpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcygpO1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNlbGVjdGlvbigpLm5vZGUoKTtcbiAgICBjb25zdCBsb2NhbGUgPSBuZXcgRDNMb2NhbGUocHJvcHMubG9jYWxlKTtcbiAgICBjb25zdCBmb3JtYXRQZXIgPSBsb2NhbGUuZm9ybWF0KHByb3BzLmNoYXJ0X2Zvcm1hdHMucGVyY2VudCk7XG4gICAgY29uc3QgZm9ybWF0TnVtID0gbG9jYWxlLmZvcm1hdChwcm9wcy5jaGFydF9mb3JtYXRzLm51bWJlcik7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9IGxvY2FsZS5mb3JtYXRUaW1lKHByb3BzLmNoYXJ0X2Zvcm1hdHMuZGF0ZSk7XG4gICAgY29uc3QgeyB3aWR0aCB9ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcmVzaGFwZWREYXRhID0gW107XG4gICAgbGV0IHJlZ2lvbkxpc3QgPSB1bmlxKGRhdGEubWFwKGQgPT4gZC5yZWdpb24pKTtcbiAgICBjb25zdCBkYXRlV2lzZSA9IGQzLm5lc3QoKVxuICAgICAgLmtleShkID0+IGQuZGF0ZSlcbiAgICAgIC5lbnRyaWVzKGRhdGEpO1xuXG4gICAgZGF0ZVdpc2UuZm9yRWFjaChmdW5jdGlvbihkLCBpbmRleCkge1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBkYXRlOiBkYXRlUGFyc2UoZC5rZXkpLFxuICAgICAgICB0b3RhbDogZDMuc3VtKGQudmFsdWVzLCBlID0+IGUuY291bnQpLFxuICAgICAgfTtcbiAgICAgIHJlZ2lvbkxpc3QuZm9yRWFjaChlID0+IG9ialtlXSA9IDApO1xuICAgICAgZC52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgIG9ialtlLnJlZ2lvbl0gPSBlLmNvdW50O1xuICAgICAgfSk7XG4gICAgICByZXNoYXBlZERhdGEucHVzaChvYmopO1xuICAgIH0pO1xuXG4gICAgcmVzaGFwZWREYXRhID0gcmVzaGFwZWREYXRhLnNvcnQoY29tcGFyZVZhbHVlcygnZGF0ZScpKTtcblxuICAgIHJlc2hhcGVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICByZWdpb25MaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZFsnbWVhbl8nICsgZV0gPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgoaW5kZXggLSBwcm9wcy5hdmdfZGF5cyksIGluZGV4KSwgZiA9PiArZltlXSApOyAvLyBhdmcgY2FsY1xuICAgICAgICBpZiAoIWRbJ21lYW5fJyArIGVdKSB7XG4gICAgICAgICAgZFsnbWVhbl8nICsgZV0gPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgwLCBpbmRleCksIGYgPT4gK2ZbZV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRbJ21lYW5fJyArIGVdID0gZFtlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkLm1lYW5fdG90YWwgPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgoaW5kZXggLSBwcm9wcy5hdmdfZGF5cyksIGluZGV4KSwgZiA9PiArZi50b3RhbCk7IC8vIGF2ZyBjYWxjXG4gICAgICBpZiAoIWQubWVhbl90b3RhbCkge1xuICAgICAgICBkLm1lYW5fdG90YWwgPSBkMy5tZWFuKHJlc2hhcGVkRGF0YS5zbGljZSgwLCBpbmRleCksIGYgPT4gK2YudG90YWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZC5tZWFuX3RvdGFsID0gZC50b3RhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYXhEYXRhID0gcmVzaGFwZWREYXRhW3Jlc2hhcGVkRGF0YS5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBtZWFuTGlzdCA9IHJlZ2lvbkxpc3QubWFwKGQgPT4gJ21lYW5fJyArIGQpO1xuICAgIHJlZ2lvbkxpc3QgPSBzb3J0QnkobWVhbkxpc3QsIGQgPT4gK21heERhdGFbZF0pO1xuXG4gICAgY29uc3Qgc2VyaWVzRGVhdGggPSBkMy5zdGFjaygpLmtleXMocmVnaW9uTGlzdCkocmVzaGFwZWREYXRhKTtcbiAgICBjb25zdCBzY2FsZVggPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aCAtIHByb3BzLm1hcmdpbi5sZWZ0IC0gcHJvcHMubWFyZ2luLnJpZ2h0XSlcbiAgICAgIC5kb21haW4oZDMuZXh0ZW50KHJlc2hhcGVkRGF0YSwgZCA9PiBkLmRhdGUpKTtcblxuICAgIGNvbnN0IHNjYWxlWVBlciA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5yYW5nZShbcHJvcHMuaGVpZ2h0IC0gcHJvcHMubWFyZ2luLnRvcCAtIHByb3BzLm1hcmdpbi5ib3R0b20sIDBdKVxuICAgICAgLmRvbWFpbihbMCwgMV0pO1xuXG4gICAgY29uc3Qgc2NhbGVZTnVtID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgMF0pXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgocmVzaGFwZWREYXRhLCBkID0+IGQubWVhbl90b3RhbCApXSk7XG5cbiAgICBjb25zdCBhcmVhRGVhdGggPSBkMy5hcmVhKClcbiAgICAgIC54KGQgPT4gc2NhbGVYKGQuZGF0YS5kYXRlKSlcbiAgICAgIC55MChkID0+IHByb3BzLmFic29sdXRlID8gc2NhbGVZTnVtKGRbMF0pIDogc2NhbGVZUGVyKGRbMF0gLyBkLmRhdGEubWVhbl90b3RhbCkpXG4gICAgICAueTEoZCA9PiBwcm9wcy5hYnNvbHV0ZSA/IHNjYWxlWU51bShkWzFdKSA6IHNjYWxlWVBlcihkWzFdIC8gZC5kYXRhLm1lYW5fdG90YWwpKVxuICAgICAgLmN1cnZlKGQzLmN1cnZlTW9ub3RvbmVYKTtcblxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSBkMy50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApO1xuXG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLWNvbnRhaW5lcicpXG4gICAgICAuc2VsZWN0QWxsKCdkaXYubGFiZWwnKVxuICAgICAgLmRhdGEoc2VyaWVzRGVhdGgucmV2ZXJzZSgpLCAoZCwgaSkgPT4gZC5rZXkpO1xuXG4gICAgY29uc3QgbGFiZWxJbm5lciA9IGxhYmVscy5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBpZiAoZC5rZXkuc3BsaXQoJ18nKVsxXSA9PT0gcHJvcHMuaGlnaGxpZ2h0X3ZhcmlhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuICdsYWJlbCBoaWdobGlnaHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnbGFiZWwnO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLm1lcmdlKGxhYmVscyk7XG5cbiAgICBsYWJlbElubmVyLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLWJveCcpXG4gICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAoZCwgaSkgPT4gcHJvcHMuZmlsbHNbaV0pO1xuXG4gICAgbGFiZWxJbm5lci5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC10ZXh0JylcbiAgICAgIC50ZXh0KGQgPT4gY2xpZW50LmdldFJlZ2lvbihkLmtleS5zcGxpdCgnXycpWzFdKS50cmFuc2xhdGlvbnNbcHJvcHMubG9jYWxlXSk7XG5cbiAgICBsYWJlbHMuZXhpdCgpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBnID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmFwcGVuZFNlbGVjdCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fSwgJHtwcm9wcy5tYXJnaW4udG9wfSlgKTtcblxuICAgIGNvbnN0IGRlYXRoQ2hhcnRQYXRocyA9IGcuYXBwZW5kU2VsZWN0KCdnLmFyZWFzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cuYXJlYScpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aClcbiAgICAgIC5qb2luKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcmVhJyk7XG5cbiAgICBkZWF0aENoYXJ0UGF0aHMuYXBwZW5kKCdwYXRoJyk7XG5cbiAgICBkZWF0aENoYXJ0UGF0aHMuc2VsZWN0KCdwYXRoJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgaWYgKGQua2V5LnNwbGl0KCdfJylbMV0gPT09IHByb3BzLmhpZ2hsaWdodF92YXJpYWJsZSkge1xuICAgICAgICAgIHJldHVybiBkLmtleSArICcgaGlnaGxpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZC5rZXk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGlmIChkLmtleS5zcGxpdCgnXycpWzFdID09PSBwcm9wcy5oaWdobGlnaHRfdmFyaWFibGUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuaGlnaGxpZ2h0X2NvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoKHByb3BzLmZpbGxzW2ldKSA/IHByb3BzLmZpbGxzW2ldIDogJyMwMDAnKTtcbiAgICAgICAgfSBcbiAgICAgIH0pXG4gICAgICAuYXR0cignZCcsIGFyZWFEZWF0aClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlX3dpZHRoKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXkuYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodCAtIHByb3BzLm1hcmdpbi5sZWZ0fSwwKWApXG4gICAgICAuY2FsbChkMy5heGlzUmlnaHQocHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0gOiBzY2FsZVlQZXIpLnRpY2tzKDMpLnRpY2tGb3JtYXQocHJvcHMuYWJzb2x1dGUgPyBmb3JtYXROdW0gOiBmb3JtYXRQZXIpKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXguYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSBwcm9wcy5tYXJnaW4udG9wfSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZVgpLnRpY2tzKDQpLnRpY2tGb3JtYXQoZGF0ZUZvcm1hdCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tlZEFyZWFDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})