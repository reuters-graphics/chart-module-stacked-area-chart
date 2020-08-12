webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/lib/chart.js":
/*!**************************!*\
  !*** ./src/lib/chart.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base/ChartComponent */ \"./src/lib/base/ChartComponent.js\");\n/* harmony import */ var _utils_d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/d3 */ \"./src/lib/utils/d3.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/utils */ \"./src/lib/utils/utils.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @reuters-graphics/d3-locale */ \"./node_modules/@reuters-graphics/d3-locale/dist/index.js\");\n/* harmony import */ var _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reuters-graphics/graphics-atlas-client */ \"./node_modules/@reuters-graphics/graphics-atlas-client/dist/index.js\");\n/* harmony import */ var _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar client = new _reuters_graphics_graphics_atlas_client__WEBPACK_IMPORTED_MODULE_12___default.a();\n\nvar StackedAreaChart = /*#__PURE__*/function (_ChartComponent) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(StackedAreaChart, _ChartComponent);\n\n  var _super = _createSuper(StackedAreaChart);\n\n  function StackedAreaChart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, StackedAreaChart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"defaultProps\", {\n      stroke: '#2f353f',\n      stroke_width: 0.5,\n      fills: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0.25)'],\n      margin: {\n        left: 10,\n        right: 35,\n        top: 20,\n        bottom: 20\n      },\n      height: 300,\n      avg_days: 7,\n      locale: 'en',\n      absolute: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(StackedAreaChart, [{\n    key: \"draw\",\n    value: function draw() {\n      var dateParse = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeParse('%Y-%m-%d');\n      var dateFormatBack = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].timeFormat('%Y-%m-%d');\n      var data = this.data();\n      var props = this.props();\n      var node = this.selection().node();\n      var locale = new _reuters_graphics_d3_locale__WEBPACK_IMPORTED_MODULE_11___default.a(props.locale);\n      var formatPer = locale.format('.0%');\n      var formatNum = locale.format(',');\n      var dateFormat = locale.formatTime('%b');\n\n      var _node$getBoundingClie = node.getBoundingClientRect(),\n          width = _node$getBoundingClie.width;\n\n      var reshapedData = [];\n      var regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"uniq\"])(data.map(function (d) {\n        return d.region;\n      }));\n      var dateWise = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nest().key(function (d) {\n        return d.date;\n      }).entries(data);\n      dateWise.forEach(function (d, index) {\n        var obj = {\n          date: dateParse(d.key),\n          total: _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].sum(d.values, function (e) {\n            return e.count;\n          })\n        };\n        regionList.forEach(function (e) {\n          return obj[e] = 0;\n        });\n        d.values.forEach(function (e) {\n          obj[e.region] = e.count;\n        });\n        reshapedData.push(obj);\n      });\n      reshapedData = reshapedData.sort(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__[\"compareValues\"])('date'));\n      reshapedData.forEach(function (d, index) {\n        regionList.forEach(function (e) {\n          d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n            return +f[e];\n          }); // avg calc\n\n          if (!d['mean_' + e]) {\n            d['mean_' + e] = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n              return +f[e];\n            });\n          }\n\n          if (index === 0) {\n            d['mean_' + e] = d[e];\n          }\n        });\n        d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(index - props.avg_days, index), function (f) {\n          return +f.total;\n        }); // avg calc\n\n        if (!d.mean_total) {\n          d.mean_total = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mean(reshapedData.slice(0, index), function (f) {\n            return +f.total;\n          });\n        }\n\n        if (index === 0) {\n          d.mean_total = d.total;\n        }\n      });\n      var maxData = reshapedData[reshapedData.length - 1];\n      var meanList = regionList.map(function (d) {\n        return 'mean_' + d;\n      });\n      regionList = Object(lodash__WEBPACK_IMPORTED_MODULE_9__[\"sortBy\"])(meanList, function (d) {\n        return +maxData[d];\n      });\n      var seriesDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].stack().keys(regionList)(reshapedData);\n      var scaleX = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleTime().range([0, width - props.margin.left - props.margin.right]).domain(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].extent(reshapedData, function (d) {\n        return d.date;\n      }));\n      var scaleYPer = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, 1]);\n      var scaleYNum = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].max(reshapedData, function (d) {\n        return d.mean_total;\n      })]);\n      var areaDeath = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].area().x(function (d) {\n        return scaleX(d.data.date);\n      }).y0(function (d) {\n        return props.absolute ? scaleYNum(d[0]) : scaleYPer(d[0] / d.data.mean_total);\n      }).y1(function (d) {\n        return props.absolute ? scaleYNum(d[1]) : scaleYPer(d[1] / d.data.mean_total);\n      }).curve(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].curveMonotoneX);\n      var transition = _utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].transition().duration(750);\n      var labels = this.selection().appendSelect('div.label-container').selectAll('div.label').data(seriesDeath.reverse(), function (d, i) {\n        return d.key;\n      });\n      var labelInner = labels.enter().append('div').attr('class', 'label').merge(labels);\n      labelInner.appendSelect('div.label-box').style('background', function (d, i) {\n        return props.fills[i];\n      });\n      labelInner.appendSelect('div.label-text').text(function (d) {\n        return client.getRegion(d.key.split('_')[1]).translations[props.locale];\n      });\n      labels.exit().remove();\n      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js\n      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', \"translate(\".concat(props.margin.left, \", \").concat(props.margin.top, \")\"));\n      var deathChartPaths = g.appendSelect('g.areas').selectAll('g.area').data(seriesDeath).join('g').attr('class', 'area');\n      deathChartPaths.append('path').attr('fill', function (d, i) {\n        return props.fills[i] ? props.fills[i] : '#000';\n      });\n      deathChartPaths.select('path').attr('class', function (d) {\n        return d.key;\n      }).transition(transition).attr('d', areaDeath).attr('stroke', props.stroke).attr('stroke-width', props.stroke_width);\n      g.appendSelect('g.axis--y.axis').transition(transition).attr('transform', \"translate(\".concat(width - props.margin.right - props.margin.left, \",0)\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));\n      g.appendSelect('g.axis--x.axis').transition(transition).attr('transform', \"translate(0,\".concat(props.height - props.margin.bottom - props.margin.top, \")\")).call(_utils_d3__WEBPACK_IMPORTED_MODULE_8__[\"default\"].axisBottom(scaleX).ticks(4).tickFormat(props.dateFormat));\n      return this;\n    }\n  }]);\n\n  return StackedAreaChart;\n}(_base_ChartComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedAreaChart);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NoYXJ0LmpzPzdiYjgiXSwibmFtZXMiOlsiY2xpZW50IiwiQXRsYXNNZXRhZGF0YUNsaWVudCIsIlN0YWNrZWRBcmVhQ2hhcnQiLCJzdHJva2UiLCJzdHJva2Vfd2lkdGgiLCJmaWxscyIsIm1hcmdpbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImhlaWdodCIsImF2Z19kYXlzIiwibG9jYWxlIiwiYWJzb2x1dGUiLCJkYXRlUGFyc2UiLCJkMyIsInRpbWVQYXJzZSIsImRhdGVGb3JtYXRCYWNrIiwidGltZUZvcm1hdCIsImRhdGEiLCJwcm9wcyIsIm5vZGUiLCJzZWxlY3Rpb24iLCJEM0xvY2FsZSIsImZvcm1hdFBlciIsImZvcm1hdCIsImZvcm1hdE51bSIsImRhdGVGb3JtYXQiLCJmb3JtYXRUaW1lIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJyZXNoYXBlZERhdGEiLCJyZWdpb25MaXN0IiwidW5pcSIsIm1hcCIsImQiLCJyZWdpb24iLCJkYXRlV2lzZSIsIm5lc3QiLCJrZXkiLCJkYXRlIiwiZW50cmllcyIsImZvckVhY2giLCJpbmRleCIsIm9iaiIsInRvdGFsIiwic3VtIiwidmFsdWVzIiwiZSIsImNvdW50IiwicHVzaCIsInNvcnQiLCJjb21wYXJlVmFsdWVzIiwibWVhbiIsInNsaWNlIiwiZiIsIm1lYW5fdG90YWwiLCJtYXhEYXRhIiwibGVuZ3RoIiwibWVhbkxpc3QiLCJzb3J0QnkiLCJzZXJpZXNEZWF0aCIsInN0YWNrIiwia2V5cyIsInNjYWxlWCIsInNjYWxlVGltZSIsInJhbmdlIiwiZG9tYWluIiwiZXh0ZW50Iiwic2NhbGVZUGVyIiwic2NhbGVMaW5lYXIiLCJzY2FsZVlOdW0iLCJtYXgiLCJhcmVhRGVhdGgiLCJhcmVhIiwieCIsInkwIiwieTEiLCJjdXJ2ZSIsImN1cnZlTW9ub3RvbmVYIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibGFiZWxzIiwiYXBwZW5kU2VsZWN0Iiwic2VsZWN0QWxsIiwicmV2ZXJzZSIsImkiLCJsYWJlbElubmVyIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwibWVyZ2UiLCJzdHlsZSIsInRleHQiLCJnZXRSZWdpb24iLCJzcGxpdCIsInRyYW5zbGF0aW9ucyIsImV4aXQiLCJyZW1vdmUiLCJnIiwiZGVhdGhDaGFydFBhdGhzIiwiam9pbiIsInNlbGVjdCIsImNhbGwiLCJheGlzUmlnaHQiLCJ0aWNrcyIsInRpY2tGb3JtYXQiLCJheGlzQm90dG9tIiwiQ2hhcnRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLElBQUlDLCtFQUFKLEVBQWY7O0lBRU1DLGdCOzs7Ozs7Ozs7Ozs7Ozs7O3VOQUNXO0FBQ2JDLFlBQU0sRUFBRSxTQURLO0FBRWJDLGtCQUFZLEVBQUUsR0FGRDtBQUdiQyxXQUFLLEVBQUUsQ0FBQyx1QkFBRCxFQUNMLHVCQURLLEVBRUwsdUJBRkssRUFHTCx3QkFISyxFQUlMLHdCQUpLLEVBS0wsd0JBTEssQ0FITTtBQVNiQyxZQUFNLEVBQUU7QUFBRUMsWUFBSSxFQUFFLEVBQVI7QUFBWUMsYUFBSyxFQUFFLEVBQW5CO0FBQXVCQyxXQUFHLEVBQUUsRUFBNUI7QUFBZ0NDLGNBQU0sRUFBRTtBQUF4QyxPQVRLO0FBVWJDLFlBQU0sRUFBRSxHQVZLO0FBV2JDLGNBQVEsRUFBRSxDQVhHO0FBWWJDLFlBQU0sRUFBRSxJQVpLO0FBYWJDLGNBQVEsRUFBRTtBQWJHLEs7Ozs7Ozs7MkJBZ0JSO0FBQ0wsVUFBTUMsU0FBUyxHQUFHQyxpREFBRSxDQUFDQyxTQUFILENBQWEsVUFBYixDQUFsQjtBQUNBLFVBQU1DLGNBQWMsR0FBR0YsaURBQUUsQ0FBQ0csVUFBSCxDQUFjLFVBQWQsQ0FBdkI7QUFFQSxVQUFNQyxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFH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QU4sQ0FBYUcsR0FGdEYsUUFHRytGLElBSEgsQ0FHUXhGLGlEQUFFLENBQUM0RixVQUFILENBQWMzQyxNQUFkLEVBQXNCeUMsS0FBdEIsQ0FBNEIsQ0FBNUIsRUFBK0JDLFVBQS9CLENBQTBDdEYsS0FBSyxDQUFDTyxVQUFoRCxDQUhSO0FBS0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFySjRCaUYsNEQ7O0FBd0poQjNHLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL2xpYi9jaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFydENvbXBvbmVudCBmcm9tICcuL2Jhc2UvQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IGQzIGZyb20gJy4vdXRpbHMvZDMnO1xuaW1wb3J0IHsgdW5pcSwgc29ydEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbXBhcmVWYWx1ZXMgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmltcG9ydCBEM0xvY2FsZSBmcm9tICdAcmV1dGVycy1ncmFwaGljcy9kMy1sb2NhbGUnO1xuaW1wb3J0IEF0bGFzTWV0YWRhdGFDbGllbnQgZnJvbSAnQHJldXRlcnMtZ3JhcGhpY3MvZ3JhcGhpY3MtYXRsYXMtY2xpZW50JztcbmNvbnN0IGNsaWVudCA9IG5ldyBBdGxhc01ldGFkYXRhQ2xpZW50KCk7XG5cbmNsYXNzIFN0YWNrZWRBcmVhQ2hhcnQgZXh0ZW5kcyBDaGFydENvbXBvbmVudCB7XG4gIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHJva2U6ICcjMmYzNTNmJyxcbiAgICBzdHJva2Vfd2lkdGg6IDAuNSxcbiAgICBmaWxsczogWydyZ2JhKDI1NSwyNTUsMjU1LDAuOSknLFxuICAgICAgJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsXG4gICAgICAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyxcbiAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjUpJ10sXG4gICAgbWFyZ2luOiB7IGxlZnQ6IDEwLCByaWdodDogMzUsIHRvcDogMjAsIGJvdHRvbTogMjAgfSxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgICBhdmdfZGF5czogNyxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgYWJzb2x1dGU6IGZhbHNlLFxuICB9O1xuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgZGF0ZVBhcnNlID0gZDMudGltZVBhcnNlKCclWS0lbS0lZCcpO1xuICAgIGNvbnN0IGRhdGVGb3JtYXRCYWNrID0gZDMudGltZUZvcm1hdCgnJVktJW0tJWQnKTtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHMoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zZWxlY3Rpb24oKS5ub2RlKCk7XG4gICAgY29uc3QgbG9jYWxlID0gbmV3IEQzTG9jYWxlKHByb3BzLmxvY2FsZSk7XG4gICAgY29uc3QgZm9ybWF0UGVyID0gbG9jYWxlLmZvcm1hdCgnLjAlJyk7XG4gICAgY29uc3QgZm9ybWF0TnVtID0gbG9jYWxlLmZvcm1hdCgnLCcpO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBsb2NhbGUuZm9ybWF0VGltZSgnJWInKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHJlc2hhcGVkRGF0YSA9IFtdO1xuICAgIGxldCByZWdpb25MaXN0ID0gdW5pcShkYXRhLm1hcChkID0+IGQucmVnaW9uKSk7XG4gICAgY29uc3QgZGF0ZVdpc2UgPSBkMy5uZXN0KClcbiAgICAgIC5rZXkoZCA9PiBkLmRhdGUpXG4gICAgICAuZW50cmllcyhkYXRhKTtcblxuICAgIGRhdGVXaXNlLmZvckVhY2goZnVuY3Rpb24oZCwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZGF0ZTogZGF0ZVBhcnNlKGQua2V5KSxcbiAgICAgICAgdG90YWw6IGQzLnN1bShkLnZhbHVlcywgZSA9PiBlLmNvdW50KSxcbiAgICAgIH07XG4gICAgICByZWdpb25MaXN0LmZvckVhY2goZSA9PiBvYmpbZV0gPSAwKTtcbiAgICAgIGQudmFsdWVzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICBvYmpbZS5yZWdpb25dID0gZS5jb3VudDtcbiAgICAgIH0pO1xuICAgICAgcmVzaGFwZWREYXRhLnB1c2gob2JqKTtcbiAgICB9KTtcblxuICAgIHJlc2hhcGVkRGF0YSA9IHJlc2hhcGVkRGF0YS5zb3J0KGNvbXBhcmVWYWx1ZXMoJ2RhdGUnKSk7XG5cbiAgICByZXNoYXBlZERhdGEuZm9yRWFjaChmdW5jdGlvbihkLCBpbmRleCkge1xuICAgICAgcmVnaW9uTGlzdC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGRbJ21lYW5fJyArIGVdID0gZDMubWVhbihyZXNoYXBlZERhdGEuc2xpY2UoKGluZGV4IC0gcHJvcHMuYXZnX2RheXMpLCBpbmRleCksIGYgPT4gK2ZbZV0gKTsgLy8gYXZnIGNhbGNcbiAgICAgICAgaWYgKCFkWydtZWFuXycgKyBlXSkge1xuICAgICAgICAgIGRbJ21lYW5fJyArIGVdID0gZDMubWVhbihyZXNoYXBlZERhdGEuc2xpY2UoMCwgaW5kZXgpLCBmID0+ICtmW2VdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICBkWydtZWFuXycgKyBlXSA9IGRbZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZC5tZWFuX3RvdGFsID0gZDMubWVhbihyZXNoYXBlZERhdGEuc2xpY2UoKGluZGV4IC0gcHJvcHMuYXZnX2RheXMpLCBpbmRleCksIGYgPT4gK2YudG90YWwpOyAvLyBhdmcgY2FsY1xuICAgICAgaWYgKCFkLm1lYW5fdG90YWwpIHtcbiAgICAgICAgZC5tZWFuX3RvdGFsID0gZDMubWVhbihyZXNoYXBlZERhdGEuc2xpY2UoMCwgaW5kZXgpLCBmID0+ICtmLnRvdGFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGQubWVhbl90b3RhbCA9IGQudG90YWw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbWF4RGF0YSA9IHJlc2hhcGVkRGF0YVtyZXNoYXBlZERhdGEubGVuZ3RoLTFdXG4gICAgY29uc3QgbWVhbkxpc3QgPSByZWdpb25MaXN0Lm1hcChkID0+ICdtZWFuXycgKyBkKVxuICAgIHJlZ2lvbkxpc3QgPSBzb3J0QnkobWVhbkxpc3QsIGQgPT4gK21heERhdGFbZF0pXG5cbiAgICBjb25zdCBzZXJpZXNEZWF0aCA9IGQzLnN0YWNrKCkua2V5cyhyZWdpb25MaXN0KShyZXNoYXBlZERhdGEpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGQzLnNjYWxlVGltZSgpXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoIC0gcHJvcHMubWFyZ2luLmxlZnQgLSBwcm9wcy5tYXJnaW4ucmlnaHRdKVxuICAgICAgLmRvbWFpbihkMy5leHRlbnQocmVzaGFwZWREYXRhLCBkID0+IGQuZGF0ZSkpO1xuXG4gICAgY29uc3Qgc2NhbGVZUGVyID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlKFtwcm9wcy5oZWlnaHQgLSBwcm9wcy5tYXJnaW4udG9wIC0gcHJvcHMubWFyZ2luLmJvdHRvbSwgMF0pXG4gICAgICAuZG9tYWluKFswLCAxXSk7XG5cbiAgICBjb25zdCBzY2FsZVlOdW0gPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2UoW3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi50b3AgLSBwcm9wcy5tYXJnaW4uYm90dG9tLCAwXSlcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChyZXNoYXBlZERhdGEsIGQgPT4gZC5tZWFuX3RvdGFsICldKTtcblxuICAgIGNvbnN0IGFyZWFEZWF0aCA9IGQzLmFyZWEoKVxuICAgICAgLngoZCA9PiBzY2FsZVgoZC5kYXRhLmRhdGUpKVxuICAgICAgLnkwKGQgPT4gcHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0oZFswXSkgOiBzY2FsZVlQZXIoZFswXSAvIGQuZGF0YS5tZWFuX3RvdGFsKSlcbiAgICAgIC55MShkID0+IHByb3BzLmFic29sdXRlID8gc2NhbGVZTnVtKGRbMV0pIDogc2NhbGVZUGVyKGRbMV0gLyBkLmRhdGEubWVhbl90b3RhbCkpXG4gICAgICAuY3VydmUoZDMuY3VydmVNb25vdG9uZVgpO1xuXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MCk7XG5cbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLnNlbGVjdGlvbigpXG4gICAgICAuYXBwZW5kU2VsZWN0KCdkaXYubGFiZWwtY29udGFpbmVyJylcbiAgICAgIC5zZWxlY3RBbGwoJ2Rpdi5sYWJlbCcpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aC5yZXZlcnNlKCksIChkLCBpKSA9PiBkLmtleSk7XG5cbiAgICBjb25zdCBsYWJlbElubmVyID0gbGFiZWxzLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLm1lcmdlKGxhYmVscyk7XG5cbiAgICBsYWJlbElubmVyLmFwcGVuZFNlbGVjdCgnZGl2LmxhYmVsLWJveCcpXG4gICAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCAoZCwgaSkgPT4gcHJvcHMuZmlsbHNbaV0pO1xuXG4gICAgbGFiZWxJbm5lci5hcHBlbmRTZWxlY3QoJ2Rpdi5sYWJlbC10ZXh0JylcbiAgICAgIC50ZXh0KGQgPT4gY2xpZW50LmdldFJlZ2lvbihkLmtleS5zcGxpdCgnXycpWzFdKS50cmFuc2xhdGlvbnNbcHJvcHMubG9jYWxlXSk7XG5cbiAgICBsYWJlbHMuZXhpdCgpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBnID0gdGhpcy5zZWxlY3Rpb24oKVxuICAgICAgLmFwcGVuZFNlbGVjdCgnc3ZnJykgLy8gc2VlIGRvY3MgaW4gLi91dGlscy9kMy5qc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAuYXR0cignaGVpZ2h0JywgcHJvcHMuaGVpZ2h0KVxuICAgICAgLmFwcGVuZFNlbGVjdCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3Byb3BzLm1hcmdpbi5sZWZ0fSwgJHtwcm9wcy5tYXJnaW4udG9wfSlgKTtcblxuICAgIGNvbnN0IGRlYXRoQ2hhcnRQYXRocyA9IGcuYXBwZW5kU2VsZWN0KCdnLmFyZWFzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cuYXJlYScpXG4gICAgICAuZGF0YShzZXJpZXNEZWF0aClcbiAgICAgIC5qb2luKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcmVhJyk7XG5cbiAgICBkZWF0aENoYXJ0UGF0aHMuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gKChwcm9wcy5maWxsc1tpXSkgPyBwcm9wcy5maWxsc1tpXSA6ICcjMDAwJyk7XG4gICAgICB9KTtcblxuICAgIGRlYXRoQ2hhcnRQYXRocy5zZWxlY3QoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBkLmtleSlcbiAgICAgIC50cmFuc2l0aW9uKHRyYW5zaXRpb24pXG4gICAgICAuYXR0cignZCcsIGFyZWFEZWF0aClcbiAgICAgIC5hdHRyKCdzdHJva2UnLCBwcm9wcy5zdHJva2UpXG4gICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgcHJvcHMuc3Ryb2tlX3dpZHRoKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXkuYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aCAtIHByb3BzLm1hcmdpbi5yaWdodCAtIHByb3BzLm1hcmdpbi5sZWZ0fSwwKWApXG4gICAgICAuY2FsbChkMy5heGlzUmlnaHQocHJvcHMuYWJzb2x1dGUgPyBzY2FsZVlOdW0gOiBzY2FsZVlQZXIpLnRpY2tzKDMpLnRpY2tGb3JtYXQocHJvcHMuYWJzb2x1dGUgPyBmb3JtYXROdW0gOiBmb3JtYXRQZXIpKTtcblxuICAgIGcuYXBwZW5kU2VsZWN0KCdnLmF4aXMtLXguYXhpcycpXG4gICAgICAudHJhbnNpdGlvbih0cmFuc2l0aW9uKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3Byb3BzLmhlaWdodCAtIHByb3BzLm1hcmdpbi5ib3R0b20gLSBwcm9wcy5tYXJnaW4udG9wfSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbShzY2FsZVgpLnRpY2tzKDQpLnRpY2tGb3JtYXQocHJvcHMuZGF0ZUZvcm1hdCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tlZEFyZWFDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/chart.js\n");

/***/ })

})