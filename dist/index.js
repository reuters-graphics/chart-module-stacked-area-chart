'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var d3 = require('d3');
var merge = _interopDefault(require('lodash/merge'));
var lodash = require('lodash');
var D3Locale = _interopDefault(require('@reuters-graphics/d3-locale'));
var AtlasMetadataClient = _interopDefault(require('@reuters-graphics/graphics-atlas-client'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  var _super5 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


d3.selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

var client = new AtlasMetadataClient();

var StackedAreaChart = /*#__PURE__*/function (_ChartComponent) {
  _inherits(StackedAreaChart, _ChartComponent);

  var _super = _createSuper(StackedAreaChart);

  function StackedAreaChart() {
    var _this;

    _classCallCheck(this, StackedAreaChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      stroke: '#2f353f',
      stroke_width: 0.5,
      fills: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.45)', 'rgba(255,255,255,0.25)'],
      margin: {
        left: 10,
        right: 35,
        top: 20,
        bottom: 20
      },
      height: 300,
      avg_days: 7,
      locale: 'en',
      absolute: false,
      highlight_variable: null,
      highlight_color: '#fce587',
      line_height: 1.2,
      hide_key: false,
      interaction: false,
      chart_formats: {
        number: ',',
        percent: '.0%',
        date: '%b',
        x_axis_ticks: 3
      },
      range: {
        start_date: null,
        end_date: null
      }
    });

    return _this;
  }

  _createClass(StackedAreaChart, [{
    key: "draw",
    value: function draw() {
      var dateParse = d3.timeParse('%Y-%m-%d');
      var data = this.data();
      var props = this.props();
      var node = this.selection().node();
      var locale = new D3Locale(props.locale);
      var formatPer = locale.format(props.chart_formats.percent);
      var formatNum = locale.format(props.chart_formats.number);
      var dateFormat = locale.formatTime(props.chart_formats.date);

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var reshapedData = [];
      var regionList = lodash.uniq(data.map(function (d) {
        return d.region;
      }));
      var filtedData = data;

      if (props.range.start_date) {
        var startDate = dateParse(props.range.start_date);
        filtedData = filtedData.filter(function (d) {
          return dateParse(d.date) >= startDate;
        });
      }

      if (props.range.end_date) {
        var endDate = dateParse(props.range.end_date);
        filtedData = filtedData.filter(function (d) {
          return dateParse(d.date) <= endDate;
        });
      }

      var dateWise = d3.nest().key(function (d) {
        return d.date;
      }).entries(filtedData);
      dateWise.forEach(function (d, index) {
        d.values.forEach(function (d) {
          d.count = d.count < 0 ? 0 : d.count;
        });
        var obj = {
          date: dateParse(d.key),
          total: d3.sum(d.values, function (e) {
            return e.count;
          })
        };
        regionList.forEach(function (e) {
          return obj[e] = 0;
        });
        d.values.forEach(function (e) {
          obj[e.region] = e.count;
        });
        reshapedData.push(obj);
      });
      reshapedData = reshapedData.sort(function (a, b) {
        return d3.descending(a.date, b.date);
      });
      reshapedData.forEach(function (d, index) {
        regionList.forEach(function (e) {
          d['mean_' + e] = d3.mean(reshapedData.slice(index, index + props.avg_days), function (f) {
            return +f[e];
          }); // avg calc

          if (!d['mean_' + e] || d['mean_' + e] < 0) {
            d['mean_' + e] = 0;
          }

          if (index === 0) {
            d['mean_' + e] = d[e];
          }
        });
        d.mean_total = d3.mean(reshapedData.slice(index, index + props.avg_days), function (f) {
          return +f.total;
        }); // avg calc

        if (!d['mean_total'] || d['mean_total'] < 0) {
          d['mean_total'] = 0;
        }

        if (index === 0) {
          d.mean_total = d.total;
        }
      });
      var maxData = reshapedData[0];
      var meanList = regionList.map(function (d) {
        return 'mean_' + d;
      });
      regionList = lodash.sortBy(meanList, function (d) {
        return d.split('_')[1] === props.highlight_variable ? -1000 : +maxData[d];
      });
      var seriesDeath = d3.stack().keys(regionList)(reshapedData);
      var scaleX = d3.scaleTime().range([0, width - props.margin.left - props.margin.right]).domain(d3.extent(reshapedData, function (d) {
        return d.date;
      }));
      var scaleYPer = d3.scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, 1]);
      var scaleYNum = d3.scaleLinear().range([props.height - props.margin.top - props.margin.bottom, 0]).domain([0, d3.max(reshapedData, function (d) {
        return d.mean_total;
      })]);
      var areaDeath = d3.area().x(function (d) {
        return scaleX(d.data.date);
      }).y0(function (d) {
        return props.absolute ? scaleYNum(d[0]) : d.data.mean_total > 0 ? scaleYPer(d[0] / d.data.mean_total) : scaleYPer(0);
      }).y1(function (d) {
        return props.absolute ? scaleYNum(d[1]) : d.data.mean_total > 0 ? scaleYPer(d[1] / d.data.mean_total) : scaleYPer(0);
      }).curve(d3.curveMonotoneX);
      var transition = d3.transition().duration(750);

      if (!props.hide_key) {
        var labelContainer = this.selection().appendSelect('div.label-mother-container').appendSelect('div.label-container');
        this.selection().select('.label-mother-container').lower();
        var textUpdate = labelContainer.selectAll('.label-text').data(seriesDeath.reverse(), function (d, i) {
          return d.key;
        }).call(function (update) {
          return update.transition(transition);
        }).attr('class', function (d, i) {
          if (d.key.split('_')[1] === props.highlight_variable) {
            return 'highlight label-text';
          } else {
            return 'label-text';
          }
        }).style('top', function (d, i) {
          return i * props.line_height + 'rem';
        }); // enter

        textUpdate.enter().append('div').attr('class', function (d, i) {
          if (d.key.split('_')[1] === props.highlight_variable) {
            return 'highlight label-text';
          } else {
            return 'label-text';
          }
        }).style('top', function (d, i) {
          return i * props.line_height + 'rem';
        }).on('click', function (d, i) {
          var url = d.key.split('_')[1];

          if (url) {
            navOnClick(url);
          }
        }).text(function (d) {
          return client.getRegion(d.key.split('_')[1]).translations[props.locale];
        }).call(function (enter) {
          return enter.transition(transition);
        }); // exit

        textUpdate.exit().call(function (exit) {
          return exit.transition(transition);
        }).remove();
        var highlightIndex;

        if (props.highlight_variable) {
          highlightIndex = lodash.findIndex(seriesDeath, function (d) {
            return d.key.split('_')[1] === props.highlight_variable;
          });
        } else {
          highlightIndex = -1;
        }

        var labelBox = labelContainer.selectAll('.label-box').data(props.fills).style('background', function (d, i) {
          if (i === highlightIndex) {
            return props.highlight_color;
          } else {
            return props.fills[i] ? props.fills[i] : '#000';
          }
        });
        labelBox.enter().append('div').attr('class', 'label-box').style('top', function (d, i) {
          return i * props.line_height + 'rem';
        }).style('background', function (d, i) {
          if (i === highlightIndex) {
            return props.highlight_color;
          } else {
            return props.fills[i] ? props.fills[i] : '#000';
          }
        }).merge(labelBox);
      } else {
        this.selection().selectAll('.label-mother-container').remove();
      }

      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', "translate(".concat(props.margin.left, ", ").concat(props.margin.top, ")"));
      var areaChartPaths = g.appendSelect('g.areas').selectAll('g.area').data(seriesDeath).join('g').attr('class', 'area');
      areaChartPaths.append('path');
      areaChartPaths.select('path').attr('class', function (d) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return d.key + ' highlight';
        } else {
          return d.key;
        }
      }).attr('fill', function (d, i) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return props.highlight_color;
        } else {
          return props.fills[i] ? props.fills[i] : '#000';
        }
      }).transition(transition).attr('fill', function (d, i) {
        if (d.key.split('_')[1] === props.highlight_variable) {
          return props.highlight_color;
        } else {
          return props.fills[i] ? props.fills[i] : '#000';
        }
      }).attr('d', areaDeath).attr('stroke', props.stroke).attr('stroke-width', props.stroke_width);
      g.appendSelect('g.axis--y.axis').attr('transform', "translate(".concat(width - props.margin.right - props.margin.left, ",0)")).transition(transition).attr('transform', "translate(".concat(width - props.margin.right - props.margin.left, ",0)")).call(d3.axisRight(props.absolute ? scaleYNum : scaleYPer).ticks(3).tickFormat(props.absolute ? formatNum : formatPer));
      g.appendSelect('g.axis--x.axis').attr('transform', "translate(0,".concat(props.height - props.margin.bottom - props.margin.top, ")")).transition(transition).attr('transform', "translate(0,".concat(props.height - props.margin.bottom - props.margin.top, ")")).call(d3.axisBottom(scaleX).ticks(props.chart_formats.x_axis_ticks).tickFormat(dateFormat));

      var navOnClick = function navOnClick(regionSlug) {
        if (props.regionLinks) {
          // calling this function will navigate to a region page
          props.regionLinks[regionSlug]();
        }
      };

      return this;
    }
  }]);

  return StackedAreaChart;
}(ChartComponent);

module.exports = StackedAreaChart;
